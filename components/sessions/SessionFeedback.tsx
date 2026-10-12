import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Rating from 'react-rating'
import { toast } from 'react-toastify'
import {
  Event,
  FeedbackAnswers,
  FeedbackError,
  FeedbackQuestion,
  MyFeedback,
} from '../../types/types'
import axios from '../../utils/axios'
import { feedbackHeaders } from '../../utils/feedback'
import { resolveEventSlug } from '../../utils/helpers'

const REQUEST_TIMEOUT = 5000
// A write on slow wifi can legitimately take longer than a read, and a
// timed-out write may already have landed — resubmitting replaces it, so
// waiting longer is the cheaper mistake.
const WRITE_TIMEOUT = 15000

// A request that never produced a response: either the network is gone or
// it was too slow. axios marks the second with ECONNABORTED, and telling
// someone on a slow link they have "no connection" is wrong.
const noResponseMessage = (error: { code?: string }) =>
  error?.code === 'ECONNABORTED'
    ? 'That took too long — check your connection and try again.'
    : 'No connection — check your internet and try again.'

const chipBase =
  'rounded-full px-4 py-2 text-sm font-medium border transition-colors'
const chipOff = `${chipBase} border-blue-100 dark:border-white/10 bg-white dark:bg-black-dark text-black dark:text-white-dark hover:border-accent`
const chipOn = `${chipBase} border-primary bg-primary text-white`

export const SessionFeedback = ({
  closeDialog,
  sessionSlug,
  // Feedback is collected per event, so every page passes the event it is
  // showing — a nudge on a past-event page must post under that event, not
  // under the one being run now. Resolved through the one slug resolver, so
  // the page and the form cannot read the same value differently.
  eventSlug: eventSlugProp,
}: {
  closeDialog: () => void
  // eslint-disable-next-line react/require-default-props
  sessionSlug?: string
  // eslint-disable-next-line react/require-default-props
  eventSlug?: string
}) => {
  const [mounted, setMounted] = useState(false)
  const [checking, setChecking] = useState(true)
  const [loading, setLoading] = useState(false)
  const [removing, setRemoving] = useState(false)
  const [confirmRemove, setConfirmRemove] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [rating, setRating] = useState(0)
  const [answers, setAnswers] = useState<FeedbackAnswers>({})
  const [errors, setErrors] = useState<FeedbackError | null>(null)
  const [questions, setQuestions] = useState<FeedbackQuestion[]>([])
  // What this browser has answered before, if anything.
  const [mine, setMine] = useState<MyFeedback | null>(null)

  const eventSlug = resolveEventSlug(eventSlugProp)
  const kind = sessionSlug ? 'Session' : 'Event'

  useEffect(() => {
    setMounted(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDialog()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeDialog])

  useEffect(() => {
    let alive = true
    // The event payload carries the organizer's questions; "mine" says
    // whether this browser has answered and whether it may still edit.
    // Both are best-effort: an older backend or a failed request leaves a
    // blank form rather than a broken one.
    const path = sessionSlug
      ? `/events/${eventSlug}/feedback/sessions/${sessionSlug}/mine`
      : `/events/${eventSlug}/feedback/mine`
    Promise.all([
      axios
        .get(`/events/${eventSlug}`, { timeout: REQUEST_TIMEOUT })
        .then((response) => response.data.data as Event)
        .catch(() => null),
      axios
        .get(path, { timeout: REQUEST_TIMEOUT, headers: feedbackHeaders() })
        .then((response) => (response.data?.data ?? null) as MyFeedback | null)
        .catch(() => null),
    ]).then(([event, previous]) => {
      if (!alive) return
      const scope = sessionSlug ? 'session' : 'event'
      setQuestions(
        (event?.feedback_questions ?? []).filter(
          (q) => q.applies_to === scope || q.applies_to === 'both'
        )
      )
      if (previous) {
        setMine(previous)
        // Only pre-fill when the answer may still be edited; otherwise the
        // form stays blank and says so.
        if (previous.editable) {
          setRating(previous.rating)
          setMessage(previous.feedback ?? '')
          setName(previous.name ?? '')
          setAnswers(previous.answers ?? {})
        }
      }
      setChecking(false)
    })
    return () => {
      alive = false
    }
  }, [eventSlug, sessionSlug])

  const sendFeedback = async () => {
    if (rating === 0) {
      setErrors({ rating: ['Please select a star rating'] })
      return
    }
    setLoading(true)
    setErrors(null)
    // A question left blank is simply not sent; a required one left blank
    // comes back 422 and is flagged under the question itself.
    const sentAnswers: FeedbackAnswers = {}
    questions.forEach((q) => {
      const value = answers[q.id]
      if (value !== undefined && value !== '') sentAnswers[q.id] = value
    })
    const trimmedName = name.trim().slice(0, 120)
    const body: Record<string, unknown> = {
      feedback: message,
      rating,
      answers: sentAnswers,
    }
    if (trimmedName) body.name = trimmedName
    await axios
      .post(
        sessionSlug
          ? `/events/${eventSlug}/feedback/sessions/${sessionSlug}`
          : `/events/${eventSlug}/feedback`,
        body,
        { headers: feedbackHeaders(), timeout: WRITE_TIMEOUT }
      )
      .then((response) => {
        // This API wraps payloads in { data: ... } — the two reads above
        // unwrap it — but the write endpoint's envelope is not guaranteed,
        // so read both, bare body last, keeping the 10-minute fallback.
        const minutes =
          Number(
            response.data?.data?.editable_for_minutes ??
              response.data?.editable_for_minutes
          ) || 10
        toast.success(
          `Thank you. You can edit or remove this for the next ${minutes} minutes.`
        )
        setLoading(false)
        closeDialog()
      })
      .catch((error) => {
        // Read off the response before touching it: when the request never
        // reaches the server — conference wifi, a timeout, the room full of
        // people trying the same thing — error.response is undefined, and an
        // unguarded access here would throw past setLoading(false), leaving
        // the modal spinning with no toast and no way to retry.
        const status = error.response?.status
        const data = error.response?.data

        if (status === 422) {
          // Every refusal carries errors — as {} when there is no per-field
          // detail, on purpose — and {} is truthy, so a bare truthiness check
          // would swallow the message: setErrors({}) renders under no field,
          // and a closed window fails silently all over again. Only
          // non-empty errors render inline; everything else toasts.
          if (data?.errors && Object.keys(data.errors).length) {
            setErrors(data.errors)
          } else {
            toast.error(data?.message ?? 'Feedback is not open right now')
          }
        } else if (status === 401) {
          toast.error('Login to give feedback')
        } else if (status) {
          // Any other server answer — a 500, a 404 — toasts as well, so
          // after this block "no toast" means "no response" and only that.
          toast.error(
            data?.message || 'Something went wrong. Please try again.'
          )
        } else {
          toast.error(noResponseMessage(error))
        }
        setLoading(false)
      })
  }

  const removeFeedback = async () => {
    if (!confirmRemove) {
      setConfirmRemove(true)
      return
    }
    setRemoving(true)
    await axios
      .delete(
        sessionSlug
          ? `/events/${eventSlug}/feedback/sessions/${sessionSlug}`
          : `/events/${eventSlug}/feedback`,
        { headers: feedbackHeaders(), timeout: WRITE_TIMEOUT }
      )
      .then(() => {
        toast.success('Your feedback was removed.')
        setRemoving(false)
        closeDialog()
      })
      .catch((error) => {
        const status = error?.response?.status
        const data = error?.response?.data ?? {}
        if (status === 422) {
          toast.error(data.message ?? 'This answer can no longer be edited.')
        } else if (status) {
          toast.error(data.message || 'Something went wrong. Please try again.')
        } else {
          toast.error(noResponseMessage(error))
        }
        setRemoving(false)
        setConfirmRemove(false)
      })
  }

  if (!mounted) return null

  const editing = Boolean(mine?.editable)
  const answered = Boolean(mine && !mine.editable)
  const wordsLabel = sessionSlug
    ? 'A word for the speaker (optional)'
    : 'Your words (optional)'

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => closeDialog()}
      />
      <div className="relative z-10 w-full max-w-3xl rounded-4xl overflow-hidden bg-white dark:bg-darker-dark shadow-2xl flex flex-col md:flex-row">
        <button
          type="button"
          aria-label="Close feedback"
          className="absolute top-4 right-4 z-20 text-black/60 dark:text-white/60 hover:opacity-100"
          onClick={() => closeDialog()}
        >
          <i className="fa fa-times text-xl" />
        </button>

        {/* Branded panel */}
        <div className="relative hidden md:flex md:w-2/5 bg-accent p-8 flex-col justify-end overflow-hidden">
          <span className="pointer-events-none absolute inset-0 mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.4)_1.4px,transparent_1.6px)] [background-size:10px_10px]" />
          <div className="relative z-10">
            <p className="text-primary dark:text-primary font-bold uppercase tracking-wide text-sm mb-2">
              ( Feedback )
            </p>
            <h2 className="font-display text-black dark:text-black text-4xl leading-none">
              {editing ? 'Edit your answer' : `${kind} Feedback`}
            </h2>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <p className="md:hidden text-primary dark:text-primary font-bold uppercase tracking-wide text-sm mb-1">
            ( Feedback )
          </p>
          <h3 className="md:hidden font-display text-black dark:text-white-dark text-3xl mb-2">
            {editing ? 'Edit your answer' : `${kind} Feedback`}
          </h3>

          {checking ? (
            <p className="text-sm text-light dark:text-light-dark py-8 text-center">
              <i className="fa fa-circle-o-notch fa-spin mr-2" />
              Checking for your earlier answer…
            </p>
          ) : (
            <>
              <p className="text-sm text-black dark:text-white-dark mb-4">
                Kindly leave your honest feedback to help us make it even
                better. Cheers :)
              </p>
              {editing && mine && (
                <p className="text-xs italic text-primary dark:text-accent-dark mb-4">
                  You can change or remove this for another{' '}
                  {mine.editable_for_minutes} minutes.
                </p>
              )}
              {answered && (
                <p className="text-xs italic text-light dark:text-light-dark mb-4">
                  You already answered from this browser — sending again
                  replaces it.
                </p>
              )}

              <div className="w-full">
                <p className="text-sm font-medium text-black dark:text-white-dark mb-2">
                  Rating <span className="text-red-500">*</span>
                </p>
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*  @ts-ignore */}
                <Rating
                  initialRating={rating || undefined}
                  emptySymbol="fa fa-star-o fa-2x"
                  fullSymbol="fa fa-star fa-2x"
                  className="space-x-4 flex text-secondary"
                  onChange={(v) => {
                    setRating(v)
                    setErrors((prev) =>
                      prev ? { ...prev, rating: undefined } : prev
                    )
                  }}
                />
                {!!errors?.rating?.length && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors?.rating[0]}.
                  </p>
                )}
              </div>

              {/* The organizer's own questions, under the stars, above the words. */}
              {questions.length > 0 && (
                <div className="mt-5 space-y-5">
                  {questions.map((question) => {
                    const key = `answers.${question.id}`
                    const value = answers[question.id]
                    const questionError = errors?.[key]?.[0]
                    return (
                      <div key={question.id}>
                        <p className="text-sm font-medium text-black dark:text-white-dark mb-2">
                          {question.label}{' '}
                          {question.required && (
                            <span className="text-red-500">*</span>
                          )}
                        </p>
                        {(question.type === 'choice' ||
                          question.type === 'scale') && (
                          <div className="flex flex-wrap gap-2">
                            {(question.type === 'scale'
                              ? ['1', '2', '3', '4', '5']
                              : (question.options ?? [])
                            ).map((option) => (
                              <button
                                key={String(option)}
                                type="button"
                                aria-pressed={String(value) === String(option)}
                                className={
                                  String(value) === String(option)
                                    ? chipOn
                                    : chipOff
                                }
                                onClick={() =>
                                  setAnswers((prev) => {
                                    const next = { ...prev }
                                    if (
                                      String(prev[question.id]) ===
                                      String(option)
                                    ) {
                                      delete next[question.id]
                                    } else {
                                      next[question.id] =
                                        question.type === 'scale'
                                          ? Number(option)
                                          : option
                                    }
                                    return next
                                  })
                                }
                              >
                                {String(option)}
                              </button>
                            ))}
                          </div>
                        )}
                        {question.type === 'text' && (
                          <textarea
                            id={`feedback-question-${question.id}`}
                            rows={2}
                            aria-label={question.label}
                            className={`appearance-none block w-full rounded-2xl bg-white dark:bg-black-dark text-black dark:text-white-dark p-3 text-sm outline-none focus:ring-2 focus:ring-accent transition ${
                              questionError
                                ? 'border border-red-500'
                                : 'border border-blue-100 dark:border-white/10'
                            }`}
                            value={String(answers[question.id] ?? '')}
                            onChange={(e) =>
                              setAnswers((prev) => ({
                                ...prev,
                                [question.id]: e.target.value,
                              }))
                            }
                          />
                        )}
                        {questionError && (
                          <p className="text-red-500 text-xs italic mt-1">
                            {questionError}.
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}

              <div className="mt-5">
                <label
                  htmlFor="feed-message"
                  className="block text-sm font-medium text-black dark:text-white-dark mb-2"
                >
                  {wordsLabel}
                </label>
                <textarea
                  id="feed-message"
                  rows={4}
                  placeholder="Your feedback…"
                  className={`appearance-none block w-full rounded-2xl bg-white dark:bg-black-dark text-black dark:text-white-dark p-3 text-sm outline-none focus:ring-2 focus:ring-accent transition ${
                    errors?.feedback
                      ? 'border border-red-500'
                      : 'border border-blue-100 dark:border-white/10'
                  }`}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                {!!errors?.feedback?.length && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors?.feedback[0]}.
                  </p>
                )}
              </div>

              <div className="mt-4">
                <label
                  htmlFor="feed-name"
                  className="block text-sm font-medium text-black dark:text-white-dark mb-1"
                >
                  Your name{' '}
                  <span className="text-xs font-normal text-light dark:text-light-dark">
                    (optional — leave blank to stay anonymous)
                  </span>
                </label>
                <input
                  id="feed-name"
                  type="text"
                  maxLength={120}
                  placeholder="Anonymous"
                  className={`appearance-none block w-full rounded-2xl bg-white dark:bg-black-dark text-black dark:text-white-dark p-3 text-sm outline-none focus:ring-2 focus:ring-accent transition ${
                    errors?.name
                      ? 'border border-red-500'
                      : 'border border-blue-100 dark:border-white/10'
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {!!errors?.name?.length && (
                  <p className="text-red-500 text-xs italic mt-1">
                    {errors?.name[0]}.
                  </p>
                )}
                <p className="text-xs text-light dark:text-light-dark mt-2">
                  Anonymous unless you add your name.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="btn-primary w-full md:w-auto"
                  disabled={loading || removing}
                  onClick={() => sendFeedback()}
                >
                  {loading ? 'Sending…' : `Send ${kind} Feedback`}
                </button>
                {editing && (
                  <button
                    type="button"
                    className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors disabled:opacity-50"
                    disabled={loading || removing}
                    onClick={() => removeFeedback()}
                  >
                    {removing
                      ? 'Removing…'
                      : confirmRemove
                        ? 'Really remove?'
                        : 'Remove'}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

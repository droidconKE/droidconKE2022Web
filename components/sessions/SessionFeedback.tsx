import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import Rating from 'react-rating'
import { toast } from 'react-toastify'
import { FeedbackError } from '../../types/types'
import axios from '../../utils/axios'

export const SessionFeedback = ({
  closeDialog,
  sessionSlug,
}: {
  closeDialog: () => void
  // eslint-disable-next-line react/require-default-props
  sessionSlug?: string
}) => {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState(0)
  const [errors, setErrors] = useState<FeedbackError | null>(null)

  const kind = sessionSlug ? 'Session' : 'Event'

  useEffect(() => {
    setMounted(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeDialog()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeDialog])

  const sendFeedback = async () => {
    if (rating === 0) {
      setErrors({ rating: ['Please select a star rating'] })
      return
    }
    setLoading(true)
    setErrors(null)
    const eventSlug = process.env.NEXT_PUBLIC_EVENT_SLUG
    await axios
      .post(
        sessionSlug
          ? `/events/${eventSlug}/feedback/sessions/${sessionSlug}`
          : `/events/${eventSlug}/feedback`,
        { feedback: message, rating }
      )
      .then((response) => {
        toast.success(response.data.message)
        setLoading(false)
        closeDialog()
      })
      .catch((error) => {
        if (error.response.status === 422) {
          setErrors(error.response.data.errors)
        }
        if (error.response.status === 401) {
          toast.error('Login to give feedback')
        }
        setLoading(false)
      })
  }

  if (!mounted) return null

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
              {kind} Feedback
            </h2>
          </div>
        </div>

        {/* Form */}
        <div className="w-full md:w-3/5 p-6 md:p-8">
          <p className="md:hidden text-primary dark:text-primary font-bold uppercase tracking-wide text-sm mb-1">
            ( Feedback )
          </p>
          <h3 className="md:hidden font-display text-black dark:text-white-dark text-3xl mb-2">
            {kind} Feedback
          </h3>
          <p className="text-sm text-black dark:text-white-dark mb-4">
            Kindly leave your honest feedback to help us make it even better.
            Cheers :)
          </p>
          <textarea
            id="feed-message"
            rows={4}
            placeholder="Your feedback…"
            className={`appearance-none block w-full rounded-2xl bg-white dark:bg-black-dark text-black dark:text-white-dark p-3 text-sm outline-none focus:ring-2 focus:ring-accent transition ${
              errors?.feedback
                ? 'border border-red-500'
                : 'border border-blue-100 dark:border-white/10'
            }`}
            onChange={(e) => setMessage(e.target.value)}
          />
          {!!errors?.feedback?.length && (
            <p className="text-red-500 text-xs italic mt-1">
              {errors?.feedback[0]}.
            </p>
          )}
          <div className="mt-5 w-full">
            <p className="text-sm font-medium text-black dark:text-white-dark mb-2">
              Rating <span className="text-red-500">*</span>
            </p>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
            {/*  @ts-ignore */}
            <Rating
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
          <button
            type="button"
            className="btn-primary w-full md:w-auto mt-6"
            disabled={loading}
            onClick={() => sendFeedback()}
          >
            {loading ? 'Sending…' : `Send ${kind} Feedback`}
          </button>
        </div>
      </div>
    </div>,
    document.body
  )
}

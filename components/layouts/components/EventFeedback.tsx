import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Event } from '../../../types/types'
import axios from '../../../utils/axios'
import {
  feedbackWindowLabel,
  feedbackWindowState,
  isCurrentEventSlug,
  resolveEventSlug,
} from '../../../utils/helpers'
import { SessionFeedback } from '../../sessions/SessionFeedback'

export const EventFeedback = () => {
  const router = useRouter()
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [event, setEvent] = useState<Event | null>(null)

  // This button only ever serves the event the current page is about: the
  // year slug on the past-events routes, the ?event= param on session pages,
  // and the live event everywhere else. One resolution, shared by the window
  // fetch below and the modal it opens — never the live slug hard-coded.
  const eventSlug = resolveEventSlug(
    router.pathname === '/past-events/2022'
      ? process.env.NEXT_PUBLIC_EVENT_SLUG_2022
      : router.pathname === '/past-events/2023'
        ? process.env.NEXT_PUBLIC_EVENT_SLUG_2023
        : router.pathname === '/past-events/2024'
          ? process.env.NEXT_PUBLIC_EVENT_SLUG_2024
          : router.pathname === '/past-events/2025'
            ? process.env.NEXT_PUBLIC_EVENT_SLUG_2025
            : router.query.event
  )
  const isCurrentEvent = isCurrentEventSlug(eventSlug)

  // The organizer's feedback window lives on the event payload. When the
  // field is missing (an older backend, a cached payload) or the request
  // fails, feedback stays open — the default is on, never off.
  useEffect(() => {
    // The modal posts under the same resolved slug, so fetching a window for
    // an event this button will never render for is wasted traffic.
    if (!isCurrentEvent) return undefined
    let cancelled = false
    axios
      .get(`/events/${eventSlug}`, { timeout: 5000 })
      .then((response) => {
        if (cancelled) return
        setEvent(response.data?.data ?? null)
      })
      .catch(() => {
        // Leave the event unset: the window state falls back to open.
      })
    return () => {
      cancelled = true
    }
    // Re-resolve when the page's event changes — navigating between pages
    // about different events must re-read the window, not keep the old one.
  }, [eventSlug, isCurrentEvent])

  // Scheduling and reviewing only apply to the event being run now: on past
  // events the per-session nudge is the entry point, and this button can
  // never post into another event's bucket.
  if (!isCurrentEvent) return null

  // Before the window opens, render nothing — a permanent grey chip pinned to
  // every page for the weeks before the conference reads as a site that looks
  // broken. Once it has closed, keep a muted chip saying so, in case somebody
  // comes looking for the form.
  const windowState = feedbackWindowState(event)
  if (windowState === 'not-open-yet') return null

  return (
    <div className="fixed bottom-0 right-0 z-40">
      {windowState === 'open' ? (
        <button
          type="button"
          className="rounded-tl-2xl bg-primary hover:bg-blue-800 text-white px-6 py-3 font-medium shadow-lg transition-colors inline-flex items-center gap-2"
          onClick={() => setShowFeedbackModal(true)}
        >
          Feedback <i className="fa fa-comment" />
        </button>
      ) : (
        <button
          type="button"
          disabled
          className="rounded-tl-2xl bg-black/40 text-white/60 px-6 py-3 font-medium shadow-lg inline-flex items-center gap-2 cursor-not-allowed"
        >
          {feedbackWindowLabel(event)} <i className="fa fa-comment" />
        </button>
      )}

      {showFeedbackModal && (
        <SessionFeedback
          closeDialog={() => setShowFeedbackModal(false)}
          eventSlug={eventSlug}
        />
      )}
    </div>
  )
}

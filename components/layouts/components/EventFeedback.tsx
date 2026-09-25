import { useEffect, useState } from 'react'
import { Event } from '../../../types/types'
import axios from '../../../utils/axios'
import {
  feedbackWindowLabel,
  feedbackWindowState,
} from '../../../utils/helpers'
import { SessionFeedback } from '../../sessions/SessionFeedback'

export const EventFeedback = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [event, setEvent] = useState<Event | null>(null)

  // The organizer's feedback window lives on the event payload. Fetched once
  // per page load on the client; when the field is missing (an older backend,
  // a cached payload) or the request fails, feedback stays open — the default
  // is on, never off.
  useEffect(() => {
    let cancelled = false
    axios
      .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}`)
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
  }, [])

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
        <SessionFeedback closeDialog={() => setShowFeedbackModal(false)} />
      )}
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Session } from '../../types/types'
import { sessionHasEnded } from '../../utils/calendar'
import { isSafeHref } from '../../utils/helpers'
import { SessionFeedback } from './SessionFeedback'

// "How was it? Rate this session" — the post-session nudge from the feedback
// ticket. Rendered on the schedule cards and the session details banner once
// a session is over, the organizer's feedback window is open (default on,
// never off) and the backend exposes a per-session feedback url.
export const FeedbackNudge = ({
  session,
  feedbackOpen = true,
  eventSlug,
  className = 'mt-2 flex justify-end',
}: {
  session: Session
  // eslint-disable-next-line react/require-default-props
  feedbackOpen?: boolean
  // eslint-disable-next-line react/require-default-props
  eventSlug?: string
  // eslint-disable-next-line react/require-default-props
  className?: string
}) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const compute = () => {
      setVisible(
        feedbackOpen &&
          isSafeHref(session.feedback_url) &&
          !session.is_serviceSession &&
          sessionHasEnded(session)
      )
    }
    // Eligibility is decided on the client, never on the server: it compares
    // Date.now(), so deciding it during render would produce markup from the
    // server's clock that hydration then re-decides on the visitor's — a
    // skewed device clock, or a session ending in that gap, is a hydration
    // mismatch. Nothing renders before the first effect runs.
    compute()
    // And again when the tab comes back from the background, so a visitor
    // who opened the schedule before a talk ended sees the nudge when they
    // return, without a refresh.
    document.addEventListener('visibilitychange', compute)
    return () => document.removeEventListener('visibilitychange', compute)
  }, [feedbackOpen, session])

  if (!visible) return null

  return (
    <div className={className}>
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-accent px-3 py-1.5 text-xs md:text-sm font-semibold text-black dark:text-white-dark hover:bg-accent transition-colors"
        onClick={() => setShowFeedbackModal(true)}
      >
        <i className="fa fa-star-o" aria-hidden="true" />
        How was it? Rate this session
      </button>
      {showFeedbackModal && (
        <SessionFeedback
          closeDialog={() => setShowFeedbackModal(false)}
          sessionSlug={session.slug}
          eventSlug={eventSlug}
        />
      )}
    </div>
  )
}

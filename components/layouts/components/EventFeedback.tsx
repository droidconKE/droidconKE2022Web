import { useState } from 'react'
import { useRouter } from 'next/router'
import { SessionFeedback } from '../../sessions/SessionFeedback'
import { isCurrentEventSlug } from '../../../utils/helpers'

export const EventFeedback = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const router = useRouter()

  // On a session details page, this button gives feedback for that session;
  // everywhere else it's event-level feedback. A session belonging to a past
  // event carries that event in the URL, and feedback is only taken for the
  // event being run now, so those fall back to event-level feedback too.
  const isCurrentEvent = isCurrentEventSlug(router.query.event)
  const sessionSlug =
    router.pathname === '/sessions/[slug]' && isCurrentEvent
      ? String(router.query.slug ?? '')
      : undefined

  return (
    <div className="fixed bottom-0 right-0 z-40">
      <button
        type="button"
        className="rounded-tl-2xl bg-primary hover:bg-blue-800 text-white px-6 py-3 font-medium shadow-lg transition-colors inline-flex items-center gap-2"
        onClick={() => setShowFeedbackModal(true)}
      >
        {sessionSlug ? 'Session Feedback' : 'Feedback'}{' '}
        <i className="fa fa-comment" />
      </button>

      {showFeedbackModal && (
        <SessionFeedback
          closeDialog={() => setShowFeedbackModal(false)}
          sessionSlug={sessionSlug}
        />
      )}
    </div>
  )
}

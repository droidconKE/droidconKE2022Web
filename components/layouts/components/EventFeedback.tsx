import { useState } from 'react'
import { SessionFeedback } from '../../sessions/SessionFeedback'

export const EventFeedback = () => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)

  return (
    <div className=" fixed bottom-0 right-0">
      <button
        type="button"
        className="rounded-t-lg bg-primary px-6 p-1 text-white"
        onClick={() => setShowFeedbackModal(true)}
      >
        Feedback <i className="fa fa-share" />
      </button>

      {showFeedbackModal && (
        <SessionFeedback closeDialog={() => setShowFeedbackModal(false)} />
      )}
    </div>
  )
}

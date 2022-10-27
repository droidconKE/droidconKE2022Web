import { useState } from 'react'
import {
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TwitterIcon,
  LinkedinIcon,
  TelegramIcon,
  WhatsappIcon,
} from 'react-share'
import { SessionFeedback } from './SessionFeedback'
import { Session } from '../../types/types'
import { truncateString } from '../../utils/helpers'

export const ShareSessionAndFeedback = ({ session }: { session: Session }) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showShare, setShowShare] = useState(false)

  return (
    <div className="w-full px-0 md:px-6 flex-col items-start justify-start lg:w-3/12 flex py-4 mb-16 lg:mb-0 space-y-5">
      <button
        type="button"
        className="btn-accent"
        onClick={() => setShowShare(!showShare)}
      >
        share <i className="fa fa-share" />
      </button>
      {showShare && (
        <div className="space-x-4">
          <LinkedinShareButton
            url={window.location.href}
            title={session.title}
            summary={truncateString(session.description)}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <TelegramShareButton url={window.location.href} title={session.title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton
            url={window.location.href}
            title={session.title}
            hashtags={['droidcon', 'droidconKe22', 'dcke22']}
            related={['droidconke']}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href} title={session.title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      )}
      <button
        type="button"
        className="btn-primary"
        onClick={() => setShowFeedbackModal(true)}
      >
        Session Feedback{' '}
        <i className="fa fa-send" style={{ transform: 'rotate(55deg)' }} />
      </button>
      {showFeedbackModal && (
        <SessionFeedback
          closeDialog={() => setShowFeedbackModal(false)}
          sessionSlug={session.slug}
        />
      )}
    </div>
  )
}

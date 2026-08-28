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
import { AddToCalendar } from './AddToCalendar'
import { Session } from '../../types/types'
import { truncateString } from '../../utils/helpers'
import { StarIcon } from '../shared/StarIcon'

export const ShareSessionAndFeedback = ({
  session,
  venue,
}: {
  session: Session
  // eslint-disable-next-line react/require-default-props
  venue?: string
}) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showShare, setShowShare] = useState(false)

  const title = `${session.title} by ${session.speakers.map(
    (s) => ` ${s.name}`
  )} \r`
  const twTitle = `${session.title} by ${session.speakers.map(
    (s) => ` ${s.twitter ? `@${s.twitter.split('twitter.com/')[1]}` : s.name}`
  )} \r`

  return (
    <div className="w-full flex flex-wrap items-center gap-4 py-2">
      <StarIcon isStar={false} session={session} />
      <button
        type="button"
        className="btn-accent uppercase"
        onClick={() => setShowShare(!showShare)}
      >
        share <i className="fa fa-share" />
      </button>
      {showShare && (
        <div className="flex items-center space-x-4">
          <LinkedinShareButton
            url={window.location.href}
            source={window.location.href}
            title={title}
            summary={truncateString(session.description)}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <TelegramShareButton url={window.location.href} title={title}>
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <TwitterShareButton
            url={window.location.href}
            title={twTitle}
            hashtags={['droidcon', 'droidconKe24', 'dcke24']}
            related={['droidconke']}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={window.location.href} title={title}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
      )}
      <AddToCalendar session={session} venue={venue} />
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

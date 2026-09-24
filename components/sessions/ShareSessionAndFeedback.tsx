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
  isCurrentEvent = true,
}: {
  session: Session
  // eslint-disable-next-line react/require-default-props
  venue?: string
  // eslint-disable-next-line react/require-default-props
  isCurrentEvent?: boolean
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
      {/* Saving only applies to the event being run now: My Sessions filters
          the current event's schedule by the ids saved here, and no
          past-event page renders that filter at all — so saving a past
          session writes an id nothing can ever surface. */}
      {isCurrentEvent && <StarIcon isStar={false} session={session} />}
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
      {/* Scheduling and reviewing only apply to the event being run now:
          feedback posts against the current event, so a past session must not
          offer it. Share stays — a talk from 2023 is still worth sending to
          somebody. */}
      {isCurrentEvent && (
        <>
          <AddToCalendar session={session} venue={venue} />
          <button
            type="button"
            className="btn-primary"
            onClick={() => setShowFeedbackModal(true)}
          >
            Session Feedback{' '}
            <i className="fa fa-send" style={{ transform: 'rotate(55deg)' }} />
          </button>
        </>
      )}
      {showFeedbackModal && (
        <SessionFeedback
          closeDialog={() => setShowFeedbackModal(false)}
          sessionSlug={session.slug}
        />
      )}
    </div>
  )
}

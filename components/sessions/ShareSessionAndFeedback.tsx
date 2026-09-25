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
import {
  FeedbackWindowState,
  isSafeHref,
  truncateString,
} from '../../utils/helpers'
import { sessionHasEnded } from '../../utils/calendar'
import { StarIcon } from '../shared/StarIcon'

export const ShareSessionAndFeedback = ({
  session,
  venue,
  isCurrentEvent = true,
  feedbackWindow = 'open',
  eventSlug,
}: {
  session: Session
  // eslint-disable-next-line react/require-default-props
  venue?: string
  // eslint-disable-next-line react/require-default-props
  isCurrentEvent?: boolean
  // eslint-disable-next-line react/require-default-props
  feedbackWindow?: FeedbackWindowState
  // eslint-disable-next-line react/require-default-props
  eventSlug?: string
}) => {
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showShare, setShowShare] = useState(false)

  // After a session ends the banner nudge ("How was it? Rate this session")
  // takes over as the session-feedback entry point, so the button stands
  // down rather than stacking a second identical CTA on the page.
  const nudgeHasTakenOver = sessionHasEnded(session)

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
          feedback posts against the event on screen, so a past session must
          not offer it. Share stays — a talk from 2023 is still worth sending
          to somebody. The two gates compose here rather than either standing
          alone: isCurrentEvent says this page's event takes feedback, the
          window says it is taking it now. Before the window opens nothing
          renders; once it has closed a disabled chip says why. */}
      {isCurrentEvent && (
        <>
          <AddToCalendar session={session} venue={venue} />
          {feedbackWindow === 'open' && !nudgeHasTakenOver && (
            <button
              type="button"
              className="btn-primary"
              onClick={() => setShowFeedbackModal(true)}
            >
              Session Feedback{' '}
              <i
                className="fa fa-send"
                style={{ transform: 'rotate(55deg)' }}
              />
            </button>
          )}
          {feedbackWindow === 'closed' && (
            <button
              type="button"
              disabled
              className="btn-primary cursor-not-allowed"
            >
              Feedback has closed
            </button>
          )}
        </>
      )}
      {isCurrentEvent &&
        feedbackWindow === 'open' &&
        isSafeHref(session.feedback_url) && (
          <a
            href={session.feedback_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary dark:text-accent-dark hover:underline"
          >
            Official feedback form
            <i className="fa fa-external-link" aria-hidden="true" />
          </a>
        )}
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

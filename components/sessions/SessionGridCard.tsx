import Link from 'next/link'
import { Schedule, Session } from '../../types/types'
import { hour, sessionHref, truncateString } from '../../utils/helpers'
import { NoSessions } from './NoSessions'
import { AddToCalendar } from './AddToCalendar'
import { FeedbackNudge } from './FeedbackNudge'
import { StarIcon } from '../shared/StarIcon'

const levelPill =
  'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-accent-dark text-xs font-semibold px-3 py-1 rounded-full'
const formatPill =
  'bg-blue-50 dark:bg-primary/20 text-primary dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full'
const recordingPill =
  'bg-primary dark:bg-primary text-white dark:text-white text-xs font-semibold px-3 py-1 rounded-full'

// One entry per edition: the poster a session falls back to when it has none
// of its own, and the shape that edition's artwork is drawn in. Up to 2025 the
// artwork was a wide banner carrying its title and its speaker across the full
// width, so the card shows a strip of it; 2026's is square, and a strip of a
// square cuts the speaker's name off the bottom. Next edition is a file in
// public/images, a line here, and CURRENT_EDITION below.
//
// The chain of `year ===` checks this replaces had already drifted apart:
// service sessions tested 25 where every other session tested 26, so in the
// same year the two kinds of session fell back to different posters.
const EDITIONS: Record<number, { artwork: string; banner: string }> = {
  24: { artwork: '/images/all-new.png', banner: 'h-44' },
  25: { artwork: '/images/all-2025.png', banner: 'h-44' },
  26: { artwork: '/images/empty-state-2026.jpg', banner: 'aspect-video' },
}
// 2022 and 2023, whose posters are 1717x693 and wider still. A 16:9 box crops
// their sides, and that is where the title and the speaker's name end.
const EARLIEST_EDITION = { artwork: '/images/all.png', banner: 'h-44' }

const CURRENT_EDITION = 26

const editionOf = (year: number) => EDITIONS[year] ?? EARLIEST_EDITION

// TODO: remove after 2024 — the one session with artwork of its own.
const PANEL_TITLE = 'Building And Scaling Tech'
const PANEL_ARTWORK = '/images/panel.png'

const artworkFor = (session: Session, edition: { artwork: string }) =>
  // The API's absent value is "", which ?? lets through — only a falsy check
  // reaches the default artwork.
  session.session_image ||
  (session.is_serviceSession && session.title.includes(PANEL_TITLE)
    ? PANEL_ARTWORK
    : edition.artwork)

export const SessionGridCard = ({
  schedules,
  activeTab,
  from,
  year = CURRENT_EDITION,
  showStar = false,
  eventVenue,
  eventSlug,
  feedbackOpen = true,
}: {
  schedules: Schedule
  activeTab: number
  // eslint-disable-next-line react/require-default-props
  from?: string
  // eslint-disable-next-line react/require-default-props
  year?: number
  // eslint-disable-next-line react/require-default-props
  showStar?: boolean
  // eslint-disable-next-line react/require-default-props
  eventVenue?: string
  // eslint-disable-next-line react/require-default-props
  eventSlug?: string
  // eslint-disable-next-line react/require-default-props
  feedbackOpen?: boolean
}) => {
  const edition = editionOf(year)

  return (
    <>
      <div>
        {Object.keys(schedules)?.map(
          (key, i) =>
            activeTab === i &&
            (schedules[key].length ? (
              <div className="lg:grid gap-5 grid-cols-3" key={key}>
                {schedules[key]?.map((schedule: Session) => {
                  const href = sessionHref(schedule.slug, from, eventSlug)
                  const imgSrc = artworkFor(schedule, edition)
                  const cardClass =
                    'group relative w-full rounded-4xl overflow-hidden bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md hover:shadow-xl hover:border-accent transition-all duration-200 flex flex-col flex-1'
                  const inner = (
                    <>
                      {/* halftone dots at the top corners */}
                      <span className="session-dots session-dots-l pointer-events-none absolute top-0 left-0 w-24 h-24 z-10" />
                      <span className="session-dots session-dots-r pointer-events-none absolute top-0 right-0 w-24 h-24 z-10" />
                      <img
                        className={`w-full ${edition.banner} object-cover`}
                        src={imgSrc}
                        alt={schedule.title}
                      />
                      <div className="p-5 flex flex-1 flex-wrap">
                        <div className="w-full">
                          <h3 className="text-primary dark:text-accent-dark text-sm font-bold mb-3">
                            {hour(schedule.start_date_time)} -{' '}
                            {hour(schedule.end_date_time)}
                            <span className="text-light dark:text-light-dark font-normal">
                              {' '}
                              ·{' '}
                              {schedule.rooms?.map((venue) => (
                                <span key={venue.id} className="rooms">
                                  {venue.title}
                                </span>
                              ))}
                            </span>
                          </h3>
                          {!schedule.is_serviceSession && (
                            <div className="flex flex-wrap gap-2 mb-3">
                              <span className={levelPill}>
                                #
                                {schedule.is_keynote
                                  ? 'Keynote'
                                  : schedule.session_level}
                              </span>
                              <span className={formatPill}>
                                {schedule.session_format}
                              </span>
                              {schedule.recording_youtube_id && (
                                <span className={recordingPill}>
                                  <i className="fa fa-youtube-play mr-1" />
                                  Recording
                                </span>
                              )}
                            </div>
                          )}
                          <p className="text-base font-bold text-black dark:text-white-dark mb-2 group-hover:text-primary dark:group-hover:text-accent-dark transition-colors">
                            {schedule.is_keynote ? 'Keynote: ' : ''}{' '}
                            {schedule.title}
                          </p>
                          {schedule.description && (
                            <p className="font-normal text-sm text-black dark:text-white-dark break-words w-full">
                              {truncateString(schedule.description, 120)}
                            </p>
                          )}
                        </div>
                        {!schedule.is_serviceSession && (
                          <div
                            className={`flex items-center mt-4 w-full self-end ${
                              showStar ? 'pr-16' : ''
                            }`}
                          >
                            <div className="flex items-center -space-x-2">
                              {schedule.speakers?.map((speaker) => (
                                <div key={speaker.name} className="w-9 h-9">
                                  <img
                                    className="w-9 h-9 rounded-full border-2 border-accent object-cover"
                                    src={
                                      speaker.avatar ??
                                      '/images/icons/apple-icon.png'
                                    }
                                    alt={speaker.name}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  )
                  return (
                    <div
                      className="flex flex-col relative mb-6 hover:-translate-y-1 transition-transform duration-200"
                      key={schedule.id}
                    >
                      {schedule.is_serviceSession ? (
                        <div className={cardClass}>{inner}</div>
                      ) : (
                        <Link href={href} className={cardClass}>
                          {inner}
                        </Link>
                      )}
                      {/* Sibling of the Link — interactive content can't nest inside an <a> */}
                      {showStar && !schedule.is_serviceSession && (
                        <div className="absolute bottom-5 right-5 z-20 flex items-center gap-3">
                          <AddToCalendar
                            session={schedule}
                            venue={eventVenue}
                            compact
                          />
                          <StarIcon session={schedule} />
                        </div>
                      )}
                      <FeedbackNudge
                        session={schedule}
                        feedbackOpen={feedbackOpen}
                        eventSlug={eventSlug}
                      />
                    </div>
                  )
                })}
              </div>
            ) : (
              <NoSessions key={key} />
            ))
        )}
      </div>
      <style>
        {`
          .rooms ~ .rooms::before {
            content: ', ';
          }
          .session-dots {
            color: #00ff4f;
            background-image: radial-gradient(currentColor 1.5px, transparent 1.6px);
            background-size: 8px 8px;
          }
          .session-dots-r {
            background-position: top right;
            -webkit-mask-image: radial-gradient(circle at top right, #000 0%, transparent 72%);
            mask-image: radial-gradient(circle at top right, #000 0%, transparent 72%);
          }
          .session-dots-l {
            background-position: top left;
            -webkit-mask-image: radial-gradient(circle at top left, #000 0%, transparent 72%);
            mask-image: radial-gradient(circle at top left, #000 0%, transparent 72%);
          }
        `}
      </style>
    </>
  )
}

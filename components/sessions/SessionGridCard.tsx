import Link from 'next/link'
import { Schedule, Session } from '../../types/types'
import { hour, truncateString } from '../../utils/helpers'
import { NoSessions } from './NoSessions'
import { AddToCalendar } from './AddToCalendar'
import { StarIcon } from '../shared/StarIcon'

const levelPill =
  'bg-green-100 dark:bg-green-500/15 text-green-800 dark:text-accent-dark text-xs font-semibold px-3 py-1 rounded-full'
const formatPill =
  'bg-blue-50 dark:bg-primary/20 text-primary dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full'

export const SessionGridCard = ({
  schedules,
  activeTab,
  from,
  year = 25,
  showStar = false,
  eventVenue,
}: {
  schedules: Schedule[]
  activeTab: number
  // eslint-disable-next-line react/require-default-props
  from?: string
  // eslint-disable-next-line react/require-default-props
  year?: number
  // eslint-disable-next-line react/require-default-props
  showStar?: boolean
  // eslint-disable-next-line react/require-default-props
  eventVenue?: string
}) => {
  return (
    <>
      <div>
        {Object.keys(schedules)?.map(
          (key, i) =>
            activeTab === i &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (schedules[key].length ? (
              <div className="lg:grid gap-5 grid-cols-3" key={key}>
                {// eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                schedules[key]?.map((schedule: Session) => {
                  const href = `/sessions/${schedule.slug}${
                    from ? `?from=${from}` : ''
                  }`
                  const imgSrc =
                    schedule.session_image ??
                    (schedule.is_serviceSession
                      ? // TODO: remove after 2024
                        schedule.title.includes('Building And Scaling Tech')
                        ? '/images/panel.png'
                        : year === 24
                          ? '/images/all-new.png'
                          : year === 25
                            ? '/images/all-2025.png'
                            : '/images/all.png'
                      : year === 24
                        ? '/images/all-new.png'
                        : year === 26
                          ? '/images/all-2025.png'
                          : '/images/all.png')
                  const cardClass =
                    'group relative w-full rounded-4xl overflow-hidden bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md hover:shadow-xl hover:border-accent transition-all duration-200 flex flex-col'
                  const inner = (
                    <>
                      {/* halftone dots at the top corners */}
                      <span className="session-dots session-dots-l pointer-events-none absolute top-0 left-0 w-24 h-24 z-10" />
                      <span className="session-dots session-dots-r pointer-events-none absolute top-0 right-0 w-24 h-24 z-10" />
                      <img
                        className="w-full h-44 object-cover"
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
                      className="flex relative mb-6 hover:-translate-y-1 transition-transform duration-200"
                      key={schedule.id}
                    >
                      {schedule.is_serviceSession ? (
                        <div className={cardClass}>{inner}</div>
                      ) : (
                        <Link href={href} className={`${cardClass} block`}>
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

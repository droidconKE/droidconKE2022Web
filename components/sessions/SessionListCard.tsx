import Link from 'next/link'
import { Schedule, Session } from '../../types/types'
import { hour, time, timeAm, truncateString } from '../../utils/helpers'
import { NoSessions } from './NoSessions'
import { StarIcon } from '../shared/StarIcon'

const levelPill =
  'bg-green-100 dark:bg-green-500/15 text-green-800 dark:text-accent-dark text-xs font-semibold px-3 py-1 rounded-full'
const formatPill =
  'bg-blue-50 dark:bg-primary/20 text-primary dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full'

const SessionListCard = ({
  schedules,
  activeTab,
  from,
  showStar = false,
}: {
  schedules: Schedule[]
  activeTab: number
  // eslint-disable-next-line react/require-default-props
  from?: string
  // eslint-disable-next-line react/require-default-props
  showStar?: boolean
}) => {
  return (
    <>
      <div className="space-y-5">
        {Object.keys(schedules)?.map(
          (key, i) =>
            activeTab === i &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (schedules[key].length ? (
              <div key={key} className="space-y-5">
                {// eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                schedules[key]?.map((schedule: Session) => {
                  const href = `/sessions/${schedule.slug}${
                    from ? `?from=${from}` : ''
                  }`
                  const cardClass =
                    'group block rounded-4xl bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md hover:shadow-xl hover:border-accent hover:-translate-y-1 transition-all duration-200 px-4 md:px-6 py-5'
                  const inner = (
                    <div className="flex flex-row items-start gap-4">
                      <div className="flex flex-col w-16 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-primary/15 py-3">
                        <span className="font-display text-lg leading-none text-primary dark:text-accent-dark">
                          {time(schedule.start_date_time)}
                        </span>
                        <span className="text-xs font-medium text-light dark:text-light-dark mt-1">
                          {timeAm(schedule.start_date_time)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base md:text-lg text-black dark:text-white-dark group-hover:text-primary dark:group-hover:text-accent-dark transition-colors">
                          {schedule.is_keynote ? 'Keynote: ' : ''}{' '}
                          {schedule.title}
                        </h4>
                        {!schedule.is_serviceSession && (
                          <div className="flex flex-wrap gap-2 mt-2">
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
                        {schedule.description && (
                          <p className="font-normal text-sm text-black dark:text-white-dark py-2 break-words">
                            {truncateString(schedule.description, 150)}
                          </p>
                        )}
                        <p className="text-xs md:text-sm text-light dark:text-light-dark font-medium">
                          {hour(schedule.start_date_time)} -{' '}
                          {hour(schedule.end_date_time)} ·{' '}
                          {schedule.rooms?.map((venue) => (
                            <span key={venue.id} className="rooms">
                              {venue.title}
                            </span>
                          ))}
                        </p>
                        {schedule.speakers?.length ? (
                          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2">
                            {schedule.speakers?.map((speaker) => (
                              <span
                                key={speaker.avatar}
                                className="text-xs md:text-sm text-primary dark:text-accent-dark font-medium"
                              >
                                {speaker.name}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                      {showStar && !schedule.is_serviceSession && (
                        <div className="shrink-0 flex justify-center items-start">
                          <StarIcon session={schedule} />
                        </div>
                      )}
                    </div>
                  )
                  return schedule.is_serviceSession ? (
                    <div key={schedule.id} className={cardClass}>
                      {inner}
                    </div>
                  ) : (
                    <Link key={schedule.id} href={href} className={cardClass}>
                      {inner}
                    </Link>
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
        `}
      </style>
    </>
  )
}

export default SessionListCard

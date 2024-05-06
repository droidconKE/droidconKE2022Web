/* eslint-disable security/detect-object-injection */
import Link from 'next/link'
import { Schedule, Session } from '../../types/types'
import { hour, time, timeAm, truncateString } from '../../utils/helpers'
import { StarIcon } from '../shared/StarIcon'
import { NoSessions } from './NoSessions'

const SessionListCard = ({
  schedules,
  activeTab,
  from,
}: {
  schedules: Schedule[]
  activeTab: number
  // eslint-disable-next-line react/require-default-props
  from?: string
}) => {
  return (
    <>
      <div className="space-y-10 md:pl-4">
        {Object.keys(schedules)?.map(
          (key, i) =>
            activeTab === i &&
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            (schedules[key].length ? (
              <div key={key}>
                {
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-ignore
                  schedules[key]?.map((schedule: Session) => (
                    <div key={schedule.id}>
                      <div className="shadow-md px-2 h-auto rounded-md py-4 justify-center content-center bg-white dark:bg-black-dark mb-6">
                        <div className="flex flex-row items-start">
                          <div className="flex flex-col w-2/12 justify-start items-center">
                            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
                              {time(schedule.start_date_time)}
                            </h4>
                            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
                              {timeAm(schedule.start_date_time)}
                            </h4>
                          </div>
                          <div className="w-9/12 content-center justify-center">
                            {schedule.is_serviceSession ? (
                              <h4 className="font-bold md:text-xl dark:text-white">
                                {schedule.is_keynote ? 'Keynote: ' : ''}{' '}
                                {schedule.title}
                              </h4>
                            ) : (
                              <Link
                                href={`/sessions/${schedule.slug}${
                                  from ? `?from=${from}` : ''
                                }`}
                              >
                                <a>
                                  <h4 className="font-bold md:text-xl dark:text-white">
                                    {schedule.is_keynote ? 'Keynote: ' : ''}{' '}
                                    {schedule.title}
                                  </h4>
                                </a>
                              </Link>
                            )}
                            {!schedule.is_serviceSession && (
                              <p className="font-normal text-sm md:text-base py-2 break-words">
                                {truncateString(schedule.description, 150)}
                              </p>
                            )}
                            <p className="text-xs md:text-sm font-light">
                              <span>
                                {hour(schedule.start_date_time)} -{' '}
                                {hour(schedule.end_date_time)}
                              </span>{' '}
                              |{' '}
                              {schedule.rooms?.map((venue) => (
                                <span key={venue.id} className="rooms">
                                  {venue.title}
                                </span>
                              ))}
                            </p>
                            {!schedule.is_serviceSession}
                            {schedule.speakers?.map((speaker) => (
                              <a
                                key={speaker.avatar}
                                href="#1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs md:text-sm pt-1 text-primary dark:text-accent-dark mr-2"
                              >
                                <i className="fa fa-android" /> {speaker.name}
                              </a>
                            ))}
                          </div>
                          <div className="flex w-1/12 justify-center items-start md:pr-4">
                            {!schedule.is_serviceSession && (
                              <StarIcon session={schedule} />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ) : (
              <NoSessions />
            ))
        )}
      </div>
      <style jsx>
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

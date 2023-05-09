/* eslint-disable security/detect-object-injection */
import Link from 'next/link'
import { Schedule, Session } from '../../types/types'
import { hour } from '../../utils/helpers'
import { StarIcon } from '../shared/StarIcon'
import { NoSessions } from './NoSessions'

export const SessionGridCard = ({
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
      <div>
        {Object.keys(schedules)?.map(
          // eslint-disable-next-line sonarjs/cognitive-complexity
          (key, i) =>
            activeTab === i &&
            (schedules[key].length ? (
              <div className="lg:grid gap-4 grid-cols-3" key={key}>
                {/* component */}
                {schedules[key]?.map((schedule: Session) => (
                  <div className="flex" key={schedule.id}>
                    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-lighter dark:bg-black-dark mb-6 flex flex-col">
                      {schedule.is_serviceSession ? (
                        <img
                          className="object-cover md:object-cover"
                          src={schedule.session_image ?? 'images/all.png'}
                          alt={schedule.title}
                        />
                      ) : (
                        <Link
                          href={`/sessions/${schedule.slug}${
                            from ? `?from=${from}` : ''
                          }`}
                        >
                          <a>
                            <img
                              className="object-cover md:object-cover"
                              src={schedule.session_image ?? 'images/all.png'}
                              alt={schedule.title}
                            />
                          </a>
                        </Link>
                      )}
                      <div className="m-4 flex flex-1 flex-wrap">
                        <h3 className="text-light text-sm mt-4 w-full">
                          @ {hour(schedule.start_date_time)} |{' '}
                          {schedule.rooms?.map((venue) => (
                            <span key={venue.id} className="rooms">
                              {venue.title}
                            </span>
                          ))}
                        </h3>
                        {schedule.is_serviceSession ? (
                          <p className="text-sm mt-2 font-bold dark:text-white-dark">
                            {schedule.is_keynote ? 'Keynote: ' : ''}{' '}
                            {schedule.title}
                          </p>
                        ) : (
                          <Link
                            href={`/sessions/${schedule.slug}${
                              from ? `?from=${from}` : ''
                            }`}
                          >
                            <a>
                              <p className="text-sm mt-2 font-bold dark:text-white-dark">
                                {schedule.is_keynote ? 'Keynote: ' : ''}{' '}
                                {schedule.title}
                              </p>
                            </a>
                          </Link>
                        )}
                        <div className="flex justify-between mt-4 w-full self-end">
                          <div className="flex items-start space-x-4">
                            {!schedule.is_serviceSession &&
                              schedule.speakers?.map((speaker) => (
                                <div key={speaker.name} className="w-9 h-9">
                                  <img
                                    className="rounded-full border border-accent shadow-sm"
                                    src={
                                      speaker.avatar ??
                                      '/images/icons/apple-icon.png'
                                    }
                                    alt=""
                                  />
                                </div>
                              ))}
                          </div>
                          <div className="w-full flex items-center justify-end">
                            <span>
                              {!schedule.is_serviceSession && (
                                <StarIcon session={schedule} />
                              )}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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

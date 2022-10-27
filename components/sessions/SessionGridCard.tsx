/* eslint-disable security/detect-object-injection */
import Link from 'next/link'
import { Schedule, Session } from '../../types/types'
import { hour } from '../../utils/helpers'
import { StarIcon } from '../shared/StarIcon'
import { NoSessions } from './NoSessions'

export const SessionGridCard = ({
  schedules,
  activeTab,
}: {
  schedules: Schedule[]
  activeTab: number
}) => {
  return (
    <>
      <div>
        {Object.keys(schedules)?.map(
          (key, i) =>
            activeTab === i &&
            (schedules[key].length ? (
              <div className="lg:grid gap-4 grid-cols-3" key={key}>
                {/* component */}
                {schedules[key]?.map((schedule: Session) => (
                  <Link href={`/sessions/${schedule.slug}`} key={schedule.id}>
                    <a className='className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-lighter dark:bg-black-dark mb-6"'>
                      <img
                        className="object-cover md:object-cover"
                        src="images/testara.png"
                        alt=""
                      />
                      <div className="m-4">
                        <h3 className="text-light text-sm mt-4">
                          @ {hour(schedule.start_date_time)} |{' '}
                          {schedule.rooms?.map((venue) => (
                            <span key={venue.id} className="rooms">
                              {venue.title}
                            </span>
                          ))}
                        </h3>
                        <p className="text-sm mt-2 h-10 font-bold dark:text-white-dark">
                          {schedule.title}
                        </p>
                        <div className="flex justify-between mt-4 h-8">
                          <div className="flex items-start space-x-4">
                            {!schedule.is_serviceSession}
                            {schedule.speakers?.map((speaker) => (
                              <div key={speaker.avatar} className="w-9 h-9">
                                <img
                                  className="rounded-full border border-accent shadow-sm"
                                  src={speaker.avatar}
                                  alt=""
                                />
                              </div>
                            ))}
                          </div>
                          <div className="w-full flex items-center justify-end">
                            <span>
                              {!schedule.is_serviceSession && <StarIcon />}
                            </span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
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

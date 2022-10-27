import React, { useState } from 'react'
import { NextPage } from 'next'
import SessionListCard from '../../components/sessions/SessionListCard'
// import { NoSessions } from '../../components/sessions/NoSessions'
import { SessionToggles } from '../../components/sessions/SessionToggles'
import { FilterSessions } from '../../components/sessions/FilterSessions'
import axios from '../../utils/axios'
import { SessionGridCard } from '../../components/sessions/SessionGridCard'
import { Schedule } from '../../types/types'
import { timeDay } from '../../utils/helpers'
// import { SessionsSkeleton } from '../../components/sessions/skeletons/SessionsSkeleton'
interface SessionProps {
  schedules: Schedule[]
}

const Sessions: NextPage<SessionProps> = ({ schedules }) => {
  const [showFilterSession, setShowFilterSession] = useState(false)
  const [isGridView, setIsGridView] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div className="w-full mt-16 mb-0">
        <section className="w-full bg-dark dark:bg-black-dark">
          <div className="l-container mt-8 md:mt-0 py-2 md:py-4">
            <div className="w-full flex justify-between flex-col md:flex-row">
              <h3 className="lowercase text-2xl md:text-3xl text-white dark:text-white-dark">
                Sessions
              </h3>
              <SessionToggles
                setShowFilterSession={setShowFilterSession}
                onChangeViewType={setIsGridView}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 mb-0">
          <div className="l-container flex flex-wrap">
            <div
              className="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-green-200 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start py-2 lg:py-0 sticky nav-bg nav-side z-0"
              style={{ top: '80px' }}
            >
              {Object.keys(schedules)?.map((key, i) => {
                return (
                  <div
                    className={`w-4/12 px-4 py-2 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none ${
                      activeTab === i
                        ? 'bg-secondary dark:bg-secondary-dark'
                        : 'bg-green-100 dark:bg-black-dark'
                    }`}
                    onClick={() => setActiveTab(i)}
                    aria-hidden="true"
                  >
                    <h4
                      className={`font-bold ${
                        activeTab === i ? 'text-white' : ''
                      } dark:text-white-dark`}
                    >
                      {timeDay(key)}{' '}
                      <small className="text-px-13 font-normal">
                        Day {i + 1}
                      </small>
                    </h4>
                  </div>
                )
              })}
            </div>
            <div className="w-full lg:w-11/12">
              <div className="px-0 md:px-6">
                {isGridView ? (
                  <SessionGridCard
                    schedules={schedules}
                    activeTab={activeTab}
                  />
                ) : (
                  <SessionListCard
                    schedules={schedules}
                    activeTab={activeTab}
                  />
                )}
              </div>
            </div>
          </div>
          {/* <SessionsSkeleton /> */}
          {/* <NoSessions /> */}
        </section>
      </div>
      {showFilterSession && (
        <FilterSessions setShowFilterSession={setShowFilterSession} />
      )}
    </>
  )
}

export default Sessions

export async function getServerSideProps() {
  const schedules = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/schedule?grouped=true`)
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })

  if (!schedules) {
    return {
      notFound: true,
    }
  }

  return { props: { schedules } }
}

import React from 'react'
import { NextPage } from 'next'
import { getCookie } from 'cookies-next'
import SessionListCard from '../../components/sessions/SessionListCard'
import { SessionToggles } from '../../components/sessions/SessionToggles'
import { FilterSessions } from '../../components/sessions/FilterSessions'
import axios from '../../utils/axios'
import { SessionGridCard } from '../../components/sessions/SessionGridCard'
import { Event, Schedule, Sponsor } from '../../types/types'
import { timeDay } from '../../utils/helpers'
import { SessionsSkeleton } from '../../components/sessions/skeletons/SessionsSkeleton'
import { useSession } from '../../hooks/useSession'
import SponsorsList from '../../components/home/SponsorsList'

interface SessionProps {
  schedules: Schedule[]
  event: Event
  sponsors: Sponsor[]
}

const Home2022: NextPage<SessionProps> = ({
  schedules: allSchedules,
  event,
  sponsors,
}) => {
  const {
    schedules,
    isGridView,
    setShowFilterSession,
    setActiveTab,
    changeViewType,
    setShowMysessions,
    showMySessions,
    loading,
    activeTab,
    showFilterSession,
    filterSession,
  } = useSession({ allSchedules })

  return (
    <>
      <div className="w-full mt-10 mb-0">
        <section className="w-full bg-dark dark:bg-black-dark">
          <div className="l-container mt-8 md:mt-0 py-2 md:py-4">
            <div className="w-full flex justify-between md:flex-row items-center mt-5 md:mt-6">
              <h3 className="lowercase text-2xl md:text-3xl text-white dark:text-white-dark">
                Sessions
              </h3>
              <SessionToggles
                setShowFilterSession={setShowFilterSession}
                onChangeViewType={changeViewType}
                isGridView={isGridView}
                onMySessions={setShowMysessions}
                isMySessions={showMySessions}
              />
            </div>
          </div>
        </section>

        <section className="w-full py-2 md:py-12 mb-0">
          {!loading ? (
            <div className="l-container flex flex-wrap">
              <div className="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-green-200 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start py-2 lg:py-0 sticky nav-bg nav-side z-0 top-[60px] md:top-[80px]">
                {Object.keys(schedules)?.map((key, i) => {
                  return (
                    <div
                      key={key}
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
                <div className="px-0 md:px-6 mt-3">
                  {isGridView ? (
                    <SessionGridCard
                      schedules={schedules}
                      activeTab={activeTab}
                      from="/past-events/2022"
                    />
                  ) : (
                    <SessionListCard
                      schedules={schedules}
                      activeTab={activeTab}
                      from="/past-events/2022"
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            <SessionsSkeleton />
          )}
        </section>
        <SponsorsList sponsors={sponsors} showSponsors />
      </div>
      {showFilterSession && (
        <FilterSessions
          setShowFilterSession={setShowFilterSession}
          filterSession={filterSession}
          event={event}
        />
      )}
    </>
  )
}

export default Home2022

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getServerSideProps({ req, res }: { req: any; res: any }) {
  axios.defaults.headers.common.Authorization = `Bearer ${getCookie('token', {
    req,
    res,
  })}`
  const schedules = await axios
    .get(
      `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2022}/schedule?grouped=true`
    )
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })

  const event = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2022}`)
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })

  const sponsors = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2022}/sponsors`)
    .then((response) => {
      return response.data.data
    })

  if (!schedules) {
    return {
      notFound: true,
    }
  }

  return { props: { schedules, event, sponsors } }
}

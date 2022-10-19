import { useState } from 'react'
import { NextPage } from 'next'
import SessionListCard from '../../components/sessions/SessionListCard'
// import { NoSessions } from '../../components/sessions/NoSessions'
import { SessionToggles } from '../../components/sessions/SessionToggles'
import { FilterSessions } from '../../components/sessions/FilterSessions'
import axios from '../../utils/axios'
import { ScheduleInterface } from '../../types/types'
// import { SessionGridCard } from '../../components/sessions/SessionGridCard'
// import { SessionsSkeleton } from '../../components/sessions/skeletons/SessionsSkeleton'
interface SessionProps {
  schedules: ScheduleInterface[]
}

const Sessions: NextPage<SessionProps> = ({ schedules }) => {
  const [showFilterSession, setShowFilterSession] = useState(false)
  return (
    <>
      <div className="w-full mt-16 mb-0">
        <section className="w-full bg-dark dark:bg-black-dark">
          <div className="l-container mt-8 md:mt-0 py-2 md:py-4">
            <div className="w-full flex justify-between flex-col md:flex-row">
              <h3 className="lowercase text-2xl md:text-3xl text-white dark:text-white-dark">
                Sessions
              </h3>
              <SessionToggles setShowFilterSession={setShowFilterSession} />
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 mb-0">
          <div className="l-container flex flex-wrap">
            <div
              className="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-green-200 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start py-2 lg:py-0 sticky nav-bg nav-side z-0"
              style={{ top: '80px' }}
            >
              <div className="w-4/12 px-4 py-2 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none bg-secondary dark:bg-secondary-dark">
                <h4 className="font-bold text-white dark:text-white-dark">
                  06 <small className="text-px-13 font-normal">Day 1</small>
                </h4>
              </div>
              <div className="w-4/12 px-4 py-3 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none bg-green-100 dark:bg-black-dark">
                <h4 className="font-bold dark:text-white-dark">
                  07 <small className="text-px-13 font-normal">Day 2</small>
                </h4>
              </div>
              <div className="w-4/12 px-4 py-3 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none bg-green-100 dark:bg-black-dark">
                <h4 className="font-bold dark:text-white-dark">
                  08 <small className="text-px-13 font-normal">Day 3</small>
                </h4>
              </div>
            </div>
            <div className="w-full lg:w-11/12">
              <div className="px-0 md:px-6">
                {/* <SessionGridCard schedules={schedules} /> */}
                <SessionListCard schedules={schedules} />
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
  const schedules = async () => {
    try {
      const response = await axios.get(
        `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/schedule?grouped=true`
      )

      return response.data
    } catch (error) {
      console.log(error)
    }
  }
  const T = await schedules()

  return { props: { schedules: T.data } }
}

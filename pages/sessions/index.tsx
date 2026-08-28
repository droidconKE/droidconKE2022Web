import React from 'react'
import { NextPage } from 'next'
import SessionListCard from '../../components/sessions/SessionListCard'
import { SessionToggles } from '../../components/sessions/SessionToggles'
import { FilterSessions } from '../../components/sessions/FilterSessions'
import axios from '../../utils/axios'
import { SessionGridCard } from '../../components/sessions/SessionGridCard'
import { Event, Schedule } from '../../types/types'
import { timeDay } from '../../utils/helpers'
import { SessionsSkeleton } from '../../components/sessions/skeletons/SessionsSkeleton'
import { useSession } from '../../hooks/useSession'

interface SessionProps {
  schedules: Schedule[]
  event: Event
}

const Sessions: NextPage<SessionProps> = ({
  schedules: allSchedules,
  event,
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

  const eventVenue = event
    ? [event.venue_name, event.venue_address].filter(Boolean).join(', ')
    : undefined

  return (
    <>
      <div className="s-container my-10 md:my-16">
        {/* Header card */}
        <section className="w-full bg-primary rounded-4xl md:rounded-5xl px-6 py-8 md:px-12 md:py-10 relative overflow-hidden">
          <div className="flex items-center text-white/80 text-sm md:text-base font-medium mb-3">
            <div className="w-6 h-px bg-white/80 mr-3" />
            agenda
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-accent font-display text-5xl md:text-7xl leading-none">
              Sessions
            </h1>
            <SessionToggles
              setShowFilterSession={setShowFilterSession}
              onChangeViewType={changeViewType}
              isGridView={isGridView}
              onMySessions={setShowMysessions}
              isMySessions={showMySessions}
            />
          </div>
        </section>

        {/* Day pills */}
        <div className="mt-8 md:mt-10 flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {Object.keys(schedules)?.map((key, i) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(i)}
              className={`shrink-0 rounded-full px-6 py-3 text-left transition-colors ${
                activeTab === i
                  ? 'bg-primary text-white'
                  : 'bg-blue-50 dark:bg-darker-dark text-black dark:text-white-dark hover:bg-blue-100 dark:hover:bg-white/5'
              }`}
            >
              <span className="font-bold block leading-tight">
                {timeDay(key)}
              </span>
              <span className="text-px-13 font-normal opacity-70">
                Day {i + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Sessions */}
        <section className="mt-8 md:mt-10">
          {!loading && isGridView && (
            <SessionGridCard
              schedules={schedules}
              activeTab={activeTab}
              showStar
              eventVenue={eventVenue}
            />
          )}
          {!loading && !isGridView && (
            <SessionListCard
              schedules={schedules}
              activeTab={activeTab}
              showStar
              eventVenue={eventVenue}
            />
          )}
          {loading && <SessionsSkeleton />}
        </section>
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

export default Sessions

export async function getServerSideProps() {
  const [schedules, event] = await Promise.all([
    axios
      .get(
        `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/schedule?grouped=true`
      )
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      }),
    axios
      .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}`)
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      }),
  ])

  if (!schedules) {
    return {
      notFound: true,
    }
  }

  return { props: { schedules, event } }
}

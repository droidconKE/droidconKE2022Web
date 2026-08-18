import React from 'react'
import { NextPage } from 'next'
import SessionListCard from '../../components/sessions/SessionListCard'
import { SessionToggles } from '../../components/sessions/SessionToggles'
import { FilterSessions } from '../../components/sessions/FilterSessions'
import axios from '../../utils/axios'
import { SessionGridCard } from '../../components/sessions/SessionGridCard'
import { Event, Schedule, Session, Speaker, Sponsor } from '../../types/types'
import { timeDay } from '../../utils/helpers'
import { SessionsSkeleton } from '../../components/sessions/skeletons/SessionsSkeleton'
import { useSession } from '../../hooks/useSession'
import SponsorsList from '../../components/home/SponsorsList'
import { SpeakersList } from '../../components/speakers/SpeakersList'

interface SessionProps {
  schedules: Schedule[]
  event: Event
  sponsors: Sponsor[]
  speakers: Speaker[]
  sessions: Session[]
}

const Home2024: NextPage<SessionProps> = ({
  schedules: allSchedules,
  event,
  sponsors,
  sessions,
  speakers,
}) => {
  const {
    schedules,
    isGridView,
    setShowFilterSession,
    setActiveTab,
    changeViewType,
    loading,
    activeTab,
    showFilterSession,
    filterSession,
  } = useSession({ allSchedules })

  return (
    <>
      <div className="s-container my-10 md:my-16">
        {/* Header card */}
        <section className="w-full bg-primary rounded-4xl md:rounded-5xl px-6 py-8 md:px-12 md:py-10">
          <div className="flex items-center text-white/80 text-sm md:text-base font-medium mb-3">
            <div className="w-6 h-px bg-white/80 mr-3" />
            droidconKE 2025
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-accent font-display text-5xl md:text-7xl leading-none">
              Sessions
            </h1>
            <SessionToggles
              setShowFilterSession={setShowFilterSession}
              onChangeViewType={changeViewType}
              isGridView={isGridView}
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
              from="/past-events/2025"
              year={25}
            />
          )}
          {!loading && !isGridView && (
            <SessionListCard
              schedules={schedules}
              activeTab={activeTab}
              from="/past-events/2025"
            />
          )}
          {loading && <SessionsSkeleton />}
        </section>
        {/* Speakers */}
        <div className="mt-12 md:mt-16">
          <SpeakersList sessions={sessions} speakers={speakers} />
        </div>
      </div>
      <SponsorsList sponsors={sponsors} showSponsors year={25} />
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

export default Home2024

export async function getServerSideProps() {
  const schedules = await axios
    .get(
      `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2025}/schedule?grouped=true`
    )
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })

  const event = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2025}`)
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })

  const sponsors = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2025}/sponsors`)
    .then((response) => {
      return response.data.data
    })

  const speakers = await axios
    .get(
      `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2025}/speakers?per_page=100`
    )
    .then((response) => {
      return response.data.data
    })

  const sessions = await axios
    .get(
      `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG_2025}/sessions?per_page=100`
    )
    .then((response) => {
      return response.data.data
    })

  if (!schedules) {
    return {
      notFound: true,
    }
  }

  return { props: { schedules, event, sponsors, speakers, sessions } }
}

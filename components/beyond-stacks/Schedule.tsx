import { useEffect, useState } from 'react'
import type { Schedule as ScheduleType } from '../../types/types'
import { ACTIVE_VIEW } from '../../hooks/useSession'
import { eatCalendarDate } from '../../utils/calendar'
import {
  agendaTabForDate,
  sessionCountLabel,
  timeDay,
} from '../../utils/helpers'
import { SessionGridCard } from '../sessions/SessionGridCard'
import SessionListCard from '../sessions/SessionListCard'
import { SectionTitle } from './SectionHeader'

type ScheduleProps = {
  schedules: ScheduleType
  eventSlug: string
  // eslint-disable-next-line react/require-default-props
  venue?: string
  // eslint-disable-next-line react/require-default-props
  feedbackOpen?: boolean
}

const toggleClass = (active: boolean) =>
  `fa text-2xl ${
    active ? 'text-primary dark:text-accent' : 'text-light dark:text-light-dark'
  }`

// The track's own programme, in the cards and day pills the agenda uses. The
// view is the visitor's choice on /sessions too, so it reads and writes the
// same key.
export const Schedule = ({
  schedules,
  eventSlug,
  venue,
  feedbackOpen = true,
}: ScheduleProps) => {
  const [activeTab, setActiveTab] = useState(0)
  const [isGridView, setIsGridView] = useState(true)

  useEffect(() => {
    if (localStorage.getItem(ACTIVE_VIEW) === 'list') setIsGridView(false)
  }, [])

  // Open on the day being lived in Nairobi, as the agenda does.
  useEffect(() => {
    const index = agendaTabForDate(Object.keys(schedules), eatCalendarDate())
    if (index !== 0) setActiveTab(index)
  }, [schedules])

  const changeView = (grid: boolean) => {
    setIsGridView(grid)
    localStorage.setItem(ACTIVE_VIEW, grid ? 'grid' : 'list')
  }

  return (
    <section
      aria-labelledby="schedule-title"
      className="s-container my-12 sm:my-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
        <SectionTitle id="schedule-title">Sessions</SectionTitle>
        <div
          role="group"
          aria-label="Schedule view"
          className="flex items-center gap-6"
        >
          <button
            type="button"
            aria-label="Grid view"
            aria-pressed={isGridView}
            onClick={() => changeView(true)}
          >
            <i
              aria-hidden="true"
              className={`fa-th ${toggleClass(isGridView)}`}
            />
          </button>
          <button
            type="button"
            aria-label="List view"
            aria-pressed={!isGridView}
            onClick={() => changeView(false)}
          >
            <i
              aria-hidden="true"
              className={`fa-th-list ${toggleClass(!isGridView)}`}
            />
          </button>
        </div>
      </div>

      <div className="flex gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {Object.keys(schedules).map((key, i) => (
          <button
            key={key}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`shrink-0 rounded-full px-6 py-3 flex items-center gap-2 transition-colors ${
              activeTab === i
                ? 'bg-primary text-white'
                : 'bg-blue-50 dark:bg-darker-dark text-black dark:text-white-dark hover:bg-blue-100 dark:hover:bg-white/5'
            }`}
          >
            <span className="font-bold leading-none">{timeDay(key)}</span>
            <span className="font-normal leading-none opacity-70">
              Day {i + 1}
            </span>
            <span
              aria-label={sessionCountLabel(schedules[key]?.length ?? 0)}
              className={`rounded-full px-2 py-px text-xs font-semibold tabular-nums ${
                activeTab === i
                  ? 'bg-white/20 text-white'
                  : 'bg-primary/10 text-primary dark:bg-white/10 dark:text-white-dark'
              }`}
            >
              {schedules[key]?.length ?? 0}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-8 md:mt-10">
        {isGridView ? (
          <SessionGridCard
            schedules={schedules}
            activeTab={activeTab}
            from="/beyond-stacks"
            year={26}
            showStar
            eventVenue={venue}
            eventSlug={eventSlug}
            feedbackOpen={feedbackOpen}
          />
        ) : (
          <SessionListCard
            schedules={schedules}
            activeTab={activeTab}
            from="/beyond-stacks"
            showStar
            eventVenue={venue}
            eventSlug={eventSlug}
            feedbackOpen={feedbackOpen}
          />
        )}
      </div>
    </section>
  )
}

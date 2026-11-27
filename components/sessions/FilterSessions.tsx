import { useState, MouseEvent, useEffect, useMemo } from 'react'
import type { NextPage } from 'next'
import { filterOptions, groupBy3, objIsEmpty } from '../../utils/helpers'
import { Event, FilterInterface, Schedule, Session } from '../../types/types'

interface FilterSessionProps {
  setShowFilterSession: (_showFilterSession: boolean) => void
  filterSession: (_filter: FilterInterface) => void
  event: Event | null
  schedules: Schedule
}

export const FilterSessions: NextPage<FilterSessionProps> = ({
  setShowFilterSession,
  filterSession,
  event,
  schedules,
}) => {
  const [filter, setFilter] = useState<FilterInterface>({})
  const [isOpen, setIsOpen] = useState(false)

  // Levels, rooms and types are read off the sessions themselves; the event's
  // own lists only order them. Its call for speakers labels drift from the
  // sessions' (2026 offers Regular; its talks are Session), and an event can
  // have none at all, or fail to load.
  const [sessions3, sessions4, sessions5] = useMemo(() => {
    const sessions = Object.values(schedules).reduce<Session[]>(
      (all, day) => all.concat(day),
      []
    )
    const settings = event?.cfs?.cfs_settings
    return [
      filterOptions(
        sessions.map((s) => s.session_level),
        settings?.session_levels
      ),
      filterOptions(
        sessions.reduce<string[]>(
          (all, s) => all.concat(s.rooms.map((r) => r.title)),
          []
        ),
        event?.rooms?.map((r) => r.title)
      ),
      filterOptions(
        sessions.map((s) => s.session_format),
        settings?.session_formats
      ),
    ]
  }, [schedules, event])

  const selectedClass = 'bg-accent text-black'

  const onClickFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const { name, value } = e.currentTarget
    setFilter((prev: FilterInterface) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    filterSession(filter)
  }, [filter, filterSession])

  useEffect(() => {
    setIsOpen(true)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowFilterSession(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setShowFilterSession])

  return (
    <>
      <div
        className="fixed inset-0 z-20 bg-transparent"
        onClick={() => setShowFilterSession(false)}
        aria-hidden="true"
      />
      <div
        className={`fixed right-0 top-0 bg-black dark:bg-black-dark z-30 text-white w-10/12 lg:w-1/4 md:w-1/3 h-screen rounded-l-4xl overflow-y-auto transition-transform ease-in-out duration-300 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="bg-black dark:bg-black-dark relative">
          <div className="py-16 px-4 md:px-10">
            <div className="flex justify-between items-center">
              <div className="text-secondary text-base">
                <i className="fa fa-filter text-xl" /> &nbsp; Filter
                &nbsp;&nbsp;
                {!objIsEmpty(filter) && (
                  <span
                    className="text-accent underline text-xs cursor-pointer"
                    onClick={() => setFilter({})}
                    aria-hidden
                  >
                    Clear Filter
                  </span>
                )}
              </div>
              <button
                type="button"
                aria-label="Close filters"
                className="text-light hover:text-white transition-colors"
                onClick={() => setShowFilterSession(false)}
              >
                <i className="fa fa-times text-xl" />
              </button>
            </div>
            <div className="mt-10">
              <span className="block mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
                Level
              </span>
              {groupBy3(sessions3).map((sessions: string[]) => (
                <div className="flex pb-1 flex-wrap" key={sessions[0]}>
                  <button
                    name="level"
                    type="button"
                    value={sessions[0]}
                    onClick={onClickFilter}
                    className={`${
                      filter?.level === sessions[0] && selectedClass
                    } border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                  >
                    {sessions[0]}
                  </button>
                  {sessions[1] && (
                    <button
                      name="level"
                      type="button"
                      value={sessions[1]}
                      onClick={onClickFilter}
                      className={`${
                        filter?.level === sessions[1] && selectedClass
                      } border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                    >
                      {sessions[1]}
                    </button>
                  )}
                  {sessions[2] && (
                    <button
                      name="level"
                      type="button"
                      value={sessions[2]}
                      onClick={(e) => onClickFilter(e)}
                      className={`${
                        filter?.level === sessions[2] && selectedClass
                      } border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                    >
                      {sessions[2]}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span className="block mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
                Rooms
              </span>
              {groupBy3(sessions4).map((sessions: string[]) => (
                <div
                  key={sessions[0]}
                  className={`flex pb-1 flex-wrap ${
                    (sessions.length < 3 &&
                      sessions.length % 3 === 1 &&
                      'w-1/3') ||
                    (sessions.length % 3 === 2 && 'w-2/3')
                  }`}
                >
                  <button
                    name="room"
                    type="button"
                    value={sessions[0]}
                    onClick={(e) => onClickFilter(e)}
                    className={`${
                      filter?.room === sessions[0] && selectedClass
                    } border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                  >
                    {sessions[0]}
                  </button>
                  {sessions[1] && (
                    <button
                      name="room"
                      type="button"
                      value={sessions[1]}
                      onClick={(e) => onClickFilter(e)}
                      className={`${
                        filter?.room === sessions[1] && selectedClass
                      } border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                    >
                      {sessions[1]}
                    </button>
                  )}
                  {sessions[2] && (
                    <button
                      type="button"
                      name="room"
                      value={sessions[2]}
                      onClick={(e) => onClickFilter(e)}
                      className={`${
                        filter?.room === sessions[2] && selectedClass
                      } border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                    >
                      {sessions[2]}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <span className="block mb-3 text-sm font-semibold uppercase tracking-wide text-white/60">
                Session Types
              </span>
              {groupBy3(sessions5).map((sessions: string[]) => (
                <div
                  key={sessions[0]}
                  className={`flex pb-1 flex-wrap ${
                    (sessions.length < 3 &&
                      sessions.length % 3 === 1 &&
                      'w-1/3') ||
                    (sessions.length % 3 === 2 && 'w-2/3')
                  }`}
                >
                  <button
                    name="format"
                    type="button"
                    value={sessions[0]}
                    onClick={(e) => onClickFilter(e)}
                    className={`${
                      filter?.format === sessions[0] && selectedClass
                    } border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                  >
                    {sessions[0]}
                  </button>
                  {sessions[1] && (
                    <button
                      name="format"
                      type="button"
                      value={sessions[1]}
                      onClick={(e) => onClickFilter(e)}
                      className={`${
                        filter?.format === sessions[1] && selectedClass
                      } border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                    >
                      {sessions[1]}
                    </button>
                  )}
                  {sessions[2] && (
                    <button
                      type="button"
                      name="format"
                      value={sessions[2]}
                      onClick={(e) => onClickFilter(e)}
                      className={`${
                        filter?.format === sessions[2] && selectedClass
                      } border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black`}
                    >
                      {sessions[2]}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="mt-10">
              <div className="flex pb-1">
                <button className="btn-primary w-full uppercase" type="button">
                  filter
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

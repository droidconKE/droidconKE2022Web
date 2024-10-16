import { useState, MouseEvent, useEffect } from 'react'
import type { NextPage } from 'next'
import { groupBy3, objIsEmpty } from '../../utils/helpers'
import { Event, FilterInterface } from '../../types/types'

interface FilterSessionProps {
  setShowFilterSession: (showFilterSession: boolean) => void
  filterSession: (filter: FilterInterface) => void
  event: Event
}

export const FilterSessions: NextPage<FilterSessionProps> = ({
  setShowFilterSession,
  filterSession,
  event,
}) => {
  const [filter, setFilter] = useState<FilterInterface>({})

  const [sessions3] = useState(event.cfs.cfs_settings.session_levels)
  const [sessions4] = useState(event.rooms.map((r) => r.title))
  const [sessions5] = useState(event.cfs.cfs_settings.session_formats)

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

  return (
    <>
      {/* <div
        className="bg-transparent h-full top-0 left-0 z-10 w-1/6 sm:w-3/4 absolute"
        onClick={() => setShowFilterSession(false)}
        aria-hidden="true"
      /> */}
      <div className="fixed right-0 top-0 w-25 bg-black dark:bg-black-dark z-20 text-white w-10/12 lg:w-1/4 md:w-1/3 h-screen transition-all ease-in-out duration-1000 transform translate-x-0">
        <div className="bg-black dark:bg-black-dark relative">
          <div className="py-16 px-4 md:px-10">
            <div className="flex justify-between">
              <div className="text-secondary text-base">
                <i className="fa fa-filter text-xl" /> &nbsp; Filter
                &nbsp;&nbsp;
                {!objIsEmpty(filter) && (
                  <span
                    className="purple text-xs cursor-pointer"
                    onClick={() => setFilter({})}
                    aria-hidden
                  >
                    Clear Filter
                  </span>
                )}
              </div>
              <button
                type="button"
                className="text-base hover:cursor-pointer text-light uppercase"
                onClick={() => setShowFilterSession(false)}
              >
                Cancel
              </button>
            </div>
            <div className="mt-10">
              <span className="my-4">Level</span>
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
              <span className="my-4">Rooms</span>
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
              <span className="my-4">Session Types</span>
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

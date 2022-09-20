import { useState } from 'react'
import type { NextPage } from 'next'
import { groupBy3 } from '../../utils/helpers'

interface FilterSessionProps {
  setShowFilterSession: (showFilterSession: boolean) => void
}

export const FilterSessions: NextPage<FilterSessionProps> = ({ setShowFilterSession }) => {
  const [filter, setFilter] = useState({})
  const [sessions3] = useState(['Beginner', 'Intermediate', 'Expert'])
  const [sessions6] = useState(['UI/UX Design', 'Backend', 'APIS', 'UI/UX Design 1', 'Backend 2', 'APIS 3'])
  const [sessions4] = useState(['Room 1', 'Room 2', 'Room 3', 'Room 4'])
  const [sessions5] = useState(['Beginner', 'Intermediate', 'Expert', 'Beginner 1', 'Intermediate 2'])

  const onClickFilter = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFilter(filter => ({
      ...filter,
      [name]: value
    }))
  }

  return (
    <div className="fixed right-0 top-0 w-25 bg-black z-20 text-white lg:w-1/3 md:w-2/3 h-screen transition-all ease-in-out duration-1000 transform translate-x-0">
      <div className="bg-black relative">
        <div className="py-16 px-10">
          <div className="flex justify-between">
            <div className="text-secondary text-base">
              <i className="fa fa-filter text-xl" /> &nbsp; Filter
            </div>
            <div className="text-base hover:cursor-pointer text-light uppercase" onClick={() => setShowFilterSession(false)}>Cancel</div>
          </div>
          <div className="mt-10">
            {groupBy3(sessions3).map(sessions => (
              <div className="flex pb-1">
                <button
                  name={'session3'}
                  value={sessions[0]}
                  onClick={onClickFilter}
                  className={(filter['session3'] === sessions[0] && "bg-accent text-black") + " border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                >
                  {sessions[0]}
                </button>
                <button
                  name={'session3'}
                  value={sessions[1]}
                  onClick={onClickFilter}
                  className={(filter['session3'] === sessions[1] && "bg-accent text-black") + " border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                >
                  {sessions[1]}
                </button>
                <button
                  name={'session3'}
                  value={sessions[2]}
                  onClick={onClickFilter}
                  className={(filter['session3'] === sessions[2] && "bg-accent text-black") + " border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                >
                  {sessions[2]}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10">
            {groupBy3(sessions6).map(sessions => (
              <div className="flex pb-1">
                <button
                  name={'session6'}
                  value={sessions[0]}
                  onClick={onClickFilter}
                  className={(filter['session6'] === sessions[0] && "bg-accent text-black") + " border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                >
                  {sessions[0]}
                </button>
                {sessions[1] && (
                  <button
                    name={'session6'}
                    value={sessions[1]}
                    onClick={onClickFilter}
                    className={(filter['session6'] === sessions[1] && "bg-accent text-black") + " border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                  >
                    {sessions[1]}
                  </button>
                )}
                {sessions[2] && (
                  <button
                    name={'session6'}
                    value={sessions[2]}
                    onClick={onClickFilter}
                    className={(filter['session6'] === sessions[2] && "bg-accent text-black") + " border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                  >
                    {sessions[2]}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            {groupBy3(sessions4).map(sessions => (
              <div className={"flex pb-1 " + (sessions.length < 3 && (sessions.length % 3 === 1 && 'w-1/3') || (sessions.length % 3 === 2 && 'w-2/3'))}>
                <button
                  name={'session4'}
                  value={sessions[0]}
                  onClick={onClickFilter}
                  className={(filter['session4'] === sessions[0] && "bg-accent text-black") + " border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                >
                  {sessions[0]}
                </button>
                {sessions[1] && (
                  <button
                    name={'session4'}
                    value={sessions[1]}
                    onClick={onClickFilter}
                    className={(filter['session4'] === sessions[1] && "bg-accent text-black") + " border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                  >
                    {sessions[1]}
                  </button>
                )}
                {sessions[2] && (
                  <button
                    name={'session4'}
                    value={sessions[2]}
                    onClick={onClickFilter}
                    className={(filter['session4'] === sessions[2] && "bg-accent text-black") + " border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                  >
                    {sessions[2]}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            {groupBy3(sessions5).map(sessions => (
              <div className={"flex pb-1 " + (sessions.length < 3 && (sessions.length % 3 === 1 && 'w-1/3') || (sessions.length % 3 === 2 && 'w-2/3'))}>
                <button
                  name={'session5'}
                  value={sessions[0]}
                  onClick={onClickFilter}
                  className={(filter['session5'] === sessions[0] && "bg-accent text-black") + " border rounded-l-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                >
                  {sessions[0]}
                </button>
                {sessions[1] && (
                  <button
                    name={'session5'}
                    value={sessions[1]}
                    onClick={onClickFilter}
                    className={(filter['session5'] === sessions[1] && "bg-accent text-black") + " border border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                  >
                    {sessions[1]}
                  </button>
                )}
                {sessions[2] && (
                  <button
                    name={'session5'}
                    value={sessions[2]}
                    onClick={onClickFilter}
                    className={(filter['session5'] === sessions[2] && "bg-accent text-black") + " border rounded-r-md border-1 border-accent px-3 py-1 text-xs flex-1 text-center hover:cursor-pointer hover:bg-accent hover:text-black"}
                  >
                    {sessions[2]}
                  </button>
                )}
              </div>
            ))}
          </div>


          <div className="mt-10">
            <div className="flex pb-1">
              <button className="w-full rounded-md py-2 bg-primary font-bold">FILTER</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
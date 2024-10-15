import type { NextPage } from 'next'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

interface SessionPageProps {
  setShowFilterSession: (showFilterSession: boolean) => void
  onChangeViewType: (viewType: boolean) => void
  onMySessions: (val: boolean) => void
  isGridView: boolean
  isMySessions: boolean
}

export const SessionToggles: NextPage<SessionPageProps> = ({
  setShowFilterSession,
  onChangeViewType,
  isGridView,
  onMySessions,
  isMySessions,
}) => {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <div className="space-x-4 md:space-x-8 w-full md:w-1/3 flex justify-end items-center">
      <button type="button" onClick={() => onChangeViewType(true)}>
        <i
          className={`fa fa-th text-2xl ${
            !isGridView ? 'text-white dark:text-white-dark' : 'text-secondary'
          }`}
        />
      </button>
      <button type="button" onClick={() => onChangeViewType(false)}>
        <i
          className={`fa fa-th-list text-2xl ${
            isGridView ? 'text-white dark:text-white-dark' : 'text-secondary'
          }`}
        />
      </button>
      {isAuthenticated && (
        <div className="sm:px-5">
          <button
            type="button"
            className="flex flex-col sm:flex-row items-center cursor-pointer text-xs sm:text-base mt-1 sm:mt-0"
            onClick={() => onMySessions(!isMySessions)}
          >
            <div className="relative">
              <input
                id="toogleA"
                checked={isMySessions}
                type="checkbox"
                className="hidden"
                onChange={() => null}
              />
              <div className="toggle__line h-3 w-8 sm:h-4 bg-white rounded-full shadow-inner" />
              <div className="toggle__dot absolute h-4 w-4 sm:w-5 sm:h-5 bg-secondary dark:bg-secondary-dark rounded-full shadow inset-y-0 left-0" />
            </div>
            <div className="ml-3 text-white dark:text-white-dark font-sm mt-2 sm:mt-0">
              My Sessions
            </div>
          </button>
          <style jsx>
            {`
              .toggle__dot {
                top: -0.25rem;
                left: -0.25rem;
                transition: all 0.3s ease-in-out;
              }
              .toggle__line {
                margin-top: -2px;
              }

              input:checked ~ .toggle__dot {
                transform: translateX(100%);
              }
            `}
          </style>
        </div>
      )}
      <button
        type="button"
        className="ml-3 text-white dark:text-white-dark font-sm flex flex-col items-center justify-center sm:flex-row text-xs sm:text-base -mt-1 sm:mt-0"
        onClick={() => setShowFilterSession(true)}
      >
        <i className="fa fa-filter text-xl" /> <span>Filter</span>
      </button>
    </div>
  )
}

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
    <div className="space-x-5 md:space-x-8 w-full md:w-1/3 flex justify-end items-center">
      <button type="button" onClick={() => onChangeViewType(false)}>
        <i
          className={`fa fa-th-list text-2xl ${
            isGridView ? 'text-white dark:text-white-dark' : 'text-secondary'
          }`}
        />
      </button>
      <button type="button" onClick={() => onChangeViewType(true)}>
        <i
          className={`fa fa-th text-2xl ${
            !isGridView ? 'text-white dark:text-white-dark' : 'text-secondary'
          }`}
        />
      </button>
      {isAuthenticated && (
        <div className="px-5">
          <button
            type="button"
            className="flex items-center cursor-pointer"
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
              <div className="toggle__line w-8 h-4 bg-white rounded-full shadow-inner" />
              <div className="toggle__dot absolute w-5 h-5 bg-secondary dark:bg-secondary-dark rounded-full shadow inset-y-0 left-0" />
            </div>
            <div className="ml-3 text-white dark:text-white-dark font-sm">
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
        className="ml-3 text-white dark:text-white-dark font-sm"
        onClick={() => setShowFilterSession(true)}
      >
        Filter &nbsp; <i className="fa fa-filter text-xl" />
      </button>
    </div>
  )
}

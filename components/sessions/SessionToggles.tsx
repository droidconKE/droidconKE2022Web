import type { NextPage } from 'next'
import Link from 'next/link'

interface SessionPageProps {
  setShowFilterSession: (_showFilterSession: boolean) => void
  onChangeViewType: (_viewType: boolean) => void
  isGridView: boolean
  onMySessions?: (_val: boolean) => void
  isMySessions?: boolean
  reportLink?: string
}

export const SessionToggles: NextPage<SessionPageProps> = ({
  setShowFilterSession,
  onChangeViewType,
  isGridView,
  onMySessions,
  isMySessions,
  reportLink,
}) => {
  return (
    <div className="space-x-4 md:space-x-8 w-full md:w-1/3 flex justify-end items-center">
      {reportLink && (
        <Link
          className="btn-secondary"
          href={reportLink}
          target="_blank"
          rel="noreferrer"
        >
          View Annual Report
        </Link>
      )}
      <button
        type="button"
        title="Grid View"
        onClick={() => onChangeViewType(true)}
      >
        <i
          className={`fa fa-th text-2xl ${
            !isGridView ? 'text-white dark:text-white-dark' : 'text-secondary'
          }`}
        />
      </button>
      <button
        type="button"
        title="List View"
        onClick={() => onChangeViewType(false)}
      >
        <i
          className={`fa fa-th-list text-2xl ${
            isGridView ? 'text-white dark:text-white-dark' : 'text-secondary'
          }`}
        />
      </button>
      {onMySessions && (
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
              <div className="ms-toggle__line h-3 w-8 sm:h-4 bg-white rounded-full shadow-inner" />
              <div className="ms-toggle__dot absolute h-4 w-4 sm:w-5 sm:h-5 bg-secondary dark:bg-secondary-dark rounded-full shadow inset-y-0 left-0" />
            </div>
            <div className="ml-3 text-white dark:text-white-dark font-sm mt-2 sm:mt-0">
              My Sessions
            </div>
          </button>
          <style>
            {`
              .ms-toggle__dot {
                top: -0.25rem;
                left: -0.25rem;
                transition: all 0.3s ease-in-out;
              }
              .ms-toggle__line {
                margin-top: -2px;
              }

              input:checked ~ .ms-toggle__dot {
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

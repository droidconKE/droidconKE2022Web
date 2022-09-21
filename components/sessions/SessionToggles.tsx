import type { NextPage } from 'next'

interface SessionPageProps {
  setShowFilterSession: (showFilterSession: boolean) => void
}

export const SessionToggles: NextPage<SessionPageProps> = ({
  setShowFilterSession,
}) => {
  return (
    <div className="space-x-5 md:space-x-8 w-full md:w-1/3 flex justify-end items-center mt-3 md:mt-0">
      <button type="button">
        <i className="fa fa-th-list text-2xl text-white dark:text-white-dark" />
      </button>
      <button type="button">
        <i className="fa fa-th text-2xl text-white dark:text-white-dark" />
      </button>
      <div className="px-5">
        <button type="button" className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              id="toogleA"
              checked={false}
              type="checkbox"
              className="hidden"
              onChange={() => null}
            />
            <div className="toggle__line w-10 h-4 bg-white rounded-full shadow-inner" />
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

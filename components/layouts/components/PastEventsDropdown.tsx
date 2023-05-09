import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useComponentVisible from '../../../hooks/useComponentVisible'

/* eslint-disable jsx-a11y/anchor-is-valid */
export const PastEventsDropdown = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true)
  const router = useRouter()

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 px-3"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setShowMenu(!showMenu)
            setIsComponentVisible(true)
          }}
        >
          <span
            className={
              // eslint-disable-next-line sonarjs/no-duplicate-string
              router.pathname.includes('past-events')
                ? 'active-link -ml-3'
                : 'link -ml-3'
            }
          >
            Past Events
          </span>
          <svg
            className={`-ml-5 mt-2 h-5 w-5  ${
              router.pathname.includes('past-events')
                ? 'text-primary dark:text-accent'
                : 'text-black dark:text-white'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
      {showMenu && isComponentVisible && (
        <div
          className="md:absolute md:right-0 z-10 mt-2 mb-2 ml-2 md:-mt-1 w-40 origin-top-right rounded-md bg-lighter dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
          ref={ref}
        >
          <div className="py-1 text-sm" role="none">
            <Link href="/past-events/2022">
              <a
                className={
                  router.pathname === '/past-events/2022'
                    ? 'active-link'
                    : 'link'
                }
              >
                droidconKe 2022
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { ToggleTheme } from './ToggleTheme'
import { PastEventsDropdown } from './PastEventsDropdown'
import { TICKETS_LINK } from '../../../constant/constants'

export const NavBar = () => {
  const { isDarkTheme, isEventReady } = useContext(ThemeContext)

  const [navVisible, setNavVisible] = useState(false)
  const router = useRouter()

  const toggleNav = () => {
    setNavVisible((prev) => !prev)
  }

  const showSessions = isEventReady
  const showSpeakers = isEventReady

  useEffect(() => {
    Router.events.on('beforeHistoryChange', () => {
      setNavVisible(false)
    })
  }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap lg:flex-nowrap nav-bg px-2 py-6 md:py-3 md:px-5 fixed w-full z-10 top-0 border-b border-gray-200 dark:border-gray-600 mb-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6 xl:pl-24">
        <Link href="/">
          {!isDarkTheme ? (
            <img
              className="w-[200px] xl:w-[250px]"
              src="/images/new-design/logo-light.png"
              alt="logo"
            />
          ) : (
            <img
              className="w-[200px] md:w-[250px]"
              src="/images/new-design/logo-dark.png"
              alt="logo dark"
            />
          )}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-primary dark:text-secondary-dark border-primary dark:border-secondary-dark"
          onClick={() => toggleNav()}
          aria-label="menu-button"
        >
          <svg
            className="fill-primary dark:fill-secondary-dark h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ToggleTheme />
      <div
        id="nav-content"
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 lg:pr-24 md:px-5  ${
          navVisible ? '' : 'hidden'
        }`}
      >
        <div
          className={`w-full lg:w-auto flex-grow lg:flex ${
            navVisible ? 'bg-white dark:bg-dark' : ''
          }`}
        >
          <ul className="list-reset lg:flex justify-end text-base flex-1 items-center space-y-2 md:space-y-0">
            <li className="mr-3 black text-xl">
              <Link
                href="/"
                className={router.pathname === '/' ? 'active-link' : 'link'}
              >
                Home
              </Link>
            </li>
            {showSessions && (
              <li className="mr-3 text-xl">
                <Link
                  href="/sessions"
                  className={
                    router.pathname === '/sessions' ? 'active-link' : 'link'
                  }
                >
                  Sessions
                </Link>
              </li>
            )}
            {showSpeakers && (
              <li className="mr-3 text-xl">
                <Link
                  href="/speakers"
                  className={
                    router.pathname === '/speakers' ? 'active-link' : 'link'
                  }
                >
                  Speakers
                </Link>
              </li>
            )}
            <li className="mr-3 text-xl">
              <Link
                href="/about"
                className={
                  router.pathname === '/about' ? 'active-link' : 'link'
                }
              >
                About
              </Link>
            </li>
            <li className="mr-3 text-xl">
              <Link
                href="/sponsors"
                className={
                  router.pathname === '/sponsors' ? 'active-link' : 'link'
                }
              >
                Sponsors
              </Link>
            </li>
            <li className="mr-3 text-xl">
              <PastEventsDropdown />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto flex md:justify-end mt-4 md:mt-0 px-4 md:px-0 md:ml-8">
          {/* <Link href="/sponsors"> */}
          <Link
            className="btn-primary uppercase whitespace-nowrap"
            href={TICKETS_LINK}
            target="_blank"
            rel="noreferrer"
          >
            get your ticket
          </Link>
          {/* <Link
            className="btn-secondary"
            href={SWAG_LINK}
            target="_blank"
            rel="noreferrer"
          >
            get your swag
          </Link> */}
          {/* </Link> */}
        </div>
      </div>
    </nav>
  )
}

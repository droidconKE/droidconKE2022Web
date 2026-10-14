import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { ToggleTheme } from './ToggleTheme'
import { PastEventsDropdown } from './PastEventsDropdown'
import { TICKETS_LINK } from '../../../constant/constants'
import useComponentVisible from '../../../hooks/useComponentVisible'

// Where the full link row, ticket button and theme toggle fit on one line:
// about 1,250px for the five links shown before the event, and about 1,420px
// once Sessions and Speakers join (with the links' padding trimmed until
// 2xl). Below that the header keeps the menu. Tailwind needs whole class
// names, hence a full set per breakpoint. 1440 is an arbitrary variant, not a
// theme screen: `container` sizes itself from the screens list.
const DESKTOP = {
  short: {
    nav: 'xl:flex-nowrap',
    right: 'xl:order-last',
    burger: 'xl:hidden',
    content: 'xl:flex xl:items-center xl:w-auto xl:pt-0 xl:pb-0',
    inner: 'xl:w-auto xl:flex',
    list: 'xl:flex xl:pt-0 xl:[&>li>a]:px-3 xl:[&>li]:whitespace-nowrap',
  },
  full: {
    nav: 'min-[1440px]:flex-nowrap',
    right: 'min-[1440px]:order-last',
    burger: 'min-[1440px]:hidden',
    content:
      'min-[1440px]:flex min-[1440px]:items-center min-[1440px]:w-auto min-[1440px]:pt-0 min-[1440px]:pb-0',
    inner: 'min-[1440px]:w-auto min-[1440px]:flex',
    list: 'min-[1440px]:flex min-[1440px]:pt-0 min-[1440px]:[&>li>a]:px-2 2xl:[&>li>a]:px-3 min-[1440px]:[&>li]:whitespace-nowrap',
  },
}

export const NavBar = () => {
  const { isDarkTheme, isEventReady } = useContext(ThemeContext)

  const {
    ref,
    isComponentVisible: navVisible,
    setIsComponentVisible: setNavVisible,
  } = useComponentVisible(false)
  const router = useRouter()

  const toggleNav = () => {
    setNavVisible((prev) => !prev)
  }

  const showSessions = isEventReady
  const showSpeakers = isEventReady

  useEffect(() => {
    const closeNav = () => {
      setNavVisible(false)
    }
    Router.events.on('beforeHistoryChange', closeNav)
    return () => {
      Router.events.off('beforeHistoryChange', closeNav)
    }
  }, [setNavVisible])

  const desktop = isEventReady ? DESKTOP.full : DESKTOP.short

  return (
    <nav
      ref={ref}
      className={`flex items-center justify-between flex-wrap ${desktop.nav} nav-bg min-h-[var(--nav-h)] px-3 py-2 md:px-5 fixed w-full z-10 top-0 border-b border-gray-200 dark:border-gray-600`}
    >
      <div className="flex items-center flex-shrink-0 text-white mr-4">
        <Link href="/">
          {!isDarkTheme ? (
            <img
              className="w-[150px] md:w-[200px] xl:w-[250px]"
              src="/images/new-design/logo-light.png"
              alt="logo"
            />
          ) : (
            <img
              className="w-[150px] md:w-[200px] xl:w-[250px]"
              src="/images/new-design/logo-dark.png"
              alt="logo dark"
            />
          )}
        </Link>
      </div>
      <div className={`flex items-center ${desktop.right}`}>
        <ToggleTheme />
        <div className={`ml-2 md:ml-3 block ${desktop.burger}`}>
          <button
            type="button"
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-primary dark:text-secondary-dark border-primary dark:border-secondary-dark"
            onClick={() => toggleNav()}
            aria-label="Toggle navigation menu"
            aria-expanded={navVisible}
            aria-controls="nav-content"
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
      </div>
      <div
        id="nav-content"
        className={`w-full flex-grow pt-4 pb-4 md:px-5 ${desktop.content} ${
          navVisible ? '' : 'hidden'
        }`}
      >
        <div
          className={`w-full flex-grow ${desktop.inner} ${
            navVisible ? 'bg-white dark:bg-dark' : ''
          } ${isEventReady ? 'md:w-8/12' : 'md:w-7/12'}`}
        >
          <ul
            className={`list-reset justify-end text-base flex-1 items-center pt-2 space-y-2 md:space-y-0 ${desktop.list}`}
          >
            <li className="black text-xl">
              <Link
                href="/"
                className={router.pathname === '/' ? 'active-link' : 'link'}
              >
                Home
              </Link>
            </li>
            <li className="text-xl">
              <Link
                href="/about"
                className={
                  router.pathname === '/about' ? 'active-link' : 'link'
                }
              >
                About
              </Link>
            </li>
            <li className="text-xl whitespace-nowrap">
              <Link
                href="/beyond-stacks"
                className={
                  router.pathname === '/beyond-stacks' ? 'active-link' : 'link'
                }
              >
                Beyond Stacks
              </Link>
            </li>
            {showSessions && (
              <li className="text-xl">
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
              <li className="text-xl">
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
            <li className="text-xl">
              <Link
                href="/sponsors"
                className={
                  router.pathname === '/sponsors' ? 'active-link' : 'link'
                }
              >
                Sponsors
              </Link>
            </li>
            <li className="text-xl">
              <PastEventsDropdown />
            </li>
          </ul>
        </div>
        <div className="w-full md:w-auto flex md:justify-end mt-4 md:mt-0 px-4 md:px-0 md:ml-4">
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

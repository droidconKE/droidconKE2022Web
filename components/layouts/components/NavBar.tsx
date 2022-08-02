/* eslint-disable sonarjs/no-duplicate-string */
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { ToggleTheme } from './ToggleTheme'

export const NavBar = () => {
  const { isDarkTheme, isEventReady } = useContext(ThemeContext)

  const [navVisible, setNavVisible] = useState(false)
  const router = useRouter()

  const toggleNav = () => {
    setNavVisible((prev) => !prev)
  }

  useEffect(() => {
    Router.events.on('beforeHistoryChange', () => {
      setNavVisible(false)
    })
  }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap nav-bg px-2 py-4 md:py-3 md:px-5 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6 lg:pl-24">
        <Link href="/">
          <a>
            {!isDarkTheme ? (
              <img
                className="w-[200px] md:w-[250px]"
                src="/images/logo.svg"
                alt="logo"
              />
            ) : (
              <img
                className="w-[200px] md:w-[250px]"
                src="/images/logo-dark.svg"
                alt="logo dark"
              />
            )}
          </a>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          id="nav-toggle"
          className="flex items-center px-3 py-2 border rounded text-primary dark:text-secondary-dark border-primary dark:border-secondary-dark"
          onClick={() => toggleNav()}
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
          className={`w-full md:w-7/12 flex-grow lg:flex ${
            navVisible ? 'bg-white dark:bg-dark' : ''
          }`}
        >
          <ul className="list-reset lg:flex justify-end text-base flex-1 items-center space-y-2 md:space-y-0">
            <li className="mr-3 black">
              <Link href="/">
                <a className={router.pathname === '/' ? 'active-link' : 'link'}>
                  Home
                </a>
              </Link>
            </li>
            {isEventReady && (
              <li className="mr-3">
                <Link href="/sessions">
                  <a
                    className={
                      router.pathname === '/sessions' ? 'active-link' : 'link'
                    }
                  >
                    Sessions
                  </a>
                </Link>
              </li>
            )}
            <li className="mr-3">
              <Link href="/about">
                <a
                  className={
                    router.pathname === '/about' ? 'active-link' : 'link'
                  }
                >
                  About
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/sponsors">
                <a
                  className={
                    router.pathname === '/sponsors' ? 'active-link' : 'link'
                  }
                >
                  Sponsors
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-3/12 flex md:justify-end mt-4 md:mt-0 px-4 md:px-0">
          <a
            href="#k"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Tickets Coming Soon
          </a>
        </div>

        <div className="w-2/12 flex-grow  lg:flex justify-end">
          {!isEventReady && (
            <button
              type="button"
              id="login-modal"
              className="px-4 md:px-0 relative flex items-center my-2 md:my-0"
              onClick={() => null}
            >
              <span className="cursor-pointer inline-flex items-center justify-between transition-all duration-500 rounded-full h-8 w-8 p-2 bg-accent dark:bg-accent-dark mr-2">
                <img className="w-4" src="/images/svg/lock.svg" alt="icon" />
              </span>
              <span className="black">Login</span>
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}

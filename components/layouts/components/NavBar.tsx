/* eslint-disable sonarjs/no-duplicate-string */
import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthContext'
import { ThemeContext } from '../../../context/ThemeContext'
import { Login } from '../../auth/Login'
import { ToggleTheme } from './ToggleTheme'
import { PastEventsDropdown } from './PastEventsDropdown'

export const NavBar = () => {
  const { isDarkTheme, isEventReady } = useContext(ThemeContext)
  const { currentUser, isAuthenticated, logoutUser } = useContext(AuthContext)

  const [navVisible, setNavVisible] = useState(false)
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const router = useRouter()

  const toggleNav = () => {
    setNavVisible((prev) => !prev)
  }

  const showLogin = isEventReady
  const showSessions = isEventReady
  const showSpeakers = isEventReady

  useEffect(() => {
    Router.events.on('beforeHistoryChange', () => {
      setNavVisible(false)
    })
  }, [])

  return (
    <nav className="flex items-center justify-between flex-wrap nav-bg px-2 py-4 md:py-3 md:px-5 fixed w-full z-10 top-0">
      <div className="flex items-center flex-shrink-0 text-white mr-6 xl:pl-24">
        <Link href="/">
          <a>
            {!isDarkTheme ? (
              <img
                className="w-[200px] xl:w-[250px]"
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
        className={`w-full flex-grow lg:flex lg:items-center lg:w-auto pt-6 lg:pt-0 xl:pr-24 md:px-5  ${
          navVisible ? '' : 'hidden'
        }`}
      >
        <div
          className={`w-full md:w-8/12 flex-grow lg:flex ${
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
            {showSessions && (
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
            {showSpeakers && (
              <li className="mr-3">
                <Link href="/speakers">
                  <a
                    className={
                      router.pathname === '/speakers' ? 'active-link' : 'link'
                    }
                  >
                    Speakers
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
            <li className="mr-3">
              <PastEventsDropdown />
            </li>
          </ul>
        </div>
        {/* <div className="w-full md:w-2/12 flex md:justify-end mt-4 md:mt-0 px-4 md:px-0"> */}
        {/* <Link href="/sponsors"> */}
        {/* <a
            className="btn-secondary"
            href="https://bit.ly/getYourDcKE22Tickets"
            target="_blank"
            rel="noreferrer"
          >
            get your ticket
          </a> */}
        {/* </Link> */}
        {/* </div> */}

        <div className="w-2/12 flex-grow  lg:flex justify-end">
          {showLogin &&
            (!isAuthenticated ? (
              <button
                type="button"
                id="login-modal"
                className="px-4 md:px-0 relative flex items-center my-2 md:my-0"
                onClick={() => setIsLoginOpen(true)}
              >
                <span className="cursor-pointer inline-flex items-center justify-between transition-all duration-500 rounded-full h-8 w-8 p-2 bg-accent dark:bg-accent-dark mr-2">
                  <img className="w-4" src="/images/svg/lock.svg" alt="icon" />
                </span>
                <span className="black">Login</span>
              </button>
            ) : (
              <div className="px-4 md:px-0 relative inine-block mt-3 md:mt-0">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="cursor-pointer inline-flex items-center justify-between transition-all duration-500 rounded-full h-9 w-9 border bg-accent dark:bg-accent-dark">
                    <img
                      className="rounded-full"
                      src="/images/svg/maasai_male.svg"
                      alt="avatar icon"
                    />
                    <span className="text-xs text-accent ml-2 block md:hidden">
                      {currentUser?.name}
                    </span>
                  </span>
                </button>
                {isDropdownOpen && (
                  <div
                    id="userMenu"
                    className=" rounded shadow-md absolute mt-12 top-0 lg:right-0 min-w-full z-30"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <div className="absolute top-0 lg:right-0 lg:mr-0 w-10 h-2 mt-1 origin-center transform rotate-45 translate-x-5 -translate-y-2 pinn pointer-events-none" />
                    <ul className="w-[230px] bg-white dark:bg-dark rounded">
                      <li>
                        <div className="flex-wrap flex p-2 w-full items-center">
                          <div className="w-7/12 flex-wrap flex border-r border-bg-black">
                            <p>
                              <small className="text-xs">Logged in as</small>
                            </p>
                            <span className="text-xs text-accent">
                              {currentUser?.name}
                            </span>
                          </div>
                          <div className="w-5/12 flex-wrap flex justify-center">
                            <button
                              className="dark:text-white text-sm"
                              type="button"
                              onClick={() => logoutUser()}
                            >
                              <i className="fa fa-sign-out" /> Logout
                            </button>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
      {isLoginOpen && <Login closeDialog={() => setIsLoginOpen(false)} />}
    </nav>
  )
}

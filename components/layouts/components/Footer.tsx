import Link from 'next/link'
import { TICKETS_LINK } from '../../../constant/constants'

export const Footer = () => {
  const showExtraInfo = true

  return (
    <footer className="w-full bg-white dark:bg-black relative pt-16 pb-32 border-t border-gray-200 dark:border-gray-800">
      {/* Container for future skyline SVG */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] pointer-events-none z-0" />

      <div className="l-container relative z-10">
        {/* Top Row: Logo & Ticket Button */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16 items-center">
          <div className="col-span-1">
            <Link href="/">
              <img
                src="/images/new-design/logo-light.png"
                alt="logo"
                className="w-[200px] md:w-[280px] dark:hidden block"
              />
              <img
                src="/images/new-design/logo-dark.png"
                alt="logo"
                className="w-[200px] md:w-[280px] hidden dark:block"
              />
            </Link>
          </div>
          <div className="col-span-1 md:col-span-2 flex md:justify-center mt-8 md:mt-0">
            <a
              href={TICKETS_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-primary dark:bg-primary-dark text-white px-8 py-3 text-sm md:text-base font-semibold uppercase hover:opacity-90 transition-opacity"
            >
              GET YOUR TICKET
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H16V12M16 6L6 16"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Info Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left mb-16">
          <div className="col-span-1">
            <h3 className="text-secondary dark:text-secondary-dark font-medium text-lg mb-4">
              Venue
            </h3>
            <p className="text-black dark:text-white text-sm">
              PrideInn Azure Hotel Nairobi,
              <br />
              Westlands
            </p>
          </div>

          {showExtraInfo && (
            <>
              <div className="col-span-1">
                <h3 className="text-secondary dark:text-secondary-dark font-medium text-lg mb-4">
                  Transport
                </h3>
                <p className="text-black dark:text-white text-sm">
                  Public transport is always
                  <br />
                  available to and from the venue
                </p>
              </div>

              <div className="col-span-1">
                <h3 className="text-secondary dark:text-secondary-dark font-medium text-lg mb-4">
                  Parking
                </h3>
                <p className="text-black dark:text-white text-sm">
                  Parking is available
                </p>
              </div>
            </>
          )}

          <div className="col-span-1">
            <h3 className="text-secondary dark:text-secondary-dark font-medium text-lg mb-4">
              Code of Conduct
            </h3>
            <Link
              href="https://drive.google.com/file/d/1Uj5_OjufuDsoaBFK4i60X0K41RWsR6Ro/view?usp=sharing"
              target="_blank"
              className="text-black dark:text-white text-sm hover:text-primary dark:hover:text-primary transition-colors block"
            >
              See the Flutterconke Code of Conduct
            </Link>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/droidconke/"
              target="_blank"
              rel="noreferrer"
              className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
            >
              <i className="fa fa-instagram text-2xl" />
            </a>
            <a
              href="https://twitter.com/droidconke"
              target="_blank"
              rel="noreferrer"
              className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
            >
              <i className="fa fa-twitter text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/droidconke/"
              target="_blank"
              rel="noreferrer"
              className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
            >
              <i className="fa fa-linkedin text-2xl" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCNumwOLkQjVgNmYdG8-qHVg"
              target="_blank"
              rel="noreferrer"
              className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
            >
              <i className="fa fa-youtube-play text-2xl" />
            </a>
          </div>
          <p className="text-black dark:text-white text-xs text-center font-medium">
            Copyright © {new Date().getFullYear()}. Powered By Codescape
            Limited
          </p>
        </div>
      </div>
    </footer>
  )
}

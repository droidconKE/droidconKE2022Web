import Link from 'next/link'
import { TICKETS_LINK } from '../../../constant/constants'

export const Footer = () => {
  const showExtraInfo = true

  return (
    <footer className="w-full bg-white dark:bg-black-dark relative">
      <div className="grid">
        {/* Skyline Backgrounds - In their own grid layer */}
        <div className="col-start-1 row-start-1 self-end w-full max-w-[1536px] mx-auto pointer-events-none z-0 flex items-start overflow-hidden max-h-[400px] md:max-h-[600px]">
          <img
            src="/images/new-design/Footer_Blue.png"
            alt="Skyline"
            className="w-full h-auto dark:hidden block grayscale opacity-30"
          />
          <img
            src="/images/new-design/Footer_Black.png"
            alt="Skyline"
            className="w-full h-auto hidden dark:block"
          />
        </div>

        {/* Footer Content - In the same grid cell, overlapping the image */}
        <div className="col-start-1 row-start-1 self-end w-full z-10 flex flex-col justify-end h-full">
          <div className="l-container pt-16 pb-8">
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
                  className="btn-primary"
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
              <p className="text-black dark:text-white text-xs text-center font-medium pb-4">
                Copyright © {new Date().getFullYear()}. Powered By Codescape
                Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

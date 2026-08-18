import Link from 'next/link'
import { TICKETS_LINK } from '../../../constant/constants'

export const Footer = () => {
  const showExtraInfo = true

  return (
    <footer className="w-full bg-white dark:bg-black-dark relative">
      <div>
        <div className="w-full">
          <div className="l-container pt-16 pb-8">
            {/* Ticket CTA */}
            <div className="flex justify-center mb-10 md:mb-12">
              <div>
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

            {/* KICC halftone with the wordmark overlapping its base */}
            <div className="relative w-full mb-10 md:mb-16 pointer-events-none select-none">
              <img
                src="/images/new-design/revised/new-footer-2.png"
                alt=""
                aria-hidden="true"
                className="w-[80%] md:w-[70%] h-auto mx-auto object-contain"
              />
              <img
                src="/images/new-design/revised/droidcon-large-light.svg"
                alt="droidcon"
                className="absolute bottom-0 left-0 w-full h-auto dark:hidden block"
              />
              <img
                src="/images/new-design/revised/droidcon-large-dark.svg"
                alt="droidcon"
                className="absolute bottom-0 left-0 w-full h-auto hidden dark:block"
              />
            </div>

            {/* Info Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left mb-16">
              <div className="col-span-1">
                <h3 className="text-secondary dark:text-secondary-dark font-medium text-lg mb-4">
                  Venue
                </h3>
                {/* TODO: Implement dynamic fetching of venue information */}
                <p className="text-black dark:text-white text-sm">
                  PrideInn Azure Hotel Nairobi,
                  <br />
                  Westlands
                </p>
                <Link
                  href="https://maps.app.goo.gl/Q2ZQ77s6cCJAmDiP7"
                  target="_blank"
                  className="text-black dark:text-white text-sm hover:text-primary dark:hover:text-primary transition-colors"
                  rel="noreferrer"
                >
                  <i className="fa fa-map-marker" />{' '}
                  <span className="underline">View Map location</span>
                </Link>
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
                  See the DroidconKE{' '}
                  <span className="underline">Code of Conduct</span>
                </Link>
              </div>
            </div>

            {/* Social Icons & Copyright */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.instagram.com/droidconke/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
                >
                  <i className="fa fa-instagram text-2xl align-middle" />
                </a>
                <a
                  href="https://twitter.com/droidconke"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-6 h-6 inline-block align-middle"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/droidconke/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
                >
                  <i className="fa fa-linkedin text-2xl align-middle" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCNumwOLkQjVgNmYdG8-qHVg"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary dark:text-secondary-dark hover:opacity-80 transition-opacity"
                >
                  <i className="fa fa-youtube-play text-2xl align-middle" />
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

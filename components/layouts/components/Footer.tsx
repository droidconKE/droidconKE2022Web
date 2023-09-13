export const Footer = () => {
  const showExtraInfo = true

  return (
    <div>
      <section className="w-full bg-primary dark:bg-black-dark">
        <div className="l-container py-6 md:py-12">
          <div className="items-center flex flex-wrap md:my-10">
            <div className="w-full md:w-8/12 ml-auto mt-4 md:mt-0">
              <div className="text-left">
                <h2 className="title-w lowercase text-white dark:text-accent-dark">
                  <span>event</span> <span className="font-medium"> info</span>
                </h2>
              </div>
            </div>
            <div className="w-full flex md:w-4/12 items-start mt-10 md:mt-0 justify-start px-0 md:px-3">
              <div className="mt-0">
                <a
                  className="btn-secondary"
                  style={{ transition: 'all .15s ease' }}
                  href="https://bit.ly/getYourDcKE22Tickets"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get your Ticket
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full">
              <div className="flex flex-wrap items-top mb-14 md:mb-6 text-left">
                <div className="w-full md:w-4/12 xl:w-4/12 pt-6 md:pt-0">
                  <span className="text-accent dark:text-accent-dark lowercase text-2xl">
                    Venue
                  </span>
                  <ul className="list-unstyled mt-3">
                    <p className="text-white dark:text-white-dark text-base">
                      To Be Announced
                    </p>

                    {/* <a
                      href="https://goo.gl/maps/ZKyyQbFUM4miuiuL9"
                      target="_blank"
                      className="text-white dark:text-white-dark text-base"
                      rel="noreferrer"
                    >
                      <i className="fa fa-map-marker" /> View Map location
                    </a> */}
                  </ul>
                </div>
                {showExtraInfo && (
                  <>
                    <div className="w-full md:w-4/12 xl:w-4/12 pt-6 md:pt-0 md:px-4">
                      <span className="text-accent dark:text-accent-dark lowercase text-2xl">
                        Transport
                      </span>
                      <ul className="list-unstyled mt-3">
                        <p className="text-white dark:text-white-dark text-base">
                          Public transport is always available to and from the
                          venue
                        </p>
                      </ul>
                    </div>
                    <div className="w-full md:w-4/12 xl:w-4/12 pt-6 md:pt-0 md:px-4">
                      <span className="text-accent dark:text-accent-dark lowercase text-2xl">
                        Parking
                      </span>
                      <ul className="list-unstyled mt-3">
                        <p className="text-white dark:text-white-dark text-base">
                          Parking is available
                        </p>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full items-center px-4 py-5">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="mt-0 w-full">
              <a
                href="https://twitter.com/droidconke"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-twitter  black font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a
                href="https://www.instagram.com/droidconke/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-instagram black font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCNumwOLkQjVgNmYdG8-qHVg"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa fa-youtube-play black font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center" />
              </a>
            </div>
            <div className="py-4">
              <p className="text-light dark:text-lighter text-xs">
                Copyright © {new Date().getFullYear()}. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

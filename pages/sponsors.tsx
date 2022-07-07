import Link from 'next/link'

export default function SponsorsPage() {
  return (
    <div className="w-full mt-15 md:mt-14 mb-0">
      <section className="w-full bg-primary dark:bg-primary-dark">
        <div className="l-container mt-8 md:mt-0 py-12 md:py-12">
          <div className="items-start flex flex-wrap mb-0">
            <div className="w-full md:w-7/12 ml-auto px-2 md:px-8 mt-4 md:mt-0">
              <div className="text-center md:text-left">
                <h3 className="title-w text-accent dark:text-accent-dark uppercase mt-6 md:mt-0">
                  sponsor Droidconke
                </h3>
                <p className="text-white dark:text-white-dark text-px-21 mt-4">
                  PROMOTE YOUR BRAND | DEMONSTRATE THOUGHT LEADERSHIP | MEET &
                  ENGAGE WITH DEVELOPERS.
                </p>
              </div>
            </div>
            <div className="w-full flex  md:w-5/12 mt-10 md:mt-0 justify-center md:justify-end px-2 md:px-8">
              <div className="mt-0 mb-14 flex flex-wrap md:mb-0">
                <Link href="/sponsors">
                  <a className="btn-accent mt-3 md:mt-0 font-semibold rounded-lg">
                    Sponsor droidconke
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mt-15 md:mt-14 mb-0">
        <div className="l-container md:mt-10 md:py-12">
          <div className="flex flex-wrap">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h3 className="title-w black pt-10 md:pt-0">
                Why Sponsor droidconke
              </h3>
            </div>
          </div>
          <div className="mx-auto px-4 md:py-16">
            <div className="items-center flex flex-wrap mb-4 md:mb-10">
              <div className="w-full md:w-4/12 ml-auto px-2 md:px-8 mt-4 md:mt-0">
                <div className="text-center md:text-left">
                  <h3 className="title-px-26 black font-bold w-full mt-4 md:mt-0 underline underline-offset-8 decoration-8 decoration-accent-3">
                    ATTENDEE PROFILE
                  </h3>
                  <p className="text-black p mt-4">
                    The event targets students, professional software developers
                    who work in mid to large sized organizations and who develop
                    systems of all sizes for enterprise companies. The event
                    aims to attract attendees across industries such as
                    financial services, media houses, telco’s etc.
                  </p>
                </div>
              </div>
              <div className="w-full flex flex-wrap md:w-8/12 mt-10 mb-4 md:mb-0 justify-center md:mt-0 px-2 md:px-8">
                <div className="w-full px-0 lg:px-10">
                  <img src="/images/NUMBERS/NUMBERS.png" alt="dread" />
                </div>
              </div>
            </div>
            <div className="px-2 md:px-8">
              <hr />
            </div>
            <div className="items-center flex flex-wrap mt-4 md:mt-10 mb-0">
              <div className="w-full md:w-4/12 ml-auto px-2 md:px-8 mt-4 md:mt-0">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl text-primary font-bold w-full mt-6 md:mt-0">
                    VALUE BUILT BUILT IN EVERY PACKAGE
                  </h3>
                </div>
              </div>
              <div className="w-full flex flex-wrap md:w-8/12 mt-10 mb-14 md:mb-0 justify-center md:mt-0 px-2 md:px-10">
                <div className="w-full flex justify-center grid grid-cols-3 ">
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-primary">
                    <p className="text-sm text-white dark:text-white-dark  uppercase font-semibold">
                      Brand awareness
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-accent">
                    <p className="text-sm text-white dark:text-white-dark  uppercase font-semibold">
                      User adoption
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-secondary">
                    <p className="text-sm text-white dark:text-white-dark  uppercase font-semibold">
                      Build relationships
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-secondary">
                    <p className="text-sm text-white dark:text-white-dark  uppercase font-semibold">
                      User insights
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-primary">
                    <p className="text-sm text-white dark:text-white-dark  uppercase font-semibold">
                      Find ambassadors
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-accent">
                    <p className="text-sm text-white dark:text-white-dark  uppercase font-semibold">
                      Lead generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-10 bg-lighter">
        <div className="l-container md:-mt-10 md:py-12">
          <div className="flex flex-wrap md:pt-16">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h3 className="title-w text-primary dark:text-primary-dark pt-8 md:pt-0">
                VARIOUS SPONSORSHIP LEVELS
              </h3>
              <p className="mt-4 text-black dark:text-black-dark text-2xl">
                Your sponsorship package can be tailored to meet your business
                objectives:
              </p>
            </div>
          </div>
          <div className="mx-auto px-4 md:py-10">
            <div className="items-center flex flex-wrap mb-0">
              <div className="w-full px-2 md:px-8 mt-4 mb-14 lg:mb-0 md:mt-0">
                <img src="/images/svg/projection.png" alt="projection" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-black-2 dark:bg-black-2-dark -mb-10 md:px-32 sm:px-10">
        <div className="l-container md:-mt-10 md:py-12">
          <div className="flex flex-wrap">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h3 className="text-2xl text-white dark:text-white-dark pt-6 md:pt-0">
                To Sponsor Droidcoke2020 Contacts us at
              </h3>
              <p className="text-sm text-white dark:text-white-dark mt-3">
                Click to here to proceed
              </p>
            </div>
          </div>
          <div className="items-center flex flex-wrap mb-0 mt-4">
            <div className="w-2/12 md:w-4/12 ml-auto px-2 md:px-8 mb-10 md:mb-0">
              <div className="grow h-2 bg-secondary" />
            </div>
            <div className="w-8/12 flex md:w-4/12 mb-10 md:mb-0 justify-center px-2">
              <Link href="/sponsors">
                <a className="btn-accent mt-3 md:mt-0 font-semibold">
                  Sponsor droidconke
                </a>
              </Link>
            </div>
            <div className="w-2/12 md:w-4/12 ml-auto px-2 md:px-8 mb-10 md:mb-0">
              <div className="grow h-2 bg-secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

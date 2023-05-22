import axios from 'axios'
import Link from 'next/link'
import { useContext } from 'react'
import SponsorsList from '../components/home/SponsorsList'
import { ThemeContext } from '../context/ThemeContext'
import { Sponsor } from '../types/types'

export default function SponsorsPage({ sponsors }: { sponsors: Sponsor[] }) {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div className="w-full mt-10 mb-0">
      <section className="w-full bg-primary dark:bg-black-dark">
        <div className="s-container mt-12 md:mt-0 py-6 md:py-12">
          <div className="items-start flex flex-wrap mb-0">
            <div className="w-full md:w-7/12 mt-4 md:mt-6">
              <div className="text-center md:text-left">
                <h2 className="title lowercase  text-accent dark:text-accent-dark mt-6 md:mt-0">
                  <span>sponsor</span>{' '}
                  <span className="font-medium"> droidconke</span>
                </h2>
                <p className="text-white dark:text-white-dark text-xl md:text-2xl mt-4 lowercase">
                  PROMOTE YOUR BRAND | DEMONSTRATE THOUGHT LEADERSHIP | MEET &
                  ENGAGE WITH DEVELOPERS.
                </p>
              </div>
            </div>
            <div className="w-full flex  md:w-5/12 mt-10 md:mt-0 justify-center md:justify-end">
              <div className="mt-0 mb-6 flex flex-wrap md:mb-0">
                <Link href="mailto:hello@droidcon.co.ke?Subject=Sponsor droidconKe">
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
        <div className="s-container md:mt-10 md:py-12">
          <div className="flex flex-wrap">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h2 className="title lowercase dark:text-accent-dark pt-10 md:pt-0">
                <span>why Sponsor</span>{' '}
                <span className="font-medium"> droidconke</span>
              </h2>
            </div>
          </div>
          <div className="mx-auto md:py-16">
            <div className="items-center flex flex-wrap mb-4 md:mb-10">
              <div className="w-full md:w-4/12 mt-4 md:mt-0">
                <div>
                  <h3 className="text-left black text-3xl md:text-4xl font-bold w-full mt-4 md:mt-0 underline underline-offset-8 decoration-8 decoration-accent-3 lowercase">
                    ATTENDEE PROFILE
                  </h3>
                  <p className="text-black  py-10 md:py-8 text-xl md:text-xl">
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
                  <img src="/images/svg/numbers.svg" alt="dread" />
                </div>
              </div>
            </div>
            <div className="px-2 md:px-8">
              <hr />
            </div>
            <div className="items-center flex flex-wrap mt-4 md:mt-10 mb-0">
              <div className="w-full md:w-4/12 ml-auto px-2 md:px-8 mt-4 md:mt-0">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-4xl text-primary dark:text-accent font-medium w-full mt-6 md:mt-0 lowercase">
                    <span className="font-black">VALUE BUILT</span> BUILT IN
                    EVERY PACKAGE
                  </h3>
                </div>
              </div>
              <div className="w-full flex flex-wrap md:w-8/12 mt-10 mb-14 md:mb-0 justify-center md:mt-0 px-2 md:px-10">
                <div className="w-full justify-center grid grid-cols-3">
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-primary">
                    <p className="text-xs md:text-xl text-white dark:text-white-dark  lowercase font-semibold">
                      Brand awareness
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-accent">
                    <p className="text-xs md:text-xl text-white dark:text-white-dark  lowercase font-semibold">
                      User adoption
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-secondary">
                    <p className="text-xs md:text-xl text-white dark:text-white-dark  lowercase font-semibold">
                      Build relationships
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-secondary">
                    <p className="text-xs md:text-xl text-white dark:text-white-dark  lowercase font-semibold">
                      User insights
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-primary">
                    <p className="text-xs md:text-xl text-white dark:text-white-dark  lowercase font-semibold">
                      Find ambassadors
                    </p>
                  </div>
                  <div className="justify-center flex items-center px-3 py-5 text-center bg-accent">
                    <p className="text-xs md:text-xl text-white dark:text-white-dark  lowercase font-semibold">
                      Lead generation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 md:py-10 bg-lighter dark:bg-black-dark">
        <div className="s-container md:-mt-10 md:py-12">
          <div className="flex flex-wrap md:pt-16">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h2 className="title lowercase text-primary dark:text-accent pt-8 md:pt-0">
                <span>VARIOUS</span>{' '}
                <span className="font-medium"> SPONSORSHIP LEVELS</span>
              </h2>
              <p className="mt-4 text-black dark:text-white text-xl md:text-2xl">
                Your sponsorship package can be tailored to meet your business
                objectives:
              </p>
            </div>
          </div>
          <div className="mx-auto md:py-10">
            <div className="items-center flex flex-wrap mb-0">
              <div className="w-full mt-4 mb-14 lg:mb-0 md:mt-0">
                {!isDarkTheme ? (
                  <img src="/images/svg/sponsor-graph.svg" alt="graph" />
                ) : (
                  <img
                    src="/images/svg/sponsor-graph-dark.svg"
                    alt="graph dark"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SponsorsList sponsors={sponsors} />
      <section className="w-full bg-black dark:bg-dark -mb-10 md:px-32 sm:px-10">
        <div className="s-container md:-mt-10 md:py-12">
          <div className="flex flex-wrap">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h3 className="text-2xl md:text-3xl text-white dark:text-white-dark pt-6 md:pt-0 lowercase">
                <span className="font-black">To Sponsor</span> Droidcoke 2023
                Contacts us at
              </h3>
              <p className="text-base text-white dark:text-white-dark mt-3">
                Click here to proceed
              </p>
            </div>
          </div>
          <div className="items-center flex flex-wrap mb-8 mt-4">
            <div className="w-2/12 md:w-4/12 ml-auto px-0 md:px-8 mb-8 md:mb-0">
              <div className="grow h-2 bg-secondary" />
            </div>
            <div className="w-8/12 flex md:w-4/12 mb-10 md:mb-0 justify-center px-2">
              <Link href="mailto:hello@droidcon.co.ke?Subject=Sponsor droidconKe">
                <a className=" text-xs md:text-base btn-accent mt-3 md:mt-0">
                  Sponsor droidconke
                </a>
              </Link>
            </div>
            <div className="w-2/12 md:w-4/12 ml-auto px-0 md:px-8 mb-8 md:mb-0">
              <div className="grow h-2 bg-secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const sponsors = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/sponsors`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { sponsors } }
}

import Link from 'next/link'
import axios from '../utils/axios'
import SponsorsList from '../components/home/SponsorsList'
import { Sponsor } from '../types/types'
import { Value } from '../components/sponsors/Value'

export default function SponsorsPage({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="w-full mt-10 lg:mt-20 xl:mt-10 mb-0">
      <section className="w-full bg-primary dark:bg-black-dark">
        <div className="s-container mt-12 md:mt-0 py-6 md:py-12">
          <div className="items-center flex flex-wrap mb-0">
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
              <div className="mt-0 mb-6 flex flex-col md:flex-row flex-wrap md:mb-0 md:space-x-4">
                {/* <Link href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe">
                  <a className="btn-accent mt-3 md:mt-0 font-semibold rounded-lg">
                    Sponsor droidconke
                  </a>
                </Link> */}
                {/* <Link href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe"> */}
                <a
                  className="btn-secondary flex flex-wrap space-x-1 w-[220px] md:w-[250px] justify-center"
                  href="/docs/dcke24-prospectus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-white">sponsorship packages</span>
                  <img
                    className="pl-3 w-6"
                    src="/images/svg/arrow-btn.svg"
                    alt="icon"
                  />
                </a>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="s-container md:py-10">
          <div className="mx-auto md:py-10">
            <div className="flex flex-wrap">
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
              <div className="w-full flex flex-wrap md:w-8/12 md:mt-0 mb-4 md:mb-0 justify-center px-4 md:px-16">
                <div className="w-full px-0 pl-0 md:pl-24">
                  {/* <img src="/images/svg/numbers.svg" alt="dread" /> */}
                  <h3 className="text-3xl md:text-4xl text-black dark:text-accent font-medium w-full mt-6 md:mt-0">
                    <span className="font-black">dcKE24</span> at a glance
                  </h3>
                  <div className="py-4 md:py-5">
                    <div>
                      <h4 className="text-primary font-black text-[50px] md:text-[75px]">
                        700+
                      </h4>
                      <h5 className="text-primary font-bold -mt-3 text-sm md:text-base">
                        2024 Attendees Target
                      </h5>
                    </div>
                    <div className="flex justify-end -mt-5">
                      <div>
                        <h4 className="text-secondary font-black text-[50px] md:text-[75px]">
                          80+
                        </h4>
                        <h5 className="text-secondary font-bold -mt-3 text-sm md:text-bas">
                          Sessions
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img src="/images/sponsors-bg.png" alt="sponsors bg" />
            </div>
            <div className="md:py-10">
              <Value />
            </div>
          </div>
        </div>
      </section>
      {/* <SponsorGraph /> */}
      <section className="w-full">
        <div className="s-container md:pb-32 md:pt-10 py-6">
          <div className="items-center flex flex-wrap">
            <div className="w-full flex justify-center">
              <img src="/images/revolver.png" alt="revolver" />
            </div>
            <div className="w-full flex justify-center">
              <div className="text-center">
                <h2 className="title text-accent lowercase">
                  <span className="font-medium">Sponsor droidcon24</span>
                </h2>
                <div className="w-full">
                  <h6 className="mt-4 dark:text-lighter-dark text-xl md:text-2xl">
                    To earn a spot here/Meet our partners By sponsoring
                    {/* droidconke23 you support and bring together{' '}
                  <br className="hidden md:block" />
                  the Android developer community. */}
                  </h6>
                </div>
                <div className="mt-10 md:mt-12 mb-10 md:mb-0 flex justify-center">
                  {/* <Link href="/sponsors"> */}
                  <a
                    className="btn-secondary flex flex-wrap space-x-1 w-[220px] md:w-[250px] justify-center"
                    href="/docs/dcke24-prospectus.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="text-white">sponsorship packages</span>
                    <img
                      className="pl-3 w-6"
                      src="/images/svg/arrow-btn.svg"
                      alt="icon"
                    />
                  </a>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-lighter dark:bg-black-dark md:px-32 sm:px-10">
        <div className="s-container md:-mt-10 md:py-12">
          <div className="flex flex-wrap">
            <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
              <h3 className="text-2xl md:text-3xl text-primary dark:text-white-dark pt-6 md:pt-0 lowercase">
                <span className="font-black">To Sponsor</span> Droidcoke 2024
                Contacts us at?
              </h3>
              <p className="text-base text-primary dark:text-white-dark mt-3">
                Click here to proceed
              </p>
            </div>
          </div>
          <div className="items-center flex flex-wrap py-4 mt-4">
            <div className="w-2/12 md:w-4/12 ml-auto px-0 md:px-8 mb-8 md:mb-0">
              <div className="grow h-2 bg-secondary" />
            </div>
            <div className="w-8/12 flex md:w-4/12 mb-10 md:mb-0 justify-center px-2">
              <Link href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe">
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
      <SponsorsList sponsors={sponsors} showSponsors year={23} />
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

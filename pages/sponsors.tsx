import Link from 'next/link'
import axios from '../utils/axios'
import SponsorsList from '../components/home/SponsorsList'
import { Sponsor } from '../types/types'
import { Value } from '../components/sponsors/Value'

export default function SponsorsPage({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="w-full mt-10 lg:mt-20 xl:mt-10 mb-0">
      <section className="s-container mt-6 md:mt-10 mb-8 md:mb-0">
        <div className="bg-primary rounded-4xl md:rounded-5xl px-6 py-8 md:px-12 md:py-12">
          <div className="items-center flex flex-wrap mb-0">
            <div className="w-full md:w-7/12 mt-4 md:mt-6">
              <div className="text-center md:text-left">
                <h2 className="font-display capitalize text-3xl md:text-5xl text-accent dark:text-accent-dark mt-6 md:mt-0">
                  <span>sponsor</span> <span>droidconke</span>
                </h2>
                <p className="text-white dark:text-white-dark text-xl md:text-2xl mt-4 lowercase">
                  PROMOTE YOUR BRAND | DEMONSTRATE THOUGHT LEADERSHIP | MEET &
                  ENGAGE WITH DEVELOPERS.
                </p>
              </div>
            </div>
            <div className="w-full flex  md:w-5/12 mt-10 md:mt-0 justify-center md:justify-end">
              <div className="mt-0 mb-6 flex flex-col md:flex-row flex-wrap md:mb-0 md:space-x-4">
                <Link
                  href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe"
                  className="btn-secondary uppercase px-8 py-3 mt-3 md:mt-0"
                >
                  Sponsor droidconke
                </Link>
                {/* <Link href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe"> */}
                {/* <a
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
                </a> */}
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="s-container md:py-10">
          <div className="mx-auto md:py-10">
            <div className="rounded-4xl md:rounded-5xl bg-gradient-to-br from-primary to-accent p-6 md:p-10 lg:p-12">
              <div className="flex flex-wrap">
                <div className="w-full md:w-4/12 mt-4 md:mt-0">
                  <div>
                    <h3 className="text-left text-accent dark:text-accent text-3xl md:text-4xl font-display w-full mt-4 md:mt-0 underline underline-offset-8 decoration-8 decoration-accent capitalize">
                      ATTENDEE PROFILE
                    </h3>
                    <p className="text-white py-10 md:py-8 text-xl">
                      The event targets students, professional software
                      developers who work in mid to large sized organizations
                      and who develop systems of all sizes for enterprise
                      companies. The event aims to attract attendees across
                      industries such as financial services, media houses,
                      telco’s etc.
                    </p>
                  </div>
                </div>
                <div className="w-full flex flex-wrap md:w-8/12 md:mt-0 mb-4 md:mb-0 justify-center px-4 md:px-16">
                  <div className="w-full px-0 pl-0 md:pl-24">
                    {/* <img src="/images/svg/numbers.svg" alt="dread" /> */}
                    <h3 className="font-display capitalize text-3xl md:text-4xl text-accent dark:text-accent w-full mt-6 md:mt-0">
                      dcKe26 at a glance
                    </h3>
                    <div className="py-4 md:py-5">
                      <div>
                        <h4 className="text-white font-black text-[50px] md:text-[75px]">
                          700+
                        </h4>
                        <h5 className="text-white/80 font-bold -mt-3 text-sm md:text-base">
                          2026 Attendees Target
                        </h5>
                      </div>
                      <div className="flex justify-end -mt-5">
                        <div>
                          <h4 className="text-white font-black text-[50px] md:text-[75px]">
                            80+
                          </h4>
                          <h5 className="text-white/80 font-bold -mt-3 text-sm md:text-base">
                            Sessions
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 py-8 md:py-12">
                {[
                  {
                    value: '3',
                    label: 'Tracks',
                    color: 'text-accent dark:text-accent',
                  },
                  {
                    value: '5000+',
                    label: 'Newsletter Reach',
                    color: 'text-primary dark:text-primary',
                  },
                  {
                    value: '2',
                    label: 'Day Event',
                    color: 'text-accent dark:text-accent',
                  },
                  {
                    value: '3200+',
                    label: 'Twitter Followers',
                    color: 'text-primary dark:text-primary',
                  },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display leading-none text-5xl md:text-7xl text-white">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm md:text-base font-semibold text-white/90">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:py-10">
              <Value />
            </div>
          </div>
        </div>
      </section>
      {/* <SponsorGraph /> */}
      <section className="s-container mb-12 md:mb-16">
        <div className="relative overflow-hidden rounded-4xl md:rounded-5xl bg-accent px-6 py-10 md:px-12 md:py-16">
          <span className="pointer-events-none absolute top-0 left-0 right-0 h-28 z-0 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.4px,transparent_1.6px)] [background-size:10px_10px] [mask-image:linear-gradient(to_bottom,#000,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent)]" />
          <div className="relative z-10 text-left">
            <div className="flex items-center text-primary dark:text-primary text-sm md:text-base font-medium mb-3">
              <div className="w-6 h-px bg-primary mr-3" />
              sponsor dcke26
            </div>
            <h2 className="font-display capitalize text-3xl md:text-5xl text-primary dark:text-primary">
              Sponsor droidcon26
            </h2>
            <div
              className="h-2 w-full max-w-xs md:max-w-md bg-primary mt-4"
              style={{
                maskImage:
                  'repeating-linear-gradient(45deg, black, black 2px, transparent 2px, transparent 8px)',
                WebkitMaskImage:
                  'repeating-linear-gradient(45deg, black, black 2px, transparent 2px, transparent 8px)',
              }}
            />
            <h6 className="mt-5 text-black dark:text-black text-xl md:text-2xl">
              To earn a spot here/Meet our partners By sponsoring
            </h6>
            <h3 className="font-display capitalize text-2xl md:text-3xl text-primary dark:text-primary mt-10 md:mt-12">
              <span>To Sponsor</span> Droidcoke 2026 Contacts us at?
            </h3>
            <Link
              href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe"
              className="btn-primary uppercase mt-8 inline-flex"
            >
              Sponsor droidconke
            </Link>
          </div>
        </div>
      </section>
      <SponsorsList sponsors={sponsors} showSponsors year={26} />
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

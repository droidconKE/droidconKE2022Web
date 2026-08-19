import Link from 'next/link'
import axios from '../utils/axios'
import SponsorsList from '../components/home/SponsorsList'
import { Sponsor } from '../types/types'
import { Value } from '../components/sponsors/Value'

export default function SponsorsPage({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <div className="w-full mt-10 lg:mt-20 xl:mt-10 mb-0">
      <section className="s-container mt-6 md:mt-10 mb-8 md:mb-0">
        <div className="relative isolate overflow-hidden bg-primary rounded-4xl md:rounded-5xl px-6 py-8 md:px-16 md:py-14">
          <img
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
            src="/images/new-design/revised/dcke-sponsor.png"
            alt=""
          />
          <div className="items-center flex flex-wrap mb-0">
            <div className="w-full md:w-7/12 mt-4 md:mt-6">
              <div className="text-center md:text-left">
                <h2 className="font-display first-letter:uppercase text-3xl md:text-5xl leading-tight md:leading-none text-white dark:text-white mt-6 md:mt-0">
                  <span>sponsor</span> <span>droidconke</span>
                </h2>
                <p className="text-white dark:text-white-dark text-[10px] md:text-xs mt-3 uppercase tracking-wide max-w-sm">
                  PROMOTE YOUR BRAND | DEMONSTRATE THOUGHT LEADERSHIP | MEET &
                  ENGAGE WITH DEVELOPERS.
                </p>
              </div>
            </div>
            <div className="w-full flex  md:w-5/12 mt-10 md:mt-0 justify-center md:justify-end">
              <div className="mt-0 mb-6 flex flex-col md:flex-row flex-wrap md:mb-0 md:space-x-4">
                <Link
                  href="mailto:sponsor@droidcon.co.ke?Subject=Sponsor droidconKe"
                  className="btn-accent text-xs md:text-sm px-6 py-2.5 mt-3 md:mt-0"
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
        <div className="s-container md:py-6">
          <div className="mx-auto">
            <div className="rounded-4xl md:rounded-5xl bg-gradient-to-b from-primary from-15% to-accent to-55% pb-0">
              <div className="flex flex-wrap gap-y-6 px-7 pt-6 pb-8 md:px-[3.75rem] md:pt-10 md:pb-12">
                <div className="w-full md:w-4/12 md:pr-8">
                  <h3 className="text-left text-accent dark:text-accent text-3xl md:text-5xl font-display leading-tight md:leading-none max-w-[8ch]">
                    Attendee Profile
                  </h3>
                </div>
                <div className="w-full md:w-8/12">
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    The event attracts professional software developers who work
                    in mid to large sized organizations and who develop systems
                    of all sizes for enterprise companies. The event aims to
                    attract attendees across industries such as financial
                    services, media houses, telco’s etc.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-6">
                    {[
                      { value: '80.6%', label: 'Professional Developers' },
                      { value: '4.6/5', label: 'Satisfaction Score' },
                      { value: '9.3/10', label: 'Net Promoter Score' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display leading-none text-3xl md:text-4xl text-white dark:text-white">
                          {stat.value}
                        </p>
                        <p className="mt-1.5 text-[11px] md:text-xs font-semibold text-white dark:text-white">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-3xl md:rounded-4xl bg-white border-[3px] md:border-4 border-accent px-7 py-6 md:px-[3.75rem] md:py-12 -mb-20 md:-mb-28">
                <div className="flex flex-wrap items-center gap-y-8">
                  <div className="w-full md:w-4/12 md:pr-8">
                    <h3 className="font-display text-2xl md:text-4xl leading-tight md:leading-tight text-primary dark:text-primary max-w-[7ch]">
                      dcKe26 at a glance
                    </h3>
                  </div>
                  <div className="w-full md:w-8/12 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-14">
                    {[
                      { value: '3000+', label: 'Attendees Since 2018' },
                      { value: '60+', label: 'Sessions' },
                      { value: '3', label: 'Tracks' },
                      { value: '14000+', label: 'Newsletter Reach' },
                      { value: '6000+', label: 'Twitter Followers' },
                      { value: '2', label: 'Day Event' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="font-display leading-none text-4xl md:text-5xl text-primary dark:text-primary">
                          {stat.value}
                        </p>
                        <p className="mt-1.5 text-[11px] md:text-xs font-semibold text-primary dark:text-primary">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-28 md:mt-44">
              <Value />
            </div>
          </div>
        </div>
      </section>
      {/* <SponsorGraph /> */}
      <section className="s-container mb-12 md:mb-16">
        <div className="relative isolate overflow-hidden rounded-4xl md:rounded-5xl bg-accent px-6 py-10 md:px-12 md:py-16">
          <span className="pointer-events-none absolute top-0 left-0 right-0 h-28 z-0 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.4px,transparent_1.6px)] [background-size:10px_10px] [mask-image:linear-gradient(to_bottom,#000,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent)]" />
          <div className="relative z-10 text-left">
            <div className="flex items-center text-primary dark:text-primary text-sm md:text-base font-medium mb-3">
              <div className="w-6 h-px bg-primary mr-3" />
              sponsor dcke26
            </div>
            <h2 className="font-display capitalize text-3xl md:text-5xl text-primary dark:text-primary">
              Sponsor droidconke26
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
              <span>To Sponsor</span> droidconke 2026, contact us at:
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

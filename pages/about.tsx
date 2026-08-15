import type { NextPage } from 'next'
import { Organizer } from '../types/types'
import OrganizingTeam from '../components/about/Team'
import axios from '../utils/axios'
import Organizers from '../components/home/Organizers'
import Divider from '../components/shared/Divider'

interface AboutProps {
  organizers: Organizer[]
}

const About: NextPage<AboutProps> = ({ organizers }) => {
  const team = organizers.filter((o) => o.type === 'individual')
  const company = organizers.filter((o) => o.type === 'company')
  return (
    <div
      className="min-h-screen bg-[length:0%] md:bg-[length:88%] bg-[top_360px_left_115%] md:bg-[top_155px_left_148%] bg-no-repeat"
      style={{
        backgroundImage: 'url(/images/svg/droidcon_about_bg.svg)',
      }}
    >
      <section className="s-container pt-6 md:pt-12 pb-12 md:pb-20">
        <div className="w-full flex flex-wrap md:px-0">
          <div className="w-full lg:w-9/12 flex items-center">
            <div className="w-full">
              <div className="w-full flex flex-wrap text-left">
                <p className="w-full text-primary dark:text-primary font-bold uppercase tracking-wide text-sm md:text-base mb-3">
                  ( About )
                </p>
                <h1 className="w-full font-display capitalize text-black dark:text-white-dark text-5xl md:text-7xl leading-none">
                  <span>about</span>{' '}
                  <span className="text-primary dark:text-accent-dark">
                    droidconke
                  </span>
                </h1>
                <Divider className="my-4 md:my-6" />
                <p className="text-black dark:text-white-dark pt-2 text-base md:text-xl leading-relaxed pr-0 md:pr-10">
                  Droidcon is a global conference focused on the engineering of
                  Android applications, part of next.app devCon. It provides a
                  forum for developers to network, share techniques, announce
                  apps and products, and learn and teach.
                  <br />
                  <br />
                  Droidcon Kenya returns for its 7th edition on November 5th and
                  6th, 2026, at PrideInn Azure Hotel in Nairobi, as the largest
                  Droidcon chapter in Sub-Saharan Africa.
                  <br />
                  <br />
                  Droidcon Kenya is part of next.app devCon, the global home of
                  Droidcon, Fluttercon, and the wider mobile developer
                  community.
                  <br /> <br />
                  Our 2026 theme is Beyond Stacks. The lines between mobile
                  ecosystems are thinner every year, and the questions
                  developers bring to us no longer sit inside a single stack.
                  Beyond Stacks is about the work that happens between
                  platforms, tools, and disciplines, from agentic engineering to
                  multiplatform architecture to shipping secure, performant apps
                  in African markets.
                  <br />
                  <br />
                  The 2025 edition set the foundation, with 198 professional
                  attendees and 26 Android sessions selected from 89
                  submissions, co-located with the second Fluttercon Kenya.
                  <br />
                  <br />
                  In 2026, we build on it with a dedicated Droidcon Kenya track,
                  a shared unconference floor, and content curated for
                  developers who ship.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full lg:w-6/12 lg:h-auto flex items-center justify-end bg-no-repeat bg-cover mt-6 md:mt-0">
            <img
              alt="sponsors img"
              className="w-full sponsor-img"
              src="/images/groupphoto.png"
            />
          </div> */}
        </div>
      </section>
      <section className="s-container mb-12 md:mb-16">
        <div className="relative isolate overflow-hidden w-full rounded-4xl md:rounded-5xl bg-accent px-6 py-10 md:px-12 md:py-16">
          <span className="pointer-events-none absolute top-0 left-0 right-0 h-28 z-0 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.4px,transparent_1.6px)] [background-size:10px_10px] [mask-image:linear-gradient(to_bottom,#000,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent)]" />
          <div className="relative z-10 flex flex-wrap">
            <div className="w-full py-2 pb-12">
              <h4 className="font-display capitalize text-3xl text-primary dark:text-primary md:text-6xl pt-6 md:pt-0">
                Largest Mobile{' '}
                <small className="font-medium">
                  Focused <br />
                  Developer Conference in Africa.
                </small>
              </h4>
            </div>
            <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20">
              <h3 className="font-display capitalize text-2xl md:text-4xl text-black dark:text-black border-b-8 border-b-primary pb-2">
                HOW IT STARTED
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-lg md:text-xl leading-relaxed text-black dark:text-black">
                Droidcon Kenya was born out of the Android254 and Kotlin Kenya
                communities. The first event in 2018 drew over 150 attendees and
                more than 50 sessions. Across all editions since, we have hosted
                over 3,000 attendees and 230+ sessions.
                <br /> <br />
                The 2025 edition marked a deliberate turn toward professional
                developers, reaching 80.6% professional attendee composition and
                replacing Community Day with a Workshop Day format. That shift
                is what makes the 2026 program possible.
                {/* The three-day gathering will be held in Nairobi, Kenya, from 6th
                to 8th November 2024 and will be the largest in Africa.
                <br />
                <br />
                The conference will include workshops, codelabs and talks geared
                towards Android development to help developers stay ahead of the
                curve. It will be an excellent chance for participants to
                network and connect with their fellow Android enthusiasts from
                the African and continental communities. */}
              </p>
            </div>

            <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20 md:mt-10">
              <h3 className="font-display capitalize text-2xl md:text-4xl text-black dark:text-black border-b-8 border-b-primary mt-4 md:mt-0 pb-2">
                Tickets
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-lg md:text-xl leading-relaxed text-black dark:text-black">
                One ticket, two conferences. A ticket to Droidcon Kenya 2026
                automatically registers you for the co-located Fluttercon Kenya.
                The format has worked since 2024 and gives attendees the full
                picture of Android and Flutter development in one place.
                <br /> <br />
                <span className=" font-medium text-primary md:text-3xl dark:text-primary mt-6 md:mt-10">
                  In 2026, Expect:
                </span>
              </p>
              <ul className="list-disc pl-5 marker:text-primary mt-3 space-y-1">
                <li className="text-black dark:text-black text-xl mb-2">
                  2 days of Android & Kotlin content
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Developer Keynotes
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  A dedicated Droidcon Kenya track
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  An unconference track, shared across both conferences
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Panel discussions with engineering leaders
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Interactive morning engagement sessions
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Networking with Android and Kotlin developers from across the
                  region
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Advanced, practical skill development
                </li>
              </ul>
            </div>
            <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20 md:mt-10">
              <h3 className="font-display capitalize text-2xl md:text-4xl text-black dark:text-black border-b-8 border-b-primary mt-4 md:mt-4 pb-2">
                <span>Event</span> <span>Highlights</span>
              </h3>
              <h4 className="font-display text-primary dark:text-primary text-2xl md:text-3xl mt-6 md:mt-10 capitalize">
                <span>1. Beyond the Sessions</span>
              </h4>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-lg md:text-xl leading-relaxed text-black dark:text-black">
                The unconference track, shared with Fluttercon Kenya, opens the
                floor to attendee-driven discussions and lightning talks, with
                agentic engineering as the anchor theme. Panels bring
                engineering leaders together on the trends shaping the Android
                ecosystem. Morning engagement sessions open each day with speed
                interviewing, resume and LinkedIn reviews, hands-on security
                workshops, building AI agents using Android projects as context,
                multiplatform deep dives, and more.
              </p>
              <h4 className="font-display text-primary dark:text-primary text-2xl md:text-3xl mt-6 md:mt-10 capitalize">
                <span>2. Developer Days</span>
              </h4>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-lg md:text-xl leading-relaxed text-black dark:text-black">
                Two days of Android and Kotlin sessions across multiple tracks:
                advanced Kotlin, mobile performance, multiplatform, security,
                payments, AI and agents, Automotive OS, WearOS, the Swift SDK
                for Android, and more. Content is curated for mid-level and
                senior developers, with speakers from leading tech companies.
              </p>
            </div>
            <div className="w-full mt-8 flex justify-center">
              <img
                className="w-20 md:w-36"
                src="/images/element_left.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <OrganizingTeam organizers={team} />
      <Organizers organizers={company} />
    </div>
  )
}

export async function getServerSideProps() {
  const organizers: Organizer[] = await axios
    .get(`/organizers/${process.env.NEXT_PUBLIC_ORG_SLUG}/team`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { organizers } }
}

export default About

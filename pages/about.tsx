import type { NextPage } from 'next'
import { Organizer } from '../types/types'
import OrganizingTeam from '../components/about/Team'
import axios from '../utils/axios'
import Organizers from '../components/home/Organizers'

interface AboutProps {
  organizers: Organizer[]
}

const About: NextPage<AboutProps> = ({ organizers }) => {
  const team = organizers.filter((o) => o.type === 'individual')
  const company = organizers.filter((o) => o.type === 'company')
  return (
    <div className="min-h-screen">
      <section className="s-container pt-6 md:pt-12 sm:pb-0">
        <div className="w-full rounded-4xl md:rounded-5xl bg-gradient-to-b from-primary from-85% to-accent px-6 py-8 md:px-10 md:py-12">
          <div>
            <div className="flex flex-wrap md:flex-nowrap items-start gap-8">
              <div className="w-full md:flex-1 md:min-w-0">
                <h1 className="sr-only">about droidconke</h1>
                <h2 className="font-display text-accent dark:text-accent text-3xl md:text-5xl lg:text-6xl leading-tight md:leading-[0.92] tracking-tight">
                  Africa&apos;s
                  <br />
                  Largest Mobile
                  <br />
                  Developer
                  <br />
                  Conference.
                </h2>
              </div>
              <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0">
                <img
                  className="w-32 md:w-56 lg:w-72 xl:w-[22rem] h-auto object-contain"
                  src="/images/new-design/droidcon_icon.png"
                  alt=""
                />
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:columns-2 lg:gap-10">
              <p className="text-white dark:text-white text-sm md:text-base leading-relaxed">
                Droidcon is a global conference focused on the engineering of
                Android applications, part of next.app devCon. It provides a
                forum for developers to network, share techniques, announce apps
                and products, and learn and teach.
                <br />
                <br />
                Droidcon Kenya returns for its 7th edition on November 5th and
                6th, 2026, at PrideInn Azure Hotel in Nairobi, as the largest
                Droidcon chapter in Sub-Saharan Africa.
                <br />
                <br />
                Droidcon Kenya is part of next.app devCon, the global home of
                Droidcon, Fluttercon, and the wider mobile developer community.
                <br /> <br />
                Our 2026 theme is Beyond Stacks. The lines between mobile
                ecosystems are thinner every year, and the questions developers
                bring to us no longer sit inside a single stack. Beyond Stacks
                is about the work that happens between platforms, tools, and
                disciplines, from agentic engineering to multiplatform
                architecture to shipping secure, performant apps in African
                markets.
                <br />
                <br />
                The 2025 edition set the foundation, with 198 professional
                attendees and 26 Android sessions selected from 89 submissions,
                co-located with the second Fluttercon Kenya.
                <br />
                <br />
                In 2026, we build on it with a dedicated Droidcon Kenya track, a
                shared unconference floor, and content curated for developers
                who ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s-container mt-4 md:mt-6 sm:pt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          <img
            className="w-full h-auto object-contain"
            src="/images/new-design/revised/happy-smiley.png"
            alt="droidcon Kenya attendees posing together"
          />
          <img
            className="w-full h-auto object-contain"
            src="/images/new-design/revised/sponsor-booth.png"
            alt="Attendees at a sponsor booth during droidcon Kenya"
          />
        </div>
      </section>

      <section className="s-container mt-4 md:mt-6">
        <div className="w-full rounded-4xl md:rounded-5xl bg-primary px-6 py-8 md:px-10 md:py-12">
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            <div className="w-full md:flex-1">
              <h3 className="font-display text-2xl md:text-4xl leading-tight md:leading-none text-accent dark:text-accent">
                HOW IT STARTED
              </h3>
              <p className="mt-4 text-white dark:text-white text-sm md:text-base leading-relaxed">
                Droidcon Kenya was born out of the Android254 and Kotlin Kenya
                communities. The first event in 2018 drew over 150 attendees and
                more than 50 sessions. Across all editions since, we have hosted
                over 3,000 attendees and 230+ sessions.
                <br /> <br />
                The 2025 edition marked a deliberate turn toward professional
                developers, reaching 80.6% professional attendee composition and
                replacing Community Day with a Workshop Day format. That shift
                is what makes the 2026 program possible.
              </p>
            </div>
            <div className="w-full md:w-[28%] flex justify-center shrink-0">
              <img
                className="w-36 md:w-full max-w-[220px] h-auto object-contain"
                src="/images/new-design/revised/legacy-dcke-logo.png"
                alt="The original droidcon Kenya logo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hidden for now — confirmed out, may return. Do not delete. */}
      {/*
      <section className="s-container mt-4 md:mt-6">
        <div className="w-full rounded-4xl md:rounded-5xl bg-primary px-6 py-8 md:px-10 md:py-12">
          <h3 className="font-display text-2xl md:text-4xl leading-tight md:leading-none text-accent dark:text-accent">
            Tickets
          </h3>
          <p className="mt-4 text-white dark:text-white text-sm md:text-base leading-relaxed max-w-3xl">
            One ticket, two conferences. A ticket to Droidcon Kenya 2026
            automatically registers you for the co-located Fluttercon Kenya. The
            format has worked since 2024 and gives attendees the full picture of
            Android and Flutter development in one place.
          </p>
          <p className="font-display text-accent dark:text-accent text-xl md:text-2xl mt-6 md:mt-8">
            In 2026, Expect:
          </p>
          <ul className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 list-disc pl-5 marker:text-accent">
            <li className="text-white dark:text-white text-sm md:text-base">
              2 days of Android &amp; Kotlin content
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              Developer Keynotes
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              A dedicated Droidcon Kenya track
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              An unconference track, shared across both conferences
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              Panel discussions with engineering leaders
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              Interactive morning engagement sessions
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              Networking with Android and Kotlin developers from across the
              region
            </li>
            <li className="text-white dark:text-white text-sm md:text-base">
              Advanced, practical skill development
            </li>
          </ul>
        </div>
      </section>

      <section className="s-container mt-4 md:mt-6">
        <div className="w-full rounded-4xl md:rounded-5xl bg-primary px-6 py-8 md:px-10 md:py-12">
          <h3 className="font-display text-2xl md:text-4xl leading-tight md:leading-none text-accent dark:text-accent">
            <span>Event</span> <span>Highlights</span>
          </h3>
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="font-display text-white dark:text-white text-xl md:text-2xl">
                <span>1. Beyond the Sessions</span>
              </h4>
              <p className="mt-3 text-white dark:text-white text-sm md:text-base leading-relaxed">
                The unconference track, shared with Fluttercon Kenya, opens the
                floor to attendee-driven discussions and lightning talks, with
                agentic engineering as the anchor theme. Panels bring
                engineering leaders together on the trends shaping the Android
                ecosystem. Morning engagement sessions open each day with speed
                interviewing, resume and LinkedIn reviews, hands-on security
                workshops, building AI agents using Android projects as context,
                multiplatform deep dives, and more.
              </p>
            </div>
            <div>
              <h4 className="font-display text-white dark:text-white text-xl md:text-2xl">
                <span>2. Developer Days</span>
              </h4>
              <p className="mt-3 text-white dark:text-white text-sm md:text-base leading-relaxed">
                Two days of Android and Kotlin sessions across multiple tracks:
                advanced Kotlin, mobile performance, multiplatform, security,
                payments, AI and agents, Automotive OS, WearOS, the Swift SDK
                for Android, and more. Content is curated for mid-level and
                senior developers, with speakers from leading tech companies.
              </p>
            </div>
          </div>
          <div className="w-full mt-10 flex justify-center">
            <img
              className="w-20 md:w-36"
              src="/images/element_left.png"
              alt=""
            />
          </div>
        </div>
      </section>
      */}

      <OrganizingTeam organizers={team} />
      <Organizers organizers={company} compact />
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

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
                  Android applications. It provides a forum for developers to
                  network with other developers, share techniques, announce apps
                  and products, and learn and teach.
                  <br />
                  <br />
                  Building on seven successful editions of excellence, Droidcon
                  Kenya continues its legacy as the largest Droidcon chapter in
                  Sub-Saharan Africa. The 2026 edition marks our 7th annual
                  conference, featuring an expanded program of workshops, talks,
                  and sessions dedicated to Android and Kotlin technologies.
                  Attendees will be able to delve into the Android and Kotlin
                  development ecosystems, explore various opportunities and
                  services, and network with industry professionals and
                  companies.
                  <br />
                  <br />
                  Since its inception in 2018, Droidcon Kenya has steadily
                  expanded its reach, attracting speakers and participants
                  worldwide. The 2025 edition celebrated our 6th anniversary
                  milestone with 198 professional attendees and featured 26
                  carefully selected Android sessions from 89 submissions. This
                  special event was co-located with the second Fluttercon Kenya,
                  creating a unique mobile development ecosystem.
                  <br /> <br />
                  Set to take place from November 5th to 6th, the 2026
                  conference will unite global Android and Kotlin developers,
                  exhibitors, tech companies, and recruiters in Nairobi, Kenya,
                  further cementing our position as the premier Android event in
                  Sub-Saharan Africa.
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
        <div className="relative overflow-hidden w-full rounded-4xl md:rounded-5xl bg-accent px-6 py-10 md:px-12 md:py-16">
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
                Droidcon Kenya was born from the passion and dedication of the
                Android254 and Kotlin Kenya communities. The first event in 2018
                attracted over 150 attendees and featured more than 50 sessions.
                Over the editions, the conference has grown exponentially—by
                2025, our community will have expanded to over 3,000 attendees
                across all editions, with 230+ sessions and numerous
                partnerships.
                <br /> <br /> The 2025 edition marked a significant milestone as
                we successfully pivoted to a professional developer focus,
                achieving 80.6% professional attendee composition while
                introducing the Workshop Day format that replaced Community Day.
                This strategic transformation has positioned Droidcon Kenya for
                sustainable growth.
                <br /> <br /> As we approach our 7th edition, Droidcon Kenya has
                firmly established itself as a cornerstone for the mobile
                development community in Africa, creating countless
                opportunities for developers both within and beyond Sub-Saharan
                Africa.
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
                One ticket → Two conferences! When you purchase a ticket to
                Droidcon Kenya 2026, you&apos;re automatically registered to
                attend attend the co-located Fluttercon Kenya event. This
                integrated approach, which has proven highly successful since
                2024, allows to experience the best of both Android and Flutter
                development.
                <br /> <br />
                <span className=" font-medium text-primary md:text-3xl dark:text-primary mt-6 md:mt-10">
                  In 2026, Expect:
                </span>
              </p>
              <ul className="list-disc pl-5 marker:text-primary mt-3 space-y-1">
                <li className="text-black dark:text-black text-xl mb-2">
                  2 days of immersive Android & Kotlin content
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Developer Keynotes
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Curated sessions in a dedicated Drodicon Kenya Track
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Panel discussions with industry leaders
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Unconference track (shared across both conferences)
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Interactive morning engagement sessions
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  200+ Android & Kotlin Developers
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Enhanced networking opportunitiies
                </li>
                <li className="text-black dark:text-black text-xl mb-2">
                  Advanced practical skill development
                </li>
              </ul>
            </div>
            <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20 md:mt-10">
              <h3 className="font-display capitalize text-2xl md:text-4xl text-black dark:text-black border-b-8 border-b-primary mt-4 md:mt-4 pb-2">
                <span>Event</span> <span>Highlights</span>
              </h3>
              <h4 className="font-display text-primary dark:text-primary text-2xl md:text-3xl mt-6 md:mt-10 capitalize">
                <span>1. Interactive Sessions & Workshops</span>
              </h4>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-lg md:text-xl leading-relaxed text-black dark:text-black">
                This year&apos;s program features a rich mix of formats beyond
                the main sessions. An unconference track shared across both
                conferences enables attendee-driven discussions and lightning
                talks. Panel discussions bring together engineering leaders to
                explore trends and challenges in the Android ecosystem. Morning
                engagement sessions kick off each day with high-energy,
                interactive formats including speed interviewing, resume and
                LinkedIn profile reviews, hands-on security workshops, AI agent
                building using Android projects as context, multiplatform deep
                dives, and many more.
              </p>
              <h4 className="font-display text-primary dark:text-primary text-2xl md:text-3xl mt-6 md:mt-10 capitalize">
                <span>2. Developer Days</span>
              </h4>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-lg md:text-xl leading-relaxed text-black dark:text-black">
                The core of the conference features comprehensive Android and
                Kotlin sessions across multiple tracks. The 2026 program offers
                diverse content tailored for mid-level and senior developers,
                with sessions curated around the &quot;Building for Africa&quot;
                theme featuring speakers from leading Sub-Saharan African tech
                companies.
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

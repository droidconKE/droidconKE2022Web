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
    <div
      className="min-h-screen bg-[length:0%] md:bg-[length:88%] bg-[top_360px_left_115%] md:bg-[top_140px_left_148%] bg-no-repeat"
      style={{ backgroundImage: 'url(/images/svg/about-bg.svg)' }}
    >
      <section className="s-container pb-32">
        <div className="w-full flex flex-wrap min-h-screen pt-16 lg:pt-28 xl:pt-16 md:px-0 py-8 lg:py-12">
          <div className="w-full lg:w-9/12 flex items-center">
            <div className="w-full bg-no-repeat bg-center">
              <div className="w-full flex flex-wrap text-left">
                <h2 className="title lowercase dark:text-white-dark w-full">
                  <span>about</span>{' '}
                  <span className="font-medium">droidconke</span>
                </h2>
                <img
                  className="w-[450px] my-4 md:my-4"
                  src="/images/lines.png"
                  alt="line"
                />
                <p className="dark:text-lighter-dark pt-2 text-base md:text-xl pr-0 md:pr-10 md:pb-16">
                  Droidcon is a global conference focused on the engineering of
                  Android applications. It provides a forum for developers to
                  network with other developers, share techniques, announce apps
                  and products, and learn and teach. <br />
                  <br />
                  Building on six successful years of excellence, Droidcon Kenya
                  continues its legacy as the largest Droidcon chapter in
                  Sub-Saharan Africa. The 2025 edition marks our 6th annual
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
                  worldwide. The 2024 edition celebrated our 5th anniversary
                  milestone with 350 participants and featured 40 carefully
                  selected Android sessions from 100 submissions. This special
                  event was co-located with the inaugural Fluttercon Kenya,
                  creating a unique mobile development ecosystem. <br /> <br />
                  The 2025 conference will unite global Android & Kotlin
                  developers, exhibitors, tech companies, and recruiters in
                  Nairobi, Kenya, further cementing our position as the premier
                  Android event in Sub-Saharan Africa.
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
      <section className="w-full bg-lighter dark:bg-black-dark">
        <div className="s-container md:py-12">
          <div className="flex flex-wrap mb-10">
            <div className="w-full -mt-28 md:-mt-32 py-2 pb-12">
              <h4 className="title text-3xl text-primary md:text-6xl dark:text-accent pt-6 md:pt-0 lowercase">
                Largest Android{' '}
                <small className="font-medium">
                  Focused <br />
                  Developer Conference in Africa.
                </small>
              </h4>
            </div>
            <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20">
              <h3 className="title font-medium border-b-8 border-b-accent lowercase">
                HOW IT STARTED
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-xl">
                Droidcon Kenya was born from the passion and dedication of the
                Android254 and Kotlin Kenya communities. The first event in 2018
                attracted over 150 attendees and featured more than 50 sessions.
                Over the years, the conference has grown exponentially—by 2024,
                our community had expanded to over 3,000 attendees across all
                editions, with 200+ sessions and numerous partnerships. <br />{' '}
                <br /> The 2024 edition marked a significant milestone as we
                celebrated our 5th anniversary while also introducing the
                first-ever Fluttercon Kenya, creating an unprecedented
                collaborative environment for mobile developers across both
                ecosystems. <br /> <br /> As we approach our 5th event, Droidcon
                Kenya has firmly established itself as a cornerstone for the
                mobile development community in Africa, creating countless
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

            {/* <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20 md:mt-10">
              <h3 className="title font-medium border-b-8 border-b-accent-2 mt-4 md:mt-0 lowercase">
                PAST DROIDCONKE
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-xl">
              </p>
            </div> */}
            <div className="w-full mt-2 -mb-32 md:-mb-32 pb-20 md:pb-0 flex justify-center pr-0 md:pr-20">
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

/* eslint-disable react/no-unescaped-entities */

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
                  Android applications. Droidcon provides a forum for developers
                  to network with other developers, share techniques, announce
                  apps &products, learn, and teach. <br />
                  <br />
                  Droidcon Kenya stands as the largest Droidcon chapter in
                  Sub-Saharan Africa, hosting an annual conference replete with
                  workshops, talks, and sessions dedicated to Android and Kotlin
                  technologies. Attendees are provided a prime opportunity to
                  delve into the Android and Kotlin development ecosystems,
                  explore various opportunities and services, and network with
                  industry professionals and companies. <br />
                  <br />
                  Since its inception in 2018, Droidcon Kenya has steadily
                  expanded its reach, attracting speakers and participants
                  worldwide. With a seasoned team that has successfully
                  organized four previous Droidcons, boasting over 3000
                  attendees and 200 sessions, we are thrilled to present the 5th
                  in-person event on November 6th - 8th 2024. The conference
                  will unite global Android & Kotlin developers, exhibitioners,
                  tech companies, and recruiters in Nairobi, Kenya, marking yet
                  another conference of its kind in Sub-Saharan Africa.
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
                DROIDCON
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-xl">
                Droidcon is a global developer conference focused on bringing
                Android engineers together. It provides a platform for
                developers to network, share techniques and announce new apps
                and products in the ecosystem.
                <br />
                <br />
                The three-day gathering will be held in Nairobi, Kenya, from 6th
                to 8th November 2024 and will be the largest in Africa.
                <br />
                <br />
                The conference will include workshops, codelabs and talks geared
                towards Android development to help developers stay ahead of the
                curve. It will be an excellent chance for participants to
                network and connect with their fellow Android enthusiasts from
                the African and continental communities.
              </p>
            </div>

            <div className="w-full md:w-12/12 ml-auto pr-0 md:pr-20 md:mt-10">
              <h3 className="title font-medium border-b-8 border-b-accent-2 mt-4 md:mt-0 lowercase">
                PAST DROIDCONKE
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-xl">
                We hosted the first-ever DroidconKE event in October 2018. More
                than 500 people from various parts of the world were in
                attendance.
                <br />
                <br />
                This year, we will host the 5th in-person event. Tech
                communities from the East African Region and continental members
                will be present. Participants will have an excellent chance to
                learn about Android development, opportunities and services in
                the ecosystem.
              </p>
            </div>
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

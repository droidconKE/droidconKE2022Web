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
        <div className="w-full flex flex-wrap min-h-screen pt-16 md:px-0 py-8 lg:py-12">
          <div className="w-full lg:w-6/12 flex items-center">
            <div className="w-full bg-no-repeat bg-center">
              <div className="w-full flex flex-wrap text-left">
                <h2 className="title lowercase">
                  <span>about</span>{' '}
                  <span className="font-medium">droidconke</span>
                </h2>
                <img
                  className="w-[450px] my-4 md:my-4"
                  src="/images/lines.png"
                  alt="line"
                />
                <p className="text-light dark:text-lighter-dark pt-2 text-base md:text-xl pr-0 md:pr-10">
                  Droidcon is a global conference focused on the engineering of
                  Android applications. Droidcon provides a forum for developers
                  to network with other developers, share techniques, announce
                  apps and products, and to learn and teach.
                  <br /> <br />
                  This two-day developer focused gathering will be held in
                  Nairobi Kenya on August 6th to 8th 2020 and will be the
                  largest of its kind in Africa.
                  <br /> <br />
                  It will have workshops and codelabs focused on the building of
                  Android applications and will give participants an excellent
                  chance to learn about the local Android development ecosystem,
                  opportunities and services as well as meet the engineers and
                  companies who work on them.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 lg:h-auto flex items-center justify-end bg-no-repeat bg-cover mt-6 md:mt-0">
            <img
              alt="sponsors img"
              className="w-full sponsor-img"
              src="/images/groupphoto.png"
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-lighter dark:bg-black-dark">
        <div className="s-container md:py-12">
          <div className="flex flex-wrap mb-10">
            <div className="w-full -mt-28 md:-mt-36 py-2 pb-12">
              <h4 className="title text-3xl text-primary md:text-6xl dark:text-accent pt-6 md:pt-0 lowercase">
                Largest Android Focused <br />
                Developer Conference <br />
                in Africa.
              </h4>
            </div>
            <div className="w-full md:w-6/12 ml-auto pr-0 md:pr-20">
              <h3 className="title font-medium border-b-8 border-b-accent lowercase">
                DROIDCON
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-xl">
                Droidcon is the largest global network of developer conferences
                which brings together the industry's foremost experts dedicated
                to advancing the Android platform. Droidcon engages a global
                network of over 25,000+ developers attending our events in 22
                cities.
                <br /> <br />
                Our first Droidcon conference was held in 2009 in Berlin and
                since then it has spread its influence across the globe and has
                established itself as the world's foremost community-driven
                conference format. Droidcon is the place to meet the
                international Android community, learn from expert speakers,
                dive into the latest Android advances and explore cutting edge
                technologies.
              </p>
            </div>

            <div className="w-full md:w-6/12 ml-auto pr-0 md:pr-20">
              <h3 className="title font-medium border-b-8 border-b-accent-2 mt-4 md:mt-0 lowercase">
                PAST DROIDCONKE
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 text-xl">
                Droidcon is the largest global network of developer conferences
                which brings together the industry's foremost experts dedicated
                to advancing the Android platform. Droidcon engages a global
                network of over 25,000+ developers attending our events in 22
                cities.
                <br /> <br />
                Our first Droidcon conference was held in 2009 in Berlin and
                since then it has spread its influence across the globe and has
                established itself as the world's foremost community-driven
                conference format. Droidcon is the place to meet the
                international Android community, learn from expert speakers,
                dive into the latest Android advances and explore cutting edge
                technologies.
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
  const organizers = await axios
    .get(`/organizers/${process.env.ORG_SLUG}/team`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { organizers } }
}

export default About

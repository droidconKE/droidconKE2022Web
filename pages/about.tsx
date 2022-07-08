/* eslint-disable react/no-unescaped-entities */

import type { NextPage } from 'next'
import { Organizer } from '../types/types'
import OrganizingTeam from '../components/about/Team'
import axios from '../utils/axios'

interface AboutProps {
  organizers: Organizer[]
}

const About: NextPage<AboutProps> = ({ organizers }) => {
  return (
    <div
      className="bg-[length:46%] md:bg-[length:47%] bg-[top_340px_left_110%] md:bg-[top_100px_left_110%] bg-no-repeat"
      style={{ backgroundImage: 'url(/images/kenyatta.png)' }}
    >
      <section className="l-container mt-8 md:mt-8 pb-6 md:pb-12">
        <div className="w-full flex flex-wrap px-4 h-auto lg:h-auto pt-16 md:px-0 py-8 lg:py-20">
          <div className="w-full lg:w-5/12 flex items-center">
            <div className="w-full bg-no-repeat bg-center">
              <div className="w-full flex flex-wrap text-left">
                <h2 className="font-black black  text-4xl md:text-1xl">
                  ABOUT <br />
                  DROIDCONKE
                </h2>
                <p className="text-light dark:text-lighter-dark py-5 md:py-8">
                  Droidcon is a global conference focused on the engineering of
                  Android applications. Droidcon provides a forum for developers
                  to network with other developers, share techniques, announce
                  apps and products, and to learn and teach.
                  <br />
                  This two-day developer focused gathering will be held in
                  Nairobi Kenya on August 6th to 8th 2020 and will be the
                  largest of its kind in Africa.
                  <br />
                  It will have workshops and codelabs focused on the building of
                  Android applications and will give participants an excellent
                  chance to learn about the local Android development ecosystem,
                  opportunities and services as well as meet the engineers and
                  companies who work on them.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 lg:h-auto mt-2 flex items-center justify-end bg-no-repeat bg-cover">
            <img
              alt="sponsors img"
              className="w-full sponsor-img"
              src="/images/groupphoto.png"
            />
          </div>
        </div>
      </section>
      <section className="w-full l-container md:px-32 sm:px-10">
        <div className=" mx-auto container px-4 md:py-12">
          <div className="flex flex-wrap mb-10">
            <div className="w-full flex flex-wrap justify-center mt-4 md:mt-0 py-2 pb-12">
              <h4 className="title text-primary font-bold pt-6 md:pt-0">
                Largest Android Focused <br />
                Developer Conference <br />
                in Africa.
              </h4>
            </div>
            <div className="w-full md:w-6/12 ml-auto px-2 md:px-8">
              <h3 className="title-px-36 black underline-green mt-4 md:mt-0">
                droidcon
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 p gray">
                Droidcon is the largest global network of developer conferences
                which brings together the industry's foremost experts dedicated
                to advancing the Android platform. Droidcon engages a global
                network of over 25,000+ developers attending our events in 22
                cities.
                <br />
                Our first Droidcon conference was held in 2009 in Berlin and
                since then it has spread its influence across the globe and has
                established itself as the world's foremost community-driven
                conference format. Droidcon is the place to meet the
                international Android community, learn from expert speakers,
                dive into the latest Android advances and explore cutting edge
                technologies.
              </p>
            </div>

            <div className="w-full md:w-6/12 ml-auto px-2 md:px-8">
              <h3 className="title-px-36 black underline-green mt-4 md:mt-0">
                droidcon
              </h3>
              <p className="mt-2 md:mt-4 mb-4 md:mb-0 p gray">
                Droidcon is the largest global network of developer conferences
                which brings together the industry's foremost experts dedicated
                to advancing the Android platform. Droidcon engages a global
                network of over 25,000+ developers attending our events in 22
                cities.
                <br />
                Our first Droidcon conference was held in 2009 in Berlin and
                since then it has spread its influence across the globe and has
                established itself as the world's foremost community-driven
                conference format. Droidcon is the place to meet the
                international Android community, learn from expert speakers,
                dive into the latest Android advances and explore cutting edge
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full container mx-auto h-auto md:px-32 px-4">
        <div className="flex flex-wrap md:py-16">
          <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
            <h3 className="title text-primary font-bold pt-6 md:pt-0">
              Organizing team
            </h3>
          </div>
        </div>
      </section>
      <OrganizingTeam organizers={organizers} />
    </div>
  )
}

export async function getServerSideProps() {
  const organizers = await axios
    .get(`/organizers/${process.env.ORG_SLUG}/team?type=individual`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { organizers } }
}

export default About

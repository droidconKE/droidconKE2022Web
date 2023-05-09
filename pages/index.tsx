import type { NextPage } from 'next'
import Link from 'next/link'
import { Banner } from '../components/home/Banner'
import { EventTypes } from '../components/home/EventTypes'
import { Gallery } from '../components/home/Gallery'
import Organizers from '../components/home/Organizers'
import { Sponsor } from '../components/home/Sponsor'
import SponsorsList from '../components/home/SponsorsList'
import { Organizer, Sponsor as SponsorType } from '../types/types'
import axios from '../utils/axios'

interface HomeProps {
  organizers: Organizer[]
  sponsors: SponsorType[]
}

const Home: NextPage<HomeProps> = ({ organizers, sponsors }) => {
  return (
    <div
      className="bg-[length:0%] md:bg-[length:47%] bg-[top_340px_left_110%] md:bg-[top_100px_left_110%] bg-no-repeat"
      style={{ backgroundImage: 'url(/images/kenyatta.png)' }}
    >
      <Banner />
      <section className="s-container mt-8 md:mt-0 pb-6 md:pb-12">
        <div className="flex flex-wrap">
          <div className="w-full md:w-7/12">
            <h2 className="title lowercase dark:text-accent-dark">
              <span>about</span> <span className="font-medium">droidconke</span>
            </h2>
            <p className="text-light dark:text-lighter-dark py-5 md:py-8 text-xl md:text-2xl">
              This 4th edition of droidconKE will include several tech
              communities from the East African Region and continental members.
              It will give participants an excellent chance to learn about the
              local Android development ecosystem, opportunities and services as
              well as meet the engineers and companies who work on them.
            </p>
            <Link href="/about">
              <a className="lowercase text-xl font-bold">
                more about droidconke
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full md:w-5/12 py-6">
            <img
              className="w-[300px] md:w-[450px]"
              src="/images/oporo.png"
              alt="oporo"
            />
          </div>
        </div>
      </section>
      <EventTypes />
      <SponsorsList sponsors={sponsors} />
      <Sponsor />
      <Gallery />
      <Organizers organizers={organizers} />
    </div>
  )
}

export async function getServerSideProps() {
  const organizers = await axios
    .get(`/organizers/${process.env.NEXT_PUBLIC_ORG_SLUG}/team?type=company`)
    .then((response) => {
      return response.data.data
    })

  const sponsors = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/sponsors`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { organizers, sponsors } }
}

export default Home

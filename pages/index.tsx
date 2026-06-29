import type { NextPage } from 'next'
import { Banner } from '../components/home/Banner'
import { EventTypes } from '../components/home/EventTypes'
import { Gallery } from '../components/home/Gallery'
import Organizers from '../components/home/Organizers'
import SponsorsList from '../components/home/SponsorsList'
import { Sponsor as SponsorType } from '../types/types'
import axios from '../utils/axios'
import Marquee from '../components/home/Marquee'
import About from '../components/home/About'

interface HomeProps {
  sponsors: SponsorType[]
}

const Home: NextPage<HomeProps> = ({ sponsors }) => {
  return (
    <div className="bg-[length:0%] md:bg-[length:47%] bg-[top_340px_left_110%] md:bg-[top_100px_left_110%] bg-no-repeat">
      <Marquee />
      <Banner />
      <About />
      <EventTypes />
      <SponsorsList sponsors={sponsors} year={26} showSponsors />
      <Gallery />
      <Organizers />
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

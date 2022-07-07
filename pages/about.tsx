import { Banner } from '../components/about/Banner'
import Link from 'next/link'
import type { NextPage } from 'next'
import { Organizer } from '../types/types'
import Organizers from '../components/about/Organizers'
import axios from '../utils/axios'

interface HomeProps {
  organizers: Organizer[]
}

const About: NextPage<HomeProps> = ({ organizers }) => {
  return (
    <div
      className="bg-[length:46%] md:bg-[length:47%] bg-[top_340px_left_110%] md:bg-[top_100px_left_110%] bg-no-repeat"
      style={{ backgroundImage: 'url(/images/kenyatta.png)' }}
    >
      <Banner />
      <Organizers organizers={organizers} />
    </div>
  )
}

export async function getServerSideProps() {
  const organizers = await axios
    .get(`/organizers/${process.env.ORG_SLUG}/team?type=company`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { organizers } }
}

export default About

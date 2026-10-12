import Head from 'next/head'
import type { NextPage } from 'next'
import Marquee from '../components/home/Marquee'
import { Hero } from '../components/beyond-stacks/Hero'
import { Overview } from '../components/beyond-stacks/Overview'
import { Audience } from '../components/beyond-stacks/Audience'
import { Pricing } from '../components/beyond-stacks/Pricing'
import { SessionFormats } from '../components/beyond-stacks/SessionFormats'
import { CommunityStrands } from '../components/beyond-stacks/CommunityStrands'
import { Faq } from '../components/beyond-stacks/Faq'

const BeyondStacks: NextPage = () => (
  <>
    <Head>
      <title>Beyond Stacks Track</title>
      <meta
        name="description"
        content="A shared 3rd track across both conference days for the entire engineering ecosystem."
      />
    </Head>
    <Marquee />
    <Hero />
    <Overview />
    <Audience />
    <Pricing />
    <SessionFormats />
    <CommunityStrands />
    <Faq />
  </>
)

export default BeyondStacks

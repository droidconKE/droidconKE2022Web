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
      <title>Beyond Stacks</title>
      <meta
        name="description"
        content="Engineering goes beyond mobile. Build beyond your usual stack, explore new technologies, and connect with engineers solving problems across the wider ecosystem."
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

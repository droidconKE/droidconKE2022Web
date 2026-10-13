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

const TITLE = 'Beyond Stacks | DroidconKe'
const DESCRIPTION =
  'Engineering goes beyond mobile. Build beyond your usual stack, explore new technologies, and connect with engineers solving problems across the wider ecosystem.'
const URL = 'https://droidcon.co.ke/beyond-stacks'

const BeyondStacks: NextPage = () => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta key="description" name="description" content={DESCRIPTION} />
      <meta key="og:title" property="og:title" content={TITLE} />
      <meta
        key="og:description"
        property="og:description"
        content={DESCRIPTION}
      />
      <meta key="og:url" property="og:url" content={URL} />
      <meta key="twitter:title" name="twitter:title" content={TITLE} />
      <meta
        key="twitter:description"
        name="twitter:description"
        content={DESCRIPTION}
      />
      <meta key="twitter:url" name="twitter:url" content={URL} />
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

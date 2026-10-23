import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import Marquee from '../components/home/Marquee'
import { Hero } from '../components/beyond-stacks/Hero'
import { Overview } from '../components/beyond-stacks/Overview'
import { Audience } from '../components/beyond-stacks/Audience'
import { Pricing } from '../components/beyond-stacks/Pricing'
import { SessionFormats } from '../components/beyond-stacks/SessionFormats'
import { Schedule } from '../components/beyond-stacks/Schedule'
import { CommunityStrands } from '../components/beyond-stacks/CommunityStrands'
import { Faq } from '../components/beyond-stacks/Faq'
import { BEYOND_STACKS_EVENT_SLUG } from '../constant/constants'
import type { Event, Schedule as ScheduleType } from '../types/types'
import axios from '../utils/axios'
import { eventVenue, feedbackWindowState } from '../utils/helpers'

// The name and the page's own line about what it is, which is what a tab,
// a search result and a shared card all show before anything else. The
// description picks up from there rather than repeating the line.
const TITLE = 'Beyond Stacks: Engineering goes beyond mobile'
const DESCRIPTION =
  'Build beyond your usual stack, explore new technologies, and connect with engineers solving problems across the wider ecosystem.'
const URL = 'https://droidcon.co.ke/beyond-stacks'

// Only what differs from the layout. Its keys carry everything else —
// among them og:image, deliberately: every page shares with the branded
// cover, which has the logo, the dates and the venue on it. A photograph
// has none of those, and a 3:2 one is cropped by the 1.91:1 card.

type BeyondStacksProps = {
  schedule: ScheduleType | null
  event: Event | null
}

const BeyondStacks: NextPage<BeyondStacksProps> = ({ schedule, event }) => (
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
    </Head>
    <Marquee />
    <Hero />
    <Overview />
    <Audience />
    <Pricing />
    {/* Only once the event has a programme to show; until then the page
        reads as it did before the schedule existed. */}
    {schedule && Object.values(schedule).some((day) => day.length) && (
      <Schedule
        schedules={schedule}
        eventSlug={BEYOND_STACKS_EVENT_SLUG}
        venue={eventVenue(event)}
        feedbackOpen={feedbackWindowState(event) === 'open'}
      />
    )}
    <SessionFormats />
    <CommunityStrands />
    <Faq />
  </>
)

export default BeyondStacks

// Static, and rebuilt in the background at most every five minutes, so the
// page stays fast and a schedule change reaches it without a deploy.
export const getStaticProps: GetStaticProps<BeyondStacksProps> = async () => {
  const get = (path: string) =>
    axios
      .get(`/events/${BEYOND_STACKS_EVENT_SLUG}${path}`)
      .then((response) => response.data?.data ?? null)
      .catch(() => null)

  const [schedule, event] = await Promise.all([
    get('/schedule?grouped=true'),
    get(''),
  ])

  // A failed fetch during a background rebuild throws, which keeps serving
  // the last good page instead of dropping the schedule from it. At build
  // time (CI has no API) the page is built without the section instead.
  if (!schedule && process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
    throw new Error('Beyond Stacks schedule could not be fetched')
  }

  return { props: { schedule, event }, revalidate: 300 }
}

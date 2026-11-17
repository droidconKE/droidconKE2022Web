import Head from 'next/head'
import type { GetStaticProps, NextPage } from 'next'
import { PHASE_PRODUCTION_BUILD } from 'next/constants'
import { Hero } from '../../components/beyond-stacks/Hero'
import { Schedule } from '../../components/beyond-stacks/Schedule'
import type { Event, Schedule as ScheduleType } from '../../types/types'
import axios from '../../utils/axios'
import { eventVenue, feedbackWindowState } from '../../utils/helpers'

const EVENT_SLUG = process.env.NEXT_PUBLIC_BEYOND_STACKS_EVENT_SLUG_2026 ?? ''
const FROM = '/past-events/beyond-stacks-2026'
const TITLE = 'Beyond Stacks 2026: Sessions'

type BeyondStacks2026Props = {
  schedule: ScheduleType | null
  event: Event | null
}

// What ran on the Beyond Stacks track in 2026: its banner and its sessions.
// The sales sections of /beyond-stacks are left out, as there is nothing
// left to buy.
const BeyondStacks2026: NextPage<BeyondStacks2026Props> = ({
  schedule,
  event,
}) => (
  <>
    <Head>
      <title>{TITLE}</title>
      <meta key="og:title" property="og:title" content={TITLE} />
    </Head>
    <Hero past />
    {schedule && Object.values(schedule).some((day) => day.length) && (
      <Schedule
        schedules={schedule}
        eventSlug={EVENT_SLUG}
        venue={eventVenue(event)}
        feedbackOpen={feedbackWindowState(event) === 'open'}
        from={FROM}
        year={26}
        showStar={false}
      />
    )}
  </>
)

export default BeyondStacks2026

export const getStaticProps: GetStaticProps<
  BeyondStacks2026Props
> = async () => {
  const get = (path: string) =>
    axios
      .get(`/events/${EVENT_SLUG}${path}`)
      .then((response) => response.data?.data ?? null)
      .catch(() => null)

  const [schedule, event] = await Promise.all([
    get('/schedule?grouped=true'),
    get(''),
  ])

  // As on /beyond-stacks: a failed background rebuild keeps the last good
  // page; at build time (CI has no API) the page is built without sessions.
  if (!schedule && process.env.NEXT_PHASE !== PHASE_PRODUCTION_BUILD) {
    throw new Error('Beyond Stacks 2026 schedule could not be fetched')
  }

  return { props: { schedule, event }, revalidate: 300 }
}

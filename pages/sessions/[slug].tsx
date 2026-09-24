import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SessionDetails } from '../../components/sessions/SessionDetails'
import { ShareSessionAndFeedback } from '../../components/sessions/ShareSessionAndFeedback'
import { SpeakersDetails } from '../../components/sessions/SpeakersDetails'
import { Event, Session as SessionProp } from '../../types/types'
import axios from '../../utils/axios'
import {
  eventVenue,
  feedbackWindowState,
  isCurrentEventSlug,
  resolveEventSlug,
} from '../../utils/helpers'

interface SessionPageProp {
  session: SessionProp
  event: Event | null
  isCurrentEvent: boolean
  eventSlug: string
}

const Session: NextPage<SessionPageProp> = ({
  session,
  event,
  isCurrentEvent,
  eventSlug,
}) => {
  const router = useRouter()

  const navBackLink = router.query?.from ? router.query?.from : '/sessions'

  const image =
    session.session_image ??
    'https://droidcon.co.ke/images/new-design/revised/dcke-cover.png'

  // The organizer's feedback window as a tri-state: before the event nothing
  // renders, during it the actions show, after it a disabled chip says so.
  const feedbackWindow = feedbackWindowState(event)

  return (
    <>
      <Head>
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
      </Head>
      <div className="s-container mt-4 md:mt-6 mb-10 md:mb-16 space-y-5 md:space-y-6">
        <Link
          href={String(navBackLink)}
          className="inline-flex items-center text-primary dark:text-accent-dark hover:opacity-80 text-sm md:text-base font-medium transition-opacity"
        >
          <i className="fa fa-arrow-left mr-2" /> back
        </Link>
        <SpeakersDetails session={session} />
        <SessionDetails
          session={session}
          feedbackWindow={feedbackWindow}
          eventSlug={eventSlug}
        />
        <ShareSessionAndFeedback
          session={session}
          venue={eventVenue(event)}
          isCurrentEvent={isCurrentEvent}
          feedbackWindow={feedbackWindow}
          eventSlug={eventSlug}
        />
      </div>
    </>
  )
}
export async function getServerSideProps({
  query,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any
}) {
  const { slug, event: eventParam } = query

  // Session slugs are unique per event, not globally, so a session opened from
  // a past-event page carries the event it belongs to. Current-event links
  // leave it off and fall back to the event being run now.
  const eventSlug = resolveEventSlug(eventParam)

  const [session, event] = await Promise.all([
    axios
      .get(`/events/${eventSlug}/schedule/${slug}`)
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      }),
    axios
      .get(`/events/${eventSlug}`)
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      }),
  ])

  // Pass data to the page via props

  if (!session) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      session,
      event,
      // Saving, scheduling and reviewing only apply to the event being run now.
      isCurrentEvent: isCurrentEventSlug(eventParam),
      // The event this session belongs to — feedback from this page posts
      // under it, so a past session never lands in the current event's form.
      eventSlug,
    },
  }
}
export default Session

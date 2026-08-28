import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SessionDetails } from '../../components/sessions/SessionDetails'
import { ShareSessionAndFeedback } from '../../components/sessions/ShareSessionAndFeedback'
import { SpeakersDetails } from '../../components/sessions/SpeakersDetails'
import { Event, Session as SessionProp } from '../../types/types'
import axios from '../../utils/axios'

interface SessionPageProp {
  session: SessionProp
  event: Event | null
}

const Session: NextPage<SessionPageProp> = ({ session, event }) => {
  const router = useRouter()

  const navBackLink = router.query?.from ? router.query?.from : '/sessions'

  const image =
    session.session_image ??
    'https://droidcon.co.ke/images/new-design/revised/dcke-cover.png'

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
        <SessionDetails session={session} />
        <ShareSessionAndFeedback
          session={session}
          venue={
            event
              ? [event.venue_name, event.venue_address]
                  .filter(Boolean)
                  .join(', ')
              : undefined
          }
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
  const { slug } = query

  const [session, event] = await Promise.all([
    axios
      .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/schedule/${slug}`)
      .then((response) => {
        return response.data.data
      })
      .catch(() => {
        return null
      }),
    axios
      .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}`)
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
  return { props: { session, event } }
}
export default Session

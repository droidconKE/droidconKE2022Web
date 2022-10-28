import { getCookie } from 'cookies-next'
import { NextPage } from 'next'
import Link from 'next/link'
import { SessionDetails } from '../../components/sessions/SessionDetails'
import { ShareSessionAndFeedback } from '../../components/sessions/ShareSessionAndFeedback'
import { SpeakersDetails } from '../../components/sessions/SpeakersDetails'
import { Session as SessionProp } from '../../types/types'
import axios from '../../utils/axios'

interface SessionPageProp {
  session: SessionProp
}

const Session: NextPage<SessionPageProp> = ({ session }) => {
  return (
    <div className="w-full mt-16 mb-0">
      <section className="w-full bg-dark dark:bg-black-dark">
        <div className="s-container mt-8 md:mt-0 py-2 md:py-4">
          <div className="w-full flex items-center space-x-5">
            <Link href="/sessions">
              <a className="text-white dark:text-white-dark">
                <i
                  className="fa fa-arrow-left mr-3"
                  style={{ transform: 'scale(2.0,0.8)' }}
                />{' '}
                back
              </a>
            </Link>
            <h3 className="lowercase text-2xl md:text-3xl text-white dark:text-white-dark">
              Session Details
            </h3>
          </div>
        </div>
      </section>
      <section className="s-container py-2 md:py-4">
        <div className="w-full flex flex-wrap items-start py-0 md:py-3">
          <SpeakersDetails session={session} />
          <SessionDetails session={session} />
          <ShareSessionAndFeedback session={session} />
        </div>
      </section>
    </div>
  )
}
export async function getServerSideProps({
  query,
  res,
  req,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  query: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  res: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  req: any
}) {
  const { slug } = query

  axios.defaults.headers.common.Authorization = `Bearer ${getCookie('token', {
    req,
    res,
  })}`

  const session = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/schedule/${slug}`)
    .then((response) => {
      return response.data.data
    })
    .catch(() => {
      return null
    })

  // Pass data to the page via props

  if (!session) {
    return {
      notFound: true,
    }
  }
  return { props: { session } }
}
export default Session

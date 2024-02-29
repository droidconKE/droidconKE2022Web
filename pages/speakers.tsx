import axios from '../utils/axios'
import { Speaker, Session } from '../types/types'
// import { KeynoteSpeakers } from '../components/speakers/KeynoteSpeakers'
import { SpeakersList } from '../components/speakers/SpeakersList'

export default function SpeakersPage({
  speakers,
  sessions,
}: {
  speakers: Speaker[]
  sessions: Session[]
}) {
  return (
    <div className="w-full mt-10 lg:mt-20 xl:mt-10 mb-0">
      <section className="w-full bg-dark dark:bg-black-dark">
        <div className="s-container mt-8 md:mt-0 py-2 md:py-4">
          <div className="w-full flex items-center space-x-5 mt-5">
            <h1 className="lowercase text-2xl md:text-3xl text-white dark:text-white-dark">
              Speakers
            </h1>
          </div>
        </div>
      </section>
      <section className="bg-[url('/images/element_left.png'),url('/images/svg/login-dark.svg')] bg-no-repeat bg-[position:bottom_100.17%_right_110%,bottom_100.2%_left_100%] md:bg-[position:bottom_102.2%_right_109%,bottom_103%_left_103%] bg-[length:100px,_110px] md:bg-[length:350px,_450px]">
        <div className="l-container py-8 md:py-16">
          {/* <div>
            <h3 className="text-3xl md:text-4xl text-primary dark:text-accent font-medium w-full mt-6 md:mt-0 lowercase">
              <span className="font-black">keynote</span> speakers
            </h3>
            <div className="py-10">
              <KeynoteSpeakers />
            </div>
          </div> */}
          <SpeakersList sessions={sessions} speakers={speakers} />
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const speakers = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/speakers?per_page=100`)
    .then((response) => {
      return response.data.data
    })

  const sessions = await axios
    .get(`/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/sessions?per_page=100`)
    .then((response) => {
      return response.data.data
    })

  // Pass data to the page via props
  return { props: { speakers, sessions } }
}

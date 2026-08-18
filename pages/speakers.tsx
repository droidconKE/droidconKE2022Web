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
    <div className="s-container my-10 md:my-16">
      {/* Header card */}
      <section className="w-full bg-primary rounded-4xl md:rounded-5xl px-6 py-8 md:px-12 md:py-10">
        <div className="flex items-center text-white/80 text-sm md:text-base font-medium mb-3">
          <div className="w-6 h-px bg-white/80 mr-3" />
          the line-up
        </div>
        <h1 className="text-accent font-display text-5xl md:text-7xl leading-none">
          Speakers
        </h1>
      </section>
      <div className="mt-8 md:mt-12">
        {/* <div>
          <h3 className="text-3xl md:text-4xl text-primary dark:text-accent font-medium w-full mt-6 md:mt-0 lowercase">
            <span className="font-black">keynote</span> speakers
          </h3>
          <div className="py-10">
            <KeynoteSpeakers />
          </div>
        </div> */}
        <SpeakersList sessions={sessions} speakers={speakers} hideTitle />
      </div>
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

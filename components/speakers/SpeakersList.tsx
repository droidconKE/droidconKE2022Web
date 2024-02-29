import { Session, Speaker } from '../../types/types'
import { SpeakerCard } from './SpeakerCard'

export const SpeakersList = ({
  speakers,
  sessions,
}: {
  speakers: Speaker[]
  sessions: Session[]
}) => (
  <div>
    <h3 className="text-3xl md:text-4xl text-primary dark:text-accent font-medium w-full mt-6 lowercase md:mt-12">
      <span className="font-black">All</span> speakers
    </h3>
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-16">
        {speakers.map((speaker) => {
          const speakerSession = sessions.find((s) =>
            s.speakers.find((sp) => sp.name === speaker.name)
          )

          return (
            <SpeakerCard
              speaker={speaker}
              slug={speakerSession?.slug}
              key={speaker.name}
            />
          )
        })}
      </div>
    </div>
  </div>
)

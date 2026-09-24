import { Session, Speaker } from '../../types/types'
import { SpeakerCard } from './SpeakerCard'

export const SpeakersList = ({
  speakers,
  sessions,
  hideTitle = false,
  eventSlug,
}: {
  speakers: Speaker[]
  sessions: Session[]
  // eslint-disable-next-line react/require-default-props
  hideTitle?: boolean
  // eslint-disable-next-line react/require-default-props
  eventSlug?: string
}) => (
  <div>
    {!hideTitle && (
      <h3 className="font-display capitalize text-3xl md:text-4xl text-primary dark:text-accent-dark w-full">
        all speakers
      </h3>
    )}
    <div className={hideTitle ? 'pb-8 md:pb-10' : 'py-8 md:py-10'}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 md:gap-y-10">
        {speakers.map((speaker) => {
          const speakerSession = sessions.find((s) =>
            s.speakers.find((sp) => sp.name === speaker.name)
          )

          return (
            <SpeakerCard
              speaker={speaker}
              slug={speakerSession?.slug}
              eventSlug={eventSlug}
              key={speaker.name}
            />
          )
        })}
      </div>
    </div>
  </div>
)

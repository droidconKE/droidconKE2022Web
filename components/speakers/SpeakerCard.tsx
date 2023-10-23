import Link from 'next/link'
import { Speaker } from '../../types/types'

export const SpeakerCard = ({
  speaker,
  slug,
}: {
  speaker: Speaker
  // eslint-disable-next-line react/require-default-props
  slug?: string
}) => (
  <div key={speaker.name}>
    <Link
      href={
        slug
          ? `/sessions/${slug}?from=/speakers`
          : speaker.linkedin ?? String(speaker.twitter)
      }
    >
      <a
        className="bg-accent-3 dark:bg-accent-3-dark rounded-lg border-accent-3 dark:border-accent-3-dark"
        target={slug ? undefined : '_blank'}
        rel={slug ? undefined : 'noreferrer noopener'}
      >
        <img
          className="rounded-t-lg"
          src={speaker.avatar ?? '/images/icon.png'}
          alt={speaker.name}
        />
        <div className="p-2 md:p-4 text-center rounded-b-lg mt-auto">
          <h4 className="text-base md:text-xl">{speaker.name}</h4>
          <p className="text-xs md:text-sm">{speaker.tagline}</p>
        </div>
      </a>
    </Link>
  </div>
)

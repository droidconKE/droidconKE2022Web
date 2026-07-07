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
  <div key={speaker.name} className="h-full">
    <Link
      href={
        slug
          ? `/sessions/${slug}?from=/speakers`
          : (speaker.linkedin ?? String(speaker.twitter))
      }
      className="group flex flex-col h-full rounded-4xl overflow-hidden bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md hover:shadow-xl hover:border-accent transition-all duration-200"
      target={slug ? undefined : '_blank'}
      rel={slug ? undefined : 'noreferrer noopener'}
    >
      {/* duotone photo — white highlights, blue shadows (screen over blue) */}
      <div className="relative overflow-hidden bg-blue-600">
        <img
          className="w-full aspect-square object-cover grayscale contrast-125 mix-blend-screen group-hover:scale-105 transition-transform duration-300"
          src={speaker.avatar ?? '/images/icon.png'}
          alt={speaker.name}
        />
        <span className="pointer-events-none absolute inset-0 mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1.4px)] [background-size:6px_6px]" />
      </div>
      <div className="p-3 md:p-4 text-center flex-1 flex flex-col justify-center">
        <h4 className="text-sm md:text-lg font-bold text-accent dark:text-accent">
          {speaker.name}
        </h4>
        <p className="text-xs md:text-sm text-black dark:text-white-dark mt-1 line-clamp-2">
          {speaker.tagline}
        </p>
      </div>
    </Link>
  </div>
)

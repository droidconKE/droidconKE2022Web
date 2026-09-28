import Link from 'next/link'
import { Speaker } from '../../types/types'
import { sessionHref } from '../../utils/helpers'

export const SpeakerCard = ({
  speaker,
  slug,
  eventSlug,
}: {
  speaker: Speaker
  // eslint-disable-next-line react/require-default-props
  slug?: string
  // eslint-disable-next-line react/require-default-props
  eventSlug?: string
}) => {
  // A missing social must not become a link: `linkedin ?? String(twitter)`
  // rendered the string "undefined" as an href, and the whole card navigated
  // to /undefined. Only wrap the card when there is a real destination.
  const socialHref = speaker.linkedin || speaker.twitter

  const body = (
    <>
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
    </>
  )

  return (
    <div key={speaker.name} className="h-full">
      {slug || socialHref ? (
        <Link
          href={slug ? sessionHref(slug, '/speakers', eventSlug) : socialHref!}
          className="group flex flex-col h-full rounded-4xl overflow-hidden bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md hover:shadow-xl hover:border-accent transition-all duration-200"
          target={slug ? undefined : '_blank'}
          rel={slug ? undefined : 'noreferrer noopener'}
        >
          {body}
        </Link>
      ) : (
        // No destination at all: a still card, without the hover affordances
        // that would promise a click the card cannot honour.
        <div className="flex flex-col h-full rounded-4xl overflow-hidden bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md">
          {body}
        </div>
      )}
    </div>
  )
}

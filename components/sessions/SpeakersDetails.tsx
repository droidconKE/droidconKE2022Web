// import { SpeakerSkeleton } from './skeletons/SpeakerSkeleton'

import { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Session } from '../../types/types'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const SpeakersDetails = ({ session }: { session: Session }) => {
  const [showChild, setShowChild] = useState(false)
  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  const getTwitterUsername = (url: string): string | null => {
    if (!url) return null
    const match = url.match(/(?:twitter\.com|x\.com)\/([^/?#]+)/i)
    return match?.[1] ?? null
  }

  return (
    <div className="w-full rounded-4xl md:rounded-5xl overflow-hidden bg-gradient-to-b from-accent to-primary p-6 md:p-10">
      <Carousel
        autoPlay={session.speakers.length > 1}
        interval={10000}
        stopOnHover
        showArrows={false}
        showStatus={false}
        showIndicators={session.speakers.length > 1}
      >
        {session.speakers.map((speaker) => {
          return (
            <div key={speaker.name} className="text-left">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                <div className="relative w-40 md:w-56 flex-none rounded-2xl border-4 border-accent overflow-hidden bg-blue-600">
                  <img
                    className="w-full aspect-[3/4] object-cover grayscale contrast-125 mix-blend-screen"
                    src={speaker.avatar ?? '/images/icons/apple-icon.png'}
                    alt={speaker.name}
                  />
                  <span className="pointer-events-none absolute inset-0 mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1.4px)] [background-size:6px_6px]" />
                </div>
                <div className="flex-1">
                  <p className="text-primary dark:text-primary font-bold uppercase tracking-wide text-sm md:text-base mb-2">
                    ( Speaker )
                  </p>
                  <h2 className="font-display text-black dark:text-black text-4xl md:text-6xl leading-none">
                    {speaker.name}
                  </h2>
                  <p className="text-black dark:text-black font-bold text-base md:text-xl mt-3">
                    {speaker.tagline}
                  </p>
                  <a
                    href={speaker.twitter ?? String(speaker.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary text-sm font-medium mt-2 hover:underline"
                  >
                    @{getTwitterUsername(speaker.twitter ?? '') || speaker.name}
                  </a>
                  {speaker.biography && (
                    <div className="mt-5">
                      <h4 className="font-bold text-black dark:text-black text-lg">
                        Bio
                      </h4>
                      <p className="mt-2 text-black dark:text-black leading-relaxed">
                        {speaker.biography}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

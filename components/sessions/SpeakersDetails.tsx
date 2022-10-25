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
  return (
    <div className="w-full flex-wrap lg:w-4/12 flex border-r-0 pr-0 lg:pr-4 mb-6 md:mb-0">
      <div className="w-full py-4">
        <h4 className="w-full lowercase font-black text-2xl md:text-3xl dark:text-white-dark">
          Speaker
        </h4>
      </div>
      <Carousel
        autoPlay
        interval={10000}
        stopOnHover
        showArrows={false}
        showStatus={false}
        showIndicators
      >
        {session.speakers.map((speaker, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <div className="w-full flex items-start text-center">
                <div className="w-1/3 md:pr-4 flex-none bg-green-c-2 rounded">
                  <img
                    className="w-full p-0 rounded-lg border-2 border-green-500"
                    src={speaker.avatar}
                    alt={speaker.name}
                  />
                </div>
                <div className="text-left px-2 py-1 lg:py-4">
                  <div className="md:text-xl text-primary dark:text-white-dark font-bold">
                    {speaker.name}
                  </div>
                  <p className="text-xs md:text-sm text-light dark:text-lighter-dark py-1">
                    {speaker.tagline}
                  </p>
                  <p className="pt-1">
                    <a
                      href="https://twitter.com/franktamzi"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary dark:text-white-dark text-sm lowercase"
                    >
                      <a
                        href={speaker.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @{speaker.name}
                      </a>
                    </a>
                  </p>
                </div>
              </div>
              {speaker.biography && (
                <div className="w-full">
                  <h4 className="font-bold mt-5 text-xl md:mt-4 dark:text-white-dark">
                    Bio:
                  </h4>
                  <p className="mt-2 md:mt-4 mb-4 lg:mb-16">
                    {speaker.biography}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </Carousel>

      {/* <SpeakerSkeleton /> */}
    </div>
  )
}

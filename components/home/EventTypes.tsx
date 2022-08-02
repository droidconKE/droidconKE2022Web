import Image from 'next/image'
import { eventTypes } from '../../constant/eventTypes'

export const EventTypes = () => {
  return (
    <section className="py-12 md:py-10 bg-lighter dark:bg-black-dark">
      <div className="s-container">
        <div className="flex justify-center py-2">
          <h2 className="title lowercase dark:text-accent-dark">
            <span>event</span> <span className="font-medium">types</span>
          </h2>
        </div>
        <div className="w-full flex flex-wrap mt-4 md:mt-12 dark:text-white-dark">
          {eventTypes.map((eventType) => {
            return (
              <div className="w-1/2 md:w-1/6 mt-10 md:mt-0" key={eventType.id}>
                <div
                  className={`px-12 py-10 md:px-16 md:py-12 h-32 md:h-44 ${eventType.lightBG} ${eventType.darkBG} ${eventType.edgeRadius}`}
                >
                  <Image
                    src={`/images/events/${eventType.imageName}.png`}
                    alt={eventType.imageName}
                    width={300}
                    height={300}
                  />
                </div>
                <h4 className="mt-2 font-bold lowercase text-xl">
                  {eventType.eventName}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

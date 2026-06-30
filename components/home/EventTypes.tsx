import React from 'react'

const eventCards = [
  {
    name: 'Panels',
    id: 'panels',
    image: '/images/svg/panels.svg',
    className: 'col-span-1 row-span-1',
  },
  {
    name: 'Workshops',
    id: 'workshops',
    image: '/images/svg/workshops.svg',
    className: 'col-span-1 row-span-1',
  },
  {
    name: 'Speakers',
    id: 'speakers',
    image: '/images/svg/speakers.svg',
    className: 'col-span-1 lg:row-span-2 flex-col justify-center',
  },
  {
    name: 'Networking',
    id: 'networking',
    image: '/images/svg/networking.svg',
    className: 'col-span-1 row-span-1',
  },
  {
    name: 'Exhibitions',
    id: 'exhibitions',
    image: '/images/svg/exhibitions.svg',
    className: 'col-span-1 row-span-1',
  },
]

export const EventTypes = () => {
  return (
    <section className="s-container my-12 md:my-24">
      <div className="w-full bg-accent rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-xl min-h-[600px] flex flex-col justify-center">
        {/* Background Image (KICC) */}
        <div className="absolute bottom-0 right-0 w-full md:w-[70%] lg:w-[60%] xl:w-[50%] h-full z-0 flex items-end justify-end pointer-events-none">
          <img
            src="/images/new-design/kenyatta-types.png"
            alt="KICC"
            className="w-full h-auto object-contain object-bottom translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-8"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full lg:w-2/3">
          <div className="flex items-center text-primary text-sm md:text-base font-medium mb-4">
            <div className="w-6 h-px bg-primary mr-3" />
            Event types
          </div>
          <h2 className="text-black text-5xl md:text-7xl font-display mb-10">
            Event Types
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-xs md:max-w-md lg:max-w-lg">
            {eventCards.map((card) => (
              <div
                key={card.name}
                className={`bg-primary rounded-[20px] p-4 md:p-5 flex flex-col items-center justify-center ${card.className} ${card.id !== 'speakers' ? 'aspect-square' : ''}`}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 object-contain"
                />
                <h4 className="text-white text-sm md:text-base lg:text-lg  text-center mt-2 md:mt-4">
                  {card.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

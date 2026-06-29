import Image from 'next/image'

const eventCards = [
  { name: 'Panels', image: '/images/new-design/pannels.png', className: '' },
  { name: 'Workshops', image: '/images/events/workshop.png', className: '' },
  {
    name: 'Speakers',
    image: '/images/new-design/speakers.png',
    className: 'row-span-2',
  },
  { name: 'Networking', image: '/images/events/party.png', className: '' },
  {
    name: 'Exhibitions',
    image: '/images/new-design/exhibition.png',
    className: '',
  },
]

export const EventTypes = () => {
  return (
    <section className="s-container my-12 md:my-24">
      <div className="w-full bg-accent rounded-3xl p-8 relative overflow-hidden shadow-xl min-h-[600px] flex flex-col justify-center">
        {/* Background Image (KICC) */}
        <div className="absolute bottom-0 right-0 w-full md:w-[70%] lg:w-[60%] xl:w-[50%] h-full z-0 flex items-end justify-end pointer-events-none">
          <img
            src="/images/new-design/kenyatta-types.png"
            alt="KICC"
            className="w-full h-auto object-contain object-bottom translate-x-4 md:translate-x-12 translate-y-4 md:translate-y-8"
          />
        </div>

        {/* Content (Left Side) */}
        <div className="relative z-10 w-full lg:w-3/5">
          <div className="flex items-center text-primary text-sm md:text-base font-medium mb-4">
            <div className="w-6 h-px bg-primary mr-3" />
            Event types
          </div>
          <h2 className="text-black text-5xl md:text-7xl font-display mb-10">
            Event Types
          </h2>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {eventCards.map((card) => (
              <div
                key={card.name}
                className={`bg-primary rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center min-h-[160px] md:min-h-[200px] ${card.className} ${card.name !== 'Speakers' ? 'aspect-square' : ''}`}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative mb-4">
                  <Image
                    src={card.image}
                    alt={card.name}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <h4 className="text-white text-base md:text-lg lg:text-xl font-semibold text-center mt-auto">
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

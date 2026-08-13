import { Organizer } from '../../types/types'

function Organizers({ organizers }: { organizers: Organizer[] }) {
  return (
    <section className="s-container w-full h-auto bg-white dark:bg-dark pt-10 md:pt-20 pb-16 transition-colors">
      <div className="w-full bg-accent rounded-[32px] p-8 md:p-12">
        <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-display mb-8 md:mb-12">
          Our Community Partners
        </h2>

        {organizers?.length > 0 && (
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {organizers.map((org) => (
              <a
                key={org.created_at || org.name}
                href={org.link}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-2xl w-full aspect-square flex items-center justify-center p-3 hover:scale-105 transition-transform"
              >
                <img
                  className="object-contain w-auto max-h-14 md:max-h-16"
                  src={org.photo || '/images/icon.png'}
                  alt={org.name}
                />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Organizers

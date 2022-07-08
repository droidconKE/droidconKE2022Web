import { Organizer } from '../../types/types'

function Team({ organizers }: { organizers: Organizer[] }) {
  return (
    <section className="l-container">
      <div>
        <div className="items-center flex flex-wrap">
          <div className="w-full px-0 md:px-24 mr-auto mb-4 md:mb-0 pb-0 lg:pb-16">
            <div className="w-full flex-wrap grid sm:grid-cols-4 md:grid-cols-5 grid-cols-3 gap-2 lg:gap-4">
              {organizers.map((org) => (
                <a
                  key={org.created_at}
                  target="_blank"
                  href={org.link}
                  className="text-center"
                  rel="noreferrer"
                >
                  <div className="w-24 h-24 md:w-44 md:h-44 p-2 md:p-4 bg-green-c-2 rounded">
                    <img
                      className="w-full p-0 flex rounded-lg border border-accent-2"
                      src={org.photo === null ? '/images/icon.png' : org.photo}
                      alt={org.name}
                    />
                  </div>
                  <div className="self-start">
                    <p className="mt-2 w-full">{org.name}</p>
                    <p className="text-xs text-light dark:text-light">
                      {org.tagline}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

import { Organizer } from '../../types/types'

function Team({ organizers: unOrderedOrgs }: { organizers: Organizer[] }) {
  const givenOrder: string[] = [
    'Annunziata',
    'Lincoln',
    'Josh',
    'Emmanuel',
    'Evans',
    'Tamre',
    'Mwendwa',
    'Jacqui',
    'Harun',
    'Marvin',
  ]

  const organizers = unOrderedOrgs.sort((a, b) => {
    return (
      givenOrder.indexOf(givenOrder.find((g) => b.name.includes(g)) || '') -
      givenOrder.indexOf(givenOrder.find((g) => a.name.includes(g)) || '')
    )
  })
  return (
    <>
      <section className="s-container mt-8 md:mt-12">
        <div className="w-full bg-primary rounded-4xl md:rounded-5xl px-6 py-8 md:px-12 md:py-12 text-left">
          <div className="flex items-center text-white/80 text-sm md:text-base font-medium mb-3">
            <div className="w-6 h-px bg-white/80 mr-3" />
            meet the team
          </div>
          <h2 className="font-display capitalize text-accent text-3xl md:text-5xl">
            <span>organizing</span> <span>team</span>
          </h2>
          <p className="mt-4 text-white text-lg md:text-xl leading-relaxed lg:w-10/12">
            Droidcon Kenya is organized by a seasoned team with a seven-edition
            track record of delivering developer events in Africa. The same team
            organizes Fluttercon Kenya, ensuring that the two conferences
            function as a single experience.
          </p>
        </div>
      </section>
      <section className="s-container mt-8 md:mt-10">
        <div>
          <div className="items-center flex flex-wrap">
            <div className="w-full mr-auto mb-4 md:mb-0 pb-0 lg:pb-16">
              <div className="w-full flex-wrap grid sm:grid-cols-4 md:grid-cols-5 grid-cols-3 gap-4 md:gap-6">
                {organizers.map((org) => (
                  <a
                    key={org.created_at}
                    target="_blank"
                    href={org.link}
                    rel="noreferrer"
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-darker-dark border border-primary dark:border-primary shadow-md hover:shadow-xl hover:border-accent transition-all duration-200"
                  >
                    <div className="relative overflow-hidden bg-blue-600">
                      <img
                        className="w-full aspect-square object-cover grayscale contrast-125 mix-blend-screen group-hover:scale-105 transition-transform duration-300"
                        src={
                          org.photo === null ? '/images/icon.png' : org.photo
                        }
                        alt={org.name}
                      />
                      <span className="pointer-events-none absolute inset-0 mix-blend-overlay [background-image:radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1.4px)] [background-size:6px_6px]" />
                    </div>
                    <div className="p-2 md:p-3 text-center flex-1 flex flex-col justify-center">
                      <p className="text-xs md:text-base font-bold text-accent dark:text-accent">
                        {org.name}
                      </p>
                      <p className="text-[10px] md:text-xs text-black dark:text-white-dark mt-0.5 line-clamp-2">
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
    </>
  )
}

export default Team

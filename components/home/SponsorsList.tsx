import { Organizer } from '../../types/types'

function SponsorsList({ sponsors }: { sponsors: Organizer[] }) {
  return (
    <section className="s-container pb-6 md:pb-12">
      <div>
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 ml-auto">
            <div className="md:pr-12 text-left">
              <h2 className="title lowercase dark:text-accent-dark">
                <span>sponsored</span> <span className="font-medium"> by;</span>
              </h2>
              <p className="mt-4 text-xl md:text-2xl">
                Please make sure to stop by and visit our sponsors at the show
                and give them a high-five and a huge thank you for helping to
                bring the community together at droidconke.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 mr-auto pt-4 sm:mt-10 md:pt-0 justify-end">
            <div className="w-full md:p-10 sm:p-0  grid md:grid-cols-4 grid-cols-3 gap-4 lg:gap-8">
              {sponsors.map((org) => (
                <a
                  key={org.created_at}
                  target="_blank"
                  href={org.link}
                  className="w-24 h-24 p-3 flex rounded border border-green-200 bg-white dark:bg-white-dark justify-center"
                  rel="noreferrer"
                >
                  <img
                    className="p-0 w-full object-scale-down"
                    src={org.photo === null ? '/images/icon.png' : org.photo}
                    alt={org.name}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsList

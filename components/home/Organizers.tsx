import { Organizer } from '../../types/types'

function Organizers({ organizers }: { organizers: Organizer[] }) {
  return (
    <section className="bg-lighter dark:bg-black">
      <div className="s-container pb-6 md:pb-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 ml-auto">
            <div className="md:pr-12 text-left mt-3 md:mt-0">
              <h2 className="title lowercase dark:text-accent-dark">
                <span>organized</span> <span className="font-medium"> by;</span>
              </h2>
            </div>
          </div>
          <div className="w-full md:w-6/12 mr-auto pt-4 sm:mt-10 md:pt-0 justify-end">
            <div className="w-full md:p-10 sm:p-0  grid md:grid-cols-4 grid-cols-3 gap-4 lg:gap-8">
              {organizers.map((org) => (
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

export default Organizers

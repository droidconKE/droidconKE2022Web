import { Sponsor } from '../../types/types'

function SponsorsList({ sponsors }: { sponsors: Sponsor[] }) {
  return (
    <section className="s-container pb-6 md:pb-12">
      <div>
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 ml-auto">
            <div className="md:pr-12 text-left">
              <h2 className="title lowercase dark:text-accent-dark mt-4 md:mt-0">
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
            <div className="w-full md:p-10 sm:p-0  grid md:grid-cols-4 grid-cols-2 gap-4 lg:gap-8">
              {sponsors.map((sponsor) => (
                <a
                  key={sponsor.created_at}
                  target="_blank"
                  href={sponsor.link}
                  className="w-36 md:w-40 h-36 md:h-40 p-0 flex rounded border border-green-200 bg-white dark:bg-white-dark justify-center"
                  rel="noreferrer"
                >
                  <img
                    className="p-0 w-full object-scale-down"
                    src={
                      sponsor.logo === null ? '/images/icon.png' : sponsor.logo
                    }
                    alt={sponsor.name}
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

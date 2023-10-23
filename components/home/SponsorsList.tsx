/* eslint-disable react/require-default-props */
import Link from 'next/link'
import { Sponsor } from '../../types/types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
function SponsorsList({
  sponsors,
  showSponsors = true,
  year = 22,
}: {
  sponsors: Sponsor[]
  showSponsors?: boolean
  year?: number
}) {
  const getTypeName = (sponsor: Sponsor) => {
    if (sponsor.name === 'Google') return 'Platinum Sponsor'
    if (sponsor.name === 'JetBrains') return 'Swag Sponsor'
    if (sponsor.name.includes('Ryggs')) return 'Startup Sponsor'
    if (sponsor.name.includes('United States')) return 'Venue Sponsor'
    return sponsor.tagline
  }
  return (
    <section className="w-full bg-black">
      <div className="s-container  pb-6 md:pb-12">
        <div className="items-center flex flex-wrap py-10 md:py-20">
          <div className="w-full md:w-4/12 ml-auto">
            <div className="md:pr-12 text-left">
              <h4 className="text-lighter dark:text-lighter-dark text-2xl md:text-4xl mt-4 md:mt-0">
                {showSponsors ? 'Thank you to our' : ''} <br /> #dcKe{year}{' '}
                Sponsors
              </h4>
            </div>
          </div>
          <div
            className={`w-full flex items-center flex-col ${
              sponsors.length > 5 ? 'md:space-y-4' : 'md:flex-row'
            } md:w-8/12 mr-auto pt-4 sm:mt-0 md:pt-0 space-x-3 md:space-x-4`}
          >
            <div className="md:p-0 sm:p-0 lg:gap-8 mb-10 md:mb-0">
              {!showSponsors ? (
                <div>
                  <p className="text-xl text-accent dark:text-accent-dark mb-10">
                    help make droidconKe happen and have your logo appear here
                    ...
                  </p>
                  <Link href="/sponsors">
                    <a className="btn-secondary w-56">sponsor droidconke</a>
                  </Link>
                </div>
              ) : (
                sponsors.map(
                  (sponsor) =>
                    sponsor.sponsor_type === 'gold' && (
                      <div key={sponsor.name}>
                        <span className="text-lighter dark:text-lighter-dark text-xs">
                          {getTypeName(sponsor)}
                        </span>
                        <a
                          target="_blank"
                          href={sponsor.link}
                          className="p-5 flex rounded border border-green-200 bg-white dark:bg-white-dark justify-center mt-3"
                          rel="noreferrer"
                        >
                          <img
                            className="p-0 md:h-[70px]"
                            src={
                              sponsor.logo === null
                                ? '/images/icon.png'
                                : sponsor.logo
                            }
                            alt={sponsor.name}
                          />
                        </a>
                      </div>
                    )
                )
              )}
            </div>

            {showSponsors && (
              <div className="md:p-0 sm:p-0 space-x-3 lg:space-x-4 flex w-full md:w-auto justify-between">
                {sponsors.map(
                  (sponsor) =>
                    sponsor.sponsor_type !== 'gold' && (
                      <div key={sponsor.name}>
                        <span className="text-lighter dark:text-lighter-dark text-xs">
                          {getTypeName(sponsor)}
                        </span>
                        <a
                          target="_blank"
                          href={sponsor.link}
                          className="w-24 md:w-28 h-24 md:h-28 p-0 mt-3 flex rounded border border-green-200 bg-white dark:bg-white-dark justify-center"
                          rel="noreferrer"
                        >
                          <img
                            className="p-0 w-full object-scale-down"
                            src={
                              sponsor.logo === null
                                ? '/images/icon.png'
                                : sponsor.logo
                            }
                            alt={sponsor.name}
                          />
                        </a>
                      </div>
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsList

/* eslint-disable react/require-default-props */
import Link from 'next/link'
import { useCallback, useContext } from 'react'
import { Sponsor } from '../../types/types'
import { ThemeContext } from '../../context/ThemeContext'

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
  const { isDarkTheme } = useContext(ThemeContext)

  const getTypeName = useCallback((sponsor: Sponsor) => {
    if (sponsor.name.includes('Yellow Card')) return 'Start-up Alley'
    if (sponsor.name.includes('Composables')) return 'Product Sponsor'
    if (sponsor.name.includes('JumaAndMiles')) return 'Ticket Sponsor'
    if (sponsor.name.includes('DnD Gifts')) return 'Speaker Gift Sponsor'
    return `${sponsor.sponsor_type} Sponsor`
  }, [])

  const getImageClass = useCallback(
    (sponsor: Sponsor) => {
      if (sponsor.name.includes('JetBrains')) return 'max-h-20'
      if (sponsor.name.includes('Composables')) return 'max-h-[48px]'
      if (sponsor.name.includes('JumaAndMiles')) return 'max-h-24'
      if (sponsor.name.includes('Daystar University')) return 'max-h-[43px]'
      if (year === 22) return 'max-h-20'
      return 'max-h-10'
    },
    [year]
  )

  const getImage = useCallback(
    (sponsor: Sponsor) => {
      if (!isDarkTheme) return sponsor.logo
      if (
        sponsor.name.includes('Yellow Card') ||
        sponsor.name.includes('Composables') ||
        sponsor.name.includes('Paystack') ||
        sponsor.name.includes('JumaAndMiles')
      ) {
        return `/images/sponsors/${sponsor.name}.png`
      }
      return sponsor.logo
    },
    [isDarkTheme]
  )

  return (
    <section className="w-full dark:bg-black">
      <div className="s-container">
        <div className="items-center text-center py-10 md:py-20">
          <div className="w-full py-10">
            <h2 className="title lowercase dark:text-accent-dark">
              <span>sponsored</span> <span className="font-medium"> by;</span>
            </h2>
            <div className="flex justify-center">
              <p className="mt-8 md:w-7/12">
                Please make sure to stop by and visit our sponsors at the show
                and give them a high-five and a huge thank you for helping to
                bring the community together at droidconke.
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="md:p-0 sm:p-0 lg:gap-8">
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
                    sponsor.sponsor_type === 'platinum' && (
                      <div className="py-4" key={sponsor.name}>
                        <span className="text-[#B87C38] capitalize">
                          {getTypeName(sponsor)}
                        </span>
                        <a
                          target="_blank"
                          href={sponsor.link}
                          className="h-28 md:h-40 p-5 flex justify-center mt-3"
                          rel="noreferrer"
                        >
                          <img
                            className="p-0"
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
              <div className="grid grid-cols-2 md:grid-cols-3 border-t">
                {sponsors
                  .filter((s) => s.sponsor_type !== 'platinum')
                  .map((sponsor) => (
                    <div
                      className="border-b py-5 md:py-10 flex px-4 md:px-20 justify-center"
                      key={sponsor.name}
                    >
                      <div className="flex flex-col justify-center">
                        <span className="text-primary dark:text-accent-dark text-xs md:text-base capitalize py-4">
                          {getTypeName(sponsor)}
                        </span>
                        <a
                          target="_blank"
                          href={sponsor.link}
                          rel="noreferrer"
                          className="flex justify-center"
                        >
                          <img
                            className={getImageClass(sponsor)}
                            src={
                              sponsor.logo === null
                                ? '/images/icon.png'
                                : getImage(sponsor)
                            }
                            alt={sponsor.name}
                          />
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorsList

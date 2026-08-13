/* eslint-disable react/require-default-props */
import Link from 'next/link'
import { useCallback, useContext } from 'react'
import { Sponsor } from '../../types/types'
import { ThemeContext } from '../../context/ThemeContext'

const SponsorCard = ({
  sponsor,
  getImage,
  getImageClass,
  large = false,
}: {
  sponsor: Sponsor
  getImage: (s: Sponsor) => string
  getImageClass: (s: Sponsor) => string
  large?: boolean
}) => {
  return (
    <a
      target="_blank"
      href={sponsor.link}
      rel="noreferrer"
      className={`bg-lighter dark:bg-white rounded-2xl w-full max-w-sm flex items-center justify-center transition-opacity hover:opacity-90 ${
        large
          ? 'p-8 md:p-12 min-h-[120px] md:min-h-[180px]'
          : 'p-4 min-h-[100px] md:min-h-[130px]'
      }`}
    >
      <img
        className={`${getImageClass(sponsor)} object-contain w-auto`}
        src={sponsor.logo === null ? '/images/icon.png' : getImage(sponsor)}
        alt={sponsor.name}
      />
    </a>
  )
}

function SponsorsList({
  sponsors,
  showSponsors = true,
  year = 26,
}: {
  sponsors: Sponsor[]
  showSponsors?: boolean
  year?: number
}) {
  const { isDarkTheme } = useContext(ThemeContext)

  const getTypeName = useCallback((sponsor: Sponsor) => {
    if (sponsor.name.includes('Yellow Card')) return 'Start-up Alley'
    if (sponsor.name.includes('Composables')) return 'Product'
    if (sponsor.name.includes('JumaAndMiles')) return 'Ticket'
    if (sponsor.name.includes('DnD Gifts')) return 'Speaker Gift'
    if (sponsor.name.includes('Typesense')) return 'All coffee & Snacks'
    return sponsor.sponsor_type
  }, [])

  const getImageClass = useCallback((sponsor: Sponsor) => {
    if (sponsor.name.includes('Google')) return 'max-h-24 md:max-h-32'
    if (sponsor.name.includes('JetBrains')) return 'max-h-16'
    if (sponsor.name.includes('Composables')) return 'max-h-[48px]'
    if (sponsor.name.includes('JumaAndMiles')) return 'max-h-20'
    if (sponsor.name.includes('Daystar University')) return 'max-h-[50px]'
    if (sponsor.name.includes('Typesense')) return 'max-h-12'
    if (sponsor.name.includes('Kopo Kopo')) return 'max-h-14'
    return 'max-h-12 md:max-h-16'
  }, [])

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

  // Row 1 platinum, row 2 gold, row 3 everything else in this order.
  const REMAINING_TIER_ORDER = ['silver', 'bronze', 'snack']

  const platinumSponsors = sponsors.filter((s) => s.sponsor_type === 'platinum')
  const goldSponsors = sponsors.filter((s) => s.sponsor_type === 'gold')
  const remainingSponsors = sponsors
    .filter((s) => s.sponsor_type !== 'platinum' && s.sponsor_type !== 'gold')
    .sort((a, b) => {
      // Unknown tiers sort after the known ones, keeping their relative order.
      const rank = (tier: string) => {
        const index = REMAINING_TIER_ORDER.indexOf(tier)
        return index === -1 ? REMAINING_TIER_ORDER.length : index
      }
      return rank(a.sponsor_type) - rank(b.sponsor_type)
    })

  return (
    <section className="s-container w-full bg-white-dark dark:bg-dark py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-8">
        <h2 className="text-primary dark:text-primary-dark text-4xl md:text-6xl lg:text-7xl font-display">
          Our 20{year} Sponsors
        </h2>
        <div className="text-black dark:text-white text-sm md:text-base uppercase mt-4">
          ( Thanks to our sponsors )
        </div>
      </div>

      {showSponsors ? (
        <div className="flex flex-col w-full">
          {/* Platinum Tier */}
          {platinumSponsors.length > 0 && (
            <div className="flex flex-col items-center gap-4 border-t border-dotted border-green-500 pt-8 pb-10">
              <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-2 capitalize">
                Platinum
              </h3>
              {platinumSponsors.map((sponsor) => (
                <SponsorCard
                  key={sponsor.name}
                  sponsor={sponsor}
                  getImage={getImage}
                  getImageClass={getImageClass}
                  large
                />
              ))}
            </div>
          )}

          {/* Gold Tier */}
          {goldSponsors.length > 0 && (
            <div className="flex flex-col items-center border-t border-dotted border-green-500 pt-8 pb-10 w-full">
              <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-4 capitalize">
                Gold
              </h3>
              <div className="flex flex-wrap justify-center gap-4 w-full">
                {goldSponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="w-full sm:w-[280px] md:w-[320px] flex justify-center"
                  >
                    <SponsorCard
                      sponsor={sponsor}
                      getImage={getImage}
                      getImageClass={getImageClass}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Everything else — silver, then bronze, then snack */}
          {remainingSponsors.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 w-full border-t border-dotted border-green-500 pt-8 pb-10">
              {remainingSponsors.map((sponsor) => (
                <div
                  key={sponsor.name}
                  className="flex flex-col items-center w-full sm:w-[280px] md:w-[300px]"
                >
                  <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-4 capitalize">
                    {getTypeName(sponsor)}
                  </h3>
                  <SponsorCard
                    sponsor={sponsor}
                    getImage={getImage}
                    getImageClass={getImageClass}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center border-t border-dotted border-green-500 pt-10">
            <Link href="/sponsors" className="btn-accent whitespace-nowrap">
              SPONSOR DROIDCONKE
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-12">
          <Link href="/sponsors" className="btn-accent whitespace-nowrap">
            SPONSOR DROIDCONKE
          </Link>
        </div>
      )}
    </section>
  )
}

export default SponsorsList

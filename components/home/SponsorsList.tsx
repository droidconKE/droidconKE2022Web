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
  const clipPathStyle = {
    clipPath:
      'polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))',
  }

  return (
    <div
      className={`p-[4px] mb-2 bg-gradient-to-br from-accent to-primary w-full ${
        large ? 'max-w-sm' : 'max-w-sm'
      }`}
      style={clipPathStyle}
    >
      <a
        target="_blank"
        href={sponsor.link}
        rel="noreferrer"
        className={`bg-white w-full flex items-center justify-center ${
          large
            ? 'p-8 md:p-12 min-h-[120px] md:min-h-[180px]'
            : 'p-6 min-h-[120px] md:min-h-[160px]'
        }`}
        style={clipPathStyle}
      >
        <img
          className={`${getImageClass(sponsor)} object-contain w-auto`}
          src={sponsor.logo === null ? '/images/icon.png' : getImage(sponsor)}
          alt={sponsor.name}
        />
      </a>
    </div>
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

  const platinumSponsors = sponsors.filter((s) => s.sponsor_type === 'platinum')
  const silverSponsors = sponsors.filter((s) => s.sponsor_type === 'silver')
  const otherSponsors = sponsors.filter(
    (s) => s.sponsor_type !== 'platinum' && s.sponsor_type !== 'silver'
  )

  return (
    <section className="s-container w-full bg-white-dark dark:bg-dark py-12 md:py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <div className="flex items-center text-primary dark:text-secondary text-sm md:text-base font-semibold ">
          <div className="w-8 h-px bg-primary dark:bg-secondary mr-3" />
          dcke{year} sponsored by
          <div className="w-8 h-px bg-primary dark:bg-secondary ml-3" />
        </div>
        <h2 className="text-black dark:text-white text-4xl md:text-6xl lg:text-7xl font-display mb-2">
          dcke{year} sponsored by
        </h2>
        <div className="text-primary dark:text-secondary  text-base md:text-2xl font-display ">
          &#47;&#47; help make droidconke happen and have your logo appear
          here...
        </div>
      </div>

      {showSponsors ? (
        <div className="flex flex-col gap-8 md:gap-10 w-full">
          {/* Platinum Tier */}
          {platinumSponsors.length > 0 && (
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-black dark:text-white text-xl md:text-2xl font-semibold mb-2 capitalize">
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

          {/* Silver Tier */}
          {silverSponsors.length > 0 && (
            <div className="flex flex-col items-start w-full">
              <h3 className="text-black dark:text-white text-xl md:text-2xl font-semibold mb-4 capitalize px-2">
                Silver
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {silverSponsors.map((sponsor) => (
                  <SponsorCard
                    key={sponsor.name}
                    sponsor={sponsor}
                    getImage={getImage}
                    getImageClass={getImageClass}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Tiers */}
          {otherSponsors.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 w-full mt-2">
              {otherSponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex flex-col items-start">
                  <h3 className="text-black dark:text-white text-lg md:text-xl font-semibold mb-3 capitalize px-2">
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
        </div>
      ) : (
        <div className="flex justify-center mt-12">
          <Link href="/sponsors" className="btn-secondary w-56">
            sponsor droidconke
          </Link>
        </div>
      )}
    </section>
  )
}

export default SponsorsList

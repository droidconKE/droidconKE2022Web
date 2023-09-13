import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export const SponsorGraph = () => {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <section className="py-6 md:py-10 bg-lighter dark:bg-black-dark">
      <div className="s-container md:-mt-10 md:py-12">
        <div className="flex flex-wrap md:pt-16">
          <div className="w-full text-center mb-2 md:mb-0 mt-4 md:mt-0 items-center justify-center">
            <h2 className="title lowercase text-primary dark:text-accent pt-8 md:pt-0">
              <span>VARIOUS</span>{' '}
              <span className="font-medium"> SPONSORSHIP LEVELS</span>
            </h2>
            {/* <p className="mt-4 text-black dark:text-white text-xl md:text-2xl">
                Your sponsorship package can be tailored to meet your business
                objectives:
              </p> */}
          </div>
        </div>
        <div className="mx-auto md:py-10">
          <div className="items-center flex flex-wrap mb-0">
            <div className="w-full mt-4 mb-14 lg:mb-0 md:mt-0">
              {!isDarkTheme ? (
                <img src="/images/svg/sponsor-graph.svg" alt="graph" />
              ) : (
                <img
                  src="/images/svg/sponsor-graph-dark.svg"
                  alt="graph dark"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

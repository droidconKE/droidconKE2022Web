import type { NextPage } from 'next'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Banner } from '../components/home/Banner'

interface ErrorProps {
  status: Number,
  message: String
}

const Error: NextPage<ErrorProps> = ({}) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div className="bg-[#f5f5f5] dark:bg-[#20201E] relative block">
      <div className="absolute sm:top-28 md:top-32 sm:left-[15%] lg:top-36 xl:top-52 rotate-[340deg] sm:block hidden">
        <img src="images/svg/colored-x.svg" className="sm:w-16 sm:h-16 md:w-20 md:h20 lg:w-28 lg:h-28" alt="droidcon colored-x icon" />
      </div>
      <div className="absolute sm:top-56 sm:right-[7%] md:top-64 md:right-[7%] lg:top-80 xl:top-96 lg:right-[7%] xl:right-[10%] 2xl:right-[15%] sm:block hidden">
        <img src="images/element_left.png" className="sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-36 lg:h-32" alt="droidcon element-x icon" />
      </div>
      <section className="error-code-section">
        <div className="w-screen mx-auto text-center pt-32 pb-16 md:pt-28 sm:pt-20 sm:pb-16 md:pb-20 xl:pt-40 xl:pb-28 lg:pt-28 lg:pb-24">
          <h6 className="md:text-15 xl:text-19 lg:text-17 font-bold mb-0 dark:text-white">ERROR</h6>
          <h1 className="md:text-7xl xl:text-9xl lg:text-8xl text-6xl font-bold dark:text-white">404</h1>
        </div>
      </section>

      <section className="error-section-text w-full bg-no-repeat">
        <div
          style={{ backgroundImage: "url('/images/404.png')" }}
          className="bg-no-repeat bg-cover mx-auto xl:w-[48rem] lg:w-[40rem] md:w-[32rem] sm:w-[24rem] w-[100%] lg:h-[21rem] xl:h-96 md:h-64 h-60 bg-center"
        >
          <div className="error-text text-center mx-auto">
            <p className="lg:w-[400px] md:w-[350px] w-[300px] mx-auto text-center text-[#191D1D] font-medium lg:pt-1 leading-tight xl:text-xl lg:text-base md:text-sm text-xs">
              YOU CAN STAY HERE AND LOOK AT THE COOKIES OR HEAD BACK HOME
            </p>
          </div>
          <div className="block">
            <a href="/" className="block items-baseline text-center mx-auto xl:mt-20 lg:mt-16 mt-12">
              {isDarkTheme ? (
                <img src="images/icons/home-icon-white.svg" className="mr-2 inline" width="18px" alt="droidcon home icon white"/>
              ) : (
                <img src="images/icons/home-icon.svg" className="mr-2 inline" width="18px" alt="droidcon home icon"/>
              )}
              <span className="text-[#000ceb] lg:text-lg align-text-top text-base dark:text-white">Head back home</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Error

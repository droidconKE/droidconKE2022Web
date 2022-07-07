import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface Props {
  message: string
}

const MessageComponent = ({ message }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <section className="error-section-text w-full bg-no-repeat">
      <div
        style={{ backgroundImage: "url('/images/404.png')" }}
        className="bg-no-repeat bg-cover mx-auto xl:w-[48rem] lg:w-[40rem] md:w-[32rem] sm:w-[24rem] w-full lg:h-[21rem] xl:h-96 md:h-64 h-60 bg-center"
      >
        <div className="error-text text-center mx-auto">
          <p className="lg:w-[400px] md:w-[350px] sm-[300px] w-[200px] mx-auto text-center text-darker-dark font-medium lg:pt-1 leading-tight xl:text-xl lg:text-base md:text-sm text-xs">
            {message}
          </p>
        </div>
        <div className="block">
          <Link href="/">
            <a className="block items-baseline text-center mx-auto xl:mt-20 lg:mt-16 mt-12">
              {isDarkTheme ? (
                <img
                  src="/images/icons/home-icon-white.svg"
                  className="mr-2 inline"
                  width="18px"
                  alt="droidcon home icon white"
                />
              ) : (
                <img
                  src="/images/icons/home-icon.svg"
                  className="mr-2 inline"
                  width="18px"
                  alt="droidcon home icon"
                />
              )}
              <span className="text-primary lg:text-lg align-text-top text-base dark:text-white">
                Head back home
              </span>
            </a>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MessageComponent

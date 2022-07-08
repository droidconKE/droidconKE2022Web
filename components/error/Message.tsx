import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface Props {
  message: string
}

const MessageComponent = ({ message }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <section className="error-section-text w-full bg-no-repeat flex flex-grow">
      <div
        style={{ backgroundImage: "url('/images/404.png')" }}
        className="bg-no-repeat bg-contain mx-auto xl:w-[48rem] lg:w-[40rem] md:w-[40rem] w-full bg-bottom"
      >
        <div className="error-text text-center mx-auto">
          <p className="md:w-[400px] w-[250px] mx-auto text-center text-darker-dark font-medium md:pt-2 pt-24 leading-tight xl:text-xl lg:text-base text-sm uppercase">
            {message}
          </p>
        </div>
        <div className="block">
          <Link href="/">
            <a className="block items-baseline text-center mx-auto md:mt-20 lg:mt-12 mt-10">
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

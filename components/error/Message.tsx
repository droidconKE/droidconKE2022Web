import Link from 'next/link'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

interface Props {
  message: string
}

const MessageComponent = ({ message }: Props) => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <section className="error-section-text w-full bg-no-repeat flex flex-grow items-stretch">
      <div
        style={{ backgroundImage: "url('/images/404.png')" }}
        className="bg-no-repeat bg-contain mx-auto xl:w-[48rem] lg:w-[40rem] md:w-[40rem] w-full bg-bottom sm:block flex items-center"
      >
        <div className="error-text text-center mx-auto md:mt-4 2xl:mt-8 mt-10 items-center">
          <p className="lg:w-[400px] w-[230px] md:w-[300px] mx-auto text-center text-darker-dark font-medium leading-tight xl:text-xl lg:text-base text-xs uppercase">
            {message}
          </p>
          <p className="md:mt-16 2xl:mt-20 mt-12">
            <Link href="/">
              <a className="block items-baseline text-center mx-auto">
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
          </p>
        </div>
      </div>
    </section>
  )
}

export default MessageComponent

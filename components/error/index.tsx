import { ErrorInterface } from '../../types/types'
import TitleComponent from './Title'
import MessageComponent from './Message'

const ErrorComponent = ({ message, status }: ErrorInterface) => {
  return (
    <div className="bg-lighter dark:bg-black relative block">
      <div className="absolute top-40 left-[12%] sm:top-28 md:top-32 sm:left-[15%] lg:top-36 xl:top-52 rotate-[340deg]">
        <img
          src="/images/svg/colored-x.svg"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h20 lg:w-28 lg:h-28"
          alt="droidcon colored-x icon"
        />
      </div>

      <div className="absolute top-72 right-[5%] sm:top-56 sm:right-[7%] md:top-64 md:right-[7%] lg:top-80 xl:top-96 lg:right-[7%] xl:right-[10%] 2xl:right-[15%]">
        <img
          src="/images/element_left.png"
          className="w-14 sm:w-24 sm:h-20 md:w-28 md:h-24 lg:w-36 lg:h-32"
          alt="droidcon element-x icon"
        />
      </div>

      <TitleComponent status={status} />

      <MessageComponent message={message} />
    </div>
  )
}

export default ErrorComponent

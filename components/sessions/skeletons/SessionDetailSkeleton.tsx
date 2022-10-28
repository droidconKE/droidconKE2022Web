import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const SessionDetailSkeleton = () => {
  const { isDarkTheme } = useContext(ThemeContext)

  return (
    <div className="w-full flex items-start flex-col">
      <div className="pt-4 md:pt-6">
        <img
          className="rounded-lg w-auto md:w-[400px] md:h-[200px] mb-6"
          src={`https://via.placeholder.com/150/${
            isDarkTheme ? '000000' : 'E2E8F0'
          }?text=droidconKe`}
          alt="session"
        />
      </div>
      {/* <h4 className="pt-2 h-4 w-20 bg-gray-200 skeleton">&nbsp;</h4> */}
      <p className="pt-2 h-4 mt-2 w-40 bg-gray-300 dark:bg-black-dark animate-pulse skeleton">
        &nbsp;
      </p>
      <p className="pt-2 h-4 mt-2 w-56 bg-gray-300 dark:bg-black-dark animate-pulse skeleton">
        &nbsp;
      </p>
      <h6 className="pt-2 h-4 w-48 bg-gray-300 dark:bg-black-dark animate-pulse skeleton mt-4 md:mt-10">
        &nbsp;
      </h6>
      <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-24 bg-gray-300 dark:bg-black-dark animate-pulse skeleton">
        {' '}
        &nbsp;
      </p>
      <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-48 bg-gray-300 dark:bg-black-dark animate-pulse skeleton">
        &nbsp;
      </p>
      <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-64 bg-gray-300 dark:bg-black-dark animate-pulse skeleton">
        &nbsp;
      </p>
    </div>
  )
}

import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const SpeakerSkeleton = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div>
      <div className="w-full items-start flex text-center">
        <div className="w-28 h-28 md:w-36 md:h-36 md:pr-4 flex-none rounded">
          <img
            className="w-full p-0 rounded-lg border-2 border-gray-500 dark:border-black"
            src={`https://via.placeholder.com/150/${
              isDarkTheme ? '000000' : 'E2E8F0'
            }?text=droidconKe`}
            alt="Sunset in the mountains"
          />
        </div>
        <div className="w-full text-left px-2 py-1 lg:py-4">
          <div className="text-px-13-slab-b h-3 w-32 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
          <p className="text-px-13 gray h-4 w-40 bg-gray-300 dark:bg-black-dark animate-pulse mt-2 skeleton" />
          <p className="text-px-13 green-dark mt-2 h-4 w-40 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
        </div>
      </div>
      <div className="w-full mb-10">
        <h4 className="black text-px-13-slab-b mt-2 md:mt-4">Bio:</h4>
        <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-40 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
        <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-56 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
        <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-24 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
        <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-48 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
        <p className="text-px-13 green-dark pt-2 h-4 mt-2 w-64 bg-gray-300 dark:bg-black-dark animate-pulse skeleton" />
      </div>
    </div>
  )
}

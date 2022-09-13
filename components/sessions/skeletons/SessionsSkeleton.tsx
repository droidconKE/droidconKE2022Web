import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const SessionsSkeleton = () => {
  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div className="l-container flex flex-wrap">
      <div
        className="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-gray-300 dark:border-black-dark animate-pulse space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start pb-4 lg:pb-0 sticky"
        style={{ top: '80px' }}
      >
        {[...Array(3)].map((i) => (
          <div
            key={i}
            className="skeleton w-4/12 px-3 py-1 lg:w-full rounded-tl-lg rounded-bl-lg border border-r-0 border-gray-300 dark:border-black-dark cursor-pointer bg-gray-300 dark:bg-black-dark animate-pulse "
          >
            <h4 className="text-px-16-slab purple invisible">
              06{' '}
              <small className="text-px-13 green-dark capitalize">Day 1</small>
            </h4>
          </div>
        ))}
      </div>
      <div className="w-full flex-wrap flex lg:w-11/12 space-y-6 mb-2 lg:mb-10">
        {[...Array(6)].map((i) => (
          <div key={i} className="flex w-full px-0 lg:px-2">
            <div className="w-2/12 h-20 items-center justify-center text-right hidden lg:flex">
              <h3 className="text-px-14-slab w-12 h-6 bg-gray-300 dark:bg-black-dark animate-pulse  purple">
                &nbsp;
              </h3>
            </div>
            <div className="w-full lg:w-10/12 flex bg-white-c rounded-tr-lg rounded-br-lg">
              <div
                className="h-12 w-20  lg:h-24 lg:w-36 flex-none skeleton bg-cover rounded-tl rounded-bl text-center overflow-hidden"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/150/${
                    isDarkTheme ? '000000' : 'E2E8F0'
                  }?text=droidconKe")`,
                }}
                title="Woman holding a mug"
              />
              <div className="h-auto w-full lg:h-24 shadow-sm rounded-lg px-4 py-3 flex flex-col justify-between">
                <div className="flex flex-wrap items-start">
                  <div className="w-10/12">
                    <div className="text-px-14-slab black mb-2 skeleton bg-gray-300 dark:bg-black-dark animate-pulse  w-56 h-4" />
                    <p className="text-px-13 gray bg-gray-300 dark:bg-black-dark animate-pulse  w-48 h-4 skeleton" />
                    <p className="text-px-13 gray bg-gray-300 dark:bg-black-dark animate-pulse  w-64 h-4 mt-3 skeleton" />
                  </div>
                  <div className="w-2/12 flex items-center justify-center">
                    <div>
                      <i className="fa fa-star-o text-gray-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

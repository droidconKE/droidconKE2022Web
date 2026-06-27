import Link from 'next/link'
import { CFS_LINK, TICKETS_LINK } from '../../constant/constants'

export const Banner = () => {
  return (
    <div className="w-full flex flex-col items-center pt-10 md:pt-12 min-h-[calc(100vh-80px)] justify-center">
      <div className="w-full flex flex-col justify-center items-center pb-8 md:pb-12">
        <div className="max-w-5xl w-full px-4 flex flex-col items-center text-center">
          {/* Hero Images */}
          <h1 className="sr-only">Beyond Stacks</h1>
          <div className="flex items-center justify-center space-x-4 md:space-x-8 mb-6">
            <img
              src="/images/new-design/beyond-stack-light.png"
              alt="Beyond Stacks"
              className="h-[120px] md:h-[240px] lg:h-[320px] dark:hidden block object-contain"
            />
            <img
              src="/images/new-design/beyond-stack-dark.png"
              alt="Beyond Stacks"
              className="h-[120px] md:h-[240px] lg:h-[320px] hidden dark:block object-contain"
            />
            <img
              src="/images/new-design/droidcon_icon.png"
              alt="Droidcon Icon"
              className="h-[80px] md:h-[160px] lg:h-[200px] object-contain"
            />
          </div>

          {/* Subtitle */}
          <p className="text-gray-700 dark:text-gray-200 text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mb-8 leading-snug mx-auto text-center">
            Africa&apos;s largest Android developer conference. Two days. One
            ticket. DroidconKE + FlutterconKE. Nairobi, November 2026.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 w-full justify-center">
            <a
              href={TICKETS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              GET YOUR TICKET
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H16V12M16 6L6 16"
                />
              </svg>
            </a>
            <a
              href={CFS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              SUBMIT A TALK
            </a>
            <Link href="/sponsors" className="btn-outline">
              SPONSOR DROIDCONKE
            </Link>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="w-full l-container pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-300 dark:border-gray-700 text-left">
          <div className="py-6 px-4 md:px-6 border-r border-b md:border-b-0 border-gray-300 dark:border-gray-700">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-white uppercase mb-2 font-semibold">
              DATE
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-accent-dark uppercase">
              05-06 NOV 2026
            </p>
          </div>
          <div className="py-6 px-4 md:px-6 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-white uppercase mb-2 font-semibold">
              LOCATION
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-accent-dark uppercase">
              NAIROBI, KENYA
            </p>
          </div>
          <div className="py-6 px-4 md:px-6 border-r border-gray-300 dark:border-gray-700">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-white uppercase mb-2 font-semibold">
              EDITION
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-accent-dark uppercase">
              6TH &middot; ANNUAL
            </p>
          </div>
          <div className="py-6 px-4 md:px-6">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-white uppercase mb-2 font-semibold">
              CONFERENCES
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-accent-dark uppercase">
              DROIDCON &middot; FLUTTER
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

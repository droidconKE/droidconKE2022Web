import React from 'react'
import { TICKETS_LINK } from '../../constant/constants'

const highlights = [
  {
    id: 'beyond-the-sessions',
    title: ['Beyond the', 'Sessions'],
    body: 'Hands-on labs, engineering leader panels, and real dev talk. Master Agentic AI, level up your security game, and fast-track your career at the Unconference Track.',
    image: '/images/new-design/revised/beyond-sessions.png',
    imageAlt: 'Two toy robots shaking hands',
    cardClass: 'bg-primary',
    titleClass: 'text-accent',
    // Card colours are fixed in both themes, so dark: variants pin the text
    // against the global `p` rule.
    bodyClass: 'text-white dark:text-white',
    imageFirst: false,
  },
  {
    id: 'developer-days',
    title: ['Developer', 'Days'],
    body: 'Level up across two days of hardcore Android and Kotlin sessions. From the Swift SDK for Android to AI agents and performance tuning, get real-world insights from top-tier engineers shaping the ecosystem.',
    image: '/images/new-design/revised/dev-days.png',
    imageAlt: 'Two astronauts holding hands',
    cardClass: 'bg-accent',
    titleClass: 'text-primary',
    bodyClass: 'text-black dark:text-black',
    imageFirst: true,
  },
]

export const ConfHighlights = () => {
  return (
    <section className="s-container my-12 md:my-24">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-8 md:mb-10">
        <h2 className="text-primary dark:text-primary-dark text-4xl md:text-6xl font-display">
          Conf. Highlights
        </h2>
        <a
          href={TICKETS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary whitespace-nowrap text-xs md:text-sm px-6 py-2.5"
        >
          GET YOUR TICKET
          <svg
            className="w-4 h-4 ml-2"
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
      </div>

      <div className="flex flex-col gap-6 md:gap-8">
        {highlights.map((item) => (
          <div
            key={item.id}
            className={`w-full rounded-[32px] overflow-hidden ${item.cardClass}`}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-10 p-8 md:p-12 ${
                item.imageFirst ? '' : 'md:flex-row-reverse'
              }`}
            >
              <div className="w-full md:w-[35%] flex justify-center shrink-0">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-48 md:w-full max-w-[280px] h-auto object-contain"
                />
              </div>

              <div className="w-full md:w-[65%]">
                <h3
                  className={`font-display text-4xl md:text-5xl lg:text-6xl leading-none mb-5 md:mb-6 ${item.titleClass}`}
                >
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed max-w-2xl ${item.bodyClass}`}
                >
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

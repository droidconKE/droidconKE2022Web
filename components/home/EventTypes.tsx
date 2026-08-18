import React from 'react'

const eventCards = [
  { name: 'Panels', id: 'panels', image: '/images/svg/panels.svg' },
  { name: 'Workshops', id: 'workshops', image: '/images/svg/workshops.svg' },
  { name: 'Networking', id: 'networking', image: '/images/svg/networking.svg' },
  {
    name: 'Exhibitions',
    id: 'exhibitions',
    image: '/images/svg/exhibitions.svg',
  },
  // Speakers is hidden for 2026 (CFP closed) — restore next year:
  // { name: 'Speakers', id: 'speakers', image: '/images/svg/speakers.svg' },
]

export const EventTypes = () => {
  return (
    <section className="s-container my-12 md:my-24">
      {/* Gradient card */}
      {/* Deep bottom padding is per the design — the labels sit well clear of
          the white card below, not tight against it. */}
      <div className="w-full rounded-[32px] p-8 md:p-12 pb-16 md:pb-24 shadow-xl bg-gradient-to-b from-primary to-accent">
        <h2 className="text-white text-4xl md:text-6xl font-display mb-12 md:mb-20">
          2026 Conf. Essentials
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {eventCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-start text-center"
            >
              <img
                src={card.image}
                alt=""
                aria-hidden="true"
                className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
              />
              <h3 className="text-white text-lg md:text-xl lg:text-2xl mt-4 md:mt-6">
                {card.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* More Stacks pill — overlaps the bottom of the gradient card */}
      <div className="relative -mt-6 md:-mt-8 w-full bg-white dark:bg-white border border-primary rounded-[28px] px-6 md:px-10 py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* The pill stays white in both themes, so pin the text colour too —
            the global `p` rule would otherwise lighten it in dark mode. */}
        <p className="text-primary dark:text-primary text-xl md:text-2xl lg:text-3xl font-display leading-tight text-center sm:text-left">
          More Stacks.
          <br />
          All Mobile.
        </p>
        <img
          src="/images/new-design/revised/stacks.png"
          alt="Kotlin, Swift, React, AI and Flutter"
          // 88px at lg matches the strip's authored size in the design (573x88).
          className="h-10 md:h-16 lg:h-[88px] w-auto max-w-full object-contain"
        />
      </div>
    </section>
  )
}

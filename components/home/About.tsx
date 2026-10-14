import React from 'react'

const statsBoxes = [
  { value: '7TH', label: 'DROIDCON EDITION' },
  { value: '3RD', label: 'FLUTTERCON EDITION' },
  { value: '230+', label: 'Sessions Delivered' },
  { value: '3,000+', label: 'Attendees Since 2018' },
]

const About = () => {
  return (
    <section className="s-container ">
      <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden shadow-xl">
        {/* Left Column (Blue) */}
        <div className="w-full md:w-[55%] bg-primary p-8 md:p-10 lg:p-12 flex flex-col justify-center [container-type:inline-size]">
          {/* "DroidconKe" is one unbreakable word, 5.97px wide per pixel of
              font size. Below md the card leaves width - 96px for it: 36px
              fits from 311, 48px from 390. From md the column is a size
              container and the heading is its text box (100cqw) over 6,
              capped at the design's 72px: never clipped, where 72px was from
              768 to about 1270. */}
          <h2 className="text-accent text-4xl min-[390px]:text-5xl md:text-[clamp(1.875rem,calc(100cqw/6),4.5rem)] font-display leading-none mb-8">
            About
            <br />
            DroidconKe
          </h2>
          <p className="text-white dark:text-white text-lg md:text-xl leading-relaxed mb-6">
            Droidcon Kenya returns for its 7th edition on November 5th and 6th,
            2026, at PrideInn Azure Hotel in Nairobi, as the largest Droidcon
            chapter in Sub-Saharan Africa.
          </p>
          <p className="text-white dark:text-white text-lg md:text-xl leading-relaxed">
            Droidcon Kenya is part of next.app devCon, the global home of
            Droidcon, Fluttercon, and the wider mobile developer community.
          </p>
        </div>

        {/* Right Column (Green) — 2x2 split by hairlines */}
        <div className="w-full md:w-[45%] bg-accent grid grid-cols-2">
          {statsBoxes.map((box, index) => (
            <div
              key={box.value}
              className={`p-6 flex flex-col justify-center [container-type:inline-size] ${
                index < 2 ? 'border-b border-primary' : ''
              }`}
            >
              {/* "3,000+" is 3.6px wide per pixel of font size, and a cell's
                  text box is 82px at md and 197px at xl, so the fixed sizes
                  ran past the card even on desktop. Each cell is a size
                  container and its figure takes the size the widest one fits
                  at, capped at the design's step for that breakpoint. The
                  padding stays 24px throughout: at 40px the figures sat well
                  under the design size, and at md under the 20px floor. */}
              <div className="text-primary text-[clamp(1.25rem,calc(100cqw/3.6),1.875rem)] md:text-[clamp(1.25rem,calc(100cqw/3.6),3rem)] lg:text-[clamp(1.25rem,calc(100cqw/3.6),3.75rem)] font-display mb-2">
                {box.value}
              </div>
              {/* Two lines kept for every label from md, so the figures in a
                  row share a baseline whichever labels wrap. */}
              {/* Two lines reserved at every size (15px lines on phones, 16px from
                  md), so a label that wraps beside one that does not cannot
                  push the figures in a row out of level; at 360 exactly one
                  label per row wraps. */}
              <div className="text-primary text-[10px] md:text-xs min-h-[1.875rem] md:min-h-[2rem] uppercase">
                {box.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

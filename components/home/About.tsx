import React from 'react'

const statsBoxes = [
  { value: '7TH', label: 'DROIDCON EDITION' },
  { value: '3RD', label: 'FLUTTER EDITION' },
  { value: '200+', label: 'SESSIONS' },
  { value: '3000+', label: 'ATTENDEES' },
]

const About = () => {
  return (
    <section className="s-container ">
      <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden shadow-xl">
        {/* Left Column (Blue) */}
        <div className="w-full md:w-[55%] bg-primary p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <h2 className="text-accent text-5xl md:text-7xl font-display leading-none mb-8">
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
              className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${
                index < 2 ? 'border-b border-primary' : ''
              }`}
            >
              <div className="text-primary text-3xl md:text-5xl lg:text-6xl font-display mb-2">
                {box.value}
              </div>
              <div className="text-primary text-[10px] md:text-xs uppercase">
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

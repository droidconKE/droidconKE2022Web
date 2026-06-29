import React from 'react'

const statsBoxes = [
  { value: '6TH', label: 'DROIDCON EDITION', isPrimary: true },
  { value: '2ND', label: 'FLUTTER EDITION', isPrimary: false },
  { value: '200+', label: 'SESSIONS', isPrimary: false },
  { value: '3000+', label: 'ATTENDEES', isPrimary: false },
]

const About = () => {
  return (
    <section className="s-container ">
      <div className="flex flex-col md:flex-row w-full rounded-3xl overflow-hidden shadow-xl">
        {/* Left Column (Blue) */}
        <div className="w-full md:w-[55%] bg-primary p-8 flex flex-col justify-center">
          <div className="flex items-center text-white text-sm md:text-base font-medium mb-6">
            <div className="w-6 h-px bg-white mr-3" />
            About droidconke
          </div>
          <h2 className="text-accent text-5xl md:text-7xl font-display leading-none mb-8">
            About
            <br />
            DroidconKe
          </h2>
          <p className="text-white text-lg md:text-xl leading-relaxed">
            This 6th in-person event will include several tech communities from
            the East African Region and continental members. Participants will
            have an excellent chance to learn about Android development and
            opportunities and to network with Android experts in the ecosystem.
          </p>
        </div>

        {/* Right Column (Green) */}
        <div className="w-full md:w-[45%] bg-accent p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-4 md:gap-6 h-full">
            {statsBoxes.map((box) => (
              <div
                key={box.value}
                className={`bg-accent-2 border ${
                  box.isPrimary ? 'border-primary' : 'border-primary/30'
                } p-4 md:p-6 lg:p-8 flex flex-col justify-center`}
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
      </div>
    </section>
  )
}

export default About

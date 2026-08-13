import React from 'react'

const marqueeItems: string[] = [
  'DroidconKE 2026',
  '05-06 Nov 2026',
  'Nairobi, Kenya',
  'The largest Mobile Event in Africa',
]

const MarqueeContent = () => (
  <>
    {marqueeItems.map((item) => (
      <React.Fragment key={item}>
        {/* Adjusted margins slightly to closer match the wide gaps in the design */}
        <span className="mx-6 text-md font-semibold uppercase text-primary dark:text-white tracking-widest">
          {item}
        </span>
        <span className="mx-6 font-bold text-2xl text-primary dark:text-accent-dark tracking-widest">
          •
        </span>
      </React.Fragment>
    ))}
  </>
)

const Marquee = () => {
  return (
    <div className="mt-4 flex overflow-hidden w-full bg-accent border-y border-accent dark:border-accent-dark dark:bg-dark py-2">
      <div className="flex w-max shrink-0 animate-marquee items-center">
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <div
        aria-hidden="true"
        className="flex w-max shrink-0 animate-marquee items-center"
      >
        {/* Must match the first block exactly */}
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </div>
  )
}

export default Marquee

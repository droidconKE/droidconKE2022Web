import React from 'react'

const marqueeItems: string[] = [
  'The largest android Event in Africa',
  'DroidconKE 2026',
  '05-06 Nov 2026',
  'Nairobi, Kenya',
]

const MarqueeContent = () => (
  <>
    {marqueeItems.map((item) => (
      <React.Fragment key={item}>
        {/* Adjusted margins slightly to closer match the wide gaps in the design */}
        <span className="mx-6 text-md font-semibold uppercase text-primary dark:text-white tracking-widest">
          {item}
        </span>
        <span className="mx-6 font-bold text-2xl text-primary dark:text-white tracking-widest">
          •
        </span>
      </React.Fragment>
    ))}
  </>
)

const Marquee = () => {
  return (
    <div className="mt-4 flex overflow-hidden w-full bg-blue-50 border-y border-blue-200 dark:border-gray-700 dark:bg-dark py-2">
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

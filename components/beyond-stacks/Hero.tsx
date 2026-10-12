import { TicketLink } from './TicketLink'

export const Hero = () => (
  // Below md this follows the sponsors hero: an inset card on the page gutter
  // with centred copy and a compact CTA. From md it runs full-bleed, as drawn.
  <section
    aria-labelledby="beyond-stacks-title"
    className="relative isolate overflow-hidden bg-primary mx-4 sm:mx-10 mt-6 rounded-4xl md:mx-0 md:mt-0 md:rounded-t-none"
  >
    {/* A stand-in event photo until the design's own image is exported. */}
    <img
      src="/images/gallery/561.jpg"
      alt=""
      fetchPriority="high"
      className="absolute inset-y-0 right-0 -z-10 h-full w-full md:w-2/3 object-cover object-[50%_30%]"
    />
    {/* Below md, a flat brand-blue tint over the photo, as on the sponsors
        hero: 85% keeps white text at 4.5:1 over the photo's brightest
        patches, and 85 is off the opacity scale, hence the arbitrary value.
        From md, green into blue behind the copy; from xl the copy ends
        well left of the photo, so the wash clears and it shows in its own
        colours. The from/via/to stops only take effect with the gradient. */}
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 bg-primary/[0.85] md:bg-transparent md:bg-gradient-to-r from-accent via-primary via-40% to-primary/60 xl:to-transparent xl:to-75%"
    />

    <div className="s-container py-12 md:py-24 text-center md:text-left">
      <h1
        id="beyond-stacks-title"
        className="font-display text-white text-3xl md:text-6xl leading-tight"
      >
        Beyond Stacks Track
      </h1>
      <p className="mt-4 text-white dark:text-white text-lg md:text-2xl leading-snug">
        A shared 3rd track across both conference days{' '}
        {/* The drawn two-line split needs lg: at md the first line is wider
            than the copy column, and the break would strand "days". */}
        <br className="hidden lg:inline" />
        for the entire engineering ecosystem.
      </p>
      <div className="mt-8 md:mt-14 flex justify-center md:justify-start">
        <TicketLink className="text-xs md:text-sm px-6 py-2.5 md:py-4">
          Get Unconference Ticket
        </TicketLink>
      </div>
    </div>
  </section>
)

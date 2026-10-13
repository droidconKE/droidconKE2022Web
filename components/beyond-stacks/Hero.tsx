import { TicketLink } from './TicketLink'

export const Hero = () => (
  <section
    aria-labelledby="beyond-stacks-title"
    className="relative isolate overflow-hidden bg-primary rounded-b-4xl"
  >
    <img
      src="/images/new-design/revised/beyond-stacks-hero.jpg"
      srcSet="/images/new-design/revised/beyond-stacks-hero-800.jpg 800w, /images/new-design/revised/beyond-stacks-hero.jpg 1600w"
      sizes="(min-width: 768px) 66vw, 100vw"
      alt=""
      fetchPriority="high"
      className="absolute left-0 right-0 top-0 -z-20 h-64 w-full object-cover object-[50%_30%] md:left-auto md:bottom-0 md:h-full md:w-2/3"
    />
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-transparent from-30% to-primary md:hidden"
    />
    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 -z-10 h-12 bg-gradient-to-b from-primary to-accent md:hidden"
    />
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 hidden md:block bg-gradient-to-r from-accent via-primary via-40% to-primary/60 xl:to-transparent xl:to-75%"
    />

    <div className="s-container pt-56 pb-16 md:py-24">
      <h1
        id="beyond-stacks-title"
        className="font-display text-white text-4xl md:text-6xl leading-tight"
      >
        Beyond Stacks
      </h1>
      <p className="mt-4 text-white dark:text-white text-lg md:text-2xl leading-snug">
        A shared 3rd track across both conference days{' '}
        <br className="hidden lg:inline" />
        for the entire engineering ecosystem.
      </p>
      <div className="mt-8 md:mt-14 flex">
        <TicketLink className="text-sm px-6 py-3 md:py-4">
          Get Unconference Ticket
        </TicketLink>
      </div>
    </div>
  </section>
)

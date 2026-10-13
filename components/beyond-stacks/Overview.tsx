import { SectionTitle } from './SectionHeader'

const facts = [
  { term: 'Format', detail: 'Discussion-first over slide decks.' },
  {
    term: 'Access',
    detail:
      'Included with the All-Access Pass or available as a standalone track ticket.',
  },
  {
    term: 'Level',
    detail: 'Sessions tagged Intermediate or Advanced.',
  },
]

export const Overview = () => (
  <section
    aria-labelledby="overview-title"
    className="s-container my-12 sm:my-10"
  >
    <div className="grid gap-6 lg:grid-cols-5 lg:gap-12">
      <div className="lg:col-span-2">
        <SectionTitle id="overview-title">Overview</SectionTitle>
      </div>
      <div className="lg:col-span-3 space-y-4 text-base md:text-lg leading-relaxed">
        <h3 className="font-display text-black dark:text-white text-2xl md:text-4xl leading-tight">
          Engineering goes beyond mobile.
        </h3>
        <p>
          Build beyond your usual stack, explore new technologies, and connect
          with engineers solving problems across the wider ecosystem.
        </p>
      </div>
    </div>

    <dl className="mt-10 md:mt-12 grid rounded-3xl bg-primary md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/40">
      {facts.map(({ term, detail }, index) => (
        <div
          key={term}
          className="relative px-6 py-6 md:my-6 md:py-4 md:px-6 md:first:pl-12"
        >
          <dt className="text-accent text-2xl">
            {term}:
            {/* Points the eye along the row, so only between items, and only
                from lg: an md column is no wider than the label beside it.
                Inside the <dt> because a <dl> group may hold only <dt>/<dd>. */}
            {index < facts.length - 1 && (
              <img
                src="/images/svg/arrow-right.svg"
                alt=""
                width={64}
                height={25}
                className="hidden lg:block absolute top-5 right-6"
              />
            )}
          </dt>
          <dd className="mt-2 md:max-w-[14rem] text-white text-base md:text-lg leading-snug">
            {detail}
          </dd>
        </div>
      ))}
    </dl>
  </section>
)

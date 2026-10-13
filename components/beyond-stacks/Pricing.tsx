import { SectionHeader } from './SectionHeader'
import { TicketLink } from './TicketLink'

const passes = [
  {
    name: 'Beyond Stacks Side Event Pass Only',
    price: 'KES 7,500',
    description: 'Full 2-day access to The Unconference Track only',
    cta: 'Get Unconference Pass only',
    bestValue: false,
  },
  {
    name: 'Full Access Pass',
    price: 'KES 10,000',
    description:
      'Full 2-day access to Unconference + Droidcon Kenya + Fluttercon Kenya',
    cta: 'Get Full Pass',
    bestValue: true,
  },
]

export const Pricing = () => (
  <section
    aria-labelledby="pricing-title"
    className="s-container my-12 sm:my-10"
  >
    <SectionHeader
      id="pricing-title"
      title="Pricing & Passes"
      ctaVariant="primary"
    />
    <ul className="overflow-hidden rounded-4xl bg-gradient-to-b from-primary from-[calc(100%-4rem)] to-accent">
      {passes.map((pass, index) => (
        <li key={pass.name}>
          {index > 0 && (
            <div aria-hidden="true" className="relative">
              <div className="mx-6 md:mx-10 h-px bg-white/60" />
              <span className="absolute left-0 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-dark" />
              <span className="absolute right-0 top-1/2 h-10 w-10 translate-x-1/2 -translate-y-1/2 rounded-full bg-white dark:bg-dark" />
            </div>
          )}
          <div className="grid gap-4 px-6 py-8 md:grid-cols-12 md:gap-8 md:p-10">
            <div className="md:col-span-4">
              <h3 className="text-white text-2xl leading-tight">{pass.name}</h3>
              {pass.bestValue && (
                <p className="mt-3 inline-flex items-center gap-2.5 rounded-full bg-[#FF57E9] pl-4 pr-6 py-1.5 text-sm text-black dark:text-black">
                  <i aria-hidden="true" className="fa fa-asterisk" />
                  Best Value
                </p>
              )}
            </div>
            <p className="md:col-span-3 text-white dark:text-white text-2xl">
              {pass.price}
            </p>
            <div className="md:col-span-5">
              <p className="text-white dark:text-white text-base md:text-lg leading-snug">
                {pass.description}
              </p>
              <TicketLink className="mt-4 text-xs md:text-sm px-5 py-2.5">
                {pass.cta}
              </TicketLink>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
)

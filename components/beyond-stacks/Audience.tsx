import { SectionHeader } from './SectionHeader'

const audiences = [
  {
    title: 'Platform & Cross-Platform Developers',
    description: 'Engineers seeking deep architectural sessions.',
  },
  {
    title: 'Backend, Cloud & Data Engineers',
    description:
      'Practitioners looking to align systems, APIs, and infrastructure with modern client apps.',
  },
  {
    title: 'AI & Agentic Tooling Leads',
    description:
      'Engineers integrating production AI agents, MCPs, and automated workflows into existing stacks.',
  },
  {
    title: 'Seniors & Engineers',
    description:
      'Experienced technical leads focused on debate, architecture trade-offs, and real-world war stories.',
  },
]

export const Audience = () => (
  <section
    aria-labelledby="audience-title"
    className="s-container my-12 sm:my-10"
  >
    <SectionHeader
      id="audience-title"
      title="Who It’s Built For"
      colorClassName="text-black dark:text-white"
      ctaVariant="accent"
    />
    <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {audiences.map(({ title, description }) => (
        // The card is white in both themes, so the text colours are pinned
        // against the global light-on-dark rule, and the border only shows
        // where the card would otherwise melt into a white page. In the row
        // of four, titles reserve three lines so every description starts
        // level and runs down into the green, as drawn.
        <li
          key={title}
          className="sm:min-h-[18rem] xl:min-h-[25rem] rounded-3xl border border-gray-200 dark:border-transparent bg-gradient-to-b from-white from-55% to-accent px-6 pt-8 pb-12"
        >
          <h3 className="xl:min-h-[3lh] text-primary dark:text-primary text-xl md:text-2xl leading-tight">
            {title}
          </h3>
          <p className="mt-4 sm:mt-8 xl:max-w-[12.5rem] text-black dark:text-black text-base md:text-lg leading-snug">
            {description}
          </p>
        </li>
      ))}
    </ul>
  </section>
)

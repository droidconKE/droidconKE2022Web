import { SectionHeader } from './SectionHeader'

const audiences = [
  {
    title: 'Platform & Cross-Platform Developers',
    description:
      'Engineers who love to build beyond their stack. The all-round builders.',
  },
  {
    title: 'Agentic Engineering',
    description:
      'For engineers building with AI agents, exploring new workflows, and figuring out what AI-assisted development actually looks like in practice.',
  },
  {
    title: 'Backend, Cloud & Data Engineers',
    description:
      'Practitioners looking to align systems, APIs, and infrastructure with modern client apps.',
  },
]

const personas = [
  {
    name: 'The Curious',
    description:
      'You’re always wondering how things work, what’s changing, and what’s happening outside your usual stack. You come to learn something new, ask questions, and leave with something you didn’t know before.',
  },
  {
    name: 'The Mavericks',
    description:
      'You don’t always follow the usual path. You experiment, try different tools, challenge how things are normally done, and enjoy figuring things out for yourself.',
  },
  {
    name: 'The Connoisseur',
    description:
      'You know your craft, you care about how things are built, and you’re always looking for better ways to solve problems. You appreciate good engineering and enjoy a conversation with people who know their stuff.',
  },
]

const card =
  'rounded-3xl border border-accent bg-gradient-to-b from-white from-55% to-accent px-6 py-8 lg:pb-12'

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
    <ul className="grid gap-5 lg:grid-cols-3">
      {audiences.map(({ title, description }) => (
        <li key={title} className={`lg:min-h-[25rem] ${card}`}>
          <h3 className="lg:min-h-[3lh] xl:min-h-[2lh] text-primary dark:text-primary text-xl md:text-2xl leading-tight">
            {title}
          </h3>
          <p className="mt-4 lg:mt-8 text-black dark:text-black text-base md:text-lg leading-snug">
            {description}
          </p>
        </li>
      ))}
    </ul>
    <ul className="mt-5 grid gap-5 lg:grid-cols-3">
      {personas.map(({ name, description }) => (
        <li key={name} className={card}>
          <h3 className="text-primary dark:text-primary text-xl md:text-2xl leading-tight">
            {name}
          </h3>
          <p className="mt-3 text-black dark:text-black text-base md:text-lg leading-snug">
            {description}
          </p>
        </li>
      ))}
    </ul>
  </section>
)

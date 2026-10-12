import { SectionHeader } from './SectionHeader'

const strands = [
  {
    title: 'Agentic Engineering (Flagship Strand)',
    focus:
      'Building, testing, and shipping with AI agents in large, existing codebases.',
    topics: [
      'Output verification and self-running quality gates (linting, typed boundaries, automated testing).',
      'Device & emulator automation via Model Context Protocol (MCP).',
      'Team-wide agent rollout: shared configurations, context engineering, and coding standards.',
      'Eliminating low-quality AI code generation in code reviews.',
      'Real-world post-mortems: What we stopped letting agents do in production.',
    ],
    fadesToGreen: true,
  },
  {
    title: 'iOS / Swift',
    focus: 'Native iOS development and modern client architecture.',
    topics: [
      'Key Topics: VIPER, MVVM, MVI, state management, and Swift ecosystem updates (~4 curated sessions).',
    ],
    fadesToGreen: false,
  },
  {
    title: 'React Native',
    focus: 'Cross-platform engineering at scale.',
    topics: [
      'Key Topics: Performance optimization, native module bridging, and architecture patterns (~4 curated sessions).',
    ],
    fadesToGreen: true,
  },
  {
    title: 'Ecosystem & Infrastructure',
    focus: 'Supporting technologies that power modern applications.',
    topics: [
      'Key Topics: API design, cloud/DevOps pipelines, data infrastructure, and product-engineering collaboration.',
    ],
    fadesToGreen: false,
  },
]

export const CommunityStrands = () => (
  <section
    aria-labelledby="community-strands-title"
    className="s-container my-12 md:my-24"
  >
    <SectionHeader
      id="community-strands-title"
      title="Community Strands"
      ctaVariant="accent"
    />
    {/* The flagship strand spans the three rows the others stack into, in
        the narrower of the two columns, as drawn. */}
    <ul className="grid gap-4 xl:grid-cols-[minmax(0,7fr)_minmax(0,8fr)] xl:gap-x-9 xl:gap-y-3.5">
      {strands.map(({ title, focus, topics, fadesToGreen }, index) => (
        <li
          key={title}
          className={`flex flex-col overflow-hidden rounded-4xl bg-primary ${index === 0 ? 'xl:row-span-3' : ''}`}
        >
          <div
            className={`p-8 md:px-10 md:pt-10 ${fadesToGreen ? 'pb-0' : 'md:pb-8'}`}
          >
            <h3 className="text-accent text-2xl md:text-[2rem] leading-tight md:leading-normal">
              {title}
            </h3>
            <p className="mt-4 md:mt-6 text-white dark:text-white text-lg md:text-2xl leading-snug">
              Core Focus: {focus}
            </p>
            {/* Drawn squares rather than list markers, which can't be moved
                away from the text. Safari stops announcing a list once its
                markers are gone, so the role is restated. */}
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
            <ul
              role="list"
              className="mt-6 md:mt-8 space-y-5 md:space-y-8 text-white text-base md:text-lg leading-relaxed md:leading-8"
            >
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="relative pl-8 md:pl-10 before:absolute before:left-1 md:before:left-1.5 before:top-[0.75em] before:h-1.5 before:w-1.5 md:before:h-2 md:before:w-2 before:bg-white"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          {/* The green fills whatever height the card has below its text, so
              it never sits behind white copy: a 3rem strip at least, and on
              the flagship's spare length a ramp over the last 10rem only. */}
          {fadesToGreen && (
            <div
              aria-hidden="true"
              className="grow min-h-[3rem] bg-gradient-to-b from-primary from-[max(0px,calc(100%-10rem))] to-accent"
            />
          )}
        </li>
      ))}
    </ul>
  </section>
)

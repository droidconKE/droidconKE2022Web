import { SectionHeader } from './SectionHeader'

const strands = [
  {
    title: 'Platform & Cross-Platform',
    focus:
      'Cross-platform development, architecture and building across technologies.',
    topics: [],
    fadesToGreen: false,
    tall: false,
  },
  {
    title: 'Agentic Engineering',
    sessions: '3 sessions',
    focus: 'AI, agents and new ways of building software.',
    topics: [
      'Agents',
      'AI-assisted development',
      'Agentic workflows',
      'MCPs',
      'Skills and context',
      'Testing and verification',
    ],
    fadesToGreen: true,
    tall: true,
  },
  {
    title: 'iOS & Swift',
    focus: 'Native iOS development and modern client architecture.',
    topics: [
      'Key Topics: Architecture, testing, render optimisation, and SwiftUI (~4 curated sessions).',
    ],
    fadesToGreen: false,
    tall: false,
  },
  {
    title: 'React Native',
    focus: 'Cross-platform engineering at scale.',
    topics: [
      'Key Topics: Performance optimization, native module bridging, and architecture patterns (~4 curated sessions).',
    ],
    fadesToGreen: true,
    tall: false,
  },
]

export const CommunityStrands = () => (
  <section
    aria-labelledby="community-strands-title"
    className="s-container my-12 sm:my-10"
  >
    <SectionHeader
      id="community-strands-title"
      title="Community Strands"
      ctaVariant="accent"
    />
    {/* From xl, Agentic Engineering, the strand with the most topics, spans
        the three rows the others stack into, in the narrower left column as
        drawn. Narrower screens keep the reading order. */}
    <ul className="grid gap-4 xl:grid-cols-[minmax(0,7fr)_minmax(0,8fr)] xl:gap-x-9 xl:gap-y-3.5">
      {strands.map(({ title, sessions, focus, topics, fadesToGreen, tall }) => (
        <li
          key={title}
          className={`flex flex-col overflow-hidden rounded-4xl bg-primary ${tall ? 'xl:col-start-1 xl:row-start-1 xl:row-span-3' : 'xl:col-start-2'}`}
        >
          <div
            className={`px-6 py-8 md:px-10 md:pt-10 ${fadesToGreen ? 'pb-0' : 'md:pb-8'}`}
          >
            <h3 className="text-accent text-2xl md:text-[2rem] leading-tight md:leading-normal">
              {title}
            </h3>
            {sessions && (
              <p className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-sm text-black dark:text-black">
                {sessions}
              </p>
            )}
            <p className="mt-4 md:mt-6 text-white dark:text-white text-lg md:text-2xl leading-snug">
              Core Focus: {focus}
            </p>
            {topics.length > 0 && (
              <>
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
              </>
            )}
          </div>
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

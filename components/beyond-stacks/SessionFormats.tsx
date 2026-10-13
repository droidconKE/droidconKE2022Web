import { SectionTitle } from './SectionHeader'

const formats = [
  {
    title: 'Lightning',
    description: 'One sharp idea, practical technique, or anti-pattern',
    icon: { src: '/images/svg/lightning.svg', width: 36, height: 63 },
  },
  {
    title: 'Talk',
    description:
      'Deep dive into a workflow, architectural pattern, or case study',
    icon: { src: '/images/svg/talk.svg', width: 44, height: 43 },
  },
  {
    title: 'Live Demo',
    description: 'End-to-end live running loops—no slides',
    icon: { src: '/images/svg/live-demo.svg', width: 64, height: 45 },
  },
  {
    title: 'Panel',
    description: 'Cross-company conversations, post-mortems, and trade-offs',
    icon: { src: '/images/svg/panel.svg', width: 64, height: 26 },
  },
  {
    title: 'Keynote',
    description: 'Strategic framing and industry mindset shifts',
    icon: { src: '/images/svg/keynote.svg', width: 54, height: 74 },
  },
  {
    title: 'Workshop',
    description: 'Hands-on, build-along technical sessions',
    icon: { src: '/images/svg/workshop.svg', width: 64, height: 59 },
  },
]

export const SessionFormats = () => (
  <section
    aria-labelledby="session-formats-title"
    className="s-container my-12 sm:my-10"
  >
    <div className="rounded-4xl bg-primary px-4 py-8 md:px-12 md:py-16">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 mb-8 md:mb-11">
        <SectionTitle id="session-formats-title" colorClassName="text-accent">
          Session <br className="hidden lg:inline" />
          Formats
        </SectionTitle>
        <p className="lg:mt-3.5 max-w-sm text-white dark:text-white text-base md:text-xl leading-relaxed">
          Every session prioritizes interactive conversations and practical
          execution over passive presentations.
        </p>
      </div>
      <ul className="grid gap-3 lg:grid-cols-2 lg:gap-x-1.5">
        {formats.map(({ title, description, icon }) => (
          <li
            key={title}
            className="flex items-start gap-4 rounded-3xl bg-white/10 p-5 md:gap-7 md:pl-9 md:pr-8 md:pt-6 md:pb-8"
          >
            <img
              src={icon.src}
              alt=""
              width={icon.width}
              height={icon.height}
              className="h-[74px] w-16 shrink-0 object-scale-down [zoom:0.5] md:[zoom:1]"
            />
            <div className="md:max-w-[21rem]">
              <h3 className="text-accent text-2xl">{title}</h3>
              <p className="mt-1 md:mt-3.5 text-white dark:text-white text-sm md:text-base leading-snug md:leading-relaxed">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
)

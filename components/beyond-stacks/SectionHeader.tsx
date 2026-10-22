import type { ReactNode } from 'react'
import { TicketLink, type TicketLinkVariant } from './TicketLink'

type SectionTitleProps = {
  id: string
  children: ReactNode
  // Headings are brand blue on the light theme and green on the dark one,
  // except where the design sets them in the page's text colour.
  // eslint-disable-next-line react/require-default-props
  colorClassName?: string
}

export const SectionTitle = ({
  id,
  children,
  colorClassName = 'text-primary dark:text-accent',
}: SectionTitleProps) => (
  <h2
    id={id}
    className={`font-display text-4xl md:text-6xl leading-none ${colorClassName}`}
  >
    {children}
  </h2>
)

type SectionHeaderProps = Omit<SectionTitleProps, 'children'> & {
  title: string
  ctaVariant: TicketLinkVariant
}

// Spaced to sit evenly between the section above and its own content: from
// sm, s-container pads 20px each side of the 40px section margin, so the gap
// above is 80px and so is this margin below.
export const SectionHeader = ({
  title,
  ctaVariant,
  ...titleProps
}: SectionHeaderProps) => (
  <div className="flex flex-wrap items-center justify-between gap-4 mb-12 sm:mb-20">
    <SectionTitle {...titleProps}>{title}</SectionTitle>
    <TicketLink
      variant={ctaVariant}
      className="text-xs md:text-sm px-6 py-2.5 md:py-4"
    >
      Get Beyond Stacks Ticket
    </TicketLink>
  </div>
)

import type { ReactNode } from 'react'
import { TICKETS_LINK } from '../../constant/constants'

const variantClass = {
  accent: 'btn-accent',
  primary: 'btn-primary',
} as const

export type TicketLinkVariant = keyof typeof variantClass

type TicketLinkProps = {
  children: ReactNode
  // eslint-disable-next-line react/require-default-props
  variant?: TicketLinkVariant
  // Size overrides; utilities win over the btn-* component classes.
  // eslint-disable-next-line react/require-default-props
  className?: string
}

// Every call to action on the page sells a ticket. The unconference pass has no
// checkout of its own yet, so all of them share the conference ticket link.
export const TicketLink = ({
  children,
  variant = 'accent',
  className = '',
}: TicketLinkProps) => (
  <a
    href={TICKETS_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`${variantClass[variant]} normal-case whitespace-nowrap ${className}`}
  >
    {children}
    <svg
      aria-hidden="true"
      className="w-4 h-4 ml-2 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H16V12M16 6L6 16"
      />
    </svg>
  </a>
)

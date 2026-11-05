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
  // Pass rows keep the conference ticket link. The other buttons sell swag
  // while tickets are not on sale.
  // eslint-disable-next-line react/require-default-props
  href?: string
}

export const TicketLink = ({
  children,
  variant = 'accent',
  className = '',
  href = TICKETS_LINK,
}: TicketLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${variantClass[variant]} normal-case whitespace-nowrap ${className}`}
  >
    {children}
    <span className="sr-only"> (opens in a new tab)</span>
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

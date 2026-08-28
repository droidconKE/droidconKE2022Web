import { useState } from 'react'
import { Session } from '../../types/types'
import {
  downloadIcs,
  googleCalendarUrl,
  outlookCalendarUrl,
} from '../../utils/calendar'

// Inline reveal (like the share row) rather than a popover: the session cards
// clip absolutely-positioned children with overflow-hidden, and the compact
// variant renders inside a <Link>, so every click must stay on the card.
export const AddToCalendar = ({
  session,
  compact = false,
}: {
  session: Session
  // eslint-disable-next-line react/require-default-props
  compact?: boolean
}) => {
  const [showOptions, setShowOptions] = useState(false)

  const openUrl = (url: string | null) => {
    if (url) window.open(url, '_blank', 'noopener')
  }

  const triggerClass = compact
    ? 'text-primary dark:text-accent-dark hover:opacity-70 transition-opacity'
    : 'btn-outline uppercase'
  const optionClass = compact
    ? 'text-primary dark:text-accent-dark hover:opacity-70 transition-opacity'
    : 'btn-outline text-xs px-4 py-2'

  return (
    <div
      className={`flex flex-wrap items-center ${compact ? 'gap-3' : 'gap-4'}`}
    >
      <button
        type="button"
        className={triggerClass}
        aria-label="Add to calendar"
        aria-expanded={showOptions}
        title="Add to calendar"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setShowOptions((prev) => !prev)
        }}
      >
        {compact ? (
          <i className="fa fa-calendar-plus-o fa-lg" />
        ) : (
          <>
            add to calendar <i className="fa fa-calendar-plus-o" />
          </>
        )}
      </button>
      {showOptions && (
        <>
          <button
            type="button"
            className={optionClass}
            aria-label="Add to Google Calendar"
            title="Google Calendar"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              openUrl(googleCalendarUrl(session))
            }}
          >
            {compact ? <i className="fa fa-google" /> : 'Google'}
          </button>
          <button
            type="button"
            className={optionClass}
            aria-label="Add to Outlook Calendar"
            title="Outlook"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              openUrl(outlookCalendarUrl(session))
            }}
          >
            {compact ? <i className="fa fa-windows" /> : 'Outlook'}
          </button>
          <button
            type="button"
            className={optionClass}
            aria-label="Download .ics file"
            title="Download .ics"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              downloadIcs(session)
            }}
          >
            {compact ? <i className="fa fa-download" /> : '.ics'}
          </button>
        </>
      )}
    </div>
  )
}

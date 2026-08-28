import { useId, useState } from 'react'
import { Session } from '../../types/types'
import { downloadIcs, googleCalendarUrl } from '../../utils/calendar'

// Outlook web/desktop import .ics fine, so Google + .ics covers everyone —
// the Outlook compose deeplink differs between work and personal accounts
// and can't be offered reliably behind a single button.
export const AddToCalendar = ({
  session,
  venue,
  compact = false,
}: {
  session: Session
  // eslint-disable-next-line react/require-default-props
  venue?: string
  // eslint-disable-next-line react/require-default-props
  compact?: boolean
}) => {
  const [showOptions, setShowOptions] = useState(false)
  const optionsId = useId()

  const openGoogle = () => {
    const url = googleCalendarUrl(session, venue)
    if (url) window.open(url, '_blank', 'noopener')
  }

  const optionClass = compact
    ? 'text-primary dark:text-accent-dark hover:opacity-70 transition-opacity px-1'
    : 'btn-outline text-xs px-4 py-2'

  return (
    <div
      className={
        compact ? 'relative inline-flex' : 'flex flex-wrap items-center gap-4'
      }
    >
      <button
        type="button"
        className={
          compact
            ? 'text-primary dark:text-accent-dark hover:opacity-70 transition-opacity'
            : 'btn-outline uppercase'
        }
        aria-label="Add to calendar"
        aria-expanded={showOptions}
        aria-controls={optionsId}
        title="Add to calendar"
        onClick={() => setShowOptions((prev) => !prev)}
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
        <div
          id={optionsId}
          role="group"
          aria-label="Calendar options"
          className={
            compact
              ? 'absolute right-full top-1/2 -translate-y-1/2 mr-2 z-20 flex items-center gap-2 rounded-full bg-white dark:bg-darker-dark shadow-lg ring-1 ring-black/10 dark:ring-white/10 px-3 py-1.5'
              : 'flex flex-wrap items-center gap-4'
          }
        >
          <button
            type="button"
            className={optionClass}
            aria-label="Add to Google Calendar"
            title="Google Calendar"
            onClick={() => openGoogle()}
          >
            {compact ? <i className="fa fa-google" /> : 'Google'}
          </button>
          <button
            type="button"
            className={optionClass}
            aria-label="Download .ics file"
            title="Download .ics"
            onClick={() => downloadIcs(session, venue)}
          >
            {compact ? <i className="fa fa-download" /> : '.ics'}
          </button>
        </div>
      )}
    </div>
  )
}

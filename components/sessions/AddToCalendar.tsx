import { useEffect, useId, useRef, useState } from 'react'
import { Session } from '../../types/types'
import { downloadIcs, googleCalendarUrl } from '../../utils/calendar'

// Compact options sit beside the trigger, as a sibling of the card <Link> —
// session cards clip overflow-hidden, and a <button> cannot nest in an <a>.
// Google + .ics covers everyone: Outlook web/desktop import .ics, and the
// compose deeplink differs between work and personal accounts.
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
  const rootRef = useRef<HTMLDivElement>(null)

  const openGoogle = () => {
    const url = googleCalendarUrl(session, venue)
    if (url) window.open(url, '_blank', 'noopener')
  }

  useEffect(() => {
    if (!showOptions) return undefined
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowOptions(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) {
        setShowOptions(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [showOptions])

  const optionClass = compact
    ? 'text-primary dark:text-accent-dark hover:opacity-70 transition-opacity px-1'
    : 'btn-outline text-xs px-4 py-2'

  return (
    <div
      ref={rootRef}
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
            onClick={openGoogle}
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

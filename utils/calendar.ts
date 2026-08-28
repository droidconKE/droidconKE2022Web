import { Session } from '../types/types'
import { VENUE } from '../constant/constants'

// Session times come from the API as naive "YYYY-MM-DD HH:mm:ss" strings in
// EAT (UTC+3). Parsing them with Date/moment would interpret them in the
// visitor's local timezone, so the offset is applied explicitly instead.
const EAT_UTC_OFFSET_HOURS = 3

const parseEat = (value: string): Date | null => {
  const m = value?.match(
    /^(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2})(?::(\d{2}))?/
  )
  if (!m) return null
  return new Date(
    Date.UTC(
      Number(m[1]),
      Number(m[2]) - 1,
      Number(m[3]),
      Number(m[4]) - EAT_UTC_OFFSET_HOURS,
      Number(m[5]),
      Number(m[6] ?? '0')
    )
  )
}

// "YYYYMMDDTHHMMSSZ" — the compact UTC form Google and .ics expect
const utcStamp = (date: Date): string =>
  date
    .toISOString()
    .replace(/[-:]/g, '')
    .replace(/\.\d{3}/, '')

// "YYYY-MM-DDTHH:mm:ssZ" — the ISO form Outlook expects
const utcIso = (date: Date): string =>
  date.toISOString().replace(/\.\d{3}Z$/, 'Z')

const sessionTimes = (session: Session) => {
  const start = parseEat(session.start_date_time)
  const end = parseEat(session.end_date_time)
  return start && end ? { start, end } : null
}

const sessionUrl = (session: Session): string =>
  session.slug ? `${window.location.origin}/sessions/${session.slug}` : ''

const buildDetails = (session: Session): string => {
  const speakers = session.speakers?.map((s) => s.name).join(', ')
  return [
    session.description,
    speakers ? `Speakers: ${speakers}` : '',
    sessionUrl(session),
  ]
    .filter(Boolean)
    .join('\n\n')
}

const buildLocation = (session: Session): string => {
  const rooms = session.rooms?.map((r) => r.title).join(', ')
  return rooms ? `${rooms}, ${VENUE}` : VENUE
}

export const googleCalendarUrl = (session: Session): string | null => {
  const times = sessionTimes(session)
  if (!times) return null
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: session.title,
    dates: `${utcStamp(times.start)}/${utcStamp(times.end)}`,
    details: buildDetails(session),
    location: buildLocation(session),
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

export const outlookCalendarUrl = (session: Session): string | null => {
  const times = sessionTimes(session)
  if (!times) return null
  const params = new URLSearchParams({
    path: '/calendar/action/compose',
    rru: 'addevent',
    subject: session.title,
    startdt: utcIso(times.start),
    enddt: utcIso(times.end),
    body: buildDetails(session),
    location: buildLocation(session),
  })
  return `https://outlook.office.com/calendar/0/action/compose?${params.toString()}`
}

// RFC 5545: escape structural characters, CRLF line endings, fold lines > 75 octets
const icsEscape = (value: string): string =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')

const icsFold = (line: string): string => {
  const chunks = []
  let rest = line
  while (rest.length > 74) {
    chunks.push(rest.slice(0, 74))
    rest = ` ${rest.slice(74)}`
  }
  chunks.push(rest)
  return chunks.join('\r\n')
}

export const downloadIcs = (session: Session): void => {
  const times = sessionTimes(session)
  if (!times) return
  const url = sessionUrl(session)
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//droidconKE//Website//EN',
    'BEGIN:VEVENT',
    `UID:session-${session.id}-${utcStamp(times.start)}@droidconke`,
    `DTSTAMP:${utcStamp(new Date())}`,
    `DTSTART:${utcStamp(times.start)}`,
    `DTEND:${utcStamp(times.end)}`,
    `SUMMARY:${icsEscape(session.title)}`,
    `DESCRIPTION:${icsEscape(buildDetails(session))}`,
    `LOCATION:${icsEscape(buildLocation(session))}`,
    ...(url ? [`URL:${url}`] : []),
    'END:VEVENT',
    'END:VCALENDAR',
  ]
  const ics = lines.map(icsFold).join('\r\n')
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' })
  const blobUrl = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = blobUrl
  link.download = `${session.slug ?? `session-${session.id}`}.ics`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(blobUrl)
}

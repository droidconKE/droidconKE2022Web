import { Session } from '../types/types'

// Session times come from the API as naive "YYYY-MM-DD HH:mm:ss" strings in
// EAT (UTC+3). Parsing them with Date/moment would interpret them in the
// visitor's local timezone, so the offset is applied explicitly instead.
const EAT_UTC_OFFSET_HOURS = 3

const parseEat = (value: string): Date | null => {
  if (!value) return null
  // If the API ever starts sending an explicit zone (Z or ±HH:MM), trust it
  // rather than double-shifting by the manual EAT offset.
  if (/(?:Z|[+-]\d{2}:?\d{2})$/i.test(value.trim())) {
    const zoned = new Date(value)
    return Number.isNaN(zoned.getTime()) ? null : zoned
  }
  const m = value.match(
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

const buildLocation = (session: Session, venue?: string): string =>
  [session.rooms?.map((r) => r.title).join(', '), venue]
    .filter(Boolean)
    .join(', ')

export const googleCalendarUrl = (
  session: Session,
  venue?: string
): string | null => {
  const times = sessionTimes(session)
  if (!times) return null
  const eventLocation = buildLocation(session, venue)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: session.title,
    dates: `${utcStamp(times.start)}/${utcStamp(times.end)}`,
    details: buildDetails(session),
  })
  if (eventLocation) params.set('location', eventLocation)
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

// RFC 5545: escape structural characters, CRLF line endings, fold lines
// longer than 75 octets (bytes, not characters — folding is measured in
// UTF-8 octets and must never split a surrogate pair, so we walk code points)
const icsEscape = (value: string): string =>
  value
    .replace(/\\/g, '\\\\')
    .replace(/;/g, '\\;')
    .replace(/,/g, '\\,')
    .replace(/\r?\n/g, '\\n')

const encoder = new TextEncoder()

const icsFold = (line: string): string => {
  const folded: string[] = []
  let current = ''
  let currentBytes = 0
  Array.from(line).forEach((char) => {
    const charBytes = encoder.encode(char).length
    // Continuation lines carry a leading space, leaving 74 octets of content
    const budget = folded.length === 0 ? 75 : 74
    if (currentBytes + charBytes > budget) {
      folded.push(current)
      current = char
      currentBytes = charBytes
    } else {
      current += char
      currentBytes += charBytes
    }
  })
  folded.push(current)
  return folded.map((part, i) => (i === 0 ? part : ` ${part}`)).join('\r\n')
}

export const downloadIcs = (session: Session, venue?: string): void => {
  const times = sessionTimes(session)
  if (!times) return
  const url = sessionUrl(session)
  const eventLocation = buildLocation(session, venue)
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
    ...(eventLocation ? [`LOCATION:${icsEscape(eventLocation)}`] : []),
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
  // Revoking synchronously can cancel the download in Firefox/Safari
  setTimeout(() => URL.revokeObjectURL(blobUrl), 0)
}

import moment from 'moment'
import { Event } from '../types/types'

export const isServer = typeof window === 'undefined'

export const isClient = typeof window !== 'undefined'

export const groupBy3 = (arr: string[]) =>
  arr.reduce(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (acc: any[], current: string, index: number) =>
      (index % 3 ? acc[acc.length - 1].push(current) : acc.push([current])) &&
      acc,
    []
  )

export const humanReadable = (value: string) =>
  moment(value).format('MMM Do YY')

export const timeAm = (value: string) => moment(value).format('a')

export const timeDay = (value: string) => moment(value).format('DD')

export const time = (value: string) => moment(value).format('h:mm')

export const hour = (value: string) => moment(value).format('h:mm a')

export const truncateString = (str: string, num = 100) => {
  if (!str) return ''
  if (str.length <= num) {
    return str
  }
  return `${str.slice(0, num)}...`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objIsEmpty = (obj: any) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

// Where an event is held, for a calendar entry. Some events repeat the name as
// the address, so identical parts are only said once.
export const eventVenue = (event?: Event | null): string | undefined => {
  if (!event) return undefined
  const parts = [event.venue_name, event.venue_address].filter(Boolean)
  return (
    parts.filter((part, i) => parts.indexOf(part) === i).join(', ') || undefined
  )
}

// A link to a session. The event is carried when the session belongs to a past
// event — slugs are unique per event, not globally — and left off for the
// event being run now, which is what the detail page falls back to.
export const sessionHref = (
  slug?: string,
  from?: string,
  eventSlug?: string
) => {
  if (!slug) return '/sessions'
  const query = [
    from ? `from=${encodeURIComponent(from)}` : '',
    eventSlug ? `event=${encodeURIComponent(eventSlug)}` : '',
  ]
    .filter(Boolean)
    .join('&')
  return `/sessions/${slug}${query ? `?${query}` : ''}`
}

// An event slug read back off a URL, so it is kept to the shape of a slug
// before it goes into an API path. Anything else — a malformed value, or a
// repeated parameter, which arrives as an array — falls back to the event
// being run now. The single place this is decided, so the page and the
// feedback button cannot read the same URL differently.
const EVENT_SLUG = /^[a-z0-9][a-z0-9-]*$/i

export const resolveEventSlug = (param?: string | string[]) =>
  typeof param === 'string' && EVENT_SLUG.test(param)
    ? param.toLowerCase()
    : process.env.NEXT_PUBLIC_EVENT_SLUG

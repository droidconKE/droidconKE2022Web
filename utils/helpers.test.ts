import { describe, expect, it } from 'vitest'
import {
  feedbackWindowLabel,
  feedbackWindowState,
  getTwitterUsername,
  internalPath,
  agendaTabForDate,
  sessionShareUrl,
} from './helpers'
import type { Event } from '../types/types'

const event = (fields: Partial<Event>) => fields as Event

describe('getTwitterUsername', () => {
  it('reads a handle off twitter.com', () => {
    expect(getTwitterUsername('https://twitter.com/droidconke')).toBe(
      'droidconke'
    )
  })

  it('reads one off x.com too — profiles have been migrating', () => {
    expect(getTwitterUsername('https://x.com/droidconke')).toBe('droidconke')
  })

  it('drops an @ that was pasted into the profile URL', () => {
    expect(getTwitterUsername('https://twitter.com/@droidconke')).toBe(
      'droidconke'
    )
    expect(getTwitterUsername('https://x.com/@droidconke')).toBe('droidconke')
  })

  it('ignores a query string or fragment', () => {
    expect(getTwitterUsername('https://x.com/droidconke?s=20')).toBe(
      'droidconke'
    )
  })

  it('is null rather than "undefined" when there is no handle', () => {
    // The literal string 'undefined' used to end up in shared tweets.
    expect(getTwitterUsername(null)).toBeNull()
    expect(getTwitterUsername('')).toBeNull()
    expect(getTwitterUsername('https://linkedin.com/in/someone')).toBeNull()
  })
})

describe('sessionShareUrl', () => {
  const share = (over: Partial<Parameters<typeof sessionShareUrl>[0]> = {}) =>
    sessionShareUrl({
      forwardedProto: 'https',
      host: 'droidcon.co.ke',
      resolvedUrl: '/sessions/opening-keynote',
      eventSlug: 'droidconke-23',
      ...over,
    })

  it('takes the first forwarded protocol when a proxy sends two', () => {
    expect(share({ forwardedProto: 'https,http' })).toBe(
      'https://droidcon.co.ke/sessions/opening-keynote'
    )
  })

  it('is empty when the host is missing', () => {
    expect(share({ host: undefined })).toBe('')
    expect(share({ host: '' })).toBe('')
  })

  it('keeps event and drops a campaign tag', () => {
    expect(
      share({
        resolvedUrl:
          '/sessions/opening-keynote?utm_source=twitter&event=droidconke-23',
        eventParam: 'droidconke-23',
      })
    ).toBe(
      'https://droidcon.co.ke/sessions/opening-keynote?event=droidconke-23'
    )
  })

  it('publishes the resolved slug, not a repeated raw parameter', () => {
    expect(
      share({
        resolvedUrl: '/sessions/opening-keynote?event=nope&event=also',
        eventParam: ['nope', 'also'],
        eventSlug: 'droidconke-23',
      })
    ).toBe(
      'https://droidcon.co.ke/sessions/opening-keynote?event=droidconke-23'
    )
  })
})

describe('feedbackWindowState', () => {
  it('is open when the organizer set no window and the switch is on', () => {
    expect(feedbackWindowState(event({ feedback_open: true }))).toBe('open')
  })

  it('is not-open-yet while the window has not opened', () => {
    expect(
      feedbackWindowState(event({ feedback_opens_at: '2099-01-01 09:00:00' }))
    ).toBe('not-open-yet')
  })

  it('is closed once the window has passed', () => {
    expect(
      feedbackWindowState(
        event({
          feedback_opens_at: '2020-01-01 09:00:00',
          feedback_closes_at: '2020-01-02 09:00:00',
        })
      )
    ).toBe('closed')
  })

  // The regression this suite was added for. end_date carries no time, and
  // parseEat refuses a bare date unless asked, so this branch used to get
  // null and could only ever answer 'not-open-yet' — a long-finished event
  // with feedback switched off said "Not open yet" forever.
  it('says closed, not not-open-yet, for a finished event with no window', () => {
    expect(
      feedbackWindowState(
        event({ feedback_open: false, end_date: '2020-01-02' })
      )
    ).toBe('closed')
  })

  it('still says not-open-yet for an event that has not happened', () => {
    expect(
      feedbackWindowState(
        event({ feedback_open: false, end_date: '2099-01-02' })
      )
    ).toBe('not-open-yet')
  })

  it('says not-open-yet when there is no window and no end date', () => {
    expect(feedbackWindowState(event({ feedback_open: false }))).toBe(
      'not-open-yet'
    )
  })
})

describe('feedbackWindowLabel', () => {
  it('matches the state it is labelling', () => {
    expect(
      feedbackWindowLabel(
        event({ feedback_open: false, end_date: '2020-01-02' })
      )
    ).toBe('Feedback has closed')
    expect(
      feedbackWindowLabel(
        event({ feedback_open: false, end_date: '2099-01-02' })
      )
    ).toBe('Not open yet')
  })
})

describe('internalPath', () => {
  it('keeps a path on this site', () => {
    expect(internalPath('/past-events/2024')).toBe('/past-events/2024')
    expect(internalPath('  /sessions  ')).toBe('/sessions')
    expect(internalPath(['/past-events/2025'])).toBe('/past-events/2025')
  })

  it('refuses another site, including the forms that look like a path', () => {
    expect(internalPath('https://evil.com')).toBeNull()
    expect(internalPath('//evil.com')).toBeNull()
    expect(internalPath('/\\evil.com')).toBeNull()
    expect(internalPath('')).toBeNull()
    expect(internalPath(['https://evil.com'])).toBeNull()
  })

  it('refuses the control characters a browser strips out of a URL', () => {
    // Each of these resolves to https://evil.com/ once the browser drops the
    // control character and is left with "///evil.com".
    expect(internalPath('/\n//evil.com')).toBeNull()
    expect(internalPath('/\r//evil.com')).toBeNull()
    expect(internalPath('/\t//evil.com')).toBeNull()
  })
})

describe('agendaTabForDate', () => {
  const days = ['2026-11-05', '2026-11-06']

  it('opens the day being lived', () => {
    expect(agendaTabForDate(days, '2026-11-06')).toBe(1)
  })

  it('stays on the first day when that date is not in the schedule', () => {
    expect(agendaTabForDate(days, '2026-10-07')).toBe(0)
    expect(agendaTabForDate(days, '2026-11-07')).toBe(0)
  })

  it('reads a key that also carries a time', () => {
    expect(
      agendaTabForDate(
        ['2026-11-05 00:00:00', '2026-11-06 00:00:00'],
        '2026-11-06'
      )
    ).toBe(1)
  })
})

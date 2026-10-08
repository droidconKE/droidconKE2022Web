import { describe, expect, it } from 'vitest'
import {
  feedbackWindowLabel,
  feedbackWindowState,
  getTwitterUsername,
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

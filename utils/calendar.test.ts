import { describe, expect, it } from 'vitest'
import { parseEat, sessionHasEnded, eatCalendarDate } from './calendar'

// These pin the timezone behaviour, which is the part nobody can check by
// looking: the API sends naive "YYYY-MM-DD HH:mm:ss" strings in EAT (UTC+3),
// and the answer has to be the same on the server and on a visitor's phone in
// any timezone.
describe('parseEat', () => {
  it('reads a naive timestamp as EAT, not as local time', () => {
    // 18:00 in Nairobi is 15:00 UTC.
    expect(parseEat('2026-11-20 18:00:00')?.toISOString()).toBe(
      '2026-11-20T15:00:00.000Z'
    )
  })

  it('accepts the T separator the same way', () => {
    expect(parseEat('2026-11-20T18:00:00')?.toISOString()).toBe(
      '2026-11-20T15:00:00.000Z'
    )
  })

  it('trusts an explicit zone instead of shifting it again', () => {
    expect(parseEat('2026-11-20T18:00:00Z')?.toISOString()).toBe(
      '2026-11-20T18:00:00.000Z'
    )
  })

  it('refuses a bare date by default, because a session end needs a time', () => {
    // Reading a session's end as 00:00 would call it over before it ran.
    expect(parseEat('2026-11-20')).toBeNull()
  })

  it('reads a bare date as midnight EAT when the caller allows it', () => {
    expect(parseEat('2026-11-20', { allowDateOnly: true })?.toISOString()).toBe(
      '2026-11-19T21:00:00.000Z'
    )
  })

  it('returns null for nonsense rather than an Invalid Date', () => {
    expect(parseEat('')).toBeNull()
    expect(parseEat('next tuesday')).toBeNull()
  })
})

describe('sessionHasEnded', () => {
  it('is true for a session whose end has passed', () => {
    expect(sessionHasEnded({ end_date_time: '2020-01-01 10:00:00' })).toBe(true)
  })

  it('is false for one still to come', () => {
    expect(sessionHasEnded({ end_date_time: '2099-01-01 10:00:00' })).toBe(
      false
    )
  })

  it('reads an unparseable end as not ended, so nothing is nudged wrongly', () => {
    expect(sessionHasEnded({ end_date_time: '' })).toBe(false)
  })
})

describe('eatCalendarDate', () => {
  it('is the Nairobi date, including across midnight UTC', () => {
    // 21:00 UTC on the 5th is 00:00 on the 6th in Nairobi.
    expect(eatCalendarDate(Date.parse('2026-11-05T21:00:00.000Z'))).toBe(
      '2026-11-06'
    )
    // One second earlier is still the 5th there.
    expect(eatCalendarDate(Date.parse('2026-11-05T20:59:59.000Z'))).toBe(
      '2026-11-05'
    )
  })
})

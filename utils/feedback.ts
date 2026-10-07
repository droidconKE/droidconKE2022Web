// A per-browser id, made up once and kept in localStorage. It is what lets
// the API tell "this browser again" apart from "someone else" — it is hashed
// with the link server-side, never stored raw, and is not tied to an account.
const DEVICE_KEY = 'feedback-device'

const makeId = (): string => {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.randomUUID === 'function'
  ) {
    return crypto.randomUUID()
  }
  // randomUUID needs a secure context; http previews fall back to
  // getRandomValues shaped into a real v4 id: 8-4-4-4-12 hex chars, the
  // version nibble set to 4 and the variant nibble to one of 8/9/a/b, all
  // in place on the hex string itself (the repo's eslint rules refuse
  // bitwise operators).
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.getRandomValues === 'function'
  ) {
    const hex = Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) =>
      byte.toString(16).padStart(2, '0')
    ).join('')
    const chars = hex.split('')
    chars[12] = '4'
    chars[16] = '89ab'[parseInt(hex[16], 16) % 4]
    const id = chars.join('')
    return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`
  }
  return `fb-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

// Stable within the page's life even when localStorage is refused: private
// browsing throws on every access, and a fresh id per call would make the
// mine lookup and the POST disagree — edit and remove would silently never
// work, and each submit would write a new answer instead of a correction.
let pageDeviceId: string | null = null

export const feedbackDeviceId = (): string => {
  if (typeof window === 'undefined') return ''
  if (pageDeviceId) return pageDeviceId
  try {
    const existing = window.localStorage.getItem(DEVICE_KEY)
    if (existing) {
      pageDeviceId = existing
      return existing
    }
    pageDeviceId = makeId()
    window.localStorage.setItem(DEVICE_KEY, pageDeviceId)
  } catch {
    // Private browsing can refuse localStorage; the answer still goes out,
    // it just cannot be recognised as this browser's afterwards.
    pageDeviceId = makeId()
  }
  return pageDeviceId
}

export const feedbackHeaders = (): Record<string, string> => ({
  'X-Feedback-Device': feedbackDeviceId(),
})

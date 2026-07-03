import { useCallback, useEffect, useState } from 'react'
import { isClient } from '../utils/helpers'

const STARRED_KEY = 'droidcon_starred_sessions'
// Fired whenever the starred list changes so every mounted StarIcon /
// the My Sessions filter stay in sync within the same tab.
export const STARRED_EVENT = 'droidcon_starred_change'

export const readStarred = (): number[] => {
  if (!isClient) return []
  try {
    const raw = localStorage.getItem(STARRED_KEY)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const writeStarred = (ids: number[]) => {
  localStorage.setItem(STARRED_KEY, JSON.stringify(ids))
  window.dispatchEvent(new Event(STARRED_EVENT))
}

export const useStarredSessions = () => {
  const [starred, setStarred] = useState<number[]>([])

  useEffect(() => {
    setStarred(readStarred())
    const sync = () => setStarred(readStarred())
    window.addEventListener(STARRED_EVENT, sync)
    // keep multiple tabs in sync too
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener(STARRED_EVENT, sync)
      window.removeEventListener('storage', sync)
    }
  }, [])

  const isStarred = useCallback((id: number) => starred.includes(id), [starred])

  const toggleStar = useCallback((id: number) => {
    const current = readStarred()
    const next = current.includes(id)
      ? current.filter((x) => x !== id)
      : [...current, id]
    writeStarred(next)
    setStarred(next)
  }, [])

  return { starred, isStarred, toggleStar }
}

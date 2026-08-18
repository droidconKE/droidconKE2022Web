import { useCallback, useEffect, useState } from 'react'
import moment from 'moment'
import { Session, FilterInterface, Room, Schedule } from '../types/types'
import { objIsEmpty, isClient } from '../utils/helpers'
import { readStarred, STARRED_EVENT } from './useStarredSessions'

const ACTIVE_VIEW = 'droidcon_view'
const MY_SESSIONS = 'droidcon_my_sessions'

export const useSession = ({ allSchedules }: { allSchedules: Schedule[] }) => {
  const [showFilterSession, setShowFilterSession] = useState(false)
  const [isGridView, setIsGridView] = useState(true)
  const [activeTab, setActiveTab] = useState(0)
  const [showMySessions, setShowMysessions] = useState(false)
  const [loading, setLoading] = useState(false)
  const [schedules, setSchedules] = useState<Schedule[]>(allSchedules)

  const originalSchedules = allSchedules

  const changeViewType = (val: boolean) => {
    if (!val) {
      localStorage.setItem(ACTIVE_VIEW, 'list')
      setIsGridView(false)
    } else {
      setIsGridView(true)
      localStorage.setItem(ACTIVE_VIEW, 'grid')
    }
  }

  // My Sessions is now a purely client-side bookmark list kept in
  // localStorage (see useStarredSessions) — filter the schedule to only the
  // sessions the user has starred, preserving the day grouping.
  const computeMySchedules = useCallback((): Schedule[] => {
    const starred = readStarred()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const grouped = originalSchedules as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = {}
    Object.keys(grouped).forEach((key) => {
      result[key] = grouped[key].filter((s: Session) => starred.includes(s.id))
    })
    return result as Schedule[]
  }, [originalSchedules])

  useEffect(() => {
    if (!isClient) {
      return
    }
    if (localStorage.getItem(ACTIVE_VIEW) === 'list') {
      setIsGridView(false)
    }
    if (localStorage.getItem(ACTIVE_VIEW) === 'grid') {
      setIsGridView(true)
    }
    if (localStorage.getItem(MY_SESSIONS) === 'mine') {
      setShowMysessions(true)
    }
  }, [])

  const handleSessionsToggle = useCallback(() => {
    setLoading(true)
    if (showMySessions) {
      setSchedules(computeMySchedules())
      localStorage.setItem(MY_SESSIONS, 'mine')
    } else {
      setSchedules(originalSchedules)
      localStorage.setItem(MY_SESSIONS, 'all')
    }
    setLoading(false)
  }, [showMySessions, computeMySchedules, originalSchedules])

  const filterSession = (filter: FilterInterface) => {
    if (objIsEmpty(filter)) {
      handleSessionsToggle()
      return
    }
    const newSchedule = {
      ...(showMySessions ? computeMySchedules() : originalSchedules),
    }
    Object.keys(newSchedule).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      newSchedule[key] = newSchedule[key].filter((e: Session) => {
        return (
          (filter?.level
            ? e.session_level.includes(filter?.level)
            : e.session_level) &&
          (filter?.format
            ? e.session_format.includes(filter?.format)
            : e.session_format) &&
          (filter?.room
            ? e.rooms.some((x: Room) => x.title.includes(filter?.room))
            : e.rooms)
        )
      })
    })
    setSchedules(newSchedule)
  }

  useEffect(() => {
    handleSessionsToggle()
  }, [handleSessionsToggle])

  // Keep the My Sessions view live as the user stars/unstars elsewhere.
  useEffect(() => {
    if (!isClient) {
      return undefined
    }
    const sync = () => {
      if (showMySessions) {
        setSchedules(computeMySchedules())
      }
    }
    window.addEventListener(STARRED_EVENT, sync)
    return () => window.removeEventListener(STARRED_EVENT, sync)
  }, [showMySessions, computeMySchedules])

  const selectTabByday = useCallback(() => {
    if (moment().format('DD') === '05') setActiveTab(0)
    if (moment().format('DD') === '06') setActiveTab(1)
    if (moment().format('DD') === '07') setActiveTab(2)
  }, [])

  useEffect(() => {
    selectTabByday()
  }, [selectTabByday])

  return {
    showFilterSession,
    setShowFilterSession,
    changeViewType,
    loading,
    isGridView,
    setActiveTab,
    activeTab,
    schedules,
    showMySessions,
    setShowMysessions,
    filterSession,
  }
}

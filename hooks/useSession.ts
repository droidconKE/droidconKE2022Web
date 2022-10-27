import { useCallback, useEffect, useState } from 'react'
import { Schedule } from '../types/types'
import axios from '../utils/axios'
import { isClient } from '../utils/helpers'

const ACTIVE_VIEW = 'droidcon_view'
const MY_SESSIONS = 'droidcon_my_sessions'

export const useSession = ({ allSchedules }: { allSchedules: Schedule[] }) => {
  const [showFilterSession, setShowFilterSession] = useState(false)
  const [isGridView, setIsGridView] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
  const [showMySessions, setShowMysessions] = useState(false)
  const [loading, setLoading] = useState(false)
  const [schedules, setSchedules] = useState<Schedule[]>(allSchedules)
  const [mySchedules, setMySchedules] = useState<Schedule[] | []>([])

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

  const getMySchedules = useCallback(async () => {
    setLoading(true)
    await axios
      .get(
        `/events/${process.env.NEXT_PUBLIC_EVENT_SLUG}/bookmarked_schedule?grouped=true`
      )
      .then((response) => {
        setLoading(false)
        setSchedules(response.data.data)
        setMySchedules(response.data.data)
      })
  }, [])

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
      getMySchedules()
      setShowMysessions(true)
    }
  }, [getMySchedules])

  useEffect(() => {
    if (showMySessions) {
      // eslint-disable-next-line no-unused-expressions
      mySchedules.length ? setSchedules(mySchedules) : getMySchedules()
      localStorage.setItem(MY_SESSIONS, 'mine')
    } else {
      setSchedules(originalSchedules)
      localStorage.setItem(MY_SESSIONS, 'all')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMySessions])

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
  }
}

import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { isClient } from '../utils/helpers'

type ThemeContextType = {
  isDarkTheme: boolean
  toggleTheme: () => void
  isEventReady: boolean
}
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

const THEME_NAME = 'droidcon_theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const isEventReady = process.env.NEXT_PUBLIC_EVENT_READY === 'true' || false

  useEffect(() => {
    if (isClient) {
      if (
        localStorage.getItem(THEME_NAME) === 'dark' ||
        (!(THEME_NAME in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark')
        setIsDarkTheme(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkTheme(false)
      }
    }
  }, [])

  const toggleTheme = useCallback(() => {
    const dark = !isDarkTheme
    localStorage.setItem(THEME_NAME, dark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', dark)
    setIsDarkTheme(dark)
  }, [isDarkTheme])

  // One value per theme change, not a new object on every render, so the
  // components reading the theme only re-render when it actually changes.
  const value = useMemo(
    () => ({ isDarkTheme, toggleTheme, isEventReady }),
    [isDarkTheme, toggleTheme, isEventReady]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

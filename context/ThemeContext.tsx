import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { isClient } from '../utils/helpers'

type ThemeContextType = { isDarkTheme: boolean; toggleTheme: () => void }
export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

const THEME_NAME = 'droidcon_theme'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

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

  const addDarkTheme = () => {
    localStorage.setItem(THEME_NAME, 'dark')
    document.documentElement.classList.add('dark')
    setIsDarkTheme(true)
  }

  const removeDarkTheme = () => {
    localStorage.setItem(THEME_NAME, 'light')
    document.documentElement.classList.remove('dark')
    setIsDarkTheme(false)
  }

  const toggleTheme = () => {
    return isDarkTheme ? removeDarkTheme() : addDarkTheme()
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

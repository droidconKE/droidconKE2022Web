import { useEffect, useState } from 'react'
import { isClient } from '../utils/helpers'

export const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    if (isClient) {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
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
    localStorage.setItem('droidcon-theme', 'dark')
    document.documentElement.classList.add('dark')
    setIsDarkTheme(true)
  }

  const removeDarkTheme = () => {
    localStorage.setItem('droicon-theme', 'light')
    document.documentElement.classList.remove('dark')
    setIsDarkTheme(false)
  }

  const toggleTheme = () => {
    return isDarkTheme ? removeDarkTheme() : addDarkTheme()
  }

  return {
    toggleTheme,
    isDarkTheme,
  }
}

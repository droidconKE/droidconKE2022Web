import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { getCookie, deleteCookie, setCookie } from 'cookies-next'
import { User } from '../types/types'
import axios from '../utils/axios'

type AuthContextType = {
  currentUser: User | null
  token: string
  isAuthenticated: boolean
  loginUser: (res: { token: string; user: User }) => void
  logoutUser: () => void
}
export const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    if (getCookie('token')) {
      try {
        const getUser = async () => {
          await axios.get('/details').then((response) => {
            setIsAuthenticated(true)
            setCurrentUser(response.data.user)
          })
        }
        getUser()
      } catch (error) {
        //
        // eslint-disable-next-line no-console
        console.log({ error })
      }
    }
  }, [])

  const loginUser = ({ token, user }: { token: string; user: User }) => {
    setCookie('token', token, { maxAge: 60 * 60 * 24 * 100, path: '/' })
    setIsAuthenticated(true)
    setCurrentUser(user)
    window.location.reload()
  }

  const logoutUser = () => {
    deleteCookie('token', { path: '/' })
    setIsAuthenticated(false)
    setCurrentUser(null)
    window.location.reload()
  }

  const token = String(getCookie('token'))

  return (
    <AuthContext.Provider
      value={{ currentUser, token, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

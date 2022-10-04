import React, { createContext, ReactNode, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
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
  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  useEffect(() => {
    if (cookies.token) {
      const getUser = async () => {
        await axios.get('/details').then((response) => {
          setIsAuthenticated(true)
          setCurrentUser(response.data.user)
        })
      }

      getUser()
    }
  }, [cookies.token])

  const loginUser = ({ token, user }: { token: string; user: User }) => {
    setCookie('token', token, { maxAge: 60 * 60 * 24 * 100, path: '/' })
    setIsAuthenticated(true)
    setCurrentUser(user)
  }

  const logoutUser = () => {
    removeCookie('token')
    setIsAuthenticated(false)
    setCurrentUser(null)
  }

  const { token } = cookies

  return (
    <AuthContext.Provider
      value={{ currentUser, token, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

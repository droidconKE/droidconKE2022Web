import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import { NavBar } from './components/NavBar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <ThemeProvider>
        <div className="w-full bg-white dark:bg-dark h-screen">
          <NavBar />
          <div>
            <main>{children}</main>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { NotificationsPrompt } from './components/NotificationsPrompt'
import { UpdatesAvailablePrompt } from './components/UpdatesAvailablePrompt'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>The Largest Android Developers&apos; Conference in Africa</title>
      </Head>
      <ThemeProvider>
        <div className="w-full bg-white dark:bg-dark">
          <UpdatesAvailablePrompt />
          <NavBar />
          <div>
            <main>{children}</main>
          </div>
          <Footer />
          <NotificationsPrompt />
        </div>
      </ThemeProvider>
    </>
  )
}

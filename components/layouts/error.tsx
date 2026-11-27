import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import { NavBar } from './components/NavBar'

const SITE = 'DroidconKe'

// Named for what went wrong, so the tab, the history and a bookmark say so.
export default function Layout({
  children,
  title,
}: {
  children: ReactNode
  title: string
}) {
  return (
    <>
      <Head>
        <title>{`${SITE}: ${title}`}</title>
      </Head>
      <ThemeProvider>
        <div className="w-full bg-white dark:bg-dark h-screen">
          <NavBar />
          <div className="pt-[var(--nav-h)]">
            <main>{children}</main>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

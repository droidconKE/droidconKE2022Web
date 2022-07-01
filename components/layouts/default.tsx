import Head from 'next/head'
import React, { ReactNode } from 'react'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="w-full bg-white dark:bg-dark">
        <NavBar />
        <div>
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  )
}

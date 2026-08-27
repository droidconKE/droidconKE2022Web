import Head from 'next/head'
import Script from 'next/script'
import React, { ReactNode } from 'react'
import { ThemeProvider } from '../../context/ThemeContext'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { UpdatesAvailablePrompt } from './components/UpdatesAvailablePrompt'
import { EventFeedback } from './components/EventFeedback'

export default function Layout({ children }: { children: ReactNode }) {
  const gTagCode = process.env.NEXT_PUBLIC_GOOGLE_TAG

  const isEventReady = process.env.NEXT_PUBLIC_EVENT_READY === 'true' || false

  return (
    <>
      <Head>
        <title>
          Sub-Saharan Africa&apos;s premier mobile development conference
        </title>
      </Head>
      <ThemeProvider>
        <div className="w-full min-h-screen bg-white dark:bg-dark">
          <UpdatesAvailablePrompt />
          <NavBar />
          {/* Offset the fixed navbar. --nav-h is the navbar's min-height, so
              this can never fall short and let content slide under it. */}
          <div className="pt-[var(--nav-h)]">
            <main>{children}</main>
          </div>
          <Footer />
          {isEventReady && <EventFeedback />}
        </div>
      </ThemeProvider>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gTagCode}');
        `}
      </Script>
    </>
  )
}

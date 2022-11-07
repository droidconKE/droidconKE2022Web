import Head from 'next/head'
import Script from 'next/script'
import React, { ReactNode } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { ThemeProvider } from '../../context/ThemeContext'
import { Footer } from './components/Footer'
import { NavBar } from './components/NavBar'
import { NotificationsPrompt } from './components/NotificationsPrompt'
import { UpdatesAvailablePrompt } from './components/UpdatesAvailablePrompt'
import { AuthProvider } from '../../context/AuthContext'
import { EventFeedback } from './components/EventFeedback'

export default function Layout({ children }: { children: ReactNode }) {
  const gTagCode = process.env.NEXT_PUBLIC_GOOGLE_TAG
  return (
    <>
      <Head>
        <title>The Largest Android Developers&apos; Conference in Africa</title>
      </Head>
      <ThemeProvider>
        <AuthProvider>
          <GoogleOAuthProvider
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
          >
            <div className="w-full min-h-screen bg-white dark:bg-dark">
              <UpdatesAvailablePrompt />
              <NavBar />
              <div>
                <main>{children}</main>
              </div>
              <Footer />
              <EventFeedback />
              <NotificationsPrompt />
            </div>
          </GoogleOAuthProvider>
        </AuthProvider>
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

import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { useState } from 'react'
import type { ReactElement, ReactNode, Fragment } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Layout from '../components/layouts/default'
import { FilterSessions } from '../components/sessions/FilterSessions'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const [showFilterSession, setShowFilterSession] = useState(false)
  const PageNode = () => (
    <>
      <Component {...pageProps} setShowFilterSession={setShowFilterSession} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {showFilterSession && (
        <FilterSessions
          showFilterSession={showFilterSession}
          setShowFilterSession={setShowFilterSession}
        />
      )}
    </>
  )

  return Component.getLayout ? (
    Component.getLayout(<PageNode />)
  ) : (
    <Layout>
      <PageNode />
    </Layout>
  )
}

export default MyApp

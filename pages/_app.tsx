import '../styles/globals.css'
import 'react-toastify/ReactToastify.css'
import type { ReactElement, ReactNode, Fragment } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Layout from '../components/layouts/default'
import { Workbox } from 'workbox-window'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js')
    wb.register()
  }
  const PageNode = () => (
    <>
      <Component {...pageProps} />
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
    </>
  )

  return Component.getLayout ? (
    Component.getLayout(<PageNode />)
  ) : (
    <Layout>
      <div id="layout">
        <PageNode />
      </div>
    </Layout>
  )
}

export default MyApp

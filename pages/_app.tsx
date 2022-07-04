import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.min.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Layout from '../components/layouts/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
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
    </Layout>
  )
}

export default MyApp

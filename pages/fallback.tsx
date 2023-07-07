import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import ErrorComponent from '../components/error'
import ErrorLayout from '../components/layouts/error'

const Fallback: NextPageWithLayout = () => (
  <ErrorComponent
    message="Seems you are offline or our servers might be asleep !"
    status="OFFLINE"
  />
)

Fallback.getLayout = (page: ReactElement) => <ErrorLayout>{page}</ErrorLayout>

Fallback.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Fallback

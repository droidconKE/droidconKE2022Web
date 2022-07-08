import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import ErrorComponent from '../components/error'
import ErrorLayout from '../components/layouts/error'

const Error: NextPageWithLayout = () => (
  <ErrorComponent
    message="Seems you are offline or our servers might be asleep !"
    status="OFFLINE"
  />
)

Error.getLayout = (page: ReactElement) => <ErrorLayout>{page}</ErrorLayout>

export default Error

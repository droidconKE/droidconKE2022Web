import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import ErrorComponent from '../components/error'
import ErrorLayout from '../components/layouts/error'

const Error: NextPageWithLayout = () => (
  <ErrorComponent
    message="It's not you, seems we have an issue, you make come back later"
    status={500}
  />
)

Error.getLayout = (page: ReactElement) => <ErrorLayout>{page}</ErrorLayout>

export default Error

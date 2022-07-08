import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import ErrorComponent from '../components/error'
import ErrorLayout from '../components/layouts/error'

const Error: NextPageWithLayout = () => (
  <ErrorComponent
    message="You can stay here and look at the cookies or head back home"
    status={404}
  />
)

Error.getLayout = (page: ReactElement) => <ErrorLayout>{page}</ErrorLayout>

export default Error

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import ErrorComponent from '../components/error'
import ErrorLayout from '../components/layouts/error'

const Error: NextPageWithLayout = function ErrorPage() {
  return (
    <ErrorComponent
      message="You can stay here and look at the cookies or head back home"
      status={404}
    />
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <ErrorLayout>{page}</ErrorLayout>
}

export default Error

import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import ErrorComponent from '../components/error'
import ErrorLayout from '../components/layouts/error'

const Error: NextPageWithLayout = function ErrorPage() {
  return (
    <ErrorComponent
      message="It's not you, seems we have an issue, you may come back later"
      status={500}
    />
  )
}

Error.getLayout = function getLayout(page: ReactElement) {
  return <ErrorLayout>{page}</ErrorLayout>
}

export default Error

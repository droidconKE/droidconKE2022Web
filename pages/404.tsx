import type { NextPage } from 'next'
import ErrorComponent from '../components/error'

const Error: NextPage = () => (
  <ErrorComponent
    message="You can stay here and look at the cookies or head back home"
    status={404}
  />
)

export default Error

import type { NextPage } from 'next'
import ErrorComponent from '../components/error'

const Error: NextPage = () => (
  <ErrorComponent
    message="It's not you, seems we have an issue, you make come back later"
    status={500}
  />
)

export default Error

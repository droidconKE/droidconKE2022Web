import type { NextPage } from 'next'
import ErrorComponent from '../components/error'

const Error: NextPage = () => (
  <ErrorComponent
    message="Seems you are offline or our servers might be asleep !"
    status="OFFLINE"
  />
)

export default Error

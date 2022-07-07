import type { NextPage } from 'next'
import ErrorComponent from '../components/error'

const Error: NextPage = () => (
  <ErrorComponent
    message="YOU ARE OFFLINE BUDDY. RECONNECT TO CONTINUE ENJOYING DROIDCON 2022"
    status={502}
  />
)

export default Error

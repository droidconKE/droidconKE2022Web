import type { NextPage } from 'next'
import ErrorComponent from '../components/error'

const Error: NextPage = () => (
  <ErrorComponent
    message="INTERNAL SERVER ERROR. CLICK BUTTON TO REDIRECT BACK TO OUR HOME PAGE"
    status={500}
  />
)

export default Error

import type { NextPage } from 'next'
import ErrorComponent from '../components/error'

const Error: NextPage = () => (
  <ErrorComponent
    message="YOU CAN STAY HERE AND LOOK AT THE COOKIES OR HEAD BACK HOME"
    status={404}
  />
)

export default Error

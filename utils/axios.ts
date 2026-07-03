import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.headers.common['Api-Authorization-Key'] =
  process.env.NEXT_PUBLIC_API_KEY ?? ''

export default axios

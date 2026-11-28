import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.headers.common['Api-Authorization-Key'] =
  process.env.NEXT_PUBLIC_API_KEY ?? ''
// A request the API never answers fails after five seconds instead of
// waiting for ever. Pages already render without whatever failed, but a
// stalled request never failed, so the page hung until the platform gave
// up. The API answers in under a second; five calls in a row, the most any
// page makes, still end well inside the platform's 30. The feedback form
// sets its own timeouts.
axios.defaults.timeout = 5000

export default axios

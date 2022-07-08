import axios from 'axios'
// import type { AxiosRequestConfig } from 'axios'

// axios.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // eslint-disable-next-line no-param-reassign
//     config.headers['Api-Authorization-Key'] = process.env.API_KEY ?? ''
//     return config
//   },
//   (error) => {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

axios.defaults.baseURL = process.env.API_BASE_URL
axios.defaults.headers.common['Api-Authorization-Key'] =
  process.env.API_KEY ?? ''

export default axios

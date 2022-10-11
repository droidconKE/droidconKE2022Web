import axios from 'axios'
import { Cookies } from 'react-cookie'
// import type { AxiosRequestConfig } from 'axios'

// axios.interceptors.request.use(
//   (config: AxiosRequestConfig) => {
//     // eslint-disable-next-line no-param-reassign
//     config.headers['Api-Authorization-Key'] = process.env.NEXT_PUBLIC_API_KEY ?? ''
//     return config
//   },
//   (error) => {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.headers.common['Api-Authorization-Key'] =
  process.env.NEXT_PUBLIC_API_KEY ?? ''

const cookies = new Cookies()
const token = cookies.get('token')
if (token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

export default axios

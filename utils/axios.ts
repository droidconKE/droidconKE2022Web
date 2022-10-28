import axios from 'axios'
import { getCookie } from 'cookies-next'
import type { AxiosRequestConfig } from 'axios'
// import { toast } from 'react-toastify'
// import { isClient } from './helpers'

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // eslint-disable-next-line no-param-reassign
    // config.headers['Api-Authorization-Key'] = process.env.NEXT_PUBLIC_API_KEY ?? ''
    const token = getCookie('token', { path: '/' })
    if (token) {
      // axios.defaults.headers.common.Authorization = `Bearer ${token}`
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, no-param-reassign
      config.headers!.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// axios.interceptors.response.use(
//   (response) => {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     // Do something with response data
//     return response
//   },
//   (error) => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     console.log({ error })
//     // if (error.response && error.response.status === 401 && isClient) {
//     //   toast.success(error.response.data.message)
//     // }
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_BASE_URL
axios.defaults.headers.common['Api-Authorization-Key'] =
  process.env.NEXT_PUBLIC_API_KEY ?? ''

export default axios

import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { store } from '../store/store'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

let customStore

export const injectStore = (store) => {
   customStore = store
}

axios.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      const token = customStore.getState().login.accessToken

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }

      return config
   },

   (error) => {
      return Promise.reject(error)
   }
)

axios.interceptors.response.use(
   (response) => {
      Promise.reject(response)
   },

   (error) => {
      if (error.response.status === 401) {
         store.dispatch()
      }
      return Promise.reject(error)
   }
)

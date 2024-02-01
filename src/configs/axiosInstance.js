import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { store } from '../store/store'
import { logoutAction } from '../store/authSlice'

export const axiosInstance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-Type': 'application/json',
   },
})

let storee

export const injectStore = (store) => {
   storee = store
}

axios.interceptors.request.use(
   function (config) {
      const updateConfig = { ...config }

      const token = storee.getState().login.accessToken

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }

      return config
   },

   function (error) {
      return Promise.reject(error)
   }
)

axios.interceptors.response.use(
   function (response) {
      return Promise.reject(response)
   },

   function (error) {
      if (error.response.status === 401) {
         store.dispatch(logoutAction())
      }
      return Promise.reject(error)
   }
)

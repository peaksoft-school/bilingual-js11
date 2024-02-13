import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL

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

axiosInstance.interceptors.request.use(
   (config) => {
      const updateConfig = { ...config }

      // const token = customStore.getState().login.accessToken
      const token =
         'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDgxMDcyMTEsImlhdCI6MTcwNzg0ODAxMSwidXNlcm5hbWUiOiJhYWtodW5vdmEwMkBnbWFpbC5jb20ifQ.fKnq-f5XA1U6nFSVKTwM29czBFCdat77bbgDtz4ugF4'

      if (token) {
         updateConfig.headers.Authorization = `Bearer ${token}`
      }

      return config
   },

   (error) => {
      return Promise.reject(error)
   }
)

axiosInstance.interceptors.response.use(
   (response) => {
      return Promise.resolve(response)
   },

   (error) => {
      if (error.response.status === 401) {
         customStore.dispatch()
      }
      return Promise.reject(error)
   }
)

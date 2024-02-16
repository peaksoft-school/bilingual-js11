import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'
import { ROUTES } from '../../../routes/routes'

const signUp = createAsyncThunk(
   'auth/signUp',

   async ({ values, resetForm, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signUp', values)

         showNotification({
            title: 'You are registered!',
            message: 'We wish you great results!',
            type: 'success',
         })

         const { email, role, token } = response.data
         if (email && role && token) {
            resetForm()

            navigate('/')
         }

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: error.response.data,
            type: 'error',
         })

         return rejectWithValue(error.response)
      }
   }
)

const signIn = createAsyncThunk(
   'auth/signIn',

   async ({ values, resetForm, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/auth/signIn', values)

         showNotification({
            title: 'You are logged in!',
            message: 'With welcome back!',
            type: 'success',
         })

         if (response.data) {
            const { email, role, token } = response.data

            if (email && role && token) {
               resetForm()

               if (role === ROUTES.ADMIN) {
                  navigate('/admin')
               } else {
                  navigate('/')
               }
            }
         }

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: error.response.data,
            type: 'error',
         })

         return rejectWithValue(error.response.data)
      }
   }
)

const authWithGoogle = createAsyncThunk(
   'auth/authWithGoogle',

   async ({ tokenId, navigate, isSignUp }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/auth/authenticate/google?tokenId=${tokenId}`
         )

         showNotification({
            title: 'You came in!',
            message: isSignUp ? 'Signed in!' : 'Signed up!',
            type: 'success',
         })

         navigate('/')

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: error.response.data,
            type: 'error',
         })

         return rejectWithValue(error.response.data)
      }
   }
)

export const AUTH_THUNKS = { signIn, signUp, authWithGoogle }

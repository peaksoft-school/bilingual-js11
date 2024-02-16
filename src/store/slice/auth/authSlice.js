import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../../routes/routes'
import { AUTH_THUNKS } from './authThunk'

const BILINGUAL = process.env.BINGUAL

const initialState = {
   token: null,
   isAuth: false,
   role: ROLES.GUEST,
   email: null,
   isLoading: false,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logOut: (state, { payload }) => {
         state.token = null
         state.isAuth = false
         state.role = ROLES.GUEST
         state.email = null

         localStorage.removeItem(BILINGUAL)
         payload.navigate('/')
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(AUTH_THUNKS.signUp.fulfilled, (state, { payload }) => {
            state.role = payload.role
            state.email = payload.email
            state.isAuth = true
            state.isLoading = false
            state.token = payload.token
         })

         .addCase(AUTH_THUNKS.signUp.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(AUTH_THUNKS.signUp.pending, (state) => {
            state.isLoading = true
         })

         .addCase(AUTH_THUNKS.signIn.fulfilled, (state, { payload }) => {
            state.role = payload.role
            state.email = payload.email
            state.token = payload.token
            state.isAuth = true
            state.isLoading = false
         })

         .addCase(AUTH_THUNKS.signIn.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(AUTH_THUNKS.signIn.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            AUTH_THUNKS.authWithGoogle.fulfilled,
            (state, { payload }) => {
               state.role = payload.role
               state.email = payload.email
               state.token = payload.token
               state.isAuth = true
               state.isLoading = false
            }
         )

         .addCase(AUTH_THUNKS.authWithGoogle.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(AUTH_THUNKS.authWithGoogle.pending, (state) => {
            state.isLoading = true
         })
   },
})

const AUTH_ACTIONS = authSlice.actions

export { authSlice, AUTH_ACTIONS }

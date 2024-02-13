import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../../routes/routes'
import { authWithGoogle, signIn, signUp } from './authThunk'

const BILINGUAL = process.env.REACT_APP_BINGUAL

const initialState = {
   accessToken: null,
   isAuth: false,
   role: ROLES.GUEST,
   email: null,
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logOut: (state, { payload }) => {
         state.accessToken = null
         state.isAuth = false
         state.role = ROLES.GUEST
         state.email = null

         localStorage.removeItem(BILINGUAL)
         payload.navigate('/')
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(signUp.fulfilled, (state, { payload }) => {
            state.role = payload.role
            state.email = payload.email
            state.isAuth = true
            state.isLoading = false
         })

         .addCase(signUp.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(signUp.pending, (state) => {
            state.isLoading = true
         })

         .addCase(signIn.fulfilled, (state, { payload }) => {
            state.role = payload.role
            state.isAuth = true
            state.isLoading = false
         })

         .addCase(signIn.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(signIn.pending, (state) => {
            state.isLoading = true
         })

         .addCase(authWithGoogle.fulfilled, (state, { payload }) => {
            state.role = payload.role
            state.email = payload.email
            state.accessToken = payload.accessToken
            state.isAuth = true
         })

         .addCase(authWithGoogle.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(authWithGoogle.pending, (state) => {
            state.isLoading = true
         })
   },
})

const AUTH_ACTIONS = authSlice.actions

export { authSlice, AUTH_ACTIONS }

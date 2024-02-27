import { createSlice } from '@reduxjs/toolkit'

const homeSlice = createSlice({
   name: 'home',
   initialState: {
      test: null,
      loading: false,
      error: null,
   },
   reducers: {
      fetchTestStart(state) {
         state.loading = true
         state.error = null
      },

      fetchTestSuccess(state, action) {
         state.loading = false
         state.test = action.payload
      },

      fetchTestFailure(state, action) {
         state.loading = false
         state.error = action.payload
      },
   },
})

export default homeSlice.reducer

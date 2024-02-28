import { createSlice } from '@reduxjs/toolkit'
import { HOME_TEST } from './homeThunk'

const initialState = {
   testData: null,
   status: '',
   error: null,
}

export const homeSlice = createSlice({
   name: 'home',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(HOME_TEST.getTest.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })

         .addCase(HOME_TEST.getTest.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.testData = action.payload
         })

         .addCase(HOME_TEST.getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default homeSlice.reducer

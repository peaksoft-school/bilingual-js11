import { createSlice } from '@reduxjs/toolkit'
import { MY_RESULTS_THUNK } from './myResultsThunk'

const initialState = {
   myResults: [],
   status: '',
   error: null,
}

export const myResultsSlice = createSlice({
   name: 'myResultsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(MY_RESULTS_THUNK.getResults.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(MY_RESULTS_THUNK.getResults.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.myResults = action.payload
         })

         .addCase(MY_RESULTS_THUNK.getResults.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default myResultsSlice.reducer

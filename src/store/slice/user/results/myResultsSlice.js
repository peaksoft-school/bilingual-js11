import { createSlice } from '@reduxjs/toolkit'
import { MY_RESULTS_THUNK } from './myResultsThunk'

const initialState = {
   results: [],
   status: '',
   error: null,
}

export const resultsSlice = createSlice({
   name: 'resultsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(MY_RESULTS_THUNK.getResults.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(MY_RESULTS_THUNK.getResults.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.results = action.payload
         })

         .addCase(MY_RESULTS_THUNK.getResults.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(MY_RESULTS_THUNK.deleteResults.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(MY_RESULTS_THUNK.deleteResults.fulfilled, (state, action) => {
            state.status = 'succeeded'

            state.results = state.results.filter(
               (test) => test.id !== action.meta.arg
            )
         })

         .addCase(MY_RESULTS_THUNK.deleteResults.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default resultsSlice.reducer

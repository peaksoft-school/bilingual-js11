import { createSlice } from '@reduxjs/toolkit'
import { MY_RESULTS_THUNKS } from './resultsThunk'

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
         .addCase(MY_RESULTS_THUNKS.getResults.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(MY_RESULTS_THUNKS.getResults.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.results = action.payload
         })

         .addCase(MY_RESULTS_THUNKS.getResults.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(MY_RESULTS_THUNKS.deleteResult.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(MY_RESULTS_THUNKS.deleteResult.fulfilled, (state, action) => {
            state.status = 'succeeded'

            state.results = state.results.filter(
               (result) => result.id !== action.meta.arg
            )
         })

         .addCase(MY_RESULTS_THUNKS.deleteResult.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default resultsSlice.reducer

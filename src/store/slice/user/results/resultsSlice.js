import { createSlice } from '@reduxjs/toolkit'
import { MY_RESULTS_THUNKS } from './resultsThunk'

const initialState = {
   results: [],
   isLoading: false,
}

export const resultsSlice = createSlice({
   name: 'resultsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(MY_RESULTS_THUNKS.getResults.pending, (state) => {
            state.isLoading = true
         })

         .addCase(MY_RESULTS_THUNKS.getResults.fulfilled, (state, action) => {
            state.results = action.payload
            state.isLoading = false
         })

         .addCase(MY_RESULTS_THUNKS.getResults.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(MY_RESULTS_THUNKS.deleteResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(MY_RESULTS_THUNKS.deleteResult.fulfilled, (state, action) => {
            state.isLoading = false

            state.results = state.results.filter(
               (result) => result.id !== action.meta.arg
            )
         })

         .addCase(MY_RESULTS_THUNKS.deleteResult.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default resultsSlice.reducer

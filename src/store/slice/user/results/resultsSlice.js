import { createSlice } from '@reduxjs/toolkit'
import { MY_RESULTS_THUNK } from './resultsThunk'

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
         .addCase(MY_RESULTS_THUNK.getResults.pending, (state) => {
            state.isLoading = true
         })

         .addCase(MY_RESULTS_THUNK.getResults.fulfilled, (state, action) => {
            state.results = action.payload
            state.isLoading = false
         })

         .addCase(MY_RESULTS_THUNK.getResults.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(MY_RESULTS_THUNK.deleteResults.pending, (state) => {
            state.isLoading = true
         })

         .addCase(MY_RESULTS_THUNK.deleteResults.fulfilled, (state, action) => {
            state.isLoading = false

            state.results = state.results.filter(
               (result) => result.id !== action.meta.arg
            )
         })

         .addCase(MY_RESULTS_THUNK.deleteResults.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default resultsSlice.reducer

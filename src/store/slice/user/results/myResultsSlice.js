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
   },
})

export default resultsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { SUBMITTED_RESULTS_THUNKS } from './submitedResultsThunk'

const initialState = {
   results: [],
   status: '',
   error: null,
   isLoading: false,
}

export const submitedResultsSlice = createSlice({
   name: 'submitedResultsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(SUBMITTED_RESULTS_THUNKS.getAllResults.pending, (state) => {
            state.status = 'loading'
            state.isLoading = true
         })

         .addCase(
            SUBMITTED_RESULTS_THUNKS.getAllResults.fulfilled,
            (state, action) => {
               state.status = 'succeeded'
               state.results = action.payload
               state.isLoading = false
            }
         )

         .addCase(
            SUBMITTED_RESULTS_THUNKS.getAllResults.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
               state.isLoading = false
            }
         )

         // .addCase(SUBMITTED_RESULTS_THUNKS.getResults.pending, (state) => {
         //    state.status = 'loading'
         //    state.isLoading = true
         // })

         // .addCase(
         //    SUBMITTED_RESULTS_THUNKS.getResults.fulfilled,
         //    (state, action) => {
         //       state.status = 'succeeded'
         //       state.results = action.payload
         //       state.isLoading = false
         //    }
         // )

         // .addCase(
         //    SUBMITTED_RESULTS_THUNKS.getResults.rejected,
         //    (state, action) => {
         //       state.status = 'failed'
         //       state.error = action.error.message
         //       state.isLoading = false
         //    }
         // )

         .addCase(SUBMITTED_RESULTS_THUNKS.deleteResults.pending, (state) => {
            state.status = 'loading'
            state.isLoading = true
         })

         .addCase(
            SUBMITTED_RESULTS_THUNKS.deleteResults.fulfilled,
            (state, action) => {
               state.status = 'succeeded'
               state.isLoading = false

               state.results = state.results.filter(
                  (result) => result.id !== action.meta.arg
               )
            }
         )

         .addCase(
            SUBMITTED_RESULTS_THUNKS.deleteResults.rejected,
            (state, action) => {
               state.status = 'failed'
               state.isLoading = false
               state.error = action.error.message
            }
         )
   },
})

export default submitedResultsSlice.reducer

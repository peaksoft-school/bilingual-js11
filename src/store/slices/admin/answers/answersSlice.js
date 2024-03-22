import { createSlice } from '@reduxjs/toolkit'
import { ANSWERS_THUNKS } from './answersThunk'

const initialState = {
   answers: [],
   isLoading: false,
}

export const answersSlice = createSlice({
   name: 'answersSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(ANSWERS_THUNKS.getAnswers.pending, (state) => {
            state.isLoading = true
         })

         .addCase(ANSWERS_THUNKS.getAnswers.fulfilled, (state, { payload }) => {
            state.answers = payload
            state.isLoading = false
         })

         .addCase(ANSWERS_THUNKS.getAnswers.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(ANSWERS_THUNKS.postResult.pending, (state) => {
            state.isLoading = true
         })

         .addCase(ANSWERS_THUNKS.postResult.fulfilled, (state, { payload }) => {
            state.answers = payload
            state.isLoading = false
         })

         .addCase(ANSWERS_THUNKS.postResult.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default answersSlice.reducer

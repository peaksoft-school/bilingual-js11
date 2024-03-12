import { createSlice } from '@reduxjs/toolkit'
import { PRACTICE_TEST_THUNKS } from './practiceTestThunk'

const initialState = {
   questions: [],
   isLoading: false,
}

const practiceTestSlice = createSlice({
   name: 'practiceTest',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(PRACTICE_TEST_THUNKS.getAllQuestions.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            PRACTICE_TEST_THUNKS.getAllQuestions.fulfilled,
            (state, { payload }) => {
               state.questions = payload
               state.isLoading = false
            }
         )

         .addCase(
            PRACTICE_TEST_THUNKS.getAllQuestions.rejected,
            (state, action) => {
               state.isLoading = false
               state.error = action.error.message
            }
         )
   },
})

export default practiceTestSlice

export const PRACTICE_TEST_ACTIONS = practiceTestSlice.actions

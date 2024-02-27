import { createSlice } from '@reduxjs/toolkit'
import { QUESTIONS_THUNKS } from './questionsThunk'

const initialState = {
   questions: null,
   status: '',
   error: null,
}

export const questionsSlice = createSlice({
   name: 'questionsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(QUESTIONS_THUNKS.getTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNKS.getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNKS.getAllQuestions.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            QUESTIONS_THUNKS.getAllQuestions.fulfilled,
            (state, action) => {
               state.status = 'succeeded'
               state.questions = action.payload
            }
         )

         .addCase(
            QUESTIONS_THUNKS.getAllQuestions.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )

         .addCase(QUESTIONS_THUNKS.getQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNKS.getQuestion.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.questions = action.payload
         })

         .addCase(QUESTIONS_THUNKS.getQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNKS.deleteQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNKS.deleteQuestion.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(QUESTIONS_THUNKS.deleteQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNKS.updateQuestionByEnable.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            QUESTIONS_THUNKS.updateQuestionByEnable.fulfilled,
            (state) => {
               state.status = 'succeeded'
            }
         )

         .addCase(
            QUESTIONS_THUNKS.updateQuestionByEnable.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )
   },
})

export default questionsSlice.reducer

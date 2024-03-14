import { createSlice } from '@reduxjs/toolkit'
import { QUESTIONS_THUNKS } from './questionsThunk'

const initialState = {
   questions: [],
   isLoading: false,
}

export const questionsSlice = createSlice({
   name: 'questionsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(QUESTIONS_THUNKS.getTest.pending, (state) => {
            state.isLoading = true
         })

         .addCase(QUESTIONS_THUNKS.getTest.fulfilled, (state, { payload }) => {
            state.questions = payload
            state.isLoading = false
         })

         .addCase(QUESTIONS_THUNKS.getTest.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(QUESTIONS_THUNKS.getAllQuestions.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            QUESTIONS_THUNKS.getAllQuestions.fulfilled,
            (state, { payload }) => {
               state.questions = payload
               state.isLoading = false
            }
         )

         .addCase(QUESTIONS_THUNKS.getAllQuestions.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(QUESTIONS_THUNKS.getQuestion.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            QUESTIONS_THUNKS.getQuestion.fulfilled,
            (state, { payload }) => {
               state.questions = payload
               state.isLoading = false
            }
         )

         .addCase(QUESTIONS_THUNKS.getQuestion.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(QUESTIONS_THUNKS.deleteQuestion.pending, (state) => {
            state.isLoading = true
         })

         .addCase(QUESTIONS_THUNKS.deleteQuestion.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(QUESTIONS_THUNKS.deleteQuestion.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(QUESTIONS_THUNKS.updateQuestionByEnable.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            QUESTIONS_THUNKS.updateQuestionByEnable.fulfilled,
            (state) => {
               state.isLoading = false
            }
         )

         .addCase(QUESTIONS_THUNKS.updateQuestionByEnable.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export const { deleteQuestion } = questionsSlice.actions

export default questionsSlice.reducer

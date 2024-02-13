import { createSlice } from '@reduxjs/toolkit'

import {
   deleteQuestion,
   getAllQuestions,
   getQuestion,
   getTest,
   updateQuestionByEnable,
} from './questionsThunk'

const initialState = {
   questions: [],
   status: '',
   error: null,
}

export const questionsSlice = createSlice({
   name: 'questionsSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder

         .addCase(getTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getTest.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.tests = action.payload
         })

         .addCase(getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(getAllQuestions.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getAllQuestions.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.questions = action.payload
         })

         .addCase(getAllQuestions.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(getQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getQuestion.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.questions = action.payload
         })

         .addCase(getQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(deleteQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(deleteQuestion.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(deleteQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(updateQuestionByEnable.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(updateQuestionByEnable.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(updateQuestionByEnable.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default questionsSlice.reducer

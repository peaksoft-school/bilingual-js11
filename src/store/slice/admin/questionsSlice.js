import { createSlice } from '@reduxjs/toolkit'
import { QUESTIONS_THUNK } from './questionsThunk'

const initialState = {
   questions: {
      id: 0,
      title: '',
      shortDescription: '',
      duration: 0,
      question: [
         {
            id: 18,
            title: 'Select the real English',
            duration: 3,
            questionType: 'RECORD_SAYING',
            enable: false,
            number: 1,
         },
      ],
   },
   status: '',
   error: '',
}

export const questionsSlice = createSlice({
   name: 'questionsSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(QUESTIONS_THUNK.getTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNK.getTest.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.questions = action.payload
            console.log(action.payload)
         })

         .addCase(QUESTIONS_THUNK.getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNK.getAllQuestions.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(
            QUESTIONS_THUNK.getAllQuestions.fulfilled,
            (state, action) => {
               state.status = 'succeeded'
               state.questions = action.payload
            }
         )

         .addCase(QUESTIONS_THUNK.getAllQuestions.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNK.getQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNK.getQuestion.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.questions = action.payload
         })

         .addCase(QUESTIONS_THUNK.getQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNK.deleteQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNK.deleteQuestion.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(QUESTIONS_THUNK.deleteQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(QUESTIONS_THUNK.updateQuestionByEnable.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(QUESTIONS_THUNK.updateQuestionByEnable.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(
            QUESTIONS_THUNK.updateQuestionByEnable.rejected,
            (state, action) => {
               state.status = 'failed'
               state.error = action.error.message
            }
         )
   },
})

export default questionsSlice.reducer

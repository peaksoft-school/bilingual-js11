import { createSlice } from '@reduxjs/toolkit'
import { showNotification } from '../../../utils/helpers/notification'
import { deleteQuestion, getTest } from './questionsThunk'

const initialState = {
   tests: [],
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

         .addCase(deleteQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(deleteQuestion.fulfilled, (state) => {
            state.status = 'succeeded'

            showNotification({
               title: 'Success',
               message: 'Question successfully deleted',
               type: 'success',
            })
         })

         .addCase(deleteQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default questionsSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import { showNotification } from '../../../utils/helpers/notification'
import {
   deleteTest,
   getAllTests,
   postTest,
   updateTest,
   updateTetsByEnable,
} from './testsThunk'

const initialState = {
   tests: [],
   status: '',
   error: null,
}

export const testsSlice = createSlice({
   name: 'testsSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllTests.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getAllTests.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.tests = action.payload
         })

         .addCase(getAllTests.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(postTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(postTest.fulfilled, (state) => {
            state.status = 'succeeded'

            showNotification({
               title: 'Success',
               message: 'Test successfully added',
               type: 'success',
            })
         })

         .addCase(postTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(deleteTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(deleteTest.fulfilled, (state, action) => {
            state.status = 'succeeded'

            state.tests = state.tests.filter(
               (test) => test.id !== action.meta.arg
            )

            showNotification({
               title: 'Success',
               message: 'Test successfully deleted',
               type: 'success',
            })
         })

         .addCase(deleteTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(updateTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(updateTest.fulfilled, (state) => {
            state.status = 'succeeded'

            showNotification({
               title: 'Success',
               message: 'Test successfully updated',
               type: 'success',
            })
         })

         .addCase(updateTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(updateTetsByEnable.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(updateTetsByEnable.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(updateTetsByEnable.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default testsSlice.reducer

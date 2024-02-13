import { createSlice } from '@reduxjs/toolkit'

import {
   deleteTest,
   getAllTests,
   getTest,
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

         .addCase(postTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(postTest.fulfilled, (state) => {
            state.status = 'succeeded'
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

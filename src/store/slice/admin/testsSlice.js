import { createSlice } from '@reduxjs/toolkit'
import { TESTS_THUNK } from './testsThunk'

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
         .addCase(TESTS_THUNK.getAllTests.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(TESTS_THUNK.getAllTests.fulfilled, (state, action) => {
            console.log(action)
            state.status = 'succeeded'
            state.tests = action.payload
         })

         .addCase(TESTS_THUNK.getAllTests.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(TESTS_THUNK.postTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(TESTS_THUNK.postTest.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(TESTS_THUNK.postTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(TESTS_THUNK.deleteTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(TESTS_THUNK.deleteTest.fulfilled, (state, action) => {
            state.status = 'succeeded'

            state.tests = state.tests.filter(
               (test) => test.id !== action.meta.arg
            )
         })

         .addCase(TESTS_THUNK.deleteTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(TESTS_THUNK.updateTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(TESTS_THUNK.updateTest.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(TESTS_THUNK.updateTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(TESTS_THUNK.updateTetsByEnable.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(TESTS_THUNK.updateTetsByEnable.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(TESTS_THUNK.updateTetsByEnable.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default testsSlice.reducer

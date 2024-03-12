import { createSlice } from '@reduxjs/toolkit'
import { TESTS_LIST_THUNK } from './testsListThunk'

const initialState = {
   tests: [],
   status: '',
   error: null,
}

export const testsListSlice = createSlice({
   name: 'testsListSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(TESTS_LIST_THUNK.getAllTests.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })

         .addCase(TESTS_LIST_THUNK.getAllTests.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.tests = action.payload
         })

         .addCase(TESTS_LIST_THUNK.getAllTests.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(TESTS_LIST_THUNK.getTest.pending, (state) => {
            state.status = 'loading'
            state.error = null
         })

         .addCase(TESTS_LIST_THUNK.getTest.fulfilled, (state, { payload }) => {
            state.status = 'succeeded'
            state.tests = payload
         })

         .addCase(TESTS_LIST_THUNK.getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default testsListSlice.reducer

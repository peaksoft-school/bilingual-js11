import { createSlice } from '@reduxjs/toolkit'
import { TESTS_LIST_THUNKS } from './testsListThunk'

const initialState = {
   tests: [],
   status: '',
   error: null,
   isLoading: false,
}

export const testsListSlice = createSlice({
   name: 'testsListSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(TESTS_LIST_THUNKS.getAllTests.pending, (state) => {
            state.status = 'loading'
            state.error = null
            state.isLoading = true
         })

         .addCase(TESTS_LIST_THUNKS.getAllTests.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.tests = action.payload
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNKS.getAllTests.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNKS.getTest.pending, (state) => {
            state.status = 'loading'
            state.error = null
            state.isLoading = true
         })

         .addCase(TESTS_LIST_THUNKS.getTest.fulfilled, (state, { payload }) => {
            state.status = 'succeeded'
            state.tests = payload
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNKS.getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
            state.isLoading = false
         })
   },
})

export default testsListSlice.reducer

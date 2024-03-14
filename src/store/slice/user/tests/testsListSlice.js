import { createSlice } from '@reduxjs/toolkit'
import { TESTS_LIST_THUNKS } from './testsListThunk'

const initialState = {
   tests: [],
   isLoading: false,
}

export const testsListSlice = createSlice({
   name: 'testsListSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(TESTS_LIST_THUNKS.getAllTests.pending, (state) => {
            state.isLoading = true
         })

         .addCase(TESTS_LIST_THUNKS.getAllTests.fulfilled, (state, action) => {
            state.tests = action.payload
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNKS.getAllTests.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNKS.getTest.pending, (state) => {
            state.isLoading = true
         })

         .addCase(TESTS_LIST_THUNKS.getTest.fulfilled, (state, { payload }) => {
            state.tests = payload
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNKS.getTest.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default testsListSlice.reducer

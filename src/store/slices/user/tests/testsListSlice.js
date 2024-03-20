import { createSlice } from '@reduxjs/toolkit'
import { TESTS_LIST_THUNK } from './testsListThunk'

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
         .addCase(TESTS_LIST_THUNK.getAllTests.pending, (state) => {
            state.isLoading = true
         })

         .addCase(
            TESTS_LIST_THUNK.getAllTests.fulfilled,
            (state, { payload }) => {
               state.tests = payload
               state.isLoading = false
            }
         )

         .addCase(TESTS_LIST_THUNK.getAllTests.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNK.getTest.pending, (state) => {
            state.isLoading = true
         })

         .addCase(TESTS_LIST_THUNK.getTest.fulfilled, (state, { payload }) => {
            state.tests = payload
            state.isLoading = false
         })

         .addCase(TESTS_LIST_THUNK.getTest.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default testsListSlice.reducer

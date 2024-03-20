import { createSlice } from '@reduxjs/toolkit'
import { TESTS_LIST_THUNKS } from './testsListThunk'

const initialState = {
   tests: [],
   isLoading: false,
}

const testsListSlice = createSlice({
   name: 'testsList',
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

const TEST_LIST_ACTIONS = testsListSlice.actions

export { testsListSlice, TEST_LIST_ACTIONS }

import { createSlice } from '@reduxjs/toolkit'
import { TESTS_THUNKS } from './testsThunk'
import { showNotification } from '../../../../utils/helpers/notification'

const initialState = {
   tests: [],
   isLoading: false,
}

export const testsSlice = createSlice({
   name: 'testsSlice',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(TESTS_THUNKS.getAllTests.pending, (state) => {
            state.isLoading = true
         })

         .addCase(TESTS_THUNKS.getAllTests.fulfilled, (state, action) => {
            state.tests = action.payload
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.getAllTests.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.postTest.pending, (state) => {
            state.isLoading = true

            showNotification({
               title: 'Pending',
               message: false,
               type: 'warning',
               duration: 200,
            })
         })

         .addCase(TESTS_THUNKS.postTest.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.postTest.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.deleteTest.pending, (state) => {
            state.isLoading = true
         })

         .addCase(TESTS_THUNKS.deleteTest.fulfilled, (state, action) => {
            state.isLoading = false

            state.tests = state.tests.filter(
               (test) => test.id !== action.meta.arg
            )
         })

         .addCase(TESTS_THUNKS.deleteTest.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.updateTest.pending, (state) => {
            state.isLoading = true

            showNotification({
               title: 'Pending',
               message: false,
               type: 'warning',
               duration: 100,
            })
         })

         .addCase(TESTS_THUNKS.updateTest.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.updateTest.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.updateTetsByEnable.pending, (state) => {
            state.isLoading = true
         })

         .addCase(TESTS_THUNKS.updateTetsByEnable.fulfilled, (state) => {
            state.isLoading = false
         })

         .addCase(TESTS_THUNKS.updateTetsByEnable.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export default testsSlice.reducer

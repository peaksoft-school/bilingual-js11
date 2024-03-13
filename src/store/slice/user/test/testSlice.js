import { createSlice } from '@reduxjs/toolkit'
import { TEST_THUNK } from './testThunk'
import { showNotification } from '../../../../utils/helpers/notification'

const initialState = {
   correctOptions: [],
   attempts: 0,
   input: '',
   audioFile: '',
   optionId: [0],
   questionID: 0,
   isLoading: false,
   error: null,
}

export const testSlice = createSlice({
   name: 'testSlice',
   initialState,

   reducers: {
      addCorrectOption: (state, { payload }) => {
         state.correctOptions.push(payload)
      },

      deleteCorrectOption: (state, { payload }) => {
         state.correctOptions = state.correctOptions.filter(
            (correctOption) => correctOption.id !== payload
         )
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(TEST_THUNK.postTest.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })

         .addCase(TEST_THUNK.postTest.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
         })

         .addCase(TEST_THUNK.postTest.pending, (state) => {
            state.isLoading = true
            state.error = null

            showNotification({
               title: 'Pending',
               message: false,
               type: 'warning',
               duration: 200,
            })
         })
   },
})

export const TEST_QUESTION_ACTIONS = testSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { QUESTION_THUNKS } from './questionThunk'

const initialState = {
   title: '',
   duration: 0,
   statement: '',
   passage: '',
   attempts: 0,
   correctAnswer: '',
   fileUrl: '',
   options: [],
   isLoading: false,
}

const questionSlice = createSlice({
   name: 'question',
   initialState,

   reducers: {
      addOption: (state, { payload }) => {
         state.options = [...state.options, payload]
      },

      handleIsCorrect: (state, { payload }) => {
         state.options = state.options.map((item) => {
            if (item.id === payload) {
               return {
                  ...item,
                  isTrueOption: !item.isTrueOption,
               }
            }
            return item
         })
      },

      deleteOption: (state, { payload }) => {
         state.options = state.options.filter((item) => item.id !== payload)
      },

      clearOptions(state) {
         state.options = []
      },

      updateOptions: (state, { payload }) => {
         state.options = payload
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(QUESTION_THUNKS.saveTest.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })

         .addCase(QUESTION_THUNKS.saveTest.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
         })

         .addCase(QUESTION_THUNKS.saveTest.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(QUESTION_THUNKS.postFileRequest.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(
            QUESTION_THUNKS.postFileRequest.fulfilled,
            (state, action) => {
               state.isLoading = false
               state.fileUrl = action.payload.link
            }
         )

         .addCase(
            QUESTION_THUNKS.postFileRequest.rejected,
            (state, { payload }) => {
               state.isLoading = false
               state.error = payload
            }
         )
   },
})

export default questionSlice

export const QUESTION_ACTIONS = questionSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { QUESTION_THUNKS } from './questionThunks'

const initialState = {
   title: '',
   duration: 0,
   statement: '',
   passage: '',
   attempts: 0,
   correctAnswer: '',
   fileUrl: '',
   option: [],
   isLoading: false,
}

const questionSlice = createSlice({
   name: 'question',
   initialState,
   reducers: {
      addOption: (state, action) => {
         state.option = [...state.option, action.payload]
      },

      changeTrueOption: (state, action) => {
         state.option = state.option.map((item) => {
            if (item.id === action.payload) {
               return {
                  ...item,
                  isTrueOption: !item.isTrueOption,
               }
            }
            return item
         })
      },

      deleteOption: (state, action) => {
         state.option = state.option.filter(
            (item) => item.id !== action.payload
         )
      },

      clearOptions(state) {
         state.option = []
      },

      updateOptions: (state, action) => {
         state.option = action.payload
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(QUESTION_THUNKS.saveTest.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })

         .addCase(QUESTION_THUNKS.saveTest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
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

         .addCase(QUESTION_THUNKS.postFileRequest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })
   },
})

export default questionSlice

export const QUESTION_ACTIONS = questionSlice.actions

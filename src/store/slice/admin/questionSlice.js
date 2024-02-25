import { createSlice } from '@reduxjs/toolkit'
import { QUESTION_THUNK } from './questionThunk'

const initialState = {
   title: '',
   duration: 0,
   statement: '',
   passage: '',
   attempts: 0,
   correctAnswer: '',
   fileUrl: '',
   option: [],
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
         .addCase(QUESTION_THUNK.saveTest.fulfilled, (state) => {
            state.isLoading = false
            state.error = null
         })

         .addCase(QUESTION_THUNK.saveTest.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
         })

         .addCase(QUESTION_THUNK.saveTest.pending, (state) => {
            state.isLoading = true
            state.error = null
         })
   },
})

export default questionSlice

export const QUESTION_ACTIONS = questionSlice.actions
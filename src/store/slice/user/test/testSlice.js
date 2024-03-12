import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   correctOptions: [],
   attempts: 0,
   input: '',
   audioFile: '',
   optionId: [0],
   questionID: 0,
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
})

export const TEST_QUESTION_ACTIONS = testSlice.actions

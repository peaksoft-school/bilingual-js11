import { createSlice } from '@reduxjs/toolkit'

const initialState = [
   {
      attempts: 0,
      input: '',
      audioFile: '',
      optionId: [],
      questionID: 0,
   },
]

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      addAnswer: (state, action) => {
         state.answers.push(action.payload)
      },
   },
})

export const userQuestionActions = userSlice.actions

import { createSlice } from '@reduxjs/toolkit'
import { QUESTION_THUNKS } from './questionThunk'
import { showNotification } from '../../../../utils/helpers/notification'

const initialState = {
   title: '',
   duration: 0,
   statement: '',
   passage: '',
   attempts: 0,
   correctAnswer: '',
   fileUrl: '',
   options: {
      selectRealEnglishWordsOptions: [],
      listenAndSelectOptions: [],
      selectTheMainIdeaOptions: [],
      selectTheBestTitleOptions: [],
   },
   isLoading: false,
}

const questionSlice = createSlice({
   name: 'question',
   initialState,

   reducers: {
      addOptionCheck: (state, { payload }) => {
         state.options[payload.optionName].push(payload.option)
      },

      addOptionRadio: (state, { payload }) => {
         const isFirstOption = state.options[payload.optionName]?.length === 0

         const newOption = {
            ...payload.option,
            isCorrectOption: isFirstOption,
         }

         state.options[payload.optionName] = [
            ...state.options[payload.optionName],
            newOption,
         ]

         state.options[payload.optionName] = state.options[
            payload.optionName
         ].map((option) => {
            if (payload.option.isCorrectOption) {
               if (payload.option.id === option.id) {
                  return {
                     ...option,
                     isCorrectOption: payload.option.isCorrectOption,
                  }
               }

               return {
                  ...option,
                  isCorrectOption: false,
               }
            }

            return option
         })
      },

      handleIsChecked: (state, { payload }) => {
         state.options[payload.optionName] = state.options[
            payload.optionName
         ].map((option) => {
            if (option.id === payload.id) {
               return { ...option, isCorrectOption: !option.isCorrectOption }
            }
            return {
               ...option,
               isCorrectOption: option.isCorrectOption,
            }
         })
      },

      handleIsCorrect: (state, { payload }) => {
         state.options[payload.optionName] = state.options[
            payload.optionName
         ].map((option) => {
            if (option.id === payload.id) {
               return {
                  ...option,
                  isCorrectOption: !option.isCorrectOption,
               }
            }
            return {
               ...option,
               isCorrectOption: false,
            }
         })
      },

      deleteOption: (state, { payload }) => {
         return {
            ...state,
            options: {
               ...state.options,
               [payload.optionName]: state.options[payload.optionName].filter(
                  (option) => option.id !== payload.optionId
               ),
            },
         }
      },

      clearOptions(state) {
         state.options = {
            selectRealEnglishWordsOptions: [],
            listenAndSelectOptions: [],
            selectTheMainIdea: [],
            selectTheBestTitle: [],
         }
      },

      updateOptions: (state, { payload }) => {
         state.options = {
            ...state.options,
            [payload.optionName]: payload.options,
         }
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

            showNotification({
               title: 'Pending',
               message: false,
               type: 'warning',
               duration: 200,
            })
         })

         .addCase(QUESTION_THUNKS.saveFile.pending, (state) => {
            state.isLoading = true
            state.error = null
         })

         .addCase(QUESTION_THUNKS.saveFile.fulfilled, (state, action) => {
            state.isLoading = false
            state.fileUrl = action.payload.link
         })

         .addCase(QUESTION_THUNKS.saveFile.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
         })
   },
})

export default questionSlice

export const QUESTION_ACTIONS = questionSlice.actions

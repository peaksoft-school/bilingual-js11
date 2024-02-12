import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'
import { showNotification } from '../../utils/helpers/notification'

export const getTest = createAsyncThunk(
   'questionsSlice/getTests',
   async (testId) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)
         return response.data
      } catch (error) {
         console.error('Ошибка при получении списка тестов:', error)
         throw error
      }
   }
)

export const getAllQuestions = createAsyncThunk(
   'questionsSlice/getQuestions',
   async () => {
      try {
         const response = await axiosInstance.get(`/api/question`)
         return response.data
      } catch (error) {
         console.error('Ошибка при получении списка воросов:', error)
         throw error
      }
   }
)

export const getQuestion = createAsyncThunk(
   'questionsSlice/getQuestions',
   async ({ id }) => {
      try {
         const response = await axiosInstance.get(
            `/api/question/getById?id=${id}`
         )
         return response.data
      } catch (error) {
         console.error('Ошибка при получении списка воросов:', error)
         throw error
      }
   }
)

export const deleteQuestion = createAsyncThunk(
   'questionsSlice/deleteQuestion',
   async ({ questionId }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/question?questionId=${questionId}`
         )
         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to delete test',
            type: 'error',
         })

         throw error
      }
   }
)

const initialState = {
   tests: [],
   status: '',
   error: null,
}

export const questionsSlice = createSlice({
   name: 'questionsSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getTest.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.tests = action.payload
         })

         .addCase(getTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(deleteQuestion.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(deleteQuestion.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const updatedTests = state.tests.map((test) => {
               return {
                  ...test,
                  questions: test.questions.filter(
                     (question) => question.id !== action.meta.arg.questionId
                  ),
               }
            })
            state.tests = updatedTests
         })

         .addCase(deleteQuestion.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default questionsSlice.reducer

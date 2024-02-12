import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'

export const getTest = createAsyncThunk(
   'questionsSlice/getTest',
   async ({ testId }) => {
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
   'questionsSlice/getQuestion',
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

export const updateQuestionByEnable = createAsyncThunk(
   'testsSlice/updateQuestionByEnable',
   async ({ questionId, isEnable }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/question/IsEnable?questionId=${questionId}&isEnable=${isEnable}`
         )
         return response.data
      } catch (error) {
         console.error('Ошибка при обновлении вопроса:', error)
         throw error
      }
   }
)

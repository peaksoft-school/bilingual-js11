import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'

export const getAllTests = createAsyncThunk(
   'testsSlice/getAllTests',
   async () => {
      try {
         const response = await axiosInstance.get('/api/test/all')
         return response.data
      } catch (error) {
         console.error('Ошибка при получении списка тестов:', error)
         throw error
      }
   }
)

export const postTest = createAsyncThunk(
   'testsSlice/postTest',
   async (testData) => {
      try {
         const response = await axiosInstance.post('/api/test', testData)
         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Error creating test',
            type: 'error',
         })
         throw error
      }
   }
)

export const deleteTest = createAsyncThunk(
   'testsSlice/deleteTest',
   async (testId) => {
      try {
         const response = await axiosInstance.delete(
            `/api/test?testId=${testId}`
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

export const updateTest = createAsyncThunk(
   'testsSlice/updateTest',
   async (updatedTest) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test?id=${updatedTest.id}`,
            updatedTest
         )
         return response.data
      } catch (error) {
         console.error('Ошибка при обновлении теста:', error)
         throw error
      }
   }
)

export const updateTetsByEnable = createAsyncThunk(
   'testsSlice/updateTetsByEnable',
   async ({ testId, enable }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test/update?testId=${testId}&enable=${enable}`
         )
         return response.data
      } catch (error) {
         console.error('Ошибка при обновлении теста:', error)
         throw error
      }
   }
)

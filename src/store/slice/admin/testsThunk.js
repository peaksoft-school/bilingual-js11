import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'

const getAllTests = createAsyncThunk(
   'testsSlice/getAllTests',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/test/all')

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const getTest = createAsyncThunk(
   'testsSlice/getTest',

   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const postTest = createAsyncThunk(
   'testsSlice/postTest',

   async (testData, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/test', testData)

         showNotification({
            title: 'Success',
            message: 'Test successfully added',
            type: 'success',
         })

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Error creating test',
            type: 'error',
         })

         return rejectWithValue.message
      }
   }
)

const deleteTest = createAsyncThunk(
   'testsSlice/deleteTest',

   async (testId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/test?testId=${testId}`
         )

         showNotification({
            title: 'Success',
            message: 'Test successfully deleted',
            type: 'success',
         })

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to delete test',
            type: 'error',
         })

         return rejectWithValue.message
      }
   }
)

const updateTest = createAsyncThunk(
   'testsSlice/updateTest',
   async (updatedTest, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test?id=${updatedTest.id}`,
            updatedTest
         )

         showNotification({
            title: 'Success',
            message: 'Test successfully updated',
            type: 'success',
         })

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const updateTetsByEnable = createAsyncThunk(
   'testsSlice/updateTetsByEnable',

   async ({ testId, enable }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test/update?testId=${testId}&enable=${enable}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export {
   getAllTests,
   getTest,
   deleteTest,
   postTest,
   updateTetsByEnable,
   updateTest,
}

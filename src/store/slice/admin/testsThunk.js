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

const postTest = createAsyncThunk(
   'testsSlice/postTest',

   async ({ testData, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/test', testData)

         showNotification({
            title: 'Success',
            message: 'Test successfully added',
            type: 'success',
         })

         navigate('/')

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Error creating test',
            type: 'error',
         })

         return rejectWithValue(error.message)
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

   async ({ id, updatedTest, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test?id=${id}`,
            updatedTest
         )

         showNotification({
            title: 'Success',
            message: 'Test successfully updated',
            type: 'success',
         })

         navigate('/')

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to update test',
            type: 'error',
         })

         return rejectWithValue(error.message)
      }
   }
)

const updateTetsByEnable = createAsyncThunk(
   'testsSlice/updateTetsByEnable',

   async ({ testId, enable }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test/update?testId=${testId}&enable=${enable}`
         )

         dispatch(getAllTests())

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export const TESTS_THUNK = {
   getAllTests,
   deleteTest,
   postTest,
   updateTetsByEnable,
   updateTest,
}

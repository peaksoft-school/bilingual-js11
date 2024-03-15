import { createAsyncThunk } from '@reduxjs/toolkit'
import { showNotification } from '../../../../utils/helpers/notification'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getTests = createAsyncThunk(
   'tests/getTests',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/test/getAll')

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const getTest = createAsyncThunk(
   'tests/getTest',

   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const addTest = createAsyncThunk(
   'tests/addTest',

   async ({ testData, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/test', testData)

         showNotification({ message: 'Test successfully added' })

         navigate('/')

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
   'tests/deleteTest',

   async (testId, { dispatch, rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/test?testId=${testId}`
         )

         dispatch(getTests())

         showNotification({ message: 'Test successfully deleted' })

         dispatch(getTests())

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
   'tests/updateTest',

   async ({ id, updatedTest, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test?id=${id}`,
            updatedTest
         )

         showNotification({ message: 'Test successfully updated' })

         navigate('/')

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to update test',
            type: 'error',
         })

         return rejectWithValue.message
      }
   }
)

const updateTestByEnable = createAsyncThunk(
   'tests/updateTestByEnable',

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

export const TESTS_THUNKS = {
   getTests,
   getTest,
   deleteTest,
   addTest,
   updateTest,
   updateTestByEnable,
}

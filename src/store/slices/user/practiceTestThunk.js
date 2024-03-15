import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'

const getAllQuestions = createAsyncThunk(
   'practiceTest/getAllQuestions',

   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/question?testId=${testId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const postTest = createAsyncThunk(
   'practiceTest/postTest',

   async ({ requestData }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/answer', requestData)

         showNotification({ message: 'Test successfully added' })

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

export const PRACTICE_TEST_THUNKS = { getAllQuestions, postTest }

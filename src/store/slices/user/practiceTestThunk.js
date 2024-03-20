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

   async ({ correctAnswer, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/answer', correctAnswer)

         navigate(-3)

         showNotification({ message: `${response.data.message}` })

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: `${error.response.data.message}`,
            type: 'error',
         })

         return rejectWithValue.message
      }
   }
)

export const PRACTICE_TEST_THUNKS = { getAllQuestions, postTest }

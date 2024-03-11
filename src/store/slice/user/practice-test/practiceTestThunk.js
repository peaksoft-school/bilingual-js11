import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllQuestions = createAsyncThunk(
   'practiceTest/getAllPracticeTest',

   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/question?testId=${testId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

export const PRACTICE_TEST_THUNKS = { getAllQuestions }

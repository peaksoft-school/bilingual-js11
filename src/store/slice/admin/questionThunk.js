import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const saveTest = createAsyncThunk(
   'question/saveTest',

   async (
      { requestData, data: { testId, questionType, navigate } },

      { rejectWithValue }
   ) => {
      try {
         await axiosInstance.post(
            `/api/question?testId=${testId}&questionType=${questionType}`,
            requestData
         )

         return navigate(`/admin/tests/questions/${testId}`)
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const QUESTION_THUNKS = { saveTest }

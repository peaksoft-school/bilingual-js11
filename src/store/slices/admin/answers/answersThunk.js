import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAnswers = createAsyncThunk(
   'answersSlice/getAnswers',

   async ({ answerId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `api/answer?answerId=${answerId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export const ANSWERS_THUNKS = { getAnswers }

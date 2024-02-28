import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getTest = createAsyncThunk(
   'home/getTest',
   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)

         return response.data
      } catch (error) {
         console.error(rejectWithValue.message)
         throw error
      }
   }
)
export const HOME_TEST = { getTest }

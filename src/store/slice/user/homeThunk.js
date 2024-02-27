import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getTest = createAsyncThunk(
   'home/getTest',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/test/all')
         return response.data
      } catch (error) {
         return rejectWithValue(error.response.data)
      }
   }
)

export const HOME_THUNKS = { getTest }

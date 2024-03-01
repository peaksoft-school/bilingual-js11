import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getAllTests = createAsyncThunk(
   'homeSlice/getAllTests',

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
   'homeSlice/getTest',

   async (testId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)
         console.log(response.data, 'data')
         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export const HOME_TEST = { getAllTests, getTest }

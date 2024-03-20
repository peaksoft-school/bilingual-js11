import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getAllTests = createAsyncThunk(
   'testsList/getAllTests',

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
   'testsList/getTest',

   async (testId, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)
         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export const TESTS_LIST_THUNKS = { getAllTests, getTest }

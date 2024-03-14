import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { showNotification } from '../../../../utils/helpers/notification'

const getAllResults = createAsyncThunk(
   'resultsSlice/getResult',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/result/getAll')

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const getResults = createAsyncThunk(
   'resultsSlice/getResult',

   async ({ resultId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            ` /api/result/?resultId=${resultId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const deleteResults = createAsyncThunk(
   'myResultsSlice/deleteResults',

   async ({ resultId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/answer?deleteById=${resultId}`
         )

         showNotification({
            title: 'Success',
            message: 'Test successfully deleted',
            type: 'success',
         })

         dispatch(getAllResults())

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

export const SUBMITTED_RESULTS_THUNKS = {
   getAllResults,
   getResults,
   deleteResults,
}

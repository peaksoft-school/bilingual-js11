import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { showNotification } from '../../../../utils/helpers/notification'

const getResults = createAsyncThunk(
   'resultsSlice/getResult',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/result/getResult')

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const deleteResult = createAsyncThunk(
   'resultsSlice/deleteResults',

   async ({ resultId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/result?resultId=${resultId}`
         )

         showNotification({
            message: `${response.data.message}`,
         })

         dispatch(getResults())

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

export const MY_RESULTS_THUNKS = { getResults, deleteResult }

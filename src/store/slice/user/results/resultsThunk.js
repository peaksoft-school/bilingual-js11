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

const deleteResults = createAsyncThunk(
   'myResultsSlice/deleteResults',

   async ({ answerId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/answer?deleteById=${answerId}`
         )

         showNotification({
            message: 'Test successfully deleted',
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

export const MY_RESULTS_THUNK = { getResults, deleteResults }

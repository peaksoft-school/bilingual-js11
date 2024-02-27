import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

const getResults = createAsyncThunk(
   'testsSlice/getAllTests',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('/api/result/getResult')

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

// const deleteTest = createAsyncThunk(
//    'testsSlice/deleteTest',

//    async (testId, { rejectWithValue }) => {
//       try {
//          const response = await axiosInstance.delete(
//             `/api/test?testId=${testId}`
//          )

//          showNotification({
//             title: 'Success',
//             message: 'Test successfully deleted',
//             type: 'success',
//          })

//          return response.data
//       } catch (error) {
//          showNotification({
//             title: 'Error',
//             message: 'Failed to delete test',
//             type: 'error',
//          })

//          return rejectWithValue.message
//       }
//    }
// )

export const MY_RESULTS_THUNK = { getResults }

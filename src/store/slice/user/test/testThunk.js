import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { showNotification } from '../../../../utils/helpers/notification'

const postTest = createAsyncThunk(
   'test/postTest',

   async ({ requestData }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post('/api/answer', requestData)

         showNotification({ message: 'Test successfully added' })

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Error creating test',
            type: 'error',
         })

         return rejectWithValue(error.message)
      }
   }
)

export const TEST_THUNK = { postTest }

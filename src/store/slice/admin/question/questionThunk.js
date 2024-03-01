import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstanceFile } from '../../../../configs/axiosInstanceFile'
import { showNotification } from '../../../../utils/helpers/notification'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { ROUTES } from '../../../../routes/routes'

const saveTest = createAsyncThunk(
   'question/saveTest',

   async (
      { requestData, data: { testId, questionType, navigate } },
      { rejectWithValue }
   ) => {
      try {
         const response = await axiosInstance.post(
            `/api/question?testId=${testId}&questionType=${questionType}`,
            requestData
         )

         showNotification({
            message: `${response.data.message}!`,
         })

         navigate(`${ROUTES.ADMIN.index}/${ROUTES.ADMIN.questions}/${testId}`)

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to save test!',
            type: 'error',
         })

         return rejectWithValue('Something went wrong')
      }
   }
)

const postFileRequest = createAsyncThunk(
   'question/postFile',

   async (file, { rejectWithValue }) => {
      try {
         const formData = new FormData()

         formData.append('multipartFile', file)

         const { data } = await axiosInstanceFile.post('/api/awsFile', formData)

         return data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to file!',
            type: 'error',
         })

         return rejectWithValue(error.response.data)
      }
   }
)

export const QUESTION_THUNKS = {
   postFileRequest,
   saveTest,
}

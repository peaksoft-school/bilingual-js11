import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { axiosInstanceFile } from '../../../../configs/axiosInstanceFile'

const saveTest = createAsyncThunk(
   'question/saveTest',

   async (
      { requestData, data: { testId, questionType, navigate } },
      { rejectWithValue }
   ) => {
      try {
         await axiosInstance.post(
            `/api/question?testId=${testId}&questionType=${questionType}`,
            requestData
         )

         return navigate(`/admin/tests/questions/${testId}`)
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }

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
         return rejectWithValue('Something went wrong')
      }
   }
)

export const QUESTION_THUNKS = {
   postFileRequest,
   saveTest,
}

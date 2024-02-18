import { AxiosError } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
   getAllQuestionsRequest,
   postFileRequest,
} from '../../api/questionService'

export const getAllQuestions = createAsyncThunk(
   'questions/get',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = getAllQuestionsRequest()
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Something went wrong')
      }
   }
)

export const postFiles = createAsyncThunk(
   'questions/postFiles',
   async ({ file }, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', file)
         const { data } = await postFileRequest(formData)
         return data
      } catch (error) {
         if (AxiosError(error)) {
            return rejectWithValue(error.response?.data.message)
         }
         return rejectWithValue('Error')
      }
   }
)

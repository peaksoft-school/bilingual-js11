import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'

const getTest = createAsyncThunk(
   'questionsSlice/getTest',

   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/test?testId=${testId}`)

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const getAllQuestions = createAsyncThunk(
   'questionsSlice/getQuestions',

   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/question`)

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const getQuestion = createAsyncThunk(
   'questionsSlice/getQuestion',

   async ({ id }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/question/getById?id=${id}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const postQuestion = createAsyncThunk(
   'questionsSlice/postTest',

   async ({ testId, questionType, navigate }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/question?testId=${testId}&questionType=${questionType}`
         )
         showNotification({
            title: 'Success',
            message: 'Question successfully added',
            type: 'success',
         })

         navigate('/admin/tests/questions/:testId')

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Error creating question',
            type: 'error',
         })

         return rejectWithValue(error.message)
      }
   }
)

const deleteQuestion = createAsyncThunk(
   'questionsSlice/deleteQuestion',

   async ({ questionId, testId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            `/api/question?questionId=${questionId}`
         )

         showNotification({
            title: 'Success',
            message: 'Question successfully deleted',
            type: 'success',
         })

         dispatch(getTest({ testId }))

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

const updateQuestionByEnable = createAsyncThunk(
   'questionsSlice/updateQuestionByEnable',

   async ({ questionId, isEnable }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/question/IsEnable?questionId=${questionId}&isEnable=${isEnable}`
         )
         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export const QUESTIONS_THUNK = {
   getAllQuestions,
   getQuestion,
   postQuestion,
   deleteQuestion,
   updateQuestionByEnable,
   getTest,
}

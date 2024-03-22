/* eslint-disable import/no-cycle */
import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showNotification } from '../../../utils/helpers/notification'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'
import { PRACTICE_TEST_ACTIONS } from './practiceTestSlice'
import { ROUTES } from '../../../routes/routes'

const getAllQuestions = createAsyncThunk(
   'practiceTest/getAllQuestions',

   async ({ testId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/question?testId=${testId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const addAnswer = createAsyncThunk(
   'practiceTest/postTest',

   async ({ correctAnswer, navigate }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.post('/api/answer', correctAnswer)

         navigate(`${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}`)

         showNotification({ message: `${response.data.message}` })

         dispatch(PRACTICE_TEST_ACTIONS.clearCorrectAnswer())

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: `${error.response.data.message}`,
            type: 'error',
         })

         return rejectWithValue.message
      }
   }
)

const addAnswerFile = createAsyncThunk(
   'question/addFile',

   async (recordedAudio, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', recordedAudio)

         const response = await axiosInstanceFile.post('/api/awsFile', formData)

         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to file!',
            type: 'error',
         })

         return rejectWithValue.message
      }
   }
)

export const PRACTICE_TEST_THUNKS = {
   getAllQuestions,
   addAnswer,
   addAnswerFile,
}

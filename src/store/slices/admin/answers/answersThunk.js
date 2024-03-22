import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { showNotification } from '../../../../utils/helpers/notification'

const getAnswers = createAsyncThunk(
   'answersSlice/getAnswers',

   async ({ answerId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `api/answer?answerId=${answerId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const postResult = createAsyncThunk(
   'answersSlice/postResult',

   async (
      { answerId, scoreValue, navigate },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const response = await axiosInstance.post(
            `api/result?answerId=${answerId}`,
            scoreValue
         )

         navigate(-1)

         showNotification({ message: response.data.message })

         return response.data
      } catch (error) {
         dispatch(getAnswers({ answerId }))

         return rejectWithValue.message
      }
   }
)

export const ANSWERS_THUNKS = { getAnswers, postResult }

import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getOptions = createAsyncThunk(
   'options/getOptions',

   async ({ questionId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `api/option?questionId=${questionId}`
         )

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

const deleteOption = createAsyncThunk(
   'options/deleteOptions',

   async ({ optionId, questionId }, { rejectWithValue, dispatch }) => {
      try {
         const response = await axiosInstance.delete(
            `api/option?optionId=${optionId}`
         )

         dispatch(getOptions({ questionId }))

         return response.data
      } catch (error) {
         return rejectWithValue.message
      }
   }
)

export const OPTIONS_THUNKS = { getOptions, deleteOption }

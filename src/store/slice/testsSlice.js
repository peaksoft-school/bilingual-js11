import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../../configs/axiosInstance'
import { showNotification } from '../../utils/helpers/notification'

export const getAllTests = createAsyncThunk(
   'testsSlice/getAllTests',
   async () => {
      try {
         const response = await axiosInstance.get('/api/test/all')
         return response.data
      } catch (error) {
         console.error('Ошибка при получении списка тестов:', error)
         throw error
      }
   }
)

export const postTest = createAsyncThunk(
   'testsSlice/createTest',
   async (testData) => {
      try {
         const response = await axiosInstance.post('/api/test', testData)
         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Error creating test',
            type: 'error',
         })
         throw error
      }
   }
)

export const deleteTest = createAsyncThunk(
   'testsSlice/deleteTest',
   async (testId) => {
      try {
         const response = await axiosInstance.delete(
            `/api/test?testId=${testId}`
         )
         return response.data
      } catch (error) {
         showNotification({
            title: 'Error',
            message: 'Failed to delete test',
            type: 'error',
         })
         throw error
      }
   }
)

export const updateTest = createAsyncThunk(
   'testsSlice/updateTest',
   async (updatedTest) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test?id=${updatedTest.id}`,
            updatedTest
         )
         return response.data
      } catch (error) {
         console.error('Ошибка при обновлении теста:', error)
         throw error
      }
   }
)

export const updateByEnable = createAsyncThunk(
   'testsSlice/updateByEnables',
   async ({ testId, enable }) => {
      try {
         const response = await axiosInstance.patch(
            `/api/test/update?testId=${testId}&enable=${enable}`
         )
         return response.data
      } catch (error) {
         console.error('Ошибка при обновлении теста:', error)
         throw error
      }
   }
)

const initialState = {
   tests: [],
   status: '',
   error: null,
}

export const testsSlice = createSlice({
   name: 'testsSlice',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllTests.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(getAllTests.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.tests = action.payload
         })

         .addCase(getAllTests.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(postTest.fulfilled, (state) => {
            state.status = 'succeeded'

            showNotification({
               title: 'Success',
               message: 'Test successfully added',
               type: 'success',
            })
         })

         .addCase(deleteTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(deleteTest.fulfilled, (state, action) => {
            state.status = 'succeeded'

            state.tests = state.tests.filter(
               (test) => test.id !== action.meta.arg
            )

            showNotification({
               title: 'Success',
               message: 'Test successfully deleted',
               type: 'success',
            })
         })

         .addCase(deleteTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(updateTest.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(updateTest.fulfilled, (state) => {
            state.status = 'succeeded'

            showNotification({
               title: 'Success',
               message: 'Test successfully updated',
               type: 'success',
            })
         })

         .addCase(updateTest.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })

         .addCase(updateByEnable.pending, (state) => {
            state.status = 'loading'
         })

         .addCase(updateByEnable.fulfilled, (state) => {
            state.status = 'succeeded'
         })

         .addCase(updateByEnable.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
         })
   },
})

export default testsSlice.reducer

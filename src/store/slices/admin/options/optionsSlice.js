import { createSlice } from '@reduxjs/toolkit'
import { OPTIONS_THUNKS } from './optionsThunk'

const initialState = {
   options: {},
   isLoading: false,
}

const optionsSlice = createSlice({
   name: 'options',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(OPTIONS_THUNKS.getOptions.pending, (state) => {
            state.isLoading = true
         })

         .addCase(OPTIONS_THUNKS.getOptions.fulfilled, (state, { payload }) => {
            state.options = payload
            state.isLoading = false
         })

         .addCase(OPTIONS_THUNKS.getOptions.rejected, (state) => {
            state.isLoading = false
         })

         .addCase(OPTIONS_THUNKS.deleteOption.pending, (state) => {
            state.isLoading = true
         })

         .addCase(OPTIONS_THUNKS.deleteOption.fulfilled, (state, action) => {
            state.isLoading = false

            state.options.optionResponses =
               state.options.optionResponses.filter(
                  (option) => option.id !== action.meta.arg
               )
         })

         .addCase(OPTIONS_THUNKS.deleteOption.rejected, (state) => {
            state.isLoading = false
         })
   },
})

export { optionsSlice }

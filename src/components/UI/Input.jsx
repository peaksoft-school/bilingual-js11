import React from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material'

const Input = () => {
   return (
      <StyledTextField
         label="Name"
         variant="outlined"
         placeholder="text"
         error={false}
         onChange={onchange}
      />
   )
}

const StyledTextField = styled(TextField)((prop) => ({
   '& .MuiOutlinedInput-root': {
      '&:hover': {
         '& fieldset': {
            border: `1px solid ${prop.error} ? #F61414 : #3A10E5`,
            borderRadius: '8px',
         },
      },
      '&.Mui-focused': {
         '& fieldset': {
            border: `1px solid ${prop.error} ? #F61414 : #3A10E5`,
         },
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         border: `1px solid ${prop.error} ? #F61414 : #3A10E5`,
      },
   },
   '& label.Mui-focused': {
      color: `${prop.error} ? gray : #3A10E5`,
   },
   width: '500px',
   height: '52px',
}))

export default Input

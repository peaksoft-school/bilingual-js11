import React, { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material'

const Input = forwardRef((props, ref) => {
   const { value, onChange, error, label, disabled, placeholder } = props

   return (
      <StyledTextField
         label={label}
         ref={ref}
         disabled={disabled}
         value={value}
         onChange={onChange}
         error={error}
         placeholder={placeholder}
         variant="outlined"
      />
   )
})

export default Input

const StyledTextField = styled(TextField)((props) => ({
   '& .MuiOutlinedInput-root': {
      '&:hover': {
         '& fieldset': {
            border: `1px solid ${props.error ? '#F61414' : '#3A10E5'}`,
            borderRadius: '8px',
         },
      },
      '&.Mui-focused': {
         '& fieldset': {
            border: `1px solid ${props.error ? '#F61414' : '#3A10E5'}`,
         },
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         border: `1px solid ${props.error ? '#F61414' : '#3A10E5'}`,
      },
   },
   '& label.Mui-focused': {
      color: `${props.error ? 'gray' : '#3A10E5'}`,
   },
   width: '500px',
   height: '52px',
}))

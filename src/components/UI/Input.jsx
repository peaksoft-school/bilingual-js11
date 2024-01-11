import React, { forwardRef } from 'react'
import TextField from '@mui/material/TextField'
import { styled } from '@mui/material'

const Input = forwardRef((props, ref) => {
   const {
      value,
      onChange,
      error,
      label,
      disabled,
      placeholder,
      ...restProps
   } = props

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
         {...restProps}
      />
   )
})

export default Input

const StyledTextField = styled(TextField)(({ error, disabled }) => ({
   '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      border: '#BDBDBD',
      color: '#757575',
      '&:hover': {
         '& fieldset': {
            border: `1px solid ${error ? '#F61414' : '#3A10E5'}`,
            borderRadius: '8px',
         },
      },
      '&.Mui-focused': {
         '& fieldset': {
            border: `1px solid ${error ? '#F61414' : '#3A10E5'}`,
         },
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
         border: `1px solid ${error ? '#F61414' : '#3A10E5'}`,
      },
      ...(disabled && {
         backgroundColor: '#F7F7F7',
      }),
   },
   '& label.Mui-focused': {
      color: `${error ? 'gray' : '#3A10E5'}`,
   },
   width: '100%',
   height: '52px',
}))

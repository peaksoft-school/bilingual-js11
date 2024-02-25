import { MenuItem, InputLabel, Select, styled } from '@mui/material'
import { forwardRef } from 'react'

const Dropdown = forwardRef(({ options, value, onChange, ...rest }, ref) => (
   <StyledSelect
      displayEmpty
      value={value}
      onChange={onChange}
      ref={ref}
      {...rest}
      renderValue={(selected) => (
         <InputLabel shrink={false}>
            {selected || 'Select main idea'}
         </InputLabel>
      )}
   >
      {options?.map(({ id, title }) => (
         <StyledMenuItem key={id} value={title}>
            {title}
         </StyledMenuItem>
      ))}
   </StyledSelect>
))

export default Dropdown

const StyledSelect = styled(Select)(({ theme }) => ({
   borderRadius: '1rem 1rem 0 0',
   width: '100%',
   fontStyle: 'normal',
   fontSize: '1rem',
   padding: '0.75rem 1.125rem',

   '&.MuiOutlinedInput-root': {
      padding: '0.3rem',
      fontFamily: 'Poppins',
      fontSize: '1rem',
      backgroundColor: theme.palette.primary.white,

      '& fieldset': {
         borderRadius: '8px',
         border: '2px solid #D4D0D0',
      },

      '&.Mui-focused fieldset': {
         border: `2px solid ${theme.palette.primary.main}`,
         borderRadius: '8px 8px 0px 0px',
      },

      '&:hover fieldset': {
         border: `2px solid ${theme.palette.primary.main}`,
      },
   },

   '& .MuiSelect-icon': {
      color: 'white',
   },
}))

const StyledMenuItem = styled(MenuItem)(() => ({
   '&.MuiMenuItem-root': {
      backgroundColor: 'white',
      color: '#4C4859',
   },

   '&.MuiMenuItem-root:hover': {
      backgroundColor: 'rgba(58, 16, 229, 0.16)',
   },
}))

import { MenuItem, InputLabel, Select, styled } from '@mui/material'
import { forwardRef } from 'react'

const MenuProps = {
   PaperProps: {
      style: {
         maxHeight: 60 * 4.5 + 0,
         width: '100%',
         marginLeft: -16,
         boxShadow: '0px 2px 5px -3px rgba(0,0,0,0.2)',
         borderRadius: '0px 0px 5px 5px',
      },
   },
}

const Dropdown = forwardRef(({ options, value, onChange, ...rest }, ref) => (
   <StyledSelect
      displayEmpty
      value={value}
      onChange={onChange}
      MenuProps={MenuProps}
      ref={ref}
      {...rest}
      renderValue={(selected) => (
         <InputLabel shrink={false}>{selected || 'Describe image'}</InputLabel>
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

import React, { forwardRef } from 'react'
import { Radio as RadioIcon, styled } from '@mui/material'

const Radio = forwardRef(({ selectedValue, onChange, ...rest }, ref) => (
   <PurpleRadioIcon
      checked={selectedValue}
      onChange={onChange}
      ref={ref}
      {...rest}
   />
))

export default Radio

const PurpleRadioIcon = styled(RadioIcon)(({ theme }) => ({
   width: '20px',
   height: '20px',
   padding: '1px',
   color: '#9A9A9A',
   '&.Mui-checked': {
      color: theme.palette.primary.main,
   },
}))

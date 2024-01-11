import React, { forwardRef } from 'react'
import { Radio as RadioIcon, styled } from '@mui/material'

const Radio = forwardRef(({ selectedValue, onChange, ...rest }, ref) => {
   return (
      <PurpleRadioIcon
         checked={selectedValue}
         onChange={onChange}
         ref={ref}
         {...rest}
      />
   )
})

export default Radio

const PurpleRadioIcon = styled(RadioIcon)({
   width: '20px',
   height: '20px',
   padding: '1px',
   color: '#9A9A9A',
   '&.Mui-checked': {
      color: '#3A10E5',
   },
})

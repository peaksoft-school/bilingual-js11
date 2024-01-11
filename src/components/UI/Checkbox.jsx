import React, { forwardRef } from 'react'
import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const CheckBox = forwardRef(({ checked, onChange, disabled, ...rest }, ref) => {
   return (
      <Checkbox
         disabled={disabled}
         checked={checked}
         onChange={onChange}
         checkedIcon={<BpCheckedIcon />}
         icon={<BpIcon />}
         ref={ref}
         {...rest}
      />
   )
})

export default CheckBox

const BpIconStyles = () => ({
   border: '2px solid',
   borderRadius: '4px',
   width: '18.182px',
   height: '18.182px',
   color: '#9A9A9A',

   '&.MuiCheckbox-root:hover': {
      backgroundColor: '#black',
   },

   'input:hover': {
      background: 'none  ',
   },
})

const BpIcon = styled('span')(BpIconStyles)

const BpCheckedIcon = styled(BpIcon)({
   backgroundColor: '#2AB930',
   border: 'none',

   '&::before': {
      display: 'block',
      padding: 1,
      width: 16,
      height: 16,
      backgroundImage:
         "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
   },

   'input:hover ~ &': {
      backgroundColor: '#2AB930',
   },
})

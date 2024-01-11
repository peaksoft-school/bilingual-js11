import React, { forwardRef } from 'react'
import { FormControlLabel, Switch, styled } from '@mui/material'

const Switcher = forwardRef(({ checked, onChange, disabled, ...rest }, ref) => {
   return (
      <FormControlLabel
         control={
            <IOSSwitch
               defaultChecked={checked}
               onChange={onChange}
               disabled={disabled}
               ref={ref}
               {...rest}
            />
         }
      />
   )
})

export default Switcher

const IOSSwitch = styled(Switch)({
   width: '38px',
   height: '22px',
   padding: 0,

   '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',

      '&.Mui-checked': {
         transform: 'translateX(16px)',
         color: '#fff',

         '& + .MuiSwitch-track': {
            backgroundColor: '#2AB930',
            border: 0,
            opacity: 1,
         },
      },

      '&.Mui-focusVisible .MuiSwitch-thumb': {
         color: '#33cf4d',
         border: '6px solid #fff',
      },
   },

   '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 18,
      height: 18,
      boxShadow: 'none',
   },

   '& .MuiSwitch-track': {
      borderRadius: '26px',
      backgroundColor: '#C4C4C4',
      opacity: 1,
   },
})

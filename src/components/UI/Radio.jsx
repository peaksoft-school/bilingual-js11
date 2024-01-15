import { forwardRef } from 'react'
import { Radio as MuiRadio, styled } from '@mui/material'

const Radio = forwardRef(({ checked, onChange, ...rest }, ref) => (
   <PurpleRadioIcon checked={checked} onChange={onChange} ref={ref} {...rest} />
))

export default Radio

const PurpleRadioIcon = styled(MuiRadio)(({ theme }) => ({
   width: '20px',
   height: '20px',
   padding: '1px',
   color: '#9A9A9A',

   '&.Mui-checked': {
      color: theme.palette.primary.main,
   },
}))

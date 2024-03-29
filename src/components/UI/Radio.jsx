import { forwardRef } from 'react'
import { Radio as MuiRadio, styled } from '@mui/material'

const Radio = forwardRef(({ checked, onChange, disabled, ...rest }, ref) => (
   <StyledRadio
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      ref={ref}
      {...rest}
   />
))

export default Radio

const StyledRadio = styled(MuiRadio)(({ checked, theme }) => ({
   width: '20px',
   height: '20px',
   padding: '1px',
   color: checked ? theme.palette.primary.main : '#9A9A9A',
}))

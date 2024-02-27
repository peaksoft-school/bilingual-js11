import { forwardRef } from 'react'
import { Radio as MuiRadio, styled } from '@mui/material'

const Radio = forwardRef(({ checked, onChange, ...rest }, ref) => (
   <StyledRadio checked={checked} onChange={onChange} ref={ref} {...rest} />
))

export default Radio

const StyledRadio = styled(MuiRadio)(() => ({
   width: '20px',
   height: '20px',
   padding: '1px',
   color: '#9A9A9A',
}))

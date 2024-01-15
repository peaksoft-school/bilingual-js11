import { forwardRef } from 'react'
import { styled, Checkbox as MuiCheckbox } from '@mui/material'
import { CHECKBOX_IMAGE } from '../../utils/constants/checkboxImage'

const CheckBox = forwardRef(({ checked, onChange, disabled, ...rest }, ref) => (
   <StyledCheckbox
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      ref={ref}
      {...rest}
   />
))

export default CheckBox

const StyledCheckbox = styled(MuiCheckbox)(() => ({
   '&:hover': {
      backgroundColor: 'inherit',
   },
}))

const BpIconStyles = () => ({
   border: '2px solid',
   borderRadius: '4px',
   width: '18.182px',
   height: '18.182px',
   color: '#9A9A9A',
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
      backgroundImage: `url(${CHECKBOX_IMAGE})`,
      content: '""',
   },
})

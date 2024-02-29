import { forwardRef } from 'react'
import { styled, Checkbox as MuiCheckbox } from '@mui/material'
import { CHECKBOX_IMAGE } from '../../utils/constants/index'

const Checkbox = forwardRef(
   ({ selectedValue, onChange, disabled, ...rest }, ref) => (
      <StyledCheckbox
         disabled={disabled}
         checked={selectedValue}
         onChange={onChange}
         checkedIcon={<StyledBpCheckedIcon />}
         icon={<StyledBpIcon />}
         ref={ref}
         {...rest}
      />
   )
)

export default Checkbox

const StyledCheckbox = styled(MuiCheckbox)(() => ({
   padding: 0,

   '&:hover': {
      backgroundColor: 'inherit',
   },
}))

const StyledBpIcon = styled('span')({
   border: '2px solid',
   borderRadius: '4px',
   width: '18.182px',
   height: '18.182px',
   color: '#9A9A9A',
})

const StyledBpCheckedIcon = styled(StyledBpIcon)({
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

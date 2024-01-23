import { MenuItem, Select, styled } from '@mui/material'
import { SELECT } from '../../utils/constants'

const Dropdowns = () => {
   return (
      <StyledList>
         {SELECT.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
         ))}
      </StyledList>
   )
}

export default Dropdowns

const StyledList = styled(Select)(() => ({
   borderRadius: '10px 10px 0 0',
   width: '51.0625rem',
   fontStyle: 'normal',
   fontWeight: '400',
   fontSize: '16px',
   lineHeight: '18px',
}))

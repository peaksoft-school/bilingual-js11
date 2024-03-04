import { IconButton as MuiIconButton } from '@mui/material'

const IconButton = ({ children, ...rest }) => {
   return <MuiIconButton {...rest}>{children}</MuiIconButton>
}

export default IconButton

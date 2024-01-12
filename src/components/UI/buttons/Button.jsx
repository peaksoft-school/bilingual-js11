import { forwardRef } from 'react'
import { styled, Button as MuiButton } from '@mui/material'

const Button = forwardRef(
   ({ onClick, disabled, children, icon, ...rest }, ref) => (
      <StyledButton onClick={onClick} disabled={disabled} ref={ref} {...rest}>
         {icon && <span className="icon">{icon}</span>}
         {children}
      </StyledButton>
   )
)
export default Button

const StyledButton = styled(MuiButton)(({ theme }) => ({
   '&.MuiButton-root': {
      borderRadius: '0.5rem',
      background: theme.palette.primary.main,
      padding: '0.813rem 1.5rem',
      boxShadow: 'none',
      color: '#FFF',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      '&:hover': {
         borderRadius: '0.5rem',
         background: '#4E28E8',
      },
      '&:active': {
         background: '#3007DA',
      },
      '&.Mui-disabled': {
         opacity: 0.5,
         background: 'white',
         color: theme.palette.primary.white,
         backgroundColor: '#C4C4C4',
         border: '0.125rem solid',
      },
      '& .icon': {
         marginRight: '0.625rem',
      },
   },
}))

import { forwardRef } from 'react'
import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material'

const Button = forwardRef(
   ({ onClick, disabled, children, icon, ...rest }, ref) => (
      <StyleButton
         onClick={onClick}
         disabled={disabled}
         type="submit"
         ref={ref}
         {...rest}
      >
         {icon && <span className="icon">{icon}</span>}
         {children}
      </StyleButton>
   )
)
export default Button

const StyleButton = styled(MuiButton)(({ theme }) => ({
   '&.MuiButton-root': {
      borderRadius: '8px',
      background: theme.palette.primary.main,
      padding: '13px 24px',
      boxShadow: 'none',
      color: '#FFF',
      textAlign: 'center',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      letterSpacing: '0.28px',
      '&:hover': {
         borderRadius: '8px',
         background: '#4E28E8',
      },
      '&:active': {
         background: '#3007DA',
      },
      '&.Mui-disabled': {
         opacity: 0.5,
         pointerEvents: 'none',
         background: 'white',
         color: '#C4C4C4',
         borderColor: '#C4C4C4 solid 1px',
         border: '2px solid',
      },
      '& .icon': {
         marginRight: '10px',
      },
   },
}))

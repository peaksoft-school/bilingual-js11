import { forwardRef } from 'react'
import { styled, Button as MuiButton } from '@mui/material'

const Button = forwardRef(
   (
      { onClick, disabled, children, icon, variant = 'normal', ...rest },
      ref
   ) => (
      <StyledButton
         onClick={onClick}
         disabled={disabled}
         variant={variant}
         ref={ref}
         {...rest}
      >
         {icon && <span className="icon">{icon}</span>}
         {children}
      </StyledButton>
   )
)
export default Button

const StyledButton = styled(MuiButton)(({ theme, variant }) => {
   if (variant === 'normal') {
      return {
         '&.MuiButton-root': {
            borderRadius: '0.5rem',
            height: '2.625rem',
            background: theme.palette.primary.main,
            padding: '0.813rem 1.5rem',
            color: theme.palette.primary.white,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            boxShadow:
               '0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20), 0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20)',
            '&:hover': {
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
               border: '0.125rem solid #C4C4C4',
            },
            '& .icon': {
               marginRight: '0.625rem',
               textAlign: 'center',
            },
         },
      }
   }
   if (variant === 'primary') {
      return {
         '&.MuiButton-root': {
            borderRadius: '0.5rem',
            height: '2.625rem',
            background: '#2AB930',
            padding: '0.813rem 1.5rem',
            color: theme.palette.primary.white,
            textAlign: 'center',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            boxShadow:
               '0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20), 0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20)',
            '&:hover': {
               background: '#31CF38',
            },
            '&:active': {
               background: '#08AF10',
            },
            '&.Mui-disabled': {
               opacity: 0.5,
               background: 'white',
               color: '#C4C4C4',
               border: '0.125rem solid',
            },
         },
      }
   }
   if (variant === 'secondary') {
      return {
         '&.MuiButton-root': {
            borderRadius: '0.5rem',
            height: '2.625rem',
            background: theme.palette.primary.white,
            padding: '0.813rem 1.5rem',
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.white,
            border: '1px solid',
            textAlign: 'center',
            fontSize: '0.875rem',
            fontStyle: 'normal',
            fontWeight: '400',
            lineHeight: 'normal',
            boxShadow:
               '0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20), 0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20)',
            '&:hover': {
               borderColor: theme.palette.primary.main,
               background: theme.palette.primary.main,
               color: theme.palette.primary.white,
            },
            '&:active': {
               borderColor: theme.palette.primary.main,
               color: theme.palette.primary.white,
               background: '#3007DA',
            },
            '&.Mui-disabled': {
               opacity: 0.5,
               background: 'white',
               color: '#C4C4C4',
               border: '0.125rem solid',
            },
         },
      }
   }
   return {}
})

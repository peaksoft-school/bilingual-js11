import { forwardRef } from 'react'
import { styled, Button as MuiButton } from '@mui/material'

const Button = forwardRef(
   (
      { onClick, disabled, type = 'submit', children, icon, variant, ...rest },
      ref
   ) => (
      <StyledButton
         onClick={onClick}
         disabled={disabled}
         type={type}
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
   const buttonStyles = {
      '&.MuiButton-root': {
         borderRadius: '0.5rem',
         height: '2.625rem',
         padding: '0.813rem 1.5rem',
         textAlign: 'center',
         fontSize: '0.875rem',
         fontWeight: '400',
         fontFamily: 'Gilroy',
         lineHeight: 'normal',
         boxShadow:
            '0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20), 0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20)',
         color: theme.palette.primary.white,
         background: theme.palette.primary.main,

         '&:hover': {
            background: '#4E28E8',
         },

         '&:active': {
            background: '#3007DA',
         },

         '&.Mui-disabled': {
            color: theme.palette.primary.white,
            background: '#C4C4C4',
            border: '0.125rem solid #C4C4C4',
         },

         '& .icon': {
            marginRight: '0.063rem',
            marginLeft: '-0.625rem',
            paddingTop: '0.34rem',
         },
      },
   }

   if (variant === 'primary') {
      buttonStyles['&.MuiButton-root'] = {
         ...buttonStyles['&.MuiButton-root'],

         background: '#2AB930',

         '&:hover': {
            background: '#31CF38',
         },

         '&:active': {
            background: '#08AF10',
         },
      }
   } else if (variant === 'secondary') {
      buttonStyles['&.MuiButton-root'] = {
         ...buttonStyles['&.MuiButton-root'],

         background: theme.palette.primary.white,
         color: theme.palette.primary.main,
         borderColor: theme.palette.primary.white,
         border: '0.125rem solid',

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
      }
   }

   return buttonStyles
})

import { forwardRef } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'
import BeginBtnImage from '../../../assets/images/buttons/toBegin.png'
import StartBtnImage from '../../../assets/images/buttons/getStarted.png'

const LandingButtons = forwardRef(
   ({ children, onClick, isStart, toggleBtn, ...rest }, ref) => (
      <div>
         {isStart ? (
            <StyleStartButton
               onClick={onClick}
               ref={ref}
               toggleBtn={toggleBtn}
               {...rest}
            />
         ) : (
            <StyleJoinButton onClick={onClick} ref={ref} {...rest}>
               {children}
            </StyleJoinButton>
         )}
      </div>
   )
)

export default LandingButtons

const StyleStartButton = styled(Button)(({ toggleBtn }) => ({
   backgroundImage: `url(${
      toggleBtn === 'true' ? StartBtnImage : BeginBtnImage
   })`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   width: '12.5rem',
   height: '3.75rem',
   cursor: 'pointer',
   color: '#eeb6c0',
}))

const StyleJoinButton = styled(Button)(({ theme }) => ({
   '&.MuiButton-root': {
      height: '2.625rem',
      padding: '0.813rem 1.5rem',
      borderRadius: '0.5rem',
      background: theme.palette.primary.main,
      boxShadow:
         '0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20), 0rem 0.063rem 0.125rem 0rem rgba(76, 72, 89, 0.20)',
      color: theme.palette.primary.white,
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      '&:hover': {
         background: '#4E28E8',
      },
      '&:active': {
         background: '#3007DA',
      },
   },
}))

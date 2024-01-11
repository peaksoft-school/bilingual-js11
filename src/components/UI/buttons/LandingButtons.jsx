import { forwardRef } from 'react'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'
import ToBeginBtnBackground from '../../../assets/images/buttons/button.png'
import StartBtnBackground from '../../../assets/images/buttons/button (1).png'

const LandingButton = forwardRef(
   ({ children, onClick, isStart, isali, ...rest }, ref) => (
      <div>
         {isStart ? (
            <StyleStartButton
               onClick={onClick}
               type="submit"
               ref={ref}
               isali={isali}
               {...rest}
            />
         ) : (
            <StyleJoinButton
               onClick={onClick}
               type="submit"
               ref={ref}
               {...rest}
            >
               {children}
            </StyleJoinButton>
         )}
      </div>
   )
)

export default LandingButton

const StyleStartButton = styled(Button)(({ isali }) => ({
   backgroundImage: `url(${
      isali === 'true' ? StartBtnBackground : ToBeginBtnBackground
   })`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   backgroundPosition: 'center',
   width: '200px',
   height: '60px',
   border: 'none',
   outline: 'none',
   cursor: 'pointer',
   lineHeight: '21px',
   letterSpacing: '0.05em',
   textTransform: 'uppercase',
   color: '#eeb6c0',
}))

const StyleJoinButton = styled(Button)(({ theme }) => ({
   '&.MuiButton-root': {
      display: 'inline-flex',
      height: '42px',
      padding: '13px 24px',
      alignItems: 'center',
      gap: '8px',
      flexShrink: '0',
      borderRadius: '8px',
      background: theme.palette.primary.main,
      boxShadow:
         '0px 1px 2px 0px rgba(76, 72, 89, 0.20), 0px 1px 2px 0px rgba(76, 72, 89, 0.20)',
      color: theme.palette.primary.white,
      textAlign: 'center',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 'bold',
      lineHeight: 'normal',
      letterSpacing: ' 0.28px',
      '&:hover': {
         background: '#4E28E8',
      },
      '&:active': {
         background: '#3007DA',
      },
   },
}))

import { forwardRef } from 'react'
import { styled, Button } from '@mui/material'
import BeginBtnImage from '../../../assets/images/pngs/toBegin.png'
import StartBtnImage from '../../../assets/images/pngs/getStarted.png'

const LandingButtons = forwardRef(
   ({ children, onClick, isStart = true, ...rest }, ref) => (
      <div>
         <StyleStartButton
            onClick={onClick}
            isstart={isStart.toString()}
            ref={ref}
            {...rest}
         />
      </div>
   )
)

export default LandingButtons

const StyleStartButton = styled(Button)(({ isstart }) => ({
   backgroundImage: `url(${
      isstart !== 'false' ? StartBtnImage : BeginBtnImage
   })`,

   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   width: '12.5rem',
   height: '3.75rem',
   cursor: 'pointer',
   color: '#eeb6c0',
   borderRadius: '2rem',
}))

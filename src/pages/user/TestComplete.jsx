import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { CompleteIcon, LogoIcon } from '../../assets/icons'
import ConfettiAnimation from '../../components/ConfettiAnimation'
import TestContainer from '../../components/UI/TestContainer'
import Button from '../../components/UI/buttons/Button'

const TestComplete = () => {
   const [showConfetti, setShowConfetti] = useState(false)

   const doneButtonClickHandler = () => setShowConfetti(true)

   return (
      <TestContainer>
         <StyledContainer>
            <Box className="title-box">
               <Typography className="title">Test is complete!</Typography>

               <CompleteIcon />
            </Box>

            <Box className="content-box">
               <LogoIcon className="icon" />

               <Typography className="message">
                  Your results were sent for evaluation proccess. <br />
                  After evaluation your results will be sent to your email.
               </Typography>
            </Box>

            <Box className="buttons-box">
               <Button variant="secondary" className="try-again">
                  TRY AGAIN
               </Button>

               <Button className="done" onClick={doneButtonClickHandler}>
                  DONE
               </Button>
            </Box>

            <ConfettiAnimation active={showConfetti} />
         </StyledContainer>
      </TestContainer>
   )
}

export default TestComplete

const StyledContainer = styled(Box)(() => ({
   fontFamily: 'Poppins',

   '& > .title-box': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',

      '& > .title': {
         fontWeight: 400,
         fontSize: '28px',
         color: '#4C4859',
      },
   },

   '& > .content-box': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      borderBottom: '1.53px solid #D4D0D0',

      '& > .icon': {
         marginTop: '52px',
         marginBottom: '26px',
         maarginRight: '46%',
         width: '113.66px',
         height: '100px',
      },

      '& > .message': {
         fontStyle: 'normal',
         fontWeight: 400,
         fontSize: '18px',
         lineHeight: '130%',
         textAlign: 'center',
         color: '#4C4859',
         paddingBottom: '60px',
      },
   },

   '& > .buttons-box': {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem',

      '& > .done, .try-again': {
         width: '9.25rem',
      },
   },
}))

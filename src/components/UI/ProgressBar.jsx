import { Line } from 'rc-progress'
import { useState, useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import useTimer from '../../hooks/useTimer'

const ProgressBar = ({ duration, onNextQuestion, count }) => {
   const [progressPercent, setProgressPercent] = useState(100)

   const { minute, seconds } = useTimer(duration, onNextQuestion, count)

   useEffect(() => {
      const remainingSeconds = parseInt(minute, 10) * 60 + parseInt(seconds, 10)

      const chartPercent = (1 - remainingSeconds / duration) * 100

      setProgressPercent(chartPercent)

      if (remainingSeconds <= 0) {
         onNextQuestion()
      }
   }, [minute, seconds, duration])

   return (
      <StyledContainer>
         <Box className="block-progress-bar">
            <Typography className="duration">
               {minute}:{seconds}
            </Typography>

            <LineWrapper>
               <Line percent={progressPercent} strokeColor="#3a10e5" />
            </LineWrapper>
         </Box>
      </StyledContainer>
   )
}

export default ProgressBar

const StyledContainer = styled(Box)(() => ({
   width: '100%',
   maxWidth: '56.875rem',
   paddingTop: '1px',

   '& > .block-progress-bar': {
      width: '100%',
      height: '52px',
   },

   '& > .duration': {
      color: '#4C4859',
      marginBottom: '20px',
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: '28px',
      lineHeight: '24px',
   },
}))

const LineWrapper = styled(Box)(() => ({
   width: '100%',
   // height: '4px',
   // overflow: 'hidden',
   '& .rc-progress-line': {
      transition: '0.1s ease-in-out',
   },
}))

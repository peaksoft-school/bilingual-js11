import { useState, useEffect, useCallback } from 'react'
import { Box, Typography, styled } from '@mui/material'

const ProgressBar = ({ duration, onNextQuestion, count }) => {
   const [chartPercent, setChartPercent] = useState(0)
   const [time, setTime] = useState(duration)

   useEffect(() => {
      setTime(duration)
   }, [duration, count])

   const calculatePercentage = useCallback(() => {
      const percent = (1 - time / duration) * 100
      setChartPercent(percent)
   }, [duration, time])

   useEffect(() => {
      calculatePercentage()
   }, [calculatePercentage])

   const timeTicking = useCallback(() => {
      if (time === 0 || time <= 0) {
         return onNextQuestion()
      }
      return setTime((prevTime) => prevTime - 0.1)
   }, [time, onNextQuestion])

   useEffect(() => {
      const timer = setInterval(() => {
         timeTicking()
      }, 100)

      return () => {
         clearInterval(timer)
      }
   }, [timeTicking])

   const minutes = Math.trunc(time / 60)
   const seconds = Math.trunc(time % 60)

   const timeObject = {
      minute: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
   }
   return (
      <StyledContainer>
         <Box className="block-progress-bar">
            <Typography className="duration">
               {timeObject.minute}:{timeObject.seconds}
            </Typography>
            <DurationLine value={chartPercent} max="100" />
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

const DurationLine = styled('progress')(({ theme }) => ({
   height: '0.5rem',
   width: '100%',
   accentColor: theme.palette.primary.main,
}))

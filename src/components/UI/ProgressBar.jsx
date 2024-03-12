import React, { useState, useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'

const ProgressBar = ({ duration, onNextQuestion }) => {
   const [timeProgress, setTimeProgress] = useState(0)
   const [timeLeft, setTimeLeft] = useState(duration * 10)

   useEffect(() => {
      setTimeProgress(0) // Сброс прогресса времени при изменении duration
      setTimeLeft(duration * 10) // Обновление времени оставшегося на duration
   }, [duration])

   useEffect(() => {
      const interval = setInterval(() => {
         setTimeProgress((prevProgress) => prevProgress + 1)
         setTimeLeft((prevTimeLeft) =>
            prevTimeLeft !== 0 ? prevTimeLeft - 1 : 0
         )
      }, 100)

      return () => {
         clearInterval(interval)
      }
   }, [duration])

   useEffect(() => {
      if (timeLeft === 0) {
         onNextQuestion() // Вызываем обратный вызов при достижении времени duration
      }
   }, [timeLeft, onNextQuestion])

   const formatTime = (time) => {
      const minutes = Math.floor(time / 600)
      const seconds = Math.floor((time % 600) / 10)
         .toString()
         .padStart(2, '0')
      return `${minutes}:${seconds}`
   }

   return (
      <StyledContainer>
         <Box className="block-progress-bar">
            <Typography className="duration">{formatTime(timeLeft)}</Typography>
            <DurationLine value={timeProgress} max={duration * 10} />
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

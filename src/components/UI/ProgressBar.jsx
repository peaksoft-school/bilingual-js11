import { useState, useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'

const ProgressBar = ({ duration, minutes, seconds }) => {
   const [timeProgress, setTimeProgress] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setTimeProgress((prevProgress) => prevProgress + 1)
      }, duration * 10)

      return () => {
         clearInterval(interval)
      }
   }, [duration])

   return (
      <StyledContainer>
         <Box className="block-progress-bar">
            <Typography className="duration">
               {minutes}:{seconds}
            </Typography>

            <DurationLine value={timeProgress} max={duration} />
         </Box>
      </StyledContainer>
   )
}

export default ProgressBar

const StyledContainer = styled(Box)(() => ({
   width: '100%',
   paddingTop: '1px',

   '& .block-progress-bar': {
      width: '100%',
      height: '52px',
   },

   '& .duration': {
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

// import { Line } from 'rc-progress'
import { useState, useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import useTimer from '../../hooks/useTimer'

const ProgressBar = ({ duration, timeIsUp, count }) => {
   const [progressPercent, setProgressPercent] = useState(duration)

   const { minute, seconds } = useTimer(duration, timeIsUp, count)

   useEffect(() => {
      const remainingSeconds = parseInt(minute, 10) * 60 + parseInt(seconds, 10)

      const chartPercent = (remainingSeconds / duration) * 100

      setProgressPercent(chartPercent)

      if (remainingSeconds <= 0) {
         timeIsUp()
      }
   }, [minute, seconds, duration])

   useEffect(() => {
      if (progressPercent > 0) {
         setTimeout(() => setProgressPercent((prev) => prev - 0.5), 50)
      }
   }, [progressPercent])

   return (
      <StyledContainer>
         <Box className="block-progress-bar">
            <Typography className="duration">
               {minute}:{seconds}
            </Typography>

            <LineWrapper>
               {/* <Line percent={progressPercent} strokeColor="#3a10e5" /> */}

               <div className="progressbar">
                  <div
                     className="progressbar-line"
                     style={{ width: `${progressPercent}%` }}
                  >
                     {' '}
                  </div>
               </div>
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

   '& .progressbar': {
      overflow: 'hidden',
      width: '100%',
      height: '8px',
      borderRadius: '5px',
      backgroundColor: '#eee',
   },

   '& .progressbar-line': {
      height: '100%',
      backgroundColor: '#3a10e5',
      transition: 'width 0.6s',
      borderRadius: '5px',
   },
}))

const LineWrapper = styled(Box)(() => ({
   width: '100%',
   // height: '4px',
   // overflow: 'hidden',
   '& .rc-progress-line-path': {
      transition: 'width 0.5s ease-in-out',
   },
}))

import { useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import useTimer from '../../hooks/useTimer'

const ProgressBar = ({ duration, timeIsUp, count, lastQuestionHandler }) => {
   const { questions } = useSelector((state) => state.practiceTest)

   const { minute, seconds, percent } = useTimer(duration, timeIsUp, count)

   // Проверяем, достигли ли мы последней минуты последнего вопроса
   const isLastMinute =
      minute === 0 && seconds === 0 && count === questions.length - 1

   // Если это последняя минута последнего вопроса, вызываем lastQuestionHandler
   if (isLastMinute) {
      lastQuestionHandler()
   }

   return (
      <StyledContainer>
         <Box className="block-progress-bar">
            <Typography className="duration">
               {minute}:{seconds}
            </Typography>

            <div className="progressbar">
               <div
                  className="progressbar-line"
                  style={{ width: `${100 - percent}%` }}
               />
            </div>
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

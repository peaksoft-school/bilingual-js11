import { useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ANSWERS_THUNKS } from '../../../../store/slices/admin/answers/answersThunk'
import TestQuestion from '../../../UI/TestQuestion'
import Button from '../../../UI/buttons/Button'

const HighlightTheAnswer = () => {
   const { answers, isLoading } = useSelector((state) => state.answersSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ANSWERS_THUNKS.getAnswers({ answerId: 1 }))
   }, [dispatch])

   return (
      <TestQuestion {...answers} isLoading={isLoading}>
         <StyledContainer>
            <Box className="admin-options-box">
               <Typography className="respond">Passage:</Typography>

               <Typography className="passage">{answers.passage}</Typography>
            </Box>

            <Box className="admin-options-box">
               <Typography className="answer">Correct Answer:</Typography>

               <Typography className="correct-answer">
                  {answers.correctAnswer}
               </Typography>
            </Box>

            <Typography className="user-answer">User`s Answer </Typography>

            <Box className="user-options-box">
               <Typography className="respond">Respond:</Typography>

               <Typography className="user-answer">
                  {answers.userAnswer}
               </Typography>
            </Box>

            <Box className="buttons-box">
               <Button variant="secondary">GO BACK</Button>
               <Button variant="primary">SAVE</Button>
            </Box>
         </StyledContainer>
      </TestQuestion>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   fontWeight: 300,

   '& > .user-answer': {
      fontWeight: 500,
      fontSize: '18px',
      marginTop: '1.4rem',
   },

   '& > .admin-options-box': {
      gap: '0.3rem',
      display: 'flex',
      margin: '0.8rem 0 0.7rem 0',

      '& > .passage': {
         marginBottom: '1rem',
      },

      '& > .correct-answer': {
         color: theme.palette.primary.main,
         width: '785px',
         marginLeft: '-2rem',
         marginBottom: '1rem',
      },

      '& > .answer': {
         width: '10rem',
      },

      '& > .respond': {
         fontWeight: 500,
      },
   },

   '& > .user-options-box': {
      width: '100%',
      gap: '0.5rem',
      display: 'flex',
      margin: '0.8rem 0 0.7rem 0',

      '& > .respond': {
         fontWeight: 500,
      },
   },

   '& > .buttons-box': {
      gap: '0 1rem',
      display: 'flex',
      justifyContent: 'flex-end',
   },
}))

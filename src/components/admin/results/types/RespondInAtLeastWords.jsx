import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { ANSWERS_THUNKS } from '../../../../store/slices/admin/answers/answersThunk'
import TestQuestion from '../../../UI/TestQuestion'
import Button from '../../../UI/buttons/Button'

const RespondInAtLeastWords = () => {
   const { answers, isLoading } = useSelector((state) => state.answersSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ANSWERS_THUNKS.getAnswers({ answerId: 7 }))
   }, [dispatch])

   const countWords = (text) => {
      const wordsArray = text.split(' ').filter((word) => word !== '')

      return wordsArray?.length
   }

   const wordsCount = answers?.userAnswer ? countWords(answers?.userAnswer) : 0

   return (
      <TestQuestion
         {...answers}
         isLoading={isLoading}
         evaluateManually
         minimumNumber
      >
         <StyledContainer>
            <Typography className="user-answer">User`s Answer </Typography>

            <Box className="user-options-box">
               <Typography className="respond">Respond:</Typography>

               <Typography className="user-answer">
                  {answers?.userAnswer}
               </Typography>
            </Box>

            <Typography>Number of words: {wordsCount}</Typography>

            <Box className="buttons-box">
               <Button variant="secondary">GO BACK</Button>
               <Button variant="primary">SAVE</Button>
            </Box>
         </StyledContainer>
      </TestQuestion>
   )
}

export default RespondInAtLeastWords

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',

   '& > .user-answer': {
      fontWeight: 500,
      fontSize: '18px',
      marginTop: '1.4rem',
   },

   '& > .user-options-box': {
      width: '100%',
      gap: '0.5rem',
      display: 'flex',
      margin: '0.8rem 0 0.7rem 0',

      '& > .user-answer': {
         color: theme.palette.primary.main,
      },

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

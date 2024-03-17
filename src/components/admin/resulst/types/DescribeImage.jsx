import { useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ANSWERS_THUNKS } from '../../../../store/slices/admin/answers/answersThunk'
import TestQuestion from '../../../UI/TestQuestion'
import Button from '../../../UI/buttons/Button'

const DescribeImage = () => {
   const { answers, isLoading } = useSelector((state) => state.answersSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ANSWERS_THUNKS.getAnswers({ answerId: 3 }))
   }, [dispatch])

   return (
      <TestQuestion {...answers} isLoading={isLoading}>
         <StyledContainer>
            <Box className="admin-answers-box">
               <Box>
                  <img src={answers.fileUrl} alt="img" />
               </Box>

               <Typography className="correct-answer">
                  Correct Answer:
               </Typography>

               <Typography>{answers?.correctAnswer}</Typography>
            </Box>

            <Typography className="user-answer">User`s Answer </Typography>

            <Box className="user-answers-box">
               <Typography>Entered Statement:</Typography>

               <Typography>{answers?.userAnswer}</Typography>
            </Box>

            <Box className="buttons-box">
               <Button variant="secondary">GO BACK</Button>
               <Button variant="primary">SAVE</Button>
            </Box>
         </StyledContainer>
      </TestQuestion>
   )
}

export default DescribeImage

const StyledContainer = styled(Box)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   fontWeight: 300,

   '& > .user-answer': {
      fontWeight: 500,
      fontSize: '18px',
      marginTop: '1.4rem',
   },

   '& > .passage-box': {
      display: 'flex',
      gap: '0.4rem',
      marginTop: '1.4rem',

      '& >.title': {
         fontWeight: 500,
      },

      '& > .passage': {
         width: '832px',
      },
   },

   '& > .admin-answers-box': {
      gap: '0.4rem',
      display: 'flex',
      alignItems: 'center',
      margin: '2rem 0 2rem 0',

      '& > div > img': {
         width: '181.59px',
         height: '177.39px',
         borderRadius: '8px',
         cursor: 'pointer',

         '&:hover': {
            filter: 'brightness(0.6)',
            transition: 'transform 0.3s ease',
         },
      },

      '& > .correct-answer': {
         marginLeft: '1rem',
      },
   },

   '& > .user-answers-box': {
      width: '100%',
      gap: '0.4rem',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      margin: '1rem 0 1rem 0',
   },

   '& > .buttons-box': {
      gap: '0 1rem',
      display: 'flex',
      justifyContent: 'flex-end',
   },
}))

import { Box, Typography, styled } from '@mui/material'
import { questionTypeHandler } from '../../utils/helpers'
import TestContainer from './TestContainer'
import Loading from '../Loading'
import Input from './Input'

const TestQuestion = ({
   children,
   minimumNumber,
   evaluateManually,
   questionStatement,
   isLoading,
   ...answerProps
}) => {
   const {
      score,
      fullName,
      duration,
      testTitle,
      statement,
      questionType,
      questionTitle,
      questionAttempts,
   } = answerProps

   const changeValueHandler = (e) => {
      const value = parseInt(e.target.value, 10)

      if (value > 10) {
         e.target.value = 10
      }
   }

   const hours = Math.floor(duration / 60)

   const minutes = duration % 60

   const formattedDuration = `${hours}:${minutes < 10 ? '0' : ''}${minutes}`

   return (
      <TestContainer>
         <StyledContainer>
            <Box>
               {isLoading && <Loading />}

               <Box className="title-box">
                  <Box className="titles">
                     <Typography className="title">User:</Typography>
                     <Typography>{fullName}</Typography>
                  </Box>

                  <Box className="titles">
                     <Typography className="title">Test:</Typography>
                     <Typography>{testTitle}</Typography>
                  </Box>
               </Box>

               <Typography className="test-question">Test Question</Typography>

               <Box>
                  <Box className="test-questions">
                     <Typography className="title">Question Title:</Typography>
                     <Typography>{questionTitle}</Typography>
                  </Box>

                  <Box className="test-questions">
                     <Typography className="title">
                        Duration (in minutes):
                     </Typography>

                     <Typography>{formattedDuration}</Typography>
                  </Box>

                  <Box className="test-questions">
                     <Typography className="title">Question Type:</Typography>

                     <Typography>
                        {questionTypeHandler(questionType)}
                     </Typography>
                  </Box>

                  {minimumNumber && (
                     <Box className="test-questions">
                        <Typography className="title">
                           Mimimum number of words:
                        </Typography>

                        <Typography>{questionAttempts}</Typography>
                     </Box>
                  )}

                  {statement && (
                     <Box className="test-questions">
                        <Typography className="title">Statement:</Typography>
                        <Typography>{statement}</Typography>
                     </Box>
                  )}

                  {questionStatement && (
                     <Box className="test-questions">
                        <Typography className="title">
                           Question Statement:
                        </Typography>

                        <Typography>{statement}</Typography>
                     </Box>
                  )}
               </Box>
            </Box>

            <Box className="evaluation">
               <Typography className="test-question">Evaluation</Typography>

               <Box className="score-box">
                  <Typography className="score">Score:</Typography>

                  {evaluateManually ? (
                     <Typography className="score">(1-10)</Typography>
                  ) : (
                     <Typography className="number">{score}</Typography>
                  )}
               </Box>

               {evaluateManually && (
                  <Input
                     className="input"
                     type="number"
                     inputProps={{ min: 1, max: 10 }}
                     autoComplete="off"
                     onInput={changeValueHandler}
                  />
               )}
            </Box>
         </StyledContainer>

         <Box>{children}</Box>
      </TestContainer>
   )
}

export default TestQuestion

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',
   display: 'flex',
   justifyContent: 'space-between',

   '& > div > .title-box': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0 3rem 0 ',

      '& > .titles': {
         display: 'flex',
         gap: '0.5rem',
      },
   },

   '& > div > .test-question': {
      fontWeight: 500,
      fontSize: '18px',
      marginBottom: '0.6rem',
   },

   '& > div > div > div > .title': {
      fontWeight: 500,
      color: '#3752B4',
   },

   '& > div > div > .test-questions': {
      display: 'flex',
      gap: '0.5rem',
   },

   '& > .evaluation': {
      marginTop: '5.9rem',

      '& > .score-box': {
         display: 'flex',

         '& > .score': {
            fontWeight: 500,
            color: '#3752B4',
            marginTop: '-0.7rem',
         },

         '& > .number': {
            marginTop: '-0.7rem',
            marginLeft: '0.2rem',
            color: '#2AB930',
            fontWeight: 'bold',
         },
      },

      '& > .input': {
         width: '5.875rem',
         currentColor: theme.palette.primary.main,
         marginTop: '0.3rem',

         '& div > .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button':
            {
               display: 'none',
            },
      },
   },
}))

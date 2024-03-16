import { Box, Typography, styled } from '@mui/material'
import TestContainer from './TestContainer'

const TestQuestion = ({
   children,
   minimumNumber,
   statement,
   questionStatement,
}) => {
   return (
      <TestContainer>
         <StyledContainer>
            <Box className="title-box">
               <Box className="user-name-box">
                  <Typography className="title">User:</Typography>
                  <Typography>props</Typography>
               </Box>

               <Box className="test-box">
                  <Typography className="title">Test:</Typography>
                  <Typography>props</Typography>
               </Box>
            </Box>

            <Typography className="test-question">Test Question</Typography>

            <Box className="test-questions">
               <Box className="question-title">
                  <Typography className="title">Question Title:</Typography>
                  <Typography>props</Typography>
               </Box>

               <Box className="duration">
                  <Typography className="title">
                     Duration (in minutes):
                  </Typography>
                  <Typography>props</Typography>
               </Box>

               <Box className="question-type">
                  <Typography className="title">Question Type:</Typography>
                  <Typography>props</Typography>
               </Box>

               {minimumNumber && (
                  <Box className="question-type">
                     <Typography className="title">Question Type:</Typography>
                     <Typography>props</Typography>
                  </Box>
               )}

               {statement && (
                  <Box className="question-type">
                     <Typography className="title">Question Type:</Typography>
                     <Typography>props</Typography>
                  </Box>
               )}

               {questionStatement && (
                  <Box className="question-type">
                     <Typography className="title">Question Type:</Typography>
                     <Typography>props</Typography>
                  </Box>
               )}
            </Box>

            {children}
         </StyledContainer>
      </TestContainer>
   )
}

export default TestQuestion

const StyledContainer = styled(Box)(() => ({
   color: '#4C4859',
   fontFamily: 'Poppins',

   '& > .title-box': {
      display: 'flex',
      flexDirection: 'column',
      margin: '0 0 3rem 0 ',

      '& > .user-name-box': {
         display: 'flex',
         gap: '0.5rem',
      },

      '& > .test-box': {
         display: 'flex',
         gap: '0.5rem',
      },
   },

   '& > .test-question': {
      fontWeight: 500,
      fontSize: '18px',
      marginBottom: '0.6rem',
   },

   '& > div > div > .title': {
      fontWeight: 500,
      color: '#3752B4',
   },

   '& > .test-questions': {
      '& > .question-title': {
         display: 'flex',
         gap: '0.5rem',
      },

      '& > .duration': {
         display: 'flex',
         gap: '0.5rem',
      },

      '& > .question-type': {
         display: 'flex',
         gap: '0.5rem',
      },
   },
}))

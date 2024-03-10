import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Button from '../../../components/UI/buttons/Button'

const HighlightTheAnswer = () => {
   const [answerValue, setAnswerValue] = useState('')

   const mouseUpHandler = () => setAnswerValue(window.getSelection().toString())

   return (
      <TestContainer>
         <StyledContainer>
            <ProgressBar duration={2} minutes={10} seconds={23} />

            <Box className="content-box">
               <Box className="correct-answer">
                  <Typography className="title">PASSAGE</Typography>

                  <Typography
                     onMouseUp={mouseUpHandler}
                     className="highlight-text"
                  >
                     Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam rem
                     aperiam, eaque ipsa quae ab illo inventore veritatis et
                     quasi architecto beatae vitae dicta sunt explicabo. Nemo
                     enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                     aut fugit, sed quia consequuntur magni dolores eos qui
                     ratione voluptatem sequi nesciunt. Neque porro quisquam
                     est, qui dolorem ipsum quia dolor sit amet, consectetur,
                     adipisci velit, sed quia non numquam eius modi tempora
                     incidunt ut labore et dolore magnam aliquam quaerat
                     voluptatem.
                  </Typography>
               </Box>

               <Box>
                  <Typography className="instruction">
                     Click and drag text to highlight the answer to the question
                     below
                  </Typography>

                  <Typography className="question">
                     What did residents think could happen with the new bridge?
                  </Typography>

                  <textarea
                     name="text"
                     value={answerValue}
                     placeholder="Highlight text in the passage to set an answer"
                     className={`input ${
                        answerValue.length > 0 ? 'active-input' : ''
                     }`}
                  />
               </Box>
            </Box>

            <Button className="button" disabled={!answerValue}>
               NEXT
            </Button>
         </StyledContainer>
      </TestContainer>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',

   '& > .content-box': {
      display: 'flex',
      width: '67rem',

      '& >  div > .instruction': {
         width: '24.375rem',
         marginTop: '1.8rem',
         fontSize: '22px',
         padding: '0 0 1rem 2rem',
      },

      '& > div > .question': {
         padding: '0 0 1rem 2rem',
         width: '23.5rem',
      },

      '& > div > .input': {
         width: '25rem',
         padding: '0 0 1rem 2rem',

         '& > div > .MuiOutlinedInput-input': {
            backgroundColor: '#F7F7F7',
            border: '1px solid transparent',
            transition: 'border-color 0.2s ease-in-out',
            borderRadius: '8px',
         },
      },

      '& > div > .active-input': {
         '& > div > .MuiOutlinedInput-input': {
            borderColor: theme.palette.primary.main,
            borderRadius: '8px',
            backgroundColor: '#FFFCFC',
            wordWrap: 'break-word',
            whiteSpace: 'pre-wrap !important',
            height: 'auto',
            padding: '8px 12px',
            resize: 'none',
            overflow: 'hidden',
            maxWidth: '25rem',
         },
      },
   },

   '& > .button': {
      marginLeft: '47.5rem',
      marginTop: '-8.2rem',
      width: '143px',
   },

   '& > div > .correct-answer': {
      marginTop: '1.8rem',
      marginBottom: '2rem',
      border: '1px solid #D4D0D0',
      borderRadius: '8px',
      width: '31.688rem',

      '& > .title': {
         borderBottom: '1px solid #D4D0D0',
         fontWeight: 500,
         padding: '1rem',
      },

      '& > .highlight-text': {
         marginBottom: '25px',
         fontWeight: 400,
         color: '#5b5867',
         width: '30.438rem',
         padding: '1rem 2rem 2rem 1rem',

         '::selection': {
            backgroundColor: '#3A10E52E',
            opacity: '0.3',
         },
      },
   },
}))

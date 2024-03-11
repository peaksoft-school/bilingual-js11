import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const HighlightTheAnswer = () => {
   const [highlightAnswer, setHighlightAnswer] = useState('')

   const mouseUpHandler = () => {
      const selection = window.getSelection().toString().trim()

      if (selection !== '') {
         setHighlightAnswer(selection)
      }
   }

   return (
      <TestContainer>
         <StyledContainer>
            <ProgressBar duration={2} minutes={10} seconds={23} />

            <Box className="content-box">
               <Box className="correct-answer">
                  <Typography className="title">PASSAGE</Typography>

                  <Typography onMouseUp={mouseUpHandler} className="passage">
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

                  <Input
                     readOnly
                     value={highlightAnswer}
                     multiline
                     placeholder="Highlight text in the passage to set an answer"
                     className={`input ${
                        highlightAnswer.length > 0 ? 'highlighted-input' : ''
                     }`}
                  />

                  <Button className="button" disabled={!highlightAnswer}>
                     NEXT
                  </Button>
               </Box>
            </Box>
         </StyledContainer>
      </TestContainer>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',

   '& > div > .correct-answer': {
      marginTop: '1.8rem',
      border: '1px solid #D4D0D0',
      borderRadius: '8px',
      width: '31.688rem',

      '& > .title': {
         borderBottom: '1px solid #D4D0D0',
         fontWeight: 500,
         padding: '1rem',
      },

      '& > .passage': {
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

   '& > .content-box': {
      display: 'flex',
      width: '67rem',
      padding: '1rem',

      '& > div > .button': {
         marginTop: '1rem',
         width: '143px',
         marginLeft: '16.1rem',
      },

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
         '.MuiOutlinedInput-root': {
            width: '23rem',
            margin: '0 0 1rem 2rem',
            fontFamily: 'Poppins',
            fontSize: '14px',
            height: '2.875rem',
            backgroundColor: '#F7F7F7',
            borderRadius: '8px',
            outline: 'none',

            '&:focus': {
               outline: 'none',
            },
         },
      },

      '& > div > .highlighted-input': {
         height: 'auto',

         '.MuiOutlinedInput-root': {
            borderRadius: '8px',
            backgroundColor: '#FFFCFC',
            padding: '0.8rem',
            height: 'auto',
         },

         '& > div > .MuiOutlinedInput-notchedOutline': {
            borderColor: `${theme.palette.primary.main} !important`,
         },
      },
   },
}))

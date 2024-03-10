import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Button from '../../../components/UI/buttons/Button'

const HighlightTheAnswer = () => {
   const [highlightAnswer, setHighlightAnswer] = useState('')

   const mouseUpHandler = () =>
      setHighlightAnswer(window.getSelection().toString())

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

                  <textarea
                     name="text"
                     defaultValue={highlightAnswer}
                     placeholder="Highlight text in the passage to set an answer"
                     className={`textarea ${
                        highlightAnswer.length > 0 ? 'highlighted-textarea' : ''
                     }`}
                  />
               </Box>
            </Box>

            <Button className="button" disabled={!highlightAnswer}>
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

      '& > div > .textarea': {
         width: '23rem',
         margin: '0 0 1rem 2rem',
         resize: 'none',
         fontFamily: 'Poppins',
         padding: '0.8rem 1rem',
         height: '2.875rem',
         border: '1px solid #D4D0D0',
         backgroundColor: '#F7F7F7',
         transition: 'border-color 0.2s ease-in-out',
         borderRadius: '8px',

         '&:focus': {
            outline: 'none',
         },
      },

      '& > div > .highlighted-textarea': {
         borderColor: theme.palette.primary.main,
         borderRadius: '8px',
         backgroundColor: '#FFFCFC',
         wordWrap: 'break-word',
         padding: '0.8rem',
         height: '100%',
         maxHeight: '10rem',
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
}))

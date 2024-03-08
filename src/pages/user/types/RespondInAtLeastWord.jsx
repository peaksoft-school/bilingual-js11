import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Button from '../../../components/UI/buttons/Button'

import {
   ScrollBottomArrowIcon,
   ScrollTopArrowIcon,
} from '../../../assets/icons'

const RespondInAtLeastWord = () => {
   const [text, setText] = useState('')

   const changeTextHandler = (e) => setText(e.target.value)

   const countWords = (text) => {
      const wordsArray = text.split(' ').filter((word) => word !== '')

      return wordsArray.length
   }

   const wordsCount = countWords(text)

   const isDisabled = wordsCount < 20

   return (
      <TestContainer>
         <StyledContainer>
            <ProgressBar duration={2} minutes={10} seconds={15} />

            <Typography className="title">
               Respond to the question in at least 50 words
            </Typography>

            <Box className="content-box">
               <Typography className="question">
                  “Describe a time you were surprised. what happened?”
               </Typography>

               <Box>
                  <textarea
                     name="text"
                     value={text}
                     onChange={changeTextHandler}
                     placeholder="Your response"
                     className="text-area"
                  />
                  <Typography
                     className={`${
                        wordsCount >= 20 ? 'highlight-word' : 'word-length'
                     }`}
                  >
                     Word: {wordsCount}
                  </Typography>
               </Box>
            </Box>

            <Box className="line" />

            <Button disabled={isDisabled} className="button">
               NEXT
            </Button>
         </StyledContainer>
      </TestContainer>
   )
}

export default RespondInAtLeastWord

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',

   '& > .title': {
      fontFamily: 'Poppins',
      fontWeight: 300,
      fontSize: '28px',
      textAlign: 'center',
      marginTop: '2rem',
      marginBottom: '2.5rem',
   },

   '& > .button': {
      marginLeft: '47.5rem',
      width: '143px',
   },

   '& > .content-box': {
      display: 'flex',
      justifyContent: 'space-between',

      '& > .question': {
         width: '20.563rem',
         fontSize: '18px',
      },

      '& > div > .highlight-word': {
         color: theme.palette.primary.main,
      },

      '& > div > .word-length': {
         color: '#AFAFAF',
      },

      '& > div > .text-area': {
         display: 'flex',
         width: '23.875rem',
         marginRight: '1.5rem',
         overflowY: 'auto',
         height: '11.438rem',
         fontFamily: 'Poppins',
         fontWeight: 300,
         fontSize: '1rem',
         padding: '1rem',
         resize: 'none',
         borderRadius: '8px',
         border: '1.53px solid #D4D0D0',
         outline: 'none',
         caretColor: theme.palette.primary.main,

         '::placeholder': {
            color: '#AFAFAF',
            fontSize: '16px',
            fontFamily: 'Arial',
            paddingTop: '0.299rem',
         },

         ' &::-webkit-scrollbar': {
            backgroundColor: '#F0F0F0',
            borderRadius: '0 6px 6px 0',
            width: '8px',
         },

         '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#C4C4C4',
            borderRadius: '5px',
            cursor: 'pointer',
         },

         '&::-webkit-scrollbar-button': {
            display: 'block',
            height: '10px',
         },

         '&::-webkit-scrollbar-button:start:decrement': {
            background: `url(${ScrollTopArrowIcon}) no-repeat`,
            backgroundPosition: 'center 3px',
            cursor: 'pointer',
         },

         '&::-webkit-scrollbar-button:end:increment': {
            background: `url(${ScrollBottomArrowIcon}) no-repeat`,
            transform: 'rotate(180deg)',
            backgroundPosition: 'center -1px',
            cursor: 'pointer',
         },
      },
   },

   '& > .line': {
      marginTop: '4rem',
      marginBottom: '2rem',
      borderBottom: '1.53px solid #D4D0D0',
   },
}))

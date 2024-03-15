import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Button from '../../UI/buttons/Button'

import {
   ScrollBottomArrowIcon,
   ScrollTopArrowIcon,
} from '../../../assets/icons'

const RespondInAtLeastWord = ({ questions }) => {
   const [text, setText] = useState('')

   const changeTextHandler = (e) => setText(e.target.value)

   const countWords = (text) => {
      const wordsArray = text.split(' ').filter((word) => word !== '')

      return wordsArray.length
   }

   const wordsCount = countWords(text)

   const isDisabled = wordsCount < 50

   return (
      <StyledContainer>
         <Typography className="title">
            Respond to the question in at least 50 words
         </Typography>

         <Box className="content-box">
            <Typography className="question">{questions.statement}</Typography>

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
                     wordsCount >= 50 ? 'highlight-word' : 'word-length'
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
         width: '23.875rem',
         height: '11.438rem',
         fontFamily: 'Poppins',
         fontWeight: 300,
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

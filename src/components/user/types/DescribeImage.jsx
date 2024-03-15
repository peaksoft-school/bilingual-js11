import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Button from '../../UI/buttons/Button'

const DescribeImage = ({ questions }) => {
   const [correctAnswer, setCorrectAnswer] = useState()

   const changeCorrectAnswerHandler = (e) => setCorrectAnswer(e.target.value)

   return (
      <StyledContainer>
         <Box className="content-box">
            <Typography className="title">
               Write one or more sentences that describe the image
            </Typography>

            <Box className="image-box">
               <img src={questions.fileUrl} alt="img" className="image" />

               <textarea
                  className="textarea"
                  placeholder="Your response"
                  value={correctAnswer}
                  onChange={changeCorrectAnswerHandler}
               />
            </Box>
         </Box>

         <Box className="button-box">
            <Button className="button" disabled={!correctAnswer}>
               NEXT
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default DescribeImage

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',

   '& > .content-box': {
      width: '78.72%',
      height: 'auto',
      boxSizing: 'border-box',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& > .title': {
         textAlign: 'center',
         width: '100%',
         fontSize: '28px',
         marginTop: '2rem',
      },

      '& > div > .textarea': {
         height: '11.438rem',
         width: '23.875rem',
         resize: 'none',
         borderRadius: '8px',
         borderColor: '#D4D0D0',
         padding: '1rem 1rem 0 1rem',
         fontFamily: 'Poppins',
         caretColor: theme.palette.primary.main,

         '::placeholder': {
            color: '#AFAFAF',
            fontSize: '16px',
            fontFamily: 'Arial',
            paddingTop: '0.299rem',
         },
      },

      '& > .image-box': {
         width: '37.125rem',
         display: 'flex',
         gap: '5.05%',
         marginTop: '50px',

         '& > .image': {
            width: '11.375rem',
            backgroundPosition: 'center',
            borderRadius: '2px',
         },
      },
   },

   '& > .button-box': {
      borderTop: '1.53px solid #D4D0D0',
      marginTop: '3rem',

      '& > .button': {
         marginLeft: '84%',
         marginTop: '1.8rem',
         width: '143px',
      },
   },
}))

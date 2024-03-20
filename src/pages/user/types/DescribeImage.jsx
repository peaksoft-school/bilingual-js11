import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import ProgressBar from '../../../components/UI/ProgressBar'
import Button from '../../../components/UI/buttons/Button'

const DescribeImage = () => {
   const [correctAnswer, setCorrectAnswer] = useState('')

   const changeCorrectAnswerHandler = (e) => setCorrectAnswer(e.target.value)

   return (
      <TestContainer>
         <StyledContainer>
            <ProgressBar duration={2} minutes={23} seconds={11} />

            <Box className="content-box">
               <Typography className="title">
                  Write one or more sentences that describe the image
               </Typography>

               <Box className="image-box">
                  <img
                     src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
                     alt="img"
                     className="image"
                  />

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
      </TestContainer>
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

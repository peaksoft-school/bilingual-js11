import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, TextField, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'

const HighlightTheAnswer = () => {
   const [answerValue, setAnswerValue] = useState('')

   const formik = useFormik({
      initialValues: {
         question: '',
         text: '',
      },
   })

   return (
      <StyledContainer onSubmit={formik.handleSubmit}>
         <Typography className="title">Questions to the Passage</Typography>

         <Input
            fullWidth
            name="question"
            value={formik.values.question}
            onChange={formik.handleChange}
         />

         <Box className="passage">
            <Typography className="title">Passage</Typography>

            <TextField
               multiline
               name="text"
               value={formik.values.text}
               onChange={formik.handleChange}
               fullWidth
            />
         </Box>

         <Box className="correct-answer">
            <Typography className="title">Highlight correct answer:</Typography>

            <Typography
               className="highlight-text"
               onMouseUp={() =>
                  setAnswerValue(window.getSelection().toString())
               }
            >
               {formik.values.text}
            </Typography>
         </Box>
      </StyledContainer>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   '& .title': {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#4C4859',
      fontFamily: 'Poppins',
      marginBottom: '8px',
   },

   '& > .passage': {
      marginTop: '1.6rem',

      '& .MuiOutlinedInput-root': {
         borderRadius: '8px',
         fontWeight: 400,
         color: '#5b5867',

         '&.Mui-focused fieldset': {
            border: `1.53px solid ${theme.palette.primary.main}`,
         },

         '&:hover fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
         },
      },
   },

   '& > .correct-answer': {
      marginTop: '1.8rem',
      marginBottom: '2rem',

      '& .highlight-text': {
         marginBottom: '25px',
         fontWeight: 400,
         color: '#5b5867',

         '::selection': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
         },
      },
   },
}))

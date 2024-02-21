import { useState } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/buttons/Button'
import { axiosInstance } from '../../../configs/axiosInstance'

const HighlightTheAnswer = () => {
   const [answerValue, setAnswerValue] = useState('')
   const { testId } = useParams()

   const formik = useFormik({
      initialValues: {
         question: '',
         text: '',
      },
   })

   const handleSave = async () => {
      try {
         const formData = new FormData()
         formData.append('correctAnswer', answerValue)

         await axiosInstance.post(`/api/question?tesId=${testId}`, formData)
      } catch (error) {
         console.error(error)
      }
   }

   return (
      <StyledContainer>
         <Box onSubmit={formik.handleSubmit}>
            <Typography>Questions to the Passage</Typography>

            <Input
               className="input"
               fullWidth
               name="question"
               value={formik.values.question}
               onChange={formik.handleChange}
            />

            <Box>
               <Typography>Passage</Typography>

               <Input
                  multiline
                  name="text"
                  value={formik.values.text}
                  onChange={formik.handleChange}
                  fullWidth
                  className="textarea"
               />
            </Box>

            <Box>
               <Typography>Highlight correct answer:</Typography>

               <Typography
                  className="highlight-text"
                  onMouseUp={() =>
                     setAnswerValue(window.getSelection().toString())
                  }
               >
                  {formik.values.text}
               </Typography>
            </Box>

            <Button className="save-button" onClick={handleSave}>
               save
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   color: '#4C4859',
   fontFamily: 'Poppins',

   '& .highlight-text': {
      marginBottom: '25px',

      '::selection': {
         color: theme.palette.primary.main,
         textDecoration: 'underline',
      },
   },
}))

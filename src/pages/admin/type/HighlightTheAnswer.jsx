import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, InputLabel, TextField, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLE } from '../../../utils/constants'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/buttons/Button'

const HighlightTheAnswer = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const [answerValue, setAnswerValue] = useState('')

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const [text, setText] = useState('')
   const [question, setQuestion] = useState('')

   const handleQuestionChange = (e) => setQuestion(e.target.value)

   const handleTextChange = (e) => setText(e.target.value)

   const handleMouseUp = () => setAnswerValue(window.getSelection().toString())

   const handleGoBack = () => navigate(-1)

   const isDisabled =
      !selectType ||
      !duration ||
      !title.trim() ||
      !answerValue ||
      question.trim() === ''

   const saveTestQuestion = () => {
      if (
         selectType !== '' &&
         +duration !== 0 &&
         title !== '' &&
         text !== '' &&
         question !== ''
      ) {
         const requestData = {
            title: title.trim(),
            duration: +duration * 60,
            statement: question.trim(),
            passage: text.trim(),
            correctAnswer: answerValue.trim(),
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLE.HIGHLIGHT_THE_ANSWER
                  ),
                  navigate,
               },

               setState: {
                  selectType: setSelectType(selectType),
                  title: setTitle(title),
                  duration: setDuration(duration),
               },
            })
         )
      }
   }

   return (
      <StyledContainer>
         <Typography className="title">Questions to the Passage</Typography>

         <Input
            fullWidth
            name="question"
            value={question}
            onChange={handleQuestionChange}
         />

         <Box className="passage">
            <InputLabel className="title">Passage</InputLabel>

            <TextField
               multiline
               name="text"
               value={text}
               onChange={handleTextChange}
               fullWidth
            />
         </Box>

         <Box className="correct-answer">
            <Typography className="title">Highlight correct answer:</Typography>

            <Typography className="highlight-text" onMouseUp={handleMouseUp}>
               {text}
            </Typography>
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={handleGoBack}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={isDisabled}
               onClick={saveTestQuestion}
            >
               SAVE
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   width: '820px',

   '& .title': {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#4C4859',
      fontFamily: 'Poppins',
      marginBottom: '8px',
      marginTop: '1.4rem',
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

   '& .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.4rem',
   },
}))
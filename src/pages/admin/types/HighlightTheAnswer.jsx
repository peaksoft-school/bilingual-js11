import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Box, InputLabel, TextField, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const HighlightTheAnswer = ({
   title,
   setTitle,
   duration,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { question: updateQuestion } = useSelector((state) => state.question)

   const { state } = useLocation()

   const [text, setText] = useState('')
   const [question, setQuestion] = useState('')
   const [answerValue, setAnswerValue] = useState('')

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const mouseUpHandler = () => setAnswerValue(window.getSelection().toString())

   const changeTextHandler = (e) => {
      const { value } = e.target

      setText(value || '')
   }

   const changeQuestionHandler = (e) => {
      const { value } = e.target

      setQuestion(value || '')
   }

   const navigateGoBackHandler = () => navigate(-1)

   useEffect(() => {
      if (state !== null) {
         dispatch(QUESTION_THUNKS.getQuestion({ id: state?.id }))
      }
   }, [dispatch, state])

   useEffect(() => {
      if (state !== null && updateQuestion) {
         setAnswerValue(updateQuestion?.correctAnswer)
         setText(updateQuestion?.passage)
         setQuestion(updateQuestion?.statement)
      }
   }, [state, updateQuestion])

   const isDisabled =
      !selectType ||
      !duration ||
      !title ||
      !answerValue ||
      !question ||
      (state === null &&
         (!title.trim() || !answerValue.trim() || !question.trim()))

   const onSubmit = () => {
      if (
         selectType !== '' &&
         +duration !== 0 &&
         title !== '' &&
         text !== '' &&
         question !== ''
      ) {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            statement: question.trim(),
            passage: text.trim(),
            correctAnswer: answerValue.trim(),
         }

         if (state === null) {
            dispatch(
               QUESTION_THUNKS.addTest({
                  requestData,

                  data: {
                     testId,
                     questionType: QUESTION_TITLES.HIGHLIGHTS_THE_ANSWER,
                     navigate,
                  },

                  setStates: {
                     setSelectType: setSelectType(selectType),
                     setTitle: setTitle(title),
                     setDuration: setDuration(duration),
                  },
               })
            )
         } else {
            dispatch(
               QUESTION_THUNKS.updateQuestion({
                  id: state.id,
                  requestData,
                  navigate,

                  setStates: {
                     setSelectType: setSelectType(selectType),
                     setTitle: setTitle(title),
                     setDuration: setDuration(duration),
                  },
               })
            )
         }
      }
   }

   return (
      <StyledContainer>
         <Box>
            <Typography className="title">Questions to the Passage</Typography>

            <Input
               fullWidth
               name="question"
               value={question || ''}
               onChange={changeQuestionHandler}
            />
         </Box>

         <Box className="passage">
            <InputLabel className="title">Passage</InputLabel>

            <TextField
               multiline
               name="text"
               value={text || ''}
               onChange={changeTextHandler}
               fullWidth
            />
         </Box>

         <Box className="correct-answer">
            <Typography className="title">Highlight correct answer:</Typography>

            <Typography className="highlight-text" onMouseUp={mouseUpHandler}>
               {text || ''}
            </Typography>
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={navigateGoBackHandler}>
               GO BACK
            </Button>

            <Button variant="primary" disabled={isDisabled} onClick={onSubmit}>
               {state !== null ? 'UPDATE' : 'SAVE'}
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default HighlightTheAnswer

const StyledContainer = styled(Box)(({ theme }) => ({
   width: '820px',

   '& > div > .title': {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#4C4859',
      fontFamily: 'Poppins',
      marginBottom: '8px',
      marginTop: '1.4rem',
   },

   '& > .passage': {
      marginTop: '1.6rem',

      '& > div > .MuiOutlinedInput-root': {
         borderRadius: '8px',
         fontWeight: 400,
         color: '#5b5867',

         '& > .Mui-focused fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
         },

         '&:hover fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
         },
      },
   },

   '& > .correct-answer': {
      marginTop: '1.8rem',
      marginBottom: '2rem',

      '& > .highlight-text': {
         marginBottom: '25px',
         fontWeight: 400,
         color: '#5b5867',

         '::selection': {
            color: theme.palette.primary.main,
            textDecoration: 'underline',
         },
      },
   },

   '& > .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '36.53rem',
   },
}))

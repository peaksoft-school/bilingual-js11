import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import Loading from '../../Loading'
import Button from '../../UI/buttons/Button'
import Input from '../../UI/Input'

const RecordSayingStatement = ({
   title,
   duration,
   setTitle,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { question, isLoading } = useSelector((state) => state.question)

   const { state } = useLocation()

   const [statement, setStatement] = useState('')

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const navigateGoBackHandler = () => navigate(-1)

   const statementChangeHandler = (e) => {
      const { value } = e.target

      setStatement(value || '')
   }

   useEffect(() => {
      if (state !== null) {
         dispatch(QUESTION_THUNKS.getQuestion({ id: state?.id }))
      }
   }, [dispatch, state])

   useEffect(() => {
      if (state !== null && question) {
         setStatement(question?.correctAnswer)
      }
   }, [state, question])

   const isDisabled =
      !selectType ||
      !duration ||
      !title.trim() ||
      !statement ||
      (state === null && !statement.trim())

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            correctAnswer: statement.trim(),
         }

         if (state === null) {
            dispatch(
               QUESTION_THUNKS.addTest({
                  requestData,

                  data: {
                     testId,
                     questionType: QUESTION_TITLES.RECORD_SAYING,
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
         {state !== null ? isLoading && <Loading /> : null}

         <Box className="statement">
            <Typography className="text">Statement</Typography>

            <Input
               type="text"
               value={statement || ''}
               onChange={statementChangeHandler}
               autoComplete="off"
            />
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

export default RecordSayingStatement

const StyledContainer = styled(Box)(() => ({
   width: '820px',

   '& > .statement': {
      marginTop: '1.4rem',
      marginBottom: '2rem',

      '& > .text': {
         fontFamily: 'Poppins',
         fontWeight: '500',
      },
   },

   '& > .buttons': {
      display: 'flex',
      gap: '1.1rem',
      position: 'relative',
      right: '-35.5rem',

      '& > .MuiButton-root ': {
         width: '118px',
      },
   },
}))

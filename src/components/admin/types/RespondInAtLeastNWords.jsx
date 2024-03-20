import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import { InputLabel, styled, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import Button from '../../UI/buttons/Button'
import Input from '../../UI/Input'

const RespondInAtLeastNWords = ({
   title,
   duration,
   setTitle,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { isLoading, question } = useSelector((state) => state.question)

   const { state } = useLocation()

   const [attempts, setAttempts] = useState(1)
   const [statement, setStatement] = useState('')

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const statementChangeHandler = (e) => {
      const { value } = e.target

      setStatement(value || '')
   }

   const attemptsChangeHandler = (e) => {
      const { value } = e.target

      setAttempts(value || '')
   }

   const navigateGoBackHandler = () => navigate(-1)

   useEffect(() => {
      if (state !== null) {
         dispatch(QUESTION_THUNKS.getQuestion({ id: state?.id }))
      }
   }, [dispatch, state])

   useEffect(() => {
      if (state !== null && question) {
         setAttempts(question?.attempts)
         setStatement(question?.statement)
      }
   }, [state, question])

   const isDisabled =
      !selectType ||
      !duration ||
      !title ||
      !statement ||
      !attempts ||
      (state === null &&
         (!title.trim() || !attempts.trim() || !statement.trim()))

   const onSubmit = () => {
      if (
         selectType !== '' &&
         +duration !== 0 &&
         title !== '' &&
         statement !== '' &&
         +attempts !== 0
      ) {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            statement: statement.trim(),
            attempts: attempts.trim(),
         }

         if (state === null) {
            dispatch(
               QUESTION_THUNKS.addTest({
                  requestData,

                  data: {
                     testId,
                     questionType: QUESTION_TITLES.RESPOND_IN_AT_LEAST_N_WORDS,
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
            <InputLabel>Question statement</InputLabel>

            <Input value={statement || ''} onChange={statementChangeHandler} />
         </Box>

         <Box>
            <InputLabel>
               Number off <br />
               Words
            </InputLabel>

            <Input
               className="input-number"
               type="number"
               value={attempts || ''}
               onChange={attemptsChangeHandler}
               inputProps={{ min: 0, max: 15 }}
               autoComplete="off"
            />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={navigateGoBackHandler}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               onClick={onSubmit}
               isLoading={isLoading}
               disabled={isDisabled}
               loadingColor="secondary"
            >
               {state !== null ? 'UPDATE' : 'SAVE'}
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default RespondInAtLeastNWords

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
   marginTop: '2rem',
   width: '822px',

   '& > .MuiInputLabel-root': {
      fontFamily: 'Poppins',
      fontWeight: 500,
      color: '#4B4759',
      marginBottom: '0.5rem',
   },

   '& > div > .input-number': {
      '& > .MuiOutlinedInput-root': {
         padding: '.75rem  0.1rem .75rem 0.1rem ',
         width: '3.5rem',
         height: '3.5rem',
         textAlign: 'center',
         fontSize: '1.2rem',
      },
   },

   '& div > .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button':
      {
         display: 'none',
      },

   '& > .buttons': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1rem',
   },
}))

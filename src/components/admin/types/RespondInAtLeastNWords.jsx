import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { InputLabel, styled, Box } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import { ROUTES } from '../../../routes/routes'
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
   const { isLoading } = useSelector((state) => state.question)

   const [attempts, setAttempts] = useState(1)
   const [statement, setStatement] = useState('')

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const statementChangeHandler = (e) => setStatement(e.target.value)

   const attemptsChangeHandler = (e) => {
      const newValue = e.target.value.replace(/\D/g, '')

      const limitedValue = newValue.slice(0, 2)

      setAttempts(limitedValue)
   }

   const navigateGoBackHandler = () =>
      navigate(
         `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.QUESTIONS}/${testId}`
      )

   const isDisabled =
      !selectType ||
      !duration ||
      !title.trim() ||
      !statement.trim() ||
      !attempts

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
      }
   }

   return (
      <StyledContainer>
         <Box>
            <InputLabel>Question statement</InputLabel>

            <Input
               value={statement}
               onChange={statementChangeHandler}
               autoComplete="off"
            />
         </Box>

         <Box>
            <InputLabel>
               Number off <br />
               Words
            </InputLabel>

            <Input
               className="input-number"
               type="number"
               value={attempts}
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
               SAVE
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

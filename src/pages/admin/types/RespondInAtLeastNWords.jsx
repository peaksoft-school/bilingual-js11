import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { InputLabel, styled, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const RespondInAtLeastNWords = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const { isLoading } = useSelector((state) => state.question)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [attempts, setAttempts] = useState(0)
   const [statement, setStatement] = useState('')

   const handleStatementChange = (e) => setStatement(e.target.value)

   const handleAttemptsChange = (e) => setAttempts(e.target.value)

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
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLES.RESPOND_IN_AT_LEAST_N_WORDS
                  ),
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

            <Input value={statement} onChange={handleStatementChange} />
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
               onChange={handleAttemptsChange}
               inputProps={{ min: 0, max: 15 }}
            />
         </Box>

         <Box className="buttons">
            <Button variant="secondary">GO BACK</Button>

            <Button
               variant="primary"
               onClick={onSubmit}
               isLoading={isLoading}
               disabled={isDisabled}
               colorLoading="secondary"
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
   width: '90%',

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

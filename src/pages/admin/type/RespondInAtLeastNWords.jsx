import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { InputLabel, styled, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/buttons/Button'

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

   const [statement, setStatement] = useState('')
   const [attempts, setAttempts] = useState(0)

   const handleStatementChange = (event) => setStatement(event.target.value)

   const handleAttempsChange = (event) => setAttempts(event.target.value)

   const handleSubmit = () => {
      if (selectType !== '' && +duration !== +'' && title !== '') {
         dispatch(QUESTION_ACTIONS.clearOptions())

         setSelectType('')

         setTitle('')

         setDuration('')

         const requestData = {
            title,
            duration: +duration * 60,
            statement,
            attempts,
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle('RESPOND_IN_AT_LEAST_N_WORDS'),
                  navigate,
               },
            })
         )
      }
   }

   const isValid = !selectType || !duration || !title || !statement || !attempts

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
               onChange={handleAttempsChange}
               inputProps={{ min: 0, max: 5 }}
            />
         </Box>

         <Box className="buttons">
            <Button variant="secondary">GO BACK</Button>

            <Button
               variant="primary"
               onClick={handleSubmit}
               isLoading={isLoading}
               disabled={isValid}
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

   '& .input-number': {
      '& > .MuiOutlinedInput-root': {
         padding: '.75rem  0.1rem .75rem 0.1rem ',
         width: '3.5rem',
         height: '3.5rem',
         textAlign: 'center',
         fontSize: '1.2rem',
      },
   },

   '& > .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button': {
      display: 'none',
   },

   '& > .buttons': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1rem',
   },
}))

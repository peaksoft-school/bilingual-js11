import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import { QUESTION_THUNK } from '../../../store/slice/admin/questionThunk'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/questionSlice'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/buttons/Button'

const RecordSayingStatement = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const [statement, setStatement] = useState('')

   const saveTestQuestion = () => {
      if (selectType !== '' && +duration !== +'' && title !== '') {
         dispatch(QUESTION_ACTIONS.clearOptions())

         setSelectType('')
         setTitle('')
         setDuration('')
         setStatement('')

         const requestData = {
            title: title.trim(),
            duration: +duration * 60,
            correctAnswer: statement.trim(),
         }

         dispatch(
            QUESTION_THUNK.saveTest({
               requestData,
               data: {
                  testId,
                  questionType: questionTitle('RECORD_SAYING'),
                  navigate,
               },
            })
         )
      }
   }

   const handleChange = (event) => {
      setStatement(event.target.value)
   }

   return (
      <StyledContainer>
         <Box className="statement">
            <Typography className="text">Statement</Typography>

            <Input type="text" value={statement} onChange={handleChange} />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={() => navigate(-1)}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={
                  !selectType || !duration || !title.trim() || !statement.trim()
               }
               onClick={saveTestQuestion}
            >
               SAVE
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default RecordSayingStatement

const StyledContainer = styled(Box)(() => ({
   '& .statement': {
      marginTop: '1.4rem',
      marginBottom: '2rem',

      '& .text': {
         fontFamily: 'Poppins',
         fontWeight: '500',
      },
   },

   '& .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
   },
}))

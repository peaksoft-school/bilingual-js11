import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLE } from '../../../utils/constants'
import { questionTitle } from '../../../utils/helpers/questionTitle'
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
   const [statement, setStatement] = useState('')

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const handleChange = (e) => setStatement(e.target.value)

   const handleGoBack = () => navigate(-1)

   const isDisabled =
      !selectType || !duration || !title.trim() || !statement.trim()

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration * 60,
            correctAnswer: statement.trim(),
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLE.RECORD_SAYING_STATEMENT
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
         <Box className="statement">
            <Typography className="text">Statement</Typography>

            <Input type="text" value={statement} onChange={handleChange} />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={handleGoBack}>
               GO BACK
            </Button>

            <Button variant="primary" disabled={isDisabled} onClick={onSubmit}>
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

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import { ROUTES } from '../../../routes/routes'
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
   const [statement, setStatement] = useState('')

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const navigateGoBackHandler = () =>
      navigate(
         `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.QUESTIONS}/${testId}`
      )

   const statementChangeHandler = (e) => setStatement(e.target.value)

   const isDisabled =
      !selectType || !duration || !title.trim() || !statement.trim()

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            correctAnswer: statement.trim(),
         }

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
      }
   }

   return (
      <StyledContainer>
         <Box className="statement">
            <Typography className="text">Statement</Typography>

            <Input
               type="text"
               value={statement}
               onChange={statementChangeHandler}
               autoComplete="off"
            />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={navigateGoBackHandler}>
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
   width: '825px',

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
      marginLeft: '37.5rem',
   },
}))

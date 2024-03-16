import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { PRACTICE_TEST_ACTIONS } from '../../../store/slices/user/practiceTestSlice'
import Button from '../../UI/buttons/Button'
import DragAndDrop from '../../DragAndDrop'

const SelectRealEnglishWords = ({ questions, nextHandler }) => {
   const options = questions?.optionResponses

   const { correctOptions } = useSelector((state) => state.practiceTest)

   const dispatch = useDispatch()

   const onSubmit = () => {
      const optionId = correctOptions.map((item) => item.id)

      const answerData = {
         attempts: 0,
         input: '',
         audioFile: '',
         optionId,
         questionID: questions.questionId,
      }

      dispatch(PRACTICE_TEST_ACTIONS.addCorrectAnswer(answerData))

      nextHandler()

      dispatch(PRACTICE_TEST_ACTIONS.clearCorrectOption())
   }

   return (
      <StyledContainer>
         <Typography variant="h5" className="title">
            Select the real English words in this list
         </Typography>

         <Box className="content">
            <DragAndDrop options={options} />
         </Box>

         <Box className="button">
            <Button onClick={onSubmit}>NEXT</Button>
         </Box>
      </StyledContainer>
   )
}

export default SelectRealEnglishWords

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',

   '& .title': {
      padding: '-1rem 0 2rem 0 ',
      fontFamily: 'Poppins',
      color: '#4c4859',
   },

   '& .content': {
      maxWidth: '66.25rem',
      width: '100%',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
   },

   '& .button': {
      display: 'flex',
      justifyContent: 'flex-end',
      maxwidth: '10rem',
      width: '100%',
      borderTop: '2px solid #959597',
      borderRadius: '0.1rem',
      padding: '3rem 0 0 0 ',
   },
}))

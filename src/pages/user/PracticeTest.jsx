import { Box, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { PRACTICE_TEST_ACTIONS } from '../../store/slices/user/practiceTestSlice'
import { PRACTICE_TEST_THUNKS } from '../../store/slices/user/practiceTestThunk'
import { QUESTION_COMPONENTS } from '../../utils/constants/questionComponents'
import { ROUTES } from '../../routes/routes'
import TestContainer from '../../components/UI/TestContainer'
import ProgressBar from '../../components/UI/ProgressBar'
import Button from '../../components/UI/buttons/Button'
import Modal from '../../components/UI/modals/Modal'

const PracticeTest = () => {
   const { questions } = useSelector((state) => state.practiceTest)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [count, setCount] = useState(0)
   const [isVisible, setIsVisible] = useState(false)

   const handleIsVisible = () => setIsVisible((prev) => !prev)

   const quitHandler = () => navigate(-1)

   useEffect(() => {
      dispatch(PRACTICE_TEST_THUNKS.getAllQuestions({ testId }))
   }, [dispatch, testId])

   const QuestionComponent = QUESTION_COMPONENTS[questions[count]?.questionType]

   const nextHandler = () => setCount((prevCount) => prevCount + 1)

   const lastQuestion = count === questions.length - 1

   const timeIsUpHandler = () => {
      const answerDate = {
         attempts: 0,
         input: '',
         audioFile: '',
         optionId: [],
         questionID: questions[count]?.questionId,
      }

      dispatch(PRACTICE_TEST_ACTIONS.addCorrectAnswer(answerDate))

      setCount((prevCount) => prevCount + 1)

      if (lastQuestion) {
         navigate(
            `${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}/:${ROUTES.USER.TEST_ID}/${ROUTES.USER.PRACTICE_TEST}/${ROUTES.USER.COMPLETE}`
         )
      }
   }

   const lastQuestionHandler = () => {
      if (lastQuestion) {
         navigate(
            `${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}/:${ROUTES.USER.TEST_ID}/${ROUTES.USER.PRACTICE_TEST}/${ROUTES.USER.COMPLETE}`
         )
      }
   }

   return (
      <>
         <StyledContainer>
            <Button
               variant="secondary"
               className="quit"
               onClick={handleIsVisible}
            >
               QUIT TEST
            </Button>
         </StyledContainer>

         <TestContainer>
            <ProgressBar
               duration={questions[count]?.duration}
               timeIsUp={timeIsUpHandler}
               count={count}
            />

            {QuestionComponent && (
               <QuestionComponent
                  questions={questions[count]}
                  nextHandler={lastQuestion ? lastQuestionHandler : nextHandler}
               />
            )}
         </TestContainer>

         <Modal isVisible={isVisible} handleIsVisible={handleIsVisible}>
            <Box className="quit-content">
               <Typography className="text">
                  Are you sure you want to leave your practice test?
               </Typography>

               <Box className="buttons">
                  <Button
                     variant="secondary"
                     onClick={quitHandler}
                     className="button"
                  >
                     QUIT TEST
                  </Button>

                  <Button onClick={handleIsVisible}>CONTINUE TEST</Button>
               </Box>
            </Box>
         </Modal>
      </>
   )
}

export default PracticeTest

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   margin: '2rem 2rem -3rem 0',

   '& > .quit': {
      color: '#4C4C4C',
      fontWeight: '700',
      border: '0.125rem solid #4C4859',
   },
}))

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { PRACTICE_TEST_THUNKS } from '../../store/slices/user/practiceTestThunk'
import { QUESTION_COMPONENTS } from '../../utils/constants/questionComponents'
import ProgressBar from '../../components/UI/ProgressBar'
import TestContainer from '../../components/UI/TestContainer'

const PracticeTest = () => {
   const { questions } = useSelector((state) => state.practiceTest)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const [count, setCount] = useState(0)

   useEffect(() => {
      dispatch(PRACTICE_TEST_THUNKS.getAllQuestions({ testId }))
   }, [dispatch, testId])

   const QuestionComponent = QUESTION_COMPONENTS[questions[count]?.questionType]

   const nextHandler = () => setCount((prevCount) => prevCount + 1)

   const handleNextQuestion = () => {
      if (count < questions.length - 1) {
         // setCount((prevCount) => prevCount + 1)
      }
   }

   return (
      <TestContainer>
         <ProgressBar
            duration={questions[count]?.duration}
            onNextQuestion={handleNextQuestion}
            count={count}
         />

         {QuestionComponent && (
            <QuestionComponent
               questions={questions[count]}
               nextHandler={nextHandler}
            />
         )}
      </TestContainer>
   )
}

export default PracticeTest

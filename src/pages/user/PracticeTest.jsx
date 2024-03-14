import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import TestContainer from '../../components/UI/TestContainer'
import ProgressBar from '../../components/UI/ProgressBar'
import { PRACTICE_TEST_THUNKS } from '../../store/slice/user/practiceTestThunk'
import { QUESTION_COMPONENT } from '../../utils/constants/questionComponents'
import Button from '../../components/UI/buttons/Button'

const PracticeTest = () => {
   const { questions } = useSelector((state) => state.practiceTest)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const [count, setCount] = useState(0)

   useEffect(() => {
      dispatch(PRACTICE_TEST_THUNKS.getAllQuestions({ testId }))
   }, [dispatch, testId])

   const QuestionComponent = QUESTION_COMPONENT[questions[count]?.questionType]

   const nextHandler = () => setCount((prevCount) => prevCount + 1)

   const handleNextQuestion = () => {
      if (count < questions.length - 1) {
         // setCount((prevCount) => prevCount + 1)
      }
   }

   // console.log(count)

   return (
      <TestContainer>
         <ProgressBar
            duration={questions[count]?.duration}
            onNextQuestion={handleNextQuestion}
         />

         {QuestionComponent && (
            <QuestionComponent questions={questions[count]} />
         )}

         <Button onClick={nextHandler}>Next Question</Button>
      </TestContainer>
   )
}

export default PracticeTest

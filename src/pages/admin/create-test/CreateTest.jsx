import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { QUESTIONS_THUNKS } from '../../../store/slice/admin/questions/questionsThunk'
import { TESTS_THUNKS } from '../../../store/slice/admin/tests/testsThunk'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const CreateTest = () => {
   const { questions } = useSelector((state) => state.questionsSlice)

   const { id } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [testData, setTestData] = useState({
      title: '',
      shortDescription: '',
   })

   const isNewTest = id === undefined || id === ''

   const isDisabled =
      testData.title.trim() !== '' && testData.shortDescription.trim() !== ''

   const formChangeHandler = (e) => {
      const { name, value } = e.target

      setTestData({
         ...testData,
         [name]: value,
      })
   }

   useEffect(() => {
      if (id) {
         dispatch(QUESTIONS_THUNKS.getTest({ testId: id }))
      }
   }, [dispatch, id])

   useEffect(() => {
      if (!isNewTest && questions) {
         setTestData({
            title: questions.title || '',
            shortDescription: questions.shortDescription || '',
         })
      }
   }, [isNewTest, questions, id])

   const saveHandler = () => {
      const testToSave = { ...testData }

      if (isNewTest) {
         dispatch(TESTS_THUNKS.postTest({ testData: testToSave, navigate }))
      } else {
         dispatch(
            TESTS_THUNKS.updateTest({ id, updatedTest: testToSave, navigate })
         )
      }
   }

   return (
      <TestContainer>
         <StyledContainer>
            <Typography className="label">Title</Typography>

            <Input
               className="input"
               name="title"
               value={testData.title}
               onChange={formChangeHandler}
            />

            <Typography className="label">Short Description</Typography>

            <Input
               className="input"
               name="shortDescription"
               value={testData.shortDescription}
               onChange={formChangeHandler}
            />

            <Box className="container-buttons">
               <Link to="/">
                  <Button variant="secondary">GO BACK</Button>
               </Link>

               <Button
                  variant="primary"
                  onClick={saveHandler}
                  disabled={!isDisabled}
               >
                  SAVE
               </Button>
            </Box>
         </StyledContainer>
      </TestContainer>
   )
}

export default CreateTest

const StyledContainer = styled(Box)(() => ({
   '& > .label': {
      paddingBottom: '10px',
      color: '#4B4759',
   },

   '& > .input': {
      marginBottom: '1.8rem',
   },

   '& > .container-buttons': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1rem',
      marginTop: '0.7rem',
   },
}))

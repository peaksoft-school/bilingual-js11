import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { TESTS_THUNKS } from '../../../store/slices/admin/tests/testsThunk'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const CreateTest = () => {
   const { test } = useSelector((state) => state.tests)

   const [testData, setTestData] = useState({
      title: '',
      shortDescription: '',
   })

   const { id } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const isNewTest = id === undefined || id === ''

   const isDisabled =
      testData.title.trim() !== '' && testData.shortDescription.trim() !== ''

   const isDisabledUpdate =
      testData.title.trim() !== '' &&
      testData.shortDescription.trim() !== '' &&
      testData.shortDescription === test.shortDescription &&
      testData.title === test.title

   const formChangeHandler = (e) => {
      const { name, value } = e.target

      setTestData({
         ...testData,
         [name]: value,
      })
   }

   useEffect(() => {
      if (id) dispatch(TESTS_THUNKS.getTest({ testId: id }))
   }, [dispatch, id])

   useEffect(() => {
      if (!isNewTest && test) {
         setTestData({
            title: test.title || '',
            shortDescription: test.shortDescription || '',
         })
      }
   }, [isNewTest, test, id])

   const saveHandler = () => {
      if (isNewTest) {
         dispatch(TESTS_THUNKS.addTest({ testData: { ...testData }, navigate }))
      } else {
         dispatch(
            TESTS_THUNKS.updateTest({
               id,
               updatedTest: { ...testData },
               navigate,
            })
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
               autoComplete="off"
            />

            <Typography className="label">Short Description</Typography>

            <Input
               className="input"
               name="shortDescription"
               value={testData.shortDescription}
               onChange={formChangeHandler}
               autoComplete="off"
            />

            <Box className="container-buttons">
               <Link to="/">
                  <Button variant="secondary">GO BACK</Button>
               </Link>

               <Button
                  variant="primary"
                  onClick={saveHandler}
                  disabled={isNewTest ? !isDisabled : isDisabledUpdate}
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

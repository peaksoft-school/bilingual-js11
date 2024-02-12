import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Input from '../../../components/UI/Input'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import { getTest } from '../../../store/slice/admin/questionsThunk'
import { postTest, updateTest } from '../../../store/slice/admin/testsThunk'

const CreateTest = () => {
   const { tests } = useSelector((state) => state.questionsSlice)
   const { id } = useParams()
   const isNewTest = id === undefined || id === ''
   const [formData, setFormData] = useState({
      title: '',
      shortDescription: '',
   })

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const handleInputChange = (e) => {
      const { name, value } = e.target
      setFormData({
         ...formData,
         [name]: value,
      })
   }

   useEffect(() => {
      if (id) {
         dispatch(getTest({ testId: id }))
      }
   }, [dispatch, id])

   useEffect(() => {
      if (!isNewTest && tests) {
         setFormData({
            title: tests.title || '',
            shortDescription: tests.shortDescription || '',
         })
      }
   }, [isNewTest, tests, id])

   const handleSave = async () => {
      try {
         const testToSave = { ...formData }
         if (isNewTest) {
            await dispatch(postTest(testToSave))
         } else {
            await dispatch(updateTest({ id, ...testToSave }))
         }

         navigate('/')
      } catch (error) {
         console.error('Ошибка при сохранении теста:', error)
      }
   }

   const isFormValid = formData.title !== '' && formData.shortDescription !== ''

   return (
      <TestContainer>
         <StyledContainer>
            <Typography className="label">Title</Typography>
            <Input
               className="input"
               name="title"
               value={formData.title}
               onChange={handleInputChange}
            />

            <Typography className="label">Short Description</Typography>
            <Input
               className="input"
               name="shortDescription"
               value={formData.shortDescription}
               onChange={handleInputChange}
            />

            <Box className="container-buttons">
               <Link to="/">
                  <Button variant="secondary">GO BACK</Button>
               </Link>

               <Button
                  variant="primary"
                  onClick={handleSave}
                  disabled={!isFormValid}
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

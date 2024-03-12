import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { TESTS_LIST_THUNKS } from '../../../store/slice/user/tests/testsListThunk'
import { ListIcon } from '../../../assets/icons'
import { ROUTES } from '../../../routes/routes'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'

const TestList = () => {
   const { tests } = useSelector((state) => state.testsListSlice)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(TESTS_LIST_THUNKS.getAllTests())
   }, [dispatch])

   const handleTryTest = (id) =>
      navigate(`${ROUTES.USER.index}/${ROUTES.USER.tests}/${id}`)

   return (
      <TestContainer>
         <MainContent>
            {Array.isArray(tests) &&
               tests?.map(({ id, duration, title, shortDescription }) => (
                  <Box className="content" key={id}>
                     <ListIcon className="list" />

                     <Box className="texts">
                        <Typography className="duration">
                           {duration % 60} minutes
                        </Typography>

                        <Typography className="title">{title}</Typography>

                        <Typography>{shortDescription}</Typography>
                     </Box>

                     <Box className="button-conteiner">
                        <Button
                           variant="secondary"
                           onClick={() => handleTryTest(id)}
                        >
                           TRY TEST
                        </Button>
                     </Box>
                  </Box>
               ))}
         </MainContent>
      </TestContainer>
   )
}

export default TestList

const MainContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '3rem',
   width: '100%',

   '& > .content': {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '2.5rem',
      width: '100%',
      color: '#524e5e',

      '& > .list': {
         maxWidth: '80px',
         width: '100%',
      },

      '& > .texts': {
         display: 'flex',
         flexDirection: 'column',
         gap: '0.3rem',

         '& > .duration': {
            fontWeight: '600',
            fontSize: '15px',
            color: ' #3A10E5',
            fontFamily: 'Poppins',
            textTransform: 'uppercase',
         },

         '& > .title': {
            fontSize: '22px',
            fontFamily: 'Poppins',
         },
      },

      '& > .button-conteiner': {
         marginLeft: 'auto',
      },
   },
}))

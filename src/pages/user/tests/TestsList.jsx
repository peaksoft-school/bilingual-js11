import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { TESTS_LIST_THUNK } from '../../../store/slices/user/tests/testsListThunk'
import { ListImage } from '../../../assets/images'
import { ROUTES } from '../../../routes/routes'
import TestContainer from '../../../components/UI/TestContainer'
import Loading from '../../../components/Loading'
import Button from '../../../components/UI/buttons/Button'

const TestsList = () => {
   const { tests, isLoading } = useSelector((state) => state.testsListSlice)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(TESTS_LIST_THUNK.getAllTests())
   }, [dispatch])

   const navigateHandler = (id) =>
      navigate(`${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}/${id}`)

   const enabledTests = tests.filter((test) => test.enable)

   return (
      <TestContainer>
         {isLoading && <Loading />}

         <MainContent>
            {Array.isArray(tests) &&
               enabledTests?.map(
                  ({ id, duration, title, shortDescription }) => (
                     <Box className="content" key={id}>
                        <img src={ListImage} alt="list" className="list" />

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
                              onClick={() => navigateHandler(id)}
                           >
                              TRY TEST
                           </Button>
                        </Box>
                     </Box>
                  )
               )}
         </MainContent>
      </TestContainer>
   )
}

export default TestsList

const MainContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '3rem',
   width: '100%',

   '& > .content': {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '2rem',
      width: '100%',
      color: '#524e5e',

      '& > .list': {
         maxWidth: '80px',
         width: '100%',
         marginBottom: '0.3rem',
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

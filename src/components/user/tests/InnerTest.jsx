import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, ListItem, Typography, styled } from '@mui/material'
import { LeptopIcon, PhotoIcon, TimeIcon } from '../../../assets/icons'
import { TESTS_LIST_THUNK } from '../../../store/slice/user/tests/testsListThunk'
import { TestImage } from '../../../assets/images'
import TestContainer from '../../UI/TestContainer'
import Button from '../../UI/buttons/Button'
import Loading from '../../Loading'

const InnerTest = () => {
   const { tests, isLoading } = useSelector((state) => state.testsListSlice)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { id, title, duration } = tests

   useEffect(() => {
      dispatch(TESTS_LIST_THUNK.getTest(testId))
   }, [dispatch, testId])

   const handleTestNavigation = () => navigate(-1)

   return (
      <TestContainer>
         {isLoading && <Loading />}

         <MainContent key={id}>
            <Typography className="title">{title} </Typography>

            <Box className="content">
               <img src={TestImage} alt="test-img" className="test" />

               <Box className="description">
                  <ListItem>
                     <LeptopIcon />

                     <Typography>See what the test is like *</Typography>
                  </ListItem>

                  <ListItem>
                     <TimeIcon />

                     <Typography>
                        Practice takes just {duration % 60}
                     </Typography>
                  </ListItem>

                  <ListItem>
                     <PhotoIcon />

                     <Typography>get an unofficial score estimate</Typography>
                  </ListItem>
               </Box>
            </Box>

            <Typography>
               * The practice test may include question types that may not
               appear on the certified test.
            </Typography>

            <Box className="buttons">
               <Button variant="secondary" onClick={handleTestNavigation}>
                  CANCEL
               </Button>

               <Button>PRACTICE TEST</Button>
            </Box>
         </MainContent>
      </TestContainer>
   )
}

export default InnerTest

const MainContent = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   flexDirection: 'column',
   gap: '3.725rem',
   color: '#4c4859',

   '& > .title': {
      fontSize: '28px',
      fontFamily: 'Poppins',
   },

   '& > .content': {
      display: 'flex',
      alignItems: 'center',
      gap: '4rem',

      '& > .test': {
         maxWidth: '198.22px',
         width: '100%',
      },

      '& > .description': {
         display: 'flex',
         justifyContent: 'center',
         flexDirection: 'column',
         gap: '1rem',

         '& > .MuiListItem-root': {
            gap: '1.5rem',

            '& > .MuiTypography-root': {
               fontSize: '17px',
               fontFamily: 'Poppins',
            },
         },
      },
   },

   '& > .MuiTypography-root': {
      fontSize: '15px',
      fontFamily: 'Poppins',
   },

   '& > .buttons': {
      display: 'flex',
      justifyContent: ' space-between',
      width: '100%',
      padding: '2rem 0 0 0',
      borderTop: 'solid 2px #D4D0D0',
   },
}))

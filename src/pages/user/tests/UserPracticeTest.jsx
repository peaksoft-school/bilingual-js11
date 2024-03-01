import { useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import TestContainer from '../../../components/UI/TestContainer'
import { LeptopIcon, PhotoIcon, TimeIcon } from '../../../assets/icons'
import Button from '../../../components/UI/buttons/Button'
import { TryImege } from '../../../assets/images'
import { HOME_TEST } from '../../../store/slice/user/homeThunk'

const UserPracticeTest = () => {
   const { testData } = useSelector((state) => state.home)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const { testId } = useParams()

   useEffect(() => {
      dispatch(HOME_TEST.getTest({ testId }))
   }, [dispatch, testId])

   return (
      <StyledContainer>
         <TestContainer>
            {testData &&
               testData.map(({ id, title, duration }) => (
                  <Box className="main-content" key={id}>
                     <Typography className="title">{title} </Typography>
                     <Box className="content">
                        <img src={TryImege} alt="TryImege" className="image" />
                        <Box className="title-content">
                           <Typography>
                              <LeptopIcon />
                              See what the test is like *
                           </Typography>

                           <Typography>
                              <TimeIcon />
                              Practice takes just {duration}
                           </Typography>
                           <Typography>
                              <PhotoIcon />
                              get an unofficial score estimate
                           </Typography>
                        </Box>
                     </Box>
                     <Typography>
                        * The practice test may include question types that may
                        not appear on the certified test.
                     </Typography>
                  </Box>
               ))}
            <Box className="buttons">
               <Button
                  variant="secondary"
                  onClick={() => navigate('/user/tests/')}
               >
                  CANCEL
               </Button>
               <Button>PRACTICE TEST</Button>
            </Box>
         </TestContainer>
      </StyledContainer>
   )
}

export default UserPracticeTest

const StyledContainer = styled(Box)(() => ({
   '& .main-content': {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginBottom: '48px',

      '& .title': {
         fontSize: '26px',
      },

      '& .content': {
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'space-evenly',
         margin: '3rem 0 9rem 0',

         '& .image': {
            width: '30%',
            height: 'auto',
         },

         '& .title-content': {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '1rem',
         },
      },
   },
   '& .buttons': {
      display: 'flex',
      justifyContent: ' space-between',
      width: '100%',
      paddingTop: '2rem',
      borderTop: 'solid 2px #D4D0D0',
   },
}))

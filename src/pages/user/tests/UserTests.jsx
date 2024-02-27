// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import { Box, styled, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import { ListIcon } from '../../../assets/icons'
// import { HOME_THUNKS } from '../../store/slice/user/homeThunk'

const HomePage = () => {
   const navigate = useNavigate()
   // const dispatch = useDispatch()
   // const { test } = useSelector((state) => state.HOME_THUNKS)

   // useEffect(() => {
   //    dispatch(HOME_THUNKS.getTest())
   // }, [dispatch])

   return (
      <StyledContainer>
         <TestContainer>
            <Box className="tests-conteiner">
               <ListIcon />
               <Box className="content">
                  <Typography className="duration">15 minutes</Typography>
                  <Typography className="title">
                     English advanced test
                  </Typography>
                  <Typography>shortDescription</Typography>
               </Box>

               {/* {questions &&
                  questions.map((question, index) => (
                     <Typography key={question.id}>{`Question ${index + 1}: ${
                        question.title
                     }`}</Typography>
                  ))} */}
               <Button
                  variant="secondary"
                  onClick={() => navigate('/user/tests/practice-test')}
               >
                  TRY TEST
               </Button>
            </Box>
         </TestContainer>
      </StyledContainer>
   )
}

export default HomePage

const StyledContainer = styled(Box)(() => ({
   '& .tests-conteiner': {
      display: 'flex',
      justifyContent: ' space-between',
      alignItems: 'flex-end',

      '& .content': {
         display: 'flex',
         flexDirection: 'column',
         justifyContent: ' space-between',
         marginRight: '20rem',
         gap: '1rem',
      },

      '& .duration': {
         fontSize: '20px',
         color: ' #3A10E5',
         fontWeight: '900',
      },

      '& .title': {
         fontSize: '26px',
      },
   },
}))

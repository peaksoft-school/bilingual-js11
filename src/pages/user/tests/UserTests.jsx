import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import { ListIcon } from '../../../assets/icons'
import { HOME_TEST } from '../../../store/slice/user/homeThunk'

const HomePage = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()
   const testData = useSelector((state) => state.home.testData)

   useEffect(() => {
      dispatch(HOME_TEST.getTest())
   }, [dispatch])

   return (
      <StyledContainer>
         <TestContainer>
            <Box className="tests-conteiner">
               <ListIcon />
               {testData && (
                  <Box className="content">
                     <Typography className="duration">
                        {testData.description}
                     </Typography>
                     <Typography className="title">{testData.title}</Typography>
                     <Typography>{testData.shortDescription}</Typography>
                  </Box>
               )}
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

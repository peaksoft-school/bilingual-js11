import { useEffect } from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import { ListIcon } from '../../../assets/icons'
import { HOME_TEST } from '../../../store/slice/user/homeThunk'

const HomePage = () => {
   const { testData } = useSelector((state) => state.home)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(HOME_TEST.getAllTests())
   }, [dispatch])

   const handleTestNavigation = (id) => {
      navigate(`/user/tests/practice-test/${id}`)
   }

   return (
      <StyledContainer>
         <TestContainer>
            <Box className="tests-conteiner">
               {testData &&
                  testData.map(({ id, duration, title, shortDescription }) => (
                     <Box className="content" key={id}>
                        <ListIcon />
                        <Box className="main-content">
                           <Typography className="duration">
                              {duration}
                           </Typography>

                           <Typography className="title">{title}</Typography>

                           <Typography>{shortDescription}</Typography>
                        </Box>

                        <Box className="button-conteiner">
                           <Button
                              variant="secondary"
                              onClick={() => handleTestNavigation(id)}
                           >
                              TRY TEST
                           </Button>
                        </Box>
                     </Box>
                  ))}
            </Box>
         </TestContainer>
      </StyledContainer>
   )
}

export default HomePage

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',

   '& .tests-conteiner': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '3rem',

      '& .content': {
         display: 'flex',
         alignItems: 'flex-end',
         gap: '8rem',
         minWidth: '735px',

         '& .main-content': {
            marginLeft: '-5rem',
         },

         '& .button-conteiner': {
            display: 'flex',
            marginLeft: 'auto',
         },
      },

      '& .duration': {
         fontSize: '20px',
         color: ' #3A10E5',
         fontWeight: '900',
      },

      '& .title': {
         fontSize: '22px',
      },
   },
}))

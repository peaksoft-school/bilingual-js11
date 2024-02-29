import { useNavigate } from 'react-router'
import { Typography, Box, styled, Button } from '@mui/material'
import { NotFoundImage } from '../assets/images'

const NotFound = () => {
   const navigate = useNavigate()

   const handleGoBack = () => navigate(-1)

   return (
      <StyledContainer>
         <Box className="text-content">
            <Typography variant="h2">Ooops...</Typography>

            <Typography variant="h4">Page not Found</Typography>

            <Typography>
               The page you are looking for doesnt exist or an other error
               occurred, go back to home page.
            </Typography>

            <Button className="go-back" onClick={handleGoBack}>
               GO BACK
            </Button>
         </Box>

         <img src={NotFoundImage} alt="404" />
      </StyledContainer>
   )
}

export default NotFound

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: '100%',
   height: '100vh',

   '& > .text-content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '20rem',

      '& > h2': {
         fontWeight: 'bold',
         color: '#1b2e35',
      },

      '& > h4': {
         color: '#ffc801',
      },

      '& > .go-back': {
         padding: '0.5rem',
         width: '30%',
         borderRadius: '1rem',
         border: '3px solid #ffc801',
         textAlign: 'center',
         backgroundColor: '#ffc801',
         color: 'black',
         fontWeight: 'bold',
         fontFamily: 'Poppins',
         textDecoration: 'none',
         textTransform: 'uppercase',

         '&:hover': {
            backgroundColor: 'white',
            border: '3px solid #ffc801',
         },
      },
   },

   '& > img': {
      width: '40rem',
      borderRadius: '20rem',
   },
}))

import { Link } from 'react-router-dom'
import { Typography, Box, styled } from '@mui/material'
import { NotFoundImage } from '../assets/images'

const NotFound = () => (
   <Container>
      <Box className="text-content">
         <Typography variant="h2">Ooops...</Typography>
         <Typography variant="h4">Page not Found</Typography>
         <Typography variant="p">
            The page you are looking for doesnt exist or an other error
            occurred, go back to home page.
         </Typography>

         <Link to="/">go back</Link>
      </Box>
      <img src={NotFoundImage} alt="404" />
   </Container>
)

export default NotFound

const Container = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-around',
   width: '100%',
   height: '100vh',

   '& .text-content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '20rem',

      '& h2': {
         fontWeight: 'bold',
         color: '#1b2e35',
      },

      '& h4': {
         color: '#ffc801',
      },
   },

   '& img': {
      width: '40rem',
      borderRadius: '20rem',
   },
}))

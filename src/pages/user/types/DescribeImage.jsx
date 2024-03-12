import { Box, Typography, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const DescribeImage = () => {
   return (
      <StyledContainer>
         <TestContainer>
            <Box className="content">
               <Typography className="title">
                  Write one or more sentences that describe the image
               </Typography>

               <Box className="img-container">
                  <img
                     src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80"
                     alt=""
                     className="image"
                  />
                  <Input className="input-text" />
               </Box>
            </Box>

            <Button className="button">NEXT</Button>
         </TestContainer>
      </StyledContainer>
   )
}

export default DescribeImage

const StyledContainer = styled(Box)(() => ({
   '& > div > .content': {
      width: '78.72%',
      height: 'auto',
      boxSizing: 'border-box',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& > .title': {
         textAlign: 'center',
         width: '100%',
         height: '32px',
         fontSize: '1.75rem',
      },

      '& > div > .input-text': {
         width: '64.1%',
         height: '11.563rem',
         '& > .MuiInputBase-root': { height: '11.563rem' },
      },

      '& > .img-container': {
         width: '87%',
         display: 'flex',
         gap: '5.05%',
         marginTop: '50px',

         '& > .image': {
            width: '36.64%',
            backgroundPosition: 'center',
            borderRadius: '2px',
            cursor: 'pointer',
         },
      },
   },

   '& > div > .container-button': {
      display: 'flex',
      justifyContent: 'end',
      marginTop: '3.75rem',
      borderTop: '1.5296px solid #D4D0D0',
      padding: '32px 0  0 0 ',
   },
}))

// import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
// import { ROUTES } from '../../../routes/routes'
import Button from '../../UI/buttons/Button'
import Input from '../../UI/Input'
import TestContainer from '../../UI/TestContainer'

const DescribImage = () => {
   // const navigate = useNavigate()

   const fileUrl = useSelector((state) => state.imageQuestion)

   // const handleNextTest = (id) =>
   //    navigate(`${ROUTES.USER.index}/${ROUTES.USER.tests}/${id}`)

   return (
      <StyledContainer>
         <TestContainer>
            <Box className="content">
               <Typography className="title">
                  Write one or more sentences that describe the image
               </Typography>

               <Box className="img-container">
                  <img src={fileUrl} alt="" className="image" />
                  <Input className="input-text" />
               </Box>
            </Box>

            <Box className="container-button">
               <Button>NEXT</Button>
            </Box>
         </TestContainer>
      </StyledContainer>
   )
}

export default DescribImage

const StyledContainer = styled(Box)(() => ({
   '& .title': {
      textAlign: 'center',
      width: '100%',
      height: '32px',
      fontSize: '1.75rem',
   },

   '& .content': {
      width: '78.72%',
      height: 'auto',
      boxSizing: 'border-box',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& .input-text': {
         width: '64.1%',
         height: '11.563rem',
         '&> .MuiInputBase-root': { height: '11.563rem' },
      },
   },

   '& .img-container': {
      width: '87%',
      display: 'flex',
      gap: '5.05%',
      marginTop: '50px',

      '&> .image': {
         width: '36.64%',
         backgroundPosition: 'center',
         borderRadius: '2px',
         cursor: 'pointer',
      },
   },

   '& .container-button': {
      display: 'flex',
      justifyContent: 'end',
      marginTop: '3.75rem',
      borderTop: '1.5296px solid #D4D0D0',
      padding: '32px 0  0 0 ',
   },
}))

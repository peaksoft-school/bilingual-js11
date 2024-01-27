import { Box, Typography, styled } from '@mui/material'
import Button from '../components/UI/buttons/Button'
import { LogoImage } from '../assets/images'

const Header = () => (
   <StyledContainer>
      <img src={LogoImage} alt="logo" />

      <Box className="actions">
         <Typography>TESTS</Typography>

         <Typography>RESULTS</Typography>

         <StyledButton variant="secondary">LOG OUT</StyledButton>
      </Box>
   </StyledContainer>
)

export default Header

const StyledContainer = styled(Box)(({ theme }) => ({
   height: '5.875rem',
   width: '100%',
   background: theme.palette.primary.white,
   boxShadow: 'none',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'row',
   alignItems: 'center',
   padding: '0 7.5rem',
   color: '#4C4859',

   '& > img': {
      width: '10.875rem',
      height: '2.625rem',
   },

   '& > .actions': {
      '& .MuiTypography-root': {
         fontSize: '0.9375rem',
         fontWeight: '700',
         cursor: 'pointer',
      },

      display: 'flex',
      alignItems: 'center',
      gap: '3.75rem',
      cursor: 'pointer',
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      color: '#4C4C4C',
      fontWeight: '700',
      border: '0.125rem solid #4C4859',
   },
}))

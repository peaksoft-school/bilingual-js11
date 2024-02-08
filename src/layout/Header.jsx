import { Link, NavLink } from 'react-router-dom'
import { AppBar, Box, Typography, styled } from '@mui/material'
import Button from '../components/UI/buttons/Button'
import { LogoImage } from '../assets/images'

const Header = ({ title, endpoint, resultEndpoint }) => (
   <StyledContainer>
      <img src={LogoImage} alt="logo" />

      <Box className="actions">
         <NavLink className="navigation" to={endpoint}>
            <Typography>TESTS</Typography>
         </NavLink>

         <NavLink className="navigation" to={resultEndpoint}>
            <Typography>{title} RESULTS</Typography>
         </NavLink>

         <Link to="/">
            <StyledButton variant="secondary">LOG OUT</StyledButton>
         </Link>
      </Box>
   </StyledContainer>
)

export default Header

const StyledContainer = styled(AppBar)(({ theme }) => ({
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

      '& .navigation': {
         textDecoration: 'none',
         color: '#4c4859',

         '&.active': { color: '#3A10E5' },
      },
   },
}))

const StyledButton = styled(Button)(() => ({
   '&.MuiButton-root': {
      color: '#4C4C4C',
      fontWeight: '700',
      border: '0.125rem solid #4C4859',
   },
}))

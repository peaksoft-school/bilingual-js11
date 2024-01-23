import { AppBar, Typography, styled } from '@mui/material'
import Logo from '../assets/images/pngs/bilingual.png'
import Button from '../components/UI/buttons/Button'

const Header = () => (
   <StyledContainer>
      <img src={Logo} alt="logo" />
      <StyledTextCon>
         <StyledTexts>TESTS</StyledTexts>
         <StyledTexts>RESULTS</StyledTexts>
         <StyledLogOutBtn variant="secondary">LOG OUT</StyledLogOutBtn>
      </StyledTextCon>
   </StyledContainer>
)

export default Header

const StyledContainer = styled(AppBar)(({ theme }) => ({
   background: theme.palette.primary.white,
   boxShadow: 'none',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'row',
   alignItems: 'center',
   padding: '0 7.5rem',
   color: '#4C4859',
   '& img': {
      width: '10.875rem',
      height: '2.625rem',
   },
   height: '5.875rem',
   width: '100%',
}))

const StyledTextCon = styled('div')(() => ({
   '& .MuiTypography-root': {
      fontSize: '0.9375rem',
      fontWeight: '600',
   },
   display: 'flex',
   alignItems: 'center',
   gap: '3.75rem',
   cursor: 'pointer',
}))

const StyledTexts = styled(Typography)(() => ({
   fontSize: '0.9375rem',
   lineHeight: '18px',
   fontWeight: '700',
   cursor: 'pointer',
}))
const StyledLogOutBtn = styled(Button)(() => ({
   '&.MuiButton-root': {
      color: '#4C4C4C',
      fontWeight: '700',
      border: '0.125rem solid #4C4859',
   },
}))

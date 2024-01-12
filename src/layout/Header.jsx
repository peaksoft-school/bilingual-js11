import { AppBar, Typography, styled } from '@mui/material'
import BilingualLogoImage from '../assets/images/bilingual.png'
import Button from '../components/UI/buttons/Button'

const Header = () => {
   return (
      <StyledContainer position="static">
         <img src={BilingualLogoImage} alt="logo" />
         <StyledTextCon>
            <StyledTests>TESTS</StyledTests>
            <StyledResults className="typography">RESULTS</StyledResults>
            <StyledLogOutBtn variant="secondary">LOG OUT</StyledLogOutBtn>
         </StyledTextCon>
      </StyledContainer>
   )
}

export default Header

const StyledContainer = styled(AppBar)(({ theme }) => ({
   background: theme.palette.primary.white,
   boxShadow: 'none',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '0 120px',
   color: '#4C4859',
   '& img': {
      width: '174px',
      height: '42px',
   },
   height: '94px',
   width: '100%',
}))

const StyledTextCon = styled('div')(() => ({
   '& .MuiTypography-root': {
      fontSize: '15px',
      fontWeight: '600',
   },
   display: 'flex',
   alignItems: 'center',
   gap: '60px',
   cursor: 'pointer',
}))

const StyledTests = styled(Typography)(() => ({
   fontSize: '15px',
   lineHeight: '18px',
   fontWeight: 700,
   cursor: 'pointer',
   textDecoration: 'none',
}))

const StyledResults = styled(Typography)(() => ({
   fontSize: '15px',
   fontWeight: 700,
   lineHeight: '18px',
   cursor: 'pointer',
}))

const StyledLogOutBtn = styled(Button)(() => ({
   '&.MuiButton-root': {
      color: '#4C4C4C',
      fontWeight: '700',
      border: '2px solid #4C4859',
   },
}))

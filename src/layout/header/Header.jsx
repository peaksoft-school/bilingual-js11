import { AppBar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import BilingualLogo from '../../assets/images/Bilingual.png'

const Header = ({ user, logOut }) => {
   const [isClicked, setIsClicked] = useState(false)

   return (
      <StyledContainer position="static">
         <img src={BilingualLogo} alt="Logo-Bilingual" />
         <StyledTextCon isClicked={isClicked}>
            <Typography onClick={() => setIsClicked((prev) => !prev)}>
               TESTS
            </Typography>
            <Typography
               className="typography"
               onClick={() => setIsClicked((prev) => !prev)}
            >
               {user} RESULTS
            </Typography>
            {logOut}
         </StyledTextCon>
      </StyledContainer>
   )
}

export default Header

const StyledContainer = styled(AppBar)(() => ({
   background: '#FFFFFF',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   color: '#4C4859',
   img: {
      marginLeft: '120px',
      width: '174px',
      height: '42px',
   },
   height: '94px',
   width: '100%',
}))

const StyledTextCon = styled('div')(({ isClicked }) => ({
   '& .MuiTypography-root': {
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      color: isClicked ? '#4C4859' : '#3A10E5',
   },
   '& .typography': {
      color: isClicked ? '#3A10E5' : '#4C4859',
   },
   display: 'flex',
   alignItems: 'center',
   gap: '60px',
   marginRight: '120px',
   cursor: 'pointer',
}))

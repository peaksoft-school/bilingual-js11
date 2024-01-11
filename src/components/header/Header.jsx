import { AppBar, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Bilingual from '../../assets/images/Bilingual.png'

const Header = (props) => {
   const [isClicked, setIsClicked] = useState(false)
   const { user, logOut } = props

   return (
      <StyledContainer position="static">
         <img src={Bilingual} alt="Logo-Bilingual" />
         <StyledTextCon>
            <Typography
               onClick={() => setIsClicked((prev) => !prev)}
               style={{ color: isClicked ? '#3A10E5' : '#4C4859' }}
            >
               TESTS
            </Typography>
            <Typography
               onClick={() => setIsClicked((prev) => !prev)}
               style={{ color: isClicked ? '#4C4859' : '#3A10E5' }}
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

const StyledTextCon = styled('div')((props) => ({
   '& .MuiTypography-root': {
      fontSize: '15px',
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 'normal',
      textTransform: 'uppercase',
      color: `${props.isClicked} ? `,
   },
   display: 'flex',
   alignItems: 'center',
   gap: '60px',
   marginRight: '120px',
   cursor: 'pointer',
}))

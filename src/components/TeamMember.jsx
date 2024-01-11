import React from 'react'
import { Avatar, Typography, CardContent, styled } from '@mui/material'

const TeamMember = ({ imgSrc, name, role, customStyle }) => {
   return (
      <StyledCardContent>
         <StyledAvatar src={imgSrc} sx={customStyle} />
         <StyledName>{name}</StyledName>
         <StyledRole>{role}</StyledRole>
      </StyledCardContent>
   )
}

export default TeamMember
const StyledCardContent = styled(CardContent)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const StyledAvatar = styled(Avatar)({
   borderRadius: '0px 0px 0px 40px',
   width: '180px',
   height: '180px',
   flexShrink: '0',
})

const StyledName = styled(Typography)({
   color: '#3A10E5',
   fontFamily: 'Poppins',
   fontSize: '16px',
   fontStyle: 'normal',
   fontWeight: 600,
   lineHeight: '130%',
})

const StyledRole = styled(Typography)({
   color: 'var(--black, #020202)',
   textAlign: 'center',
   fontFamily: 'Poppins',
   fontSize: '14px',
   fontStyle: 'normal',
   fontWeight: 400,
   lineHeight: '130%',
})

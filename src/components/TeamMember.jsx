import { Avatar, Typography, CardContent, styled } from '@mui/material'

const TeamMember = ({ imgSrc, name, role, customStyle }) => {
   return (
      <StyledCardContent>
         <StyledAvatarContainer>
            <StyledAvatar src={imgSrc} sx={customStyle} />
         </StyledAvatarContainer>
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

const StyledAvatarContainer = styled('div')({
   position: 'relative',
   width: '11.25rem',
   height: '11.25rem',
   overflow: 'hidden',
})

const StyledAvatar = styled(Avatar)({
   width: '100%',
   height: '100%',
   borderRadius: '0 0 0 2.5rem',
})

const baseTypographyStyles = {
   fontStyle: 'normal',
   lineHeight: '130%',
}

const StyledName = styled(Typography)({
   ...baseTypographyStyles,
   color: '#3A10E5',
   fontSize: '1rem',
   fontWeight: 600,
})

const StyledRole = styled(Typography)({
   ...baseTypographyStyles,
   color: 'var(--black, #020202)',
   textAlign: 'center',
   fontSize: '0.875rem',
   fontWeight: 400,
})

import React from 'react'
import { Avatar, Typography, CardContent, styled, Grid } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import OurTeam from '../utils/constants/OurTeam'

const settings = {
   infinite: true,

   speed: 5000,

   autoplay: true,

   autoplaySpeed: 0,

   cssEase: 'linear',

   initialSlide: OurTeam.length,

   pauseOnHover: true,

   variableWidth: true,

   rtl: false,

   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         },
      },

      {
         breakpoint: 600,
         settings: {
            slidesToShow: 2,
         },
      },

      {
         breakpoint: 480,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
}

const TeamMember = ({ img, name, role, customStyle }) => (
   <StyledCardContent>
      <StyledAvatarContainer>
         <StyledAvatar src={img} sx={customStyle} />
      </StyledAvatarContainer>

      <StyledName>{name}</StyledName>

      <StyledRole>{role}</StyledRole>
   </StyledCardContent>
)

const TeamList = () => (
   <Grid>
      <Grid item xs={12}>
         <StyledOurTeam>Our Team</StyledOurTeam>
      </Grid>

      <StyledSlider>
         <Slider {...settings}>
            {OurTeam.map((member) => (
               <TeamMember key={member.id} {...member} />
            ))}
         </Slider>
      </StyledSlider>
   </Grid>
)

export default TeamList

const baseTypographyStyles = {
   fontStyle: 'normal',
   lineHeight: '130%',
}

const StyledOurTeam = styled(Typography)({
   fontSize: '2.5rem',
   color: '#3752B4',
   textAlign: 'center',
   margin: '2.94rem',
})

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

const StyledName = styled(Typography)({
   ...baseTypographyStyles,
   color: '#3A10E5',
   fontSize: '1rem',
   fontWeight: 600,
   marginTop: '0.88rem',
})

const StyledRole = styled(Typography)({
   ...baseTypographyStyles,
   color: 'var(--black, #020202)',
   textAlign: 'center',
   fontSize: '0.875rem',
   fontWeight: 400,
})

const StyledSlider = styled(Grid)({
   minWidth: 'auto',
   paddingTop: '2.94rem',
   paddingLeft: '5%',
   paddingRight: '5%',
   margin: 'auto',
   '@media (max-width: 1024px)': {
      paddingLeft: '5%',
      paddingRight: '5%',
   },
   '@media (max-width: 600px)': {
      paddingLeft: '5%',
      paddingRight: '5%',
   },
   '@media (max-width: 480px)': {
      paddingLeft: '5%',
      paddingRight: '5%',
   },
})

import { Avatar, Typography, CardContent, styled, Grid } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { OURTEAM } from '../utils/constants/index'

const settings = {
   infinite: true,
   arrows: false,
   speed: 5000,
   autoplay: true,
   autoplaySpeed: 0,
   cssEase: 'linear',
   pauseOnHover: true,
   variableWidth: true,

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

const TeamList = () => (
   <Grid>
      <Grid item xs={12}>
         <StyledOurTeam>Our Team</StyledOurTeam>
      </Grid>

      <StyledSlider {...settings}>
         {OURTEAM.map(({ img, name, role, customStyle, id }) => (
            <StyledCardContent key={id}>
               <StyledAvatarContainer>
                  <StyledAvatar src={img} sx={customStyle} />
               </StyledAvatarContainer>

               <StyledName>{name}</StyledName>

               <StyledRole>{role}</StyledRole>
            </StyledCardContent>
         ))}
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
   margin: '7.69rem 0 2.94rem 0',
})

const StyledCardContent = styled(CardContent)({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
})

const StyledAvatarContainer = styled('div')({
   width: '11.25rem',
   height: '11.25rem',
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
   textAlign: 'center',
})

const StyledRole = styled(Typography)({
   ...baseTypographyStyles,
   color: 'var(--black, #020202)',
   textAlign: 'center',
   fontSize: '0.875rem',
   fontWeight: 400,
})

const StyledSlider = styled(Slider)({
   width: '100%',
   maxWidth: '1600px',
   margin: '0 auto',
   outline: 'none',
   paddingLeft: '5%',
   paddingRight: '5%',
})

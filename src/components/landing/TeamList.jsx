import { Avatar, Typography, CardContent, styled, Box } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { OURTEAM } from '../../utils/constants/index'

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
   <StyledContainer>
      <Typography className="title">Our Team</Typography>

      <StyledSlider {...settings}>
         {OURTEAM.map(({ img, name, role, customStyle, id }) => (
            <StyledCardContent key={id}>
               <Box className="avatar-container">
                  <StyledAvatar src={img} sx={customStyle} />
               </Box>

               <Typography className="avatar-name">{name}</Typography>

               <Typography className="avatar-role">{role}</Typography>
            </StyledCardContent>
         ))}
      </StyledSlider>
   </StyledContainer>
)

export default TeamList

const baseTypographyStyles = {
   fontStyle: 'normal',
   lineHeight: '130%',
}

const StyledContainer = styled(Box)(() => ({
   backgroundColor: '#FEF5E8',
   padding: '7.60rem 0',

   '& .title': {
      fontSize: '2.5rem',
      color: '#3752B4',
      textAlign: 'center',
      fontFamily: 'Gilroy',
      paddingBottom: '2.94rem',
   },

   '& .avatar-container': {
      width: '11.25rem',
      height: '11.25rem',
   },

   '& .avatar-name': {
      ...baseTypographyStyles,
      color: '#3A10E5',
      fontSize: '1rem',
      fontWeight: 600,
      marginTop: '0.88rem',
      textAlign: 'center',
   },

   '& .avatar-role': {
      ...baseTypographyStyles,
      color: 'var(--black, #020202)',
      textAlign: 'center',
      fontSize: '0.875rem',
      fontWeight: 400,
   },
}))

const StyledSlider = styled(Slider)(() => ({
   width: '100%',
   maxWidth: '1600px',
   margin: '0 auto',
   outline: 'none',
   paddingLeft: '5%',
   paddingRight: '5%',
}))

const StyledCardContent = styled(CardContent)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
}))

const StyledAvatar = styled(Avatar)(() => ({
   width: '100%',
   height: '100%',
   borderRadius: '0 0 0 2.5rem',
}))

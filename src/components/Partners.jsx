import { styled, Box, Grid, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PartnersData from '../utils/constants/PartnersData'

const useStyles = styled({
   partner: {
      display: 'flex',
      justifyContent: 'center',
   },
})
const Partners = () => {
   const classes = useStyles()

   const settings = {
      infinite: true,
      speed: 5000,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      initialSlide: PartnersData.length,
      pauseOnHover: false,
      variableWidth: true,
   }

   return (
      <Box>
         <Grid item xs={12}>
            <StyledParners>Partners</StyledParners>
         </Grid>
         <Grid>
            <StyledSlider {...settings}>
               {PartnersData.map((partner) => (
                  <div key={partner.id} className={classes.partner}>
                     {partner.imgSrc && (
                        <ImgContainer>
                           <Img
                              loading="lazy"
                              src={partner.imgSrc}
                              alt={partner.name}
                           />
                        </ImgContainer>
                     )}
                  </div>
               ))}
            </StyledSlider>
         </Grid>
      </Box>
   )
}

export default Partners
const StyledParners = styled(Typography)({
   color: '#3752B4',
   fontSize: '2.5rem',
   textAlign: 'center',
   padding: '2.5rem',
})
const ImgContainer = styled('div')({
   margin: '0 0.9375rem',
   width: '15.9375rem',
   height: '7.875rem',
   overflow: 'hidden',
   borderRadius: '1.25rem',
   border: '1px solid #E4E4E4',
   background: '#FFF',
   display: 'inline-flex',
})

const Img = styled('img')({
   width: '10.9375rem',
   height: '5.375rem',
   objectFit: 'contain',
   objectPosition: 'center',
   margin: 'auto',
   display: 'block',
})
const StyledSlider = styled(Slider)({})

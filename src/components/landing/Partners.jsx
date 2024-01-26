import { styled, Box, Grid, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { PARTNERS } from '../../utils/constants/index'

const useStyles = styled({
   partner: {
      display: 'flex',
      justifyContent: 'center',
   },
})

const settings = {
   dots: false,
   arrows: false,
   infinite: true,
   slidesToShow: 4.65,
   slidesToScroll: 1,
   centerMode: true,
   centerPadding: '0px',
   autoplay: true,
   autoplaySpeed: 0,
   speed: 5000,
   cssEase: 'linear',
   responsive: [
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 3,
         },
      },
      {
         breakpoint: 768,
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

const Partners = () => {
   const classes = useStyles()

   return (
      <Box>
         <Grid item xs={12}>
            <StyledParners>Partners</StyledParners>
         </Grid>

         <Grid>
            <StyledSlider {...settings}>
               {PARTNERS.map(({ id, img, name }) => (
                  <Box key={id} className={classes.partner}>
                     {img && (
                        <ImgContainer>
                           <Img src={img} alt={name} />
                        </ImgContainer>
                     )}
                  </Box>
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
   fontFamily: 'Gilroy',
})

const ImgContainer = styled('div')({
   margin: '0.9375rem',
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
})

const StyledSlider = styled(Slider)({
   width: '100%',
   maxWidth: '1440px',
   margin: 'auto',
   padding: '0 5%',
   '.slick-slide': { outline: 'none' },
})

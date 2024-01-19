import { useState } from 'react'
import { Rating, Typography, styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { DATA_FEEDBACK } from '../../utils/constants'
import {
   NextIcon,
   Pagination,
   PaginationActive,
   PrevIcon,
} from '../../assets/icons'

const PrevArrow = ({ onClick, className }) => (
   <PrevIcon onClick={onClick} className={className} />
)
const NextArrow = ({ onClick, className }) => (
   <NextIcon onClick={onClick} className={className} />
)

const Feedback = () => {
   const [index, setIndex] = useState(0)

   const paginatonActive = (i) => {
      if (i === index) {
         return <PaginationActive />
      }
      return <Pagination />
   }

   const settings = {
      focusOnSelect: true,
      className: 'center',
      centerMode: true,
      centerPadding: 0,
      infinite: true,
      slidesToShow: 3,
      speed: 4000,
      autoplaySpeed: 2000,
      dots: true,
      autoplay: true,
      customPaging: (i) => paginatonActive(i),
      swipeToSlide: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (next) => setIndex(next),
   }

   return (
      <StyledFeedbackPage>
         <StyledTypography>Why people love Bilingual</StyledTypography>
         <StyledContainer>
            <StyledSlider {...settings}>
               {DATA_FEEDBACK.map(
                  ({ id, name, description, rating, avatar }, idx) => (
                     <StyledCard key={id} isActive={idx === index}>
                        <img src={avatar} alt={name} />
                        <StyledDescription>{description}</StyledDescription>
                        <h4>{name}</h4>
                        <Rating value={rating} readOnly />
                     </StyledCard>
                  )
               )}
            </StyledSlider>
         </StyledContainer>
      </StyledFeedbackPage>
   )
}

export default Feedback

const StyledFeedbackPage = styled('div')({
   display: 'flex',
   backgroundColor: '#FEF5E8',
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   flexDirection: 'column',
})

const StyledContainer = styled('div')({
   display: 'flex',
   justifyContent: 'center',
   marginBottom: '120px',
   marginTop: '60px',
   overflow: 'hidden',
   maxWidth: '1600px',
   margin: 'auto',
})

const StyledTypography = styled('div')({
   color: '#3752B4',
   fontFamily: 'Gilroy',
   fontSize: '2.5rem',
   fontWeight: 700,
   textAlign: 'center',
   paddingBottom: '3rem',
})

const StyledDescription = styled(Typography)({
   width: '19.125rem',
   margin: 'auto',
   paddingTop: '2.38rem',
})

const StyledCard = styled('div')({
   textAlign: 'center',
   background: '#E5E5E5',
   transition: 'background 0.5s ease, transform 0.5s ease',
   borderRadius: '40px',
   height: '35.25rem',
   maxWidth: '22.875rem',
   cursor: 'pointer',

   '&:hover': {
      background: '#666CA7',
      transform: 'scale(1.1)',
      color: '#fff',

      '& img': {
         width: '16.25rem',
         height: '16.25rem',
         borderRadius: '50%',
         margin: 'auto',
         marginTop: '2rem',
         transition:
            'width 0.8s ease, height 0.8s ease, border-radius 0.5s ease, margin-top 0.8s ease',
      },

      '& h4': {
         color: '#fff',
      },
   },

   '& img': {
      width: '11.25rem',
      height: '11.25rem',
      borderRadius: '50%',
      margin: 'auto',
      marginTop: '4.38rem',
      transition: 'background 0.5s ease, transform 0.8s ease',
   },

   '@media screen and (max-width: 1200px)': {
      maxWidth: '16.75rem',
      height: '30rem',

      img: {
         maxWidth: '12rem',
         maxHeight: '12rem',
         borderRadius: '50%',
         margin: 'auto',
         marginTop: '2rem',
      },

      h4: {
         fontSize: '0.9rem',
         marginLeft: '-2rem',
      },

      span: {
         fontSize: '1.2rem',
         top: '24rem',
      },

      p: {
         fontSize: '0.8rem',
         maxWidth: '80%',
      },
   },
})

const StyledSlider = styled(Slider)(({ theme }) => ({
   padding: '0 30px',
   display: 'grid',
   gridTemplateColumns: 'repeat(3, auto)',
   gridTemplateRows: 'repeat(1, auto)',
   alignItems: 'center',
   justifyItems: 'center',
   gridAutoFlow: 'dense',
   position: 'relative',

   '.slick-slide': {
      transition: 'transform 1s ease, background 2s ease',
   },

   '.slick-center h4': {
      color: theme.palette.primary.main,
   },

   '& h4': {
      position: 'absolute',
      bottom: '5rem',
      color: theme.palette.primary.main,
      fontSize: '1rem',
      fontWeight: 600,
      paddingTop: '1.5rem',
      paddingBottom: '1.5rem',
      paddingLeft: '6rem',
      textAlign: 'center',
   },

   '.MuiRating-root': {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: '4rem',
      marginLeft: '7rem',
   },

   '.slick-slide:not(.slick-center)': {
      transform: 'scale(0.8)',
      opacity: '0.7',
   },

   '.slick-slide.slick-center': {
      transform: 'scale(1)',
      opacity: '1',
   },

   '.slick-track': {
      display: 'flex',
      gap: '1.25rem',
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingTop: '50px',
   },

   '.slick-list': {
      width: '80%',
      height: '760px',
      overflow: 'hidden',
      padding: '50px',
   },

   '.slick-arrow': {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
   },

   '.slick-prev': {
      display: 'flex',
      justifyContent: 'flex-end',
      marginLeft: '8rem',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
   },

   '.slick-next': {
      display: 'flex',
      justifyContent: 'flex-start',
      marginRight: '8rem',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      cursor: 'pointer',
   },

   '.slick-next:hover, .slick-prev:hover': {
      content: 'none',
      circle: {
         fill: theme.palette.primary.main,
      },
   },

   '.slick-dots': {
      bottom: '4rem',
   },
}))

/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import { styled } from '@mui/material'
import Slider from 'react-slick'
import { INFO } from '../../utils/constants'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
   Pagination,
   PaginationActive,
   SlickNext,
   SlickPrev,
} from '../../assets/icons'

const PrevArrow = ({ onClick, className }) => (
   <SlickPrev onClick={onClick} className={className} />
)
const NextArrow = ({ onClick, className }) => (
   <SlickNext onClick={onClick} className={className} />
)

const CheckOut = () => {
   const [imageIndex, setImageIndex] = useState(0)

   const paginatonActive = (i) => {
      if (i === imageIndex) {
         return <PaginationActive />
      }
      return <Pagination />
   }

   const settings = {
      dots: true,
      infinite: true,
      lazyLoad: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: 0,
      customPaging: (i) => paginatonActive(i),
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) => setImageIndex(next),
   }
   return (
      <StyledContainer>
         <StyledHeading>Check out each question type</StyledHeading>
         <StyledContent>
            <StyledSlider {...settings}>
               {INFO.map(
                  ({ id, background, titleColor, title, text, img }, idx) => (
                     <StyledCard
                        key={id}
                        background={background}
                        className={
                           idx === imageIndex ? 'slide activeSlide' : 'slide'
                        }
                     >
                        <StyledText>
                           <StyledTitle titleColor={titleColor}>
                              {title}
                           </StyledTitle>
                           <StyledDescription>{text}</StyledDescription>
                        </StyledText>
                        <StyledImage src={img} alt="globus" />
                     </StyledCard>
                  )
               )}
            </StyledSlider>
         </StyledContent>
      </StyledContainer>
   )
}

export default CheckOut

const StyledContainer = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
}))

const StyledContent = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3rem',
}))

const StyledHeading = styled('p')(() => ({
   color: '#3752B4',
   fontFamily: 'Gilroy',
   fontSize: '2.5rem',
   fontWeight: '700',
   textAlign: 'center',
}))

const StyledCard = styled('div')(({ background }) => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   gap: '1.62rem',
   borderRadius: '4.375rem 4.375rem 4.375rem 0rem',
   backgroundColor: background,
   boxShadow: '16px 16px 20px 0px rgba(0, 0, 0, 0.30)',
   padding: '2.88rem 2.75rem',

   '&.slide': {
      transform: 'scale(0.3)',
      transition: 'transform 1200ms ease-in-out',
      opacity: '0.1',
   },

   '&.activeSlide': {
      transform: 'scale(1)',
      opacity: '1',
      display: 'flex !important',
   },
}))

const StyledText = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.61rem',
}))

const StyledTitle = styled('h1')(({ titleColor }) => ({
   width: '31.75431rem',
   height: '6.63531rem',
   color: titleColor,
   fontFamily: 'Gilroy',
   fontSize: '2.375rem',
   fontWeight: '700',
}))

const StyledDescription = styled('p')(({ theme }) => ({
   width: '36.1875rem',
   color: theme.palette.primary.white,
   fontSize: '1.5rem',
   fontFamily: 'Poppins',
   fontWeight: '400',
   marginBottom: '6rem',
}))

const StyledImage = styled('img')(() => ({
   width: '16.40763rem',
   height: '19.965rem',
}))

const StyledSlider = styled(Slider)({
   '& .slick-track': {
      display: 'flex',
      gap: '3rem',
   },
   '& .slick-list': {
      width: '65.625rem',
      overflow: 'visible',
   },
   '& .slick-arrow': {
      cursor: 'pointer',
      zIndex: 11,
      position: 'relative',
      top: '200px',
   },
   '& .slick-next': {
      position: 'relative',
      left: '40rem',
      top: '4.4rem',
      width: '3.75rem',
      height: '3.75rem',
   },
   '& .slick-prev': {
      position: 'relative',
      left: '20rem',
      top: '35.6rem',
      width: '3.75rem',
      height: '3.75rem',
   },
   '& .slick-next:hover, .slick-prev:hover': {
      content: 'none',
      circle: {
         fill: '#3A10E5',
      },

      path: {
         fill: '#fff',
      },
   },
   '& .slick-dots': {
      bottom: '-2rem',
      right: '1rem',
   },

   '& .slick-slide > div > .css-1yoedzs, .css-k2zds0': {
      display: 'flex !important',
   },
})

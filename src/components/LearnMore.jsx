import React, { useEffect, useState } from 'react'
import { Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
// eslint-disable-next-line import/no-extraneous-dependencies
import Aos from 'aos'
// eslint-disable-next-line import/no-extraneous-dependencies
import 'aos/dist/aos.css'

import {
   GlobeImage,
   ImageFour,
   ImageOne,
   ImageThree,
   ImageTwo,
   PathImage,
} from '../assets/images/learnMore'
import LandingButton from './UI/buttons/LandingButton'

const LearnMore = () => {
   const [scrollY, setScrollY] = useState(0)

   useEffect(() => {
      Aos.init({
         easing: 'ease-in-quart',
         delay: 0,
         duration: 700,
      })

      const handleScroll = () => {
         setScrollY(window.scrollY)
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <StyledContainer>
         <StyledTypography>Learn More</StyledTypography>
         <motion.div
            transition={{ duration: 10 }}
            style={{
               opacity: 1,
               clipPath: `inset(${
                  (scrollY / window.innerHeight) * 100
               }% 0% 0% 0%)`,
               position: 'absolute',
               top: '10rem',
               zIndex: 1,
               left: '32.94rem',
               width: '24.375rem',
            }}
         >
            <PathImage
               style={{
                  width: '100%',
                  height: '78rem',
                  objectFit: 'cover',
               }}
            />
         </motion.div>

         <StyledRow>
            <div data-aos="fade-right">
               <StyledTypographyH3>
                  Expand your applicant pool
               </StyledTypographyH3>
               <StyledTypographyMoreText>
                  Tap into a diverse pool of candidates from 210+ countries and
                  territories of origin, who have taken the Bilingual English
                  Test because of its radical accessibility.
               </StyledTypographyMoreText>
            </div>
            <motion.div
               style={{
                  position: 'absolute',
                  top: '11.2rem',
                  left: '37rem',
                  zIndex: 1,
               }}
            >
               <GlobeImage />
            </motion.div>
         </StyledRow>

         <StyledRow>
            <div>
               <ImageOne
                  style={{
                     position: 'absolute',
                     top: '28.8rem',
                     left: '20.8rem',
                     zIndex: 1,
                  }}
               />
            </div>

            <div data-aos="fade-left">
               <StyledTypographyH3>
                  Built on the latest assessment sciencee
               </StyledTypographyH3>
               <StyledTypographyMoreText>
                  The Duolingo English Test is a computer adaptive test backed
                  by rigorous research, with results that are highly correlated
                  <br />
                  with other major assessments such as the TOEFL and the
                  <br />
                  IELTS.
               </StyledTypographyMoreText>
            </div>
         </StyledRow>

         <StyledRow>
            <div data-aos="fade-right">
               <StyledTypographyH3>Innovative test security</StyledTypographyH3>
               <StyledTypographyMoreText>
                  Industry-leading security protocols, individual test
                  proctoring, and computer adaptive technology help prevent
                  fraud and cheating and ensure results you can trust.
               </StyledTypographyMoreText>
            </div>
            <div>
               <ImageTwo
                  style={{
                     position: 'absolute',
                     top: '43.2rem',
                     right: 450,
                     zIndex: 1,
                  }}
               />
            </div>
         </StyledRow>

         <StyledRow>
            <div>
               <ImageThree
                  style={{
                     position: 'absolute',
                     top: '59.4rem',
                     left: 340,
                     zIndex: 1,
                  }}
               />
            </div>

            <div data-aos="fade-left">
               <StyledTypographyH3>
                  Convenient results dashboard
               </StyledTypographyH3>
               <StyledTypographyMoreText>
                  Access candidates’ certificates, video interviews, and writing
                  samples through a free and secure dashboard. Quickly and
                  easily view applicant data with filtering tools.
               </StyledTypographyMoreText>
            </div>
         </StyledRow>

         <StyledRow>
            <div data-aos="fade-right">
               <StyledTypographyH3>Secure Design</StyledTypographyH3>
               <StyledTypographyMoreText>
                  Adaptive test engine dynamically administers test questions
                  from a database of hundreds of thousands of items. <br />
                  Someone would have to take the test more than 1,000 times
                  <br />
                  to see a question repeated.
               </StyledTypographyMoreText>
            </div>
            <div>
               <ImageFour
                  style={{
                     position: 'absolute',
                     top: '75.7rem',
                     right: 400,
                     zIndex: 1,
                  }}
               />
            </div>
         </StyledRow>
         <StyledButton>
            <LandingButton />
         </StyledButton>
      </StyledContainer>
   )
}

export default LearnMore

const StyledContainer = styled('div')({
   backgroundColor: '#FEF5E8',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   minHeight: '100vh',
   padding: '2rem',
   position: 'relative',
   maxWidth: '1440px',
   width: '100%',
})

const StyledRow = styled('div')({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '100%',
   paddingTop: '2rem',
   paddingLeft: '1.5rem',
   paddingRight: '2rem',
})

const StyledTypography = styled(Typography)({
   color: '#3752B4',
   fontFamily: 'Gilroy',
   fontSize: '2.5rem',
})

const StyledTypographyH3 = styled(Typography)({
   color: '#23212A',
   fontSize: ' 1.5rem',
   fontWeight: '600',
   paddingTop: '6rem',
})

const StyledTypographyMoreText = styled(Typography)({
   width: '30.875rem',
   paddingTop: '0.6rem',
   paddingRight: '2rem',
   fontSize: '1rem',
})

const StyledButton = styled('div')({
   marginTop: '4.5rem',
})

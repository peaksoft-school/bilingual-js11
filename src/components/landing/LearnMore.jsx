import React, { useEffect } from 'react'
import { Typography, keyframes, styled } from '@mui/material'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { RoadmapImage } from '../../assets/icons'
import { iconComponents, sections } from '../../utils/constants'
import LandingButton from '../UI/buttons/LandingButton'

const dash = keyframes`
        to  {
          stroke-dashoffset: 0;  
        } from {
          stroke-dashoffset: 300;
        }
      `

const LearnMore = () => {
   useEffect(() => {
      Aos.init({
         easing: 'ease-in-quart',
         delay: 0,
         duration: 800,
      })
   }, [])

   return (
      <StyledLearnMorePage>
         <StyledContainer>
            <StyledTypography>Learn More</StyledTypography>
            <StyledAnimationDiv>
               <StyledRoadmapImage />
            </StyledAnimationDiv>

            {sections.map(({ animation, text, title, icon, style }) => (
               <StyledRow key={title}>
                  <div data-aos={animation}>
                     <StyledTypographyH3 style={style}>
                        {title}
                     </StyledTypographyH3>
                     <StyledTypographyMoreText style={style}>
                        {text}
                     </StyledTypographyMoreText>
                  </div>
                  <StyledAnimationImage>
                     {React.createElement(iconComponents[icon].component, {
                        style: iconComponents[icon].style,
                     })}
                  </StyledAnimationImage>
               </StyledRow>
            ))}
            <SyledButtonContainer
               animate={{
                  scale: [0.95, 1, 0.95, 1],
               }}
               transition={{
                  ease: 'easeOut',
                  duration: 4,
                  repeat: Infinity,
               }}
            >
               <LandingButton />
            </SyledButtonContainer>
         </StyledContainer>
      </StyledLearnMorePage>
   )
}

export default LearnMore

const StyledLearnMorePage = styled('div')({
   backgroundColor: '#FEF5E8',
   width: '100%',
   overflow: 'hidden',
})

const StyledContainer = styled('div')({
   margin: 'auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   position: 'relative',
   maxWidth: '1440px',
   width: '100%',
})

const StyledRow = styled('div')(({ theme }) => ({
   marginTop: '1rem',
   marginBottom: '1rem',
   marginLeft: '7.5rem',
   width: '100%',

   [theme.breakpoints.down('ld')]: {},
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
   color: '#3752B4',
   fontFamily: 'Gilroy',
   fontSize: '2.5rem',

   [theme.breakpoints.down('ld')]: {},
}))

const StyledTypographyH3 = styled(Typography)(({ theme }) => ({
   color: '#23212A',
   fontSize: ' 1.5rem',
   fontWeight: '600',
   paddingTop: '6rem',

   [theme.breakpoints.down('ld')]: {},
}))

const StyledTypographyMoreText = styled(Typography)(({ theme }) => ({
   width: '30.875rem',
   paddingTop: '0.6rem',
   fontSize: '1rem',

   [theme.breakpoints.down('ld')]: {},
}))

const StyledAnimationDiv = styled(motion.div)(({ theme }) => ({
   opacity: 1,
   position: 'absolute',
   top: '10rem',
   left: '32.94rem',
   width: '24.375rem',
   overflow: 'hidden',

   [theme.breakpoints.down('ld')]: {},
}))

const StyledRoadmapImage = styled(RoadmapImage)(({ theme }) => ({
   width: '100%',
   height: '80rem',
   objectFit: 'cover',
   zIndex: 2,

   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },

   [theme.breakpoints.down('ld')]: {},
}))

const StyledAnimationImage = styled(motion.div)(({ theme }) => ({
   position: 'relative',
   top: '-18rem',
   right: '3.2rem',

   // path: {
   //    strokeDasharray: '18.56 18.56',
   //    animation: `${dash} 3.5s infinite linear forwards`,
   // },
   [theme.breakpoints.down('ld')]: {},
}))

const SyledButtonContainer = styled(motion.div)({
   marginTop: '12rem',
   marginBottom: '4rem',
})

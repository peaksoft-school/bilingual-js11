import { useEffect } from 'react'
import { Box, Typography, keyframes, styled } from '@mui/material'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
   BackgroundFirstLearnMoreIcon,
   FifthLearnMoreIcon,
   FirstLearnMoreIcon,
   FourthLearnMoreIcon,
   RoadmapIcon,
   SecondLearnMoreIcon,
   ThirdLearnMoreIcon,
} from '../../assets/icons'
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
      <StyledContainer>
         <div className="container">
            <Typography className="title-text">Learn More</Typography>
            <motion.div className="roadmap">
               <StyledRoadmapImage />
            </motion.div>

            <StyledRow>
               <div data-aos="fade-right">
                  <StyledTypographyH3>
                     Expand your applicant pool
                  </StyledTypographyH3>
                  <StyledTypographyMoreText>
                     Tap into a diverse pool of candidates from 210+ countries
                     and territories of origin, who have taken the Bilingual
                     English Test because of its radical accessibility.
                  </StyledTypographyMoreText>
               </div>
               <StyledGlobeImage />
               <StyledBackgroundFirstLearnMoreIcon />
            </StyledRow>

            <StyledRow>
               <div>
                  <StyledImageOne />
               </div>

               <div data-aos="fade-left">
                  <StyledTypographyH3>
                     Built on the latest assessment sciencee
                  </StyledTypographyH3>
                  <StyledTypographyMoreText>
                     The Duolingo English Test is a computer adaptive test
                     backed by rigorous research, with results that are highly
                     correlated
                     <br />
                     with other major assessments such as the TOEFL and the
                     <br />
                     IELTS.
                  </StyledTypographyMoreText>
               </div>
            </StyledRow>

            <StyledRow>
               <div data-aos="fade-right">
                  <StyledTypographyH3>
                     Innovative test security
                  </StyledTypographyH3>
                  <StyledTypographyMoreText>
                     Industry-leading security protocols, individual test
                     proctoring, and computer adaptive technology help prevent
                     fraud and cheating and ensure results you can trust.
                  </StyledTypographyMoreText>
               </div>
               <div>
                  <StyledImageTwo />
               </div>
            </StyledRow>

            <StyledRow>
               <div>
                  <StyledImageThree />
               </div>

               <div data-aos="fade-left">
                  <StyledTypographyH3>
                     Convenient results dashboard
                  </StyledTypographyH3>
                  <StyledTypographyMoreText>
                     Access candidates’ certificates, video interviews, and
                     writing samples through a free and secure dashboard.
                     Quickly and easily view applicant data with filtering
                     tools.
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
                  <StyledImageFour />
               </div>
            </StyledRow>
            <motion.div
               className="button"
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
            </motion.div>
         </div>
      </StyledContainer>
   )
}

export default LearnMore

const StyledContainer = styled('div')(({ theme }) => ({
   backgroundColor: '#FEF5E8',
   width: '100%',
   overflow: 'hidden',

   '& .container': {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      maxWidth: '1440px',
      width: '100%',

      [theme.breakpoints.down('lg')]: {
         maxWidth: '1200px',
      },
   },

   '& .title-text': {
      color: '#3752B4',
      fontFamily: 'Gilroy',
      fontSize: '2.5rem',

      [theme.breakpoints.down('lg')]: {
         fontSize: '2rem',
         textAlign: 'center',
      },
   },

   '& .roadmap': {
      opacity: 1,
      position: 'absolute',
      top: '10rem',
      left: '0',
      width: '100%',
      overflow: 'hidden',

      [theme.breakpoints.down('lg')]: {
         left: '10rem',
      },
   },

   '& .button': {
      marginTop: '7rem',

      [theme.breakpoints.down('lg')]: {
         maxWidth: '1200px',
         marginTop: '4rem',
      },
   },
}))

const StyledRow = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   width: '1440px',
   paddingTop: '2rem',
   paddingLeft: '4.5rem',
   paddingRight: '2rem',

   [theme.breakpoints.down('lg')]: {
      maxWidth: '1180px',
      paddingTop: '5.5rem',
   },
}))

const StyledTypographyH3 = styled(Typography)(({ theme }) => ({
   color: '#23212A',
   fontSize: ' 1.5rem',
   fontWeight: '600',
   paddingTop: '6rem',

   [theme.breakpoints.down('lg')]: {
      fontSize: ' 1.1rem',
      paddingTop: '2.5rem',
   },
}))

const StyledTypographyMoreText = styled(Typography)(({ theme }) => ({
   width: '30.875rem',
   paddingTop: '0.6rem',
   paddingRight: '2rem',
   fontSize: '1rem',

   [theme.breakpoints.down('lg')]: {
      width: '28rem',
      paddingTop: '0.5rem',
      paddingRight: '2rem',
      fontSize: '0.9rem',
   },
}))

const StyledRoadmapImage = styled(RoadmapIcon)(({ theme }) => ({
   width: '100%',
   height: '78rem',
   objectFit: 'cover',
   zIndex: 2,

   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },

   [theme.breakpoints.down('lg')]: {
      height: '70rem',
      right: '10rem',
      objectFit: 'cover',
      marginLeft: '-10rem',
   },
}))

const StyledGlobeImage = styled(FirstLearnMoreIcon)(({ theme }) => ({
   position: 'absolute',
   top: '11.2rem',
   left: '41.8rem',
   zIndex: 2,

   [theme.breakpoints.down('lg')]: {
      width: '8.5rem',
      height: '8.5rem',
      left: '32rem',
      top: '11rem',
   },
}))

const StyledBackgroundFirstLearnMoreIcon = styled(BackgroundFirstLearnMoreIcon)(
   ({ theme }) => ({
      position: 'absolute',
      top: '11.2rem',
      left: '37rem',
      zIndex: 2,

      path: {
         strokeDasharray: '40',
         animation: `${dash} 7.5s infinite linear forwards`,
      },

      [theme.breakpoints.down('lg')]: {
         width: '16.5rem',
         height: '16.5rem',
         left: '28rem',
         top: '7rem',
      },
   })
)

const StyledImageOne = styled(SecondLearnMoreIcon)(({ theme }) => ({
   position: 'absolute',
   top: '28.8rem',
   left: '22rem',

   path: {
      strokeDasharray: '80',
      animation: `${dash} 8.5s infinite linear forwards`,
   },

   [theme.breakpoints.down('lg')]: {
      width: '16.5rem',
      height: '16.5rem',
      top: '23rem',
      left: '22rem',
      zIndex: 0,
   },
}))

const StyledImageTwo = styled(ThirdLearnMoreIcon)(({ theme }) => ({
   position: 'absolute',
   top: '43.5rem',
   right: '26rem',
   zIndex: 1,

   path: {
      strokeDasharray: '80',
      animation: `${dash} 8.5s infinite linear forwards`,
   },

   [theme.breakpoints.down('lg')]: {
      width: '15rem',
      height: '15rem',
      top: '37.5rem',
      left: '37rem',
      zIndex: 0,
   },
}))

const StyledImageThree = styled(FourthLearnMoreIcon)(({ theme }) => ({
   position: 'absolute',
   top: '60rem',
   left: 365,
   zIndex: 1,

   path: {
      strokeDasharray: '300',
      animation: `${dash} 8.5s infinite linear forwards`,
   },

   [theme.breakpoints.down('lg')]: {
      width: '16.5rem',
      height: '16.5rem',
      top: '51.5rem',
      left: '20rem',
      zIndex: 0,
   },
}))

const StyledImageFour = styled(FifthLearnMoreIcon)(({ theme }) => ({
   position: 'absolute',
   top: '76rem',
   right: '24rem',
   zIndex: 1,

   path: {
      strokeDasharray: '300',
      animation: `${dash} 8.5s infinite linear forwards`,
   },

   [theme.breakpoints.down('lg')]: {
      width: '16.5rem',
      height: '16.5rem',
      top: '66rem',
      left: '36rem',
      zIndex: 0,
   },
}))

import { useEffect } from 'react'
import { Typography, keyframes, styled } from '@mui/material'
import { motion } from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'

import {
   GlobeImage,
   ImageFour,
   ImageOne,
   ImageThree,
   ImageTwo,
   PathImage,
} from '../../assets/images/learnMore'
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
               <StyledPathImage />
            </StyledAnimationDiv>

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
               <StyledAnimationImage>
                  <GlobeImage />
               </StyledAnimationImage>
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
            <StyledButton>
               <LandingButton />
            </StyledButton>
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
   width: '1440px',
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
   marginTop: '7rem',
})

const StyledAnimationDiv = styled(motion.div)({
   opacity: 1,
   position: 'absolute',
   top: '10rem',
   left: '32.94rem',
   width: '24.375rem',
   overflow: 'hidden',
})

const StyledPathImage = styled(PathImage)({
   width: '100%',
   height: '78rem',
   objectFit: 'cover',
   zIndex: 2,

   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },
})

const StyledAnimationImage = styled(motion.div)({
   position: 'absolute',
   top: '11.2rem',
   left: '37rem',
   zIndex: 1,
})

const StyledImageOne = styled(ImageOne)({
   position: 'absolute',
   top: '28.8rem',
   left: '22rem',
   zIndex: 1,
})

const StyledImageTwo = styled(ImageTwo)({
   position: 'absolute',
   top: '43.5rem',
   right: '26rem',
   zIndex: 1,
})

const StyledImageThree = styled(ImageThree)({
   position: 'absolute',
   top: '60rem',
   left: 365,
   zIndex: 1,
})

const StyledImageFour = styled(ImageFour)({
   position: 'absolute',
   top: '76rem',
   right: '24rem',
   zIndex: 1,
})

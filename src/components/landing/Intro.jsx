import { useEffect, useState } from 'react'
import { Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import LandingHeader from '../../layout/LandingHeader'
import BackgroundImage from '../../assets/images/introPage/background-image.svg'
import LandingButton from '../UI/buttons/LandingButton'
import {
   BookOneImg,
   BookThreeImg,
   BookTwoImg,
   MantieImg,
   NoteImg,
   PaperFourImg,
   PaperOneImg,
   PaperThreeImg,
   PaperTwoImg,
   ShadowBookImg,
} from '../../assets/images/introPage'

const Intro = () => {
   const [isVisible, setIsVisible] = useState(false)

   useEffect(() => {
      const timeoutId = setTimeout(() => {
         setIsVisible(true)
      }, 100)

      return () => clearTimeout(timeoutId)
   }, [])

   return (
      <>
         <LandingHeader />
         <StyledContainer>
            <StyledIntroPage>
               <motion.div
                  animate={{ y: 50, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <StyledMantieImg />
               </motion.div>

               <motion.div
                  animate={{ y: 180, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <StyledPaperOneImg />
               </motion.div>

               <motion.div
                  animate={{ y: 110, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <StyledPaperThreeImg />
               </motion.div>

               <motion.div
                  animate={{
                     y: 365,
                     zIndex: isVisible ? 1 : 0,
                     opacity: isVisible ? 1 : 0,
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <StyledPaperTwoImg />
               </motion.div>

               <motion.div
                  animate={{ y: 550, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <StyledPaperFourImg />
               </motion.div>

               <motion.div
                  animate={{
                     y: 200,
                     zIndex: isVisible ? 1 : 0,
                     opacity: isVisible ? 1 : 0,
                  }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 1.8 }}
               >
                  <StyledNoteImg />
               </motion.div>

               <motion.div
                  animate={{ y: 386, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 1.2 }}
               >
                  <StyledBookOneImg />
               </motion.div>

               <motion.div
                  animate={{ y: 475, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 1 }}
               >
                  <StyledBookTwoImg />
               </motion.div>

               <motion.div
                  animate={{ y: 545, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 0.8 }}
               >
                  <StyledBookThreeImg />
               </motion.div>

               <motion.div
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 0.6 }}
               >
                  <StyledShadowBookImg />
               </motion.div>

               <StyledText
                  animate={{ x: 50, opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 1 }}
               >
                  <StyledTypography>
                     Prove your English proficiency today with
                  </StyledTypography>

                  <StyledTypographyTwo>BILINGUAL</StyledTypographyTwo>

                  <StyledPtag>
                     For nearly 30 years, learners have turned to Rosetta Stone
                     to build the fluency and confidence they need to speak new
                     languages.
                  </StyledPtag>
               </StyledText>

               <StyledButton
                  animate={{ opacity: isVisible ? 1 : 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ ease: 'easeOut', duration: 2 }}
               >
                  <LandingButton isStart={false} />
               </StyledButton>
            </StyledIntroPage>
         </StyledContainer>
      </>
   )
}

export default Intro

const StyledContainer = styled('div')({
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
})

const StyledIntroPage = styled('div')({
   margin: 'auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   justifyContent: 'flex-start',
   paddingRight: '15rem',
   maxWidth: '1600px',
   width: '100%',
   height: '42rem',
   position: 'relative',
})

const StyledTypography = styled(Typography)({
   width: '40rem',
   fontSize: '3.75rem',
   fontFamily: 'Gilroy',
   color: '#43404E',
   fontWeight: '900',
})

const StyledTypographyTwo = styled(Typography)({
   color: '#C93D7D',
   fontFamily: 'Gilroy',
   fontSize: '3.75rem',
   paddingTop: '0px',
})

const StyledPtag = styled('p')({
   color: '#47454e',
   width: '48.25rem',
   fontFamily: 'Arial',
   fontWeight: 100,
   fontSize: '1.25rem',
   paddingTop: '1.813rem',
   paaddingBottom: '1.875rem',
})

const StyledMantieImg = styled(MantieImg)({
   width: '14rem',
   height: '15rem',
   position: 'absolute',
   top: '1rem',
   right: '8.5rem',
})

const StyledPaperOneImg = styled(PaperOneImg)({
   width: '6rem',
   height: '6rem',
   position: 'absolute',
   top: '0',
   left: '2.8rem',
})

const StyledPaperTwoImg = styled(PaperTwoImg)({
   width: '8rem',
   height: '4rem',
   position: 'absolute',
   left: '-180px',
})

const StyledPaperThreeImg = styled(PaperThreeImg)({
   width: '9.5rem',
   height: '5rem',
   position: 'absolute',
   top: '8rem',
   right: '6.5rem',
})

const StyledPaperFourImg = styled(PaperFourImg)({
   width: '10rem',
   height: '4.5rem',
   position: 'absolute',
   top: '0',
   left: '-28rem',
})

const StyledNoteImg = styled(motion(NoteImg))({
   width: '13.23088rem',
   height: '13.99494rem',
   position: 'absolute',
   top: '1rem',
   left: '-6rem',
})

const StyledBookOneImg = styled(BookOneImg)({
   width: '17.273rem',
   height: '5.611rem',
   position: 'absolute',
   top: '0',
   left: '-13rem',
})

const StyledBookTwoImg = styled(BookTwoImg)({
   width: '17.688rem',
   height: '4.527rem',
   position: 'absolute',
   top: '0',
   right: '-6rem',
})

const StyledBookThreeImg = styled(BookThreeImg)({
   width: '20.809rem',
   height: '4.495rem',
   position: 'absolute',
   top: '0',
   left: '-14rem',
})

const StyledShadowBookImg = styled(ShadowBookImg)({
   width: '33.328rem',
   height: '4.495rem',
   position: 'absolute',
   top: '37rem',
   right: '4rem',
})

const StyledText = styled(motion.div)({
   width: '33.328rem',
   height: '4.495rem',
   position: 'absolute',
   top: '7rem',
   left: '1.6rem',
})

const StyledButton = styled(motion.div)({
   width: '33.328rem',
   height: '4.495rem',
   position: 'absolute',
   top: '30.5rem',
   left: '4.6rem',
})

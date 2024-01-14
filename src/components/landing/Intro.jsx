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

         <StyledIntroPage>
            <motion.div
               animate={{ y: 50, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 2 }}
            >
               <MantieImg
                  style={{
                     width: '14rem',
                     height: '15rem',
                     position: 'absolute',
                     top: '0',
                     right: '7.5rem',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 180, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 2 }}
            >
               <PaperOneImg
                  style={{
                     width: '6rem',
                     height: '6rem',
                     position: 'absolute',
                     top: '0',
                     left: '2.8rem',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 110, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 2 }}
            >
               <PaperThreeImg
                  style={{
                     width: '9.5rem',
                     height: '5rem',
                     position: 'absolute',
                     top: '8rem',
                     right: '6.5rem',
                  }}
               />
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
               <PaperTwoImg
                  style={{
                     width: '8rem',
                     height: '4rem',
                     position: 'absolute',
                     left: '-180px',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 550, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 2 }}
            >
               <PaperFourImg
                  style={{
                     width: '10rem',
                     height: '4.5rem',
                     position: 'absolute',
                     top: '0',
                     left: '-430',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 200, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 1 }}
            >
               <NoteImg
                  style={{
                     width: '13.231rem',
                     height: '13.995rem',
                     position: 'absolute',
                     top: '0',
                     left: '-125',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 386, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 1.2 }}
            >
               <BookOneImg
                  style={{
                     width: '17.273rem',
                     height: '5.611rem',
                     position: 'absolute',
                     top: '0',
                     left: '-210',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 475, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 1 }}
            >
               <BookTwoImg
                  style={{
                     width: '17.688rem',
                     height: '4.527rem',
                     position: 'absolute',
                     top: '0',
                     left: '-200',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ y: 545, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 0.8 }}
            >
               <BookThreeImg
                  style={{
                     width: '20.809rem',
                     height: '4.495rem',
                     position: 'absolute',
                     top: '0',
                     left: '-235',
                  }}
               />
            </motion.div>
            <motion.div
               animate={{ opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 0.6 }}
            >
               <ShadowBookImg
                  style={{
                     width: '33.328rem',
                     height: '4.495rem',
                     position: 'absolute',
                     top: '37rem',
                     right: '4rem',
                  }}
               />
            </motion.div>

            <motion.div
               animate={{ x: 50, opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 1 }}
               style={{
                  width: '33.328rem',
                  height: '4.495rem',
                  position: 'absolute',
                  top: '7rem',
                  left: '1.6rem',
               }}
            >
               <StyledTypography>
                  Prove your English proficiency today with
               </StyledTypography>

               <StyledTypographyTwo>BILINGUAL</StyledTypographyTwo>

               <StyledPtag>
                  For nearly 30 years, learners have turned to Rosetta Stone to
                  build the fluency and confidence they need to speak new
                  languages.
               </StyledPtag>
            </motion.div>
            <motion.div
               animate={{ opacity: isVisible ? 1 : 0 }}
               initial={{ opacity: 0 }}
               transition={{ ease: 'easeOut', duration: 2 }}
               style={{
                  width: '33.328rem',
                  height: '4.495rem',
                  position: 'absolute',
                  top: '30.5rem',
                  left: '4.6rem',
               }}
            >
               <LandingButton isStart={false} />
            </motion.div>
         </StyledIntroPage>
      </>
   )
}

export default Intro

const StyledIntroPage = styled('div')({
   margin: 'auto',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   justifyContent: 'flex-start',
   paddingRight: '15rem',
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   maxWidth: '1440px',
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

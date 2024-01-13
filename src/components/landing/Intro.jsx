import React, { useEffect, useState } from 'react'
import { Typography, styled } from '@mui/material'
// eslint-disable-next-line import/no-extraneous-dependencies
import { motion } from 'framer-motion'
import LandingHeader from '../../layout/LandingHeader'
import BackgroundImage from '../../assets/images/introPage/background-image.svg'
import LandingButtons from '../UI/buttons/LandingButtons'
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
               transition={{ ease: 'easeOut', duration: 2 }}
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
         </StyledIntroPage>
         <motion.div
            style={{
               width: '33.328rem',
               height: '4.495rem',
               position: 'absolute',
               top: '15rem',
               left: '5rem',
            }}
         >
            <Typography>Prove your English proficiency today with</Typography>
            <Typography>BILINGUAL</Typography>
         </motion.div>
         <motion.div
            style={{
               width: '33.328rem',
               height: '4.495rem',
               position: 'absolute',
               top: '15rem',
               left: '5rem',
            }}
         >
            <LandingButtons isStart={false}>To begin</LandingButtons>
         </motion.div>
      </>
   )
}

export default Intro

const StyledIntroPage = styled('div')({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'end',
   justifyContent: 'flex-start',
   paddingRight: '15rem',
   backgroundImage: `url(${BackgroundImage})`,
   backgroundSize: 'cover',
   backgroundRepeat: 'no-repeat',
   width: '100%',
   height: '42rem',
   position: 'relative',
})

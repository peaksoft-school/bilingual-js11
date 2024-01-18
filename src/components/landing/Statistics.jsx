import { useEffect, useState } from 'react'
import { keyframes, styled, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import {
   Airoplane,
   Lines,
   Earth,
   PiggyBank,
   Coins,
   BorderAiroplane,
} from '../../assets/images/statistics'

const dash = keyframes`
        to  {
          stroke-dashoffset: 0;
        } from {
          stroke-dashoffset: 300;
        }
      `

const Statistics = () => {
   const [isVisible, setIsVisible] = useState(false)
   const [isVisibleCount, setIsVisibleCount] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         const element = document.getElementById('statistics-count')

         if (element) {
            const { top, bottom } = element.getBoundingClientRect()
            const { innerHeight } = window

            if (top < innerHeight && bottom >= 0) {
               setIsVisibleCount(true)
               setIsVisible(true)
            }
         }
      }

      handleScroll()

      window.addEventListener('scroll', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <StyledContainer>
         <StyledCard>
            <StyledImage>
               <StyledMotion
                  initial={{ opacity: 0 }}
                  animate={{
                     x: 47.03,
                     y: -14.96,
                     opacity: isVisible ? 1 : 0,
                  }}
                  transition={{ repeat: Infinity, duration: 3 }}
               >
                  <StyledAiroplaneFirst />
                  <StyledAiroplaneSecond />
                  <StyledAiroplaneThird />
                  <StyledAiroplaneFourth />
                  <StyledAiroplaneFifth />
                  <StyledAiroplaneSixth />
                  <StyledAiroplaneSeventh />
                  <StyledAiroplaneEighth />
                  <StyledAiroplaneNinth />
                  <StyledAiroplaneTenth />
                  <StyledAiroplaneEleventh />
                  <StyledAiroplaneTwelfth />
                  <StyledAiroplaneThirteenth />
                  <StyledAiroplaneFourteenth />
                  <StyledAiroplaneFifteenth />
               </StyledMotion>
               <StyledBorderAiroplane />
            </StyledImage>

            <StyledCount>
               <div id="statistics-count">
                  {isVisibleCount && (
                     <div>
                        <CountUp duration={1} end={10000} />
                        <span>+</span>
                     </div>
                  )}
               </div>
            </StyledCount>
            <StyledTypography>
               Over 10,000 fee waivers for the
               <br />
               Bilingual English Test are offered annually.
            </StyledTypography>
         </StyledCard>

         <StyledCard>
            <StyledImage>
               <StyledLines />
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                     scale: [0.98, 1, 0.98, 1],
                     opacity: isVisible ? 1 : 0,
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
               >
                  <StyledEarth />
               </motion.div>
            </StyledImage>
            <StyledCount>
               <div id="statistics-container">
                  {isVisibleCount && (
                     <div>
                        <CountUp duration={1} end={200} />
                        <span>+</span>
                     </div>
                  )}
               </div>
            </StyledCount>
            <StyledTypography>
               Students from over 200 countries and territories have benefitted.
            </StyledTypography>
         </StyledCard>

         <StyledCard>
            <StyledImage>
               <StyledPiggyBank />
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ y: 20.96, opacity: isVisible ? 1 : 0 }}
                  transition={{ duration: 4, repeat: Infinity }}
               >
                  <StyledCoins />
               </motion.div>
            </StyledImage>
            <StyledCount>
               <span>$0</span>
            </StyledCount>
            <StyledTypography>
               Eligible students can take the test with absolutely zero cost to
               them.
            </StyledTypography>
         </StyledCard>
      </StyledContainer>
   )
}

export default Statistics

const StyledContainer = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'center',
   gap: '9vw',
   margin: '7.5rem 0 7.5rem 0',
   backgroundColor: '#FEF5E8',
}))

const StyledCard = styled('div')(() => ({
   padding: '1.5rem 1.06rem 1.5rem 1.06rem',
}))

const StyledImage = styled('div')(() => ({
   width: '18.81rem',
   height: '11rem',
}))

const StyledMotion = styled(motion.div)(() => {})

const StyledTypography = styled(Typography)(() => ({
   color: '#23212A',
   textAlign: 'center',
   fontWeight: '400',
   lineHeight: 'normal',
   width: '20.9375rem',
   height: '3rem',
   marginTop: '-4.5rem',
}))

const StyledCount = styled('div')(({ theme }) => ({
   border: '1px solid #3785D7',
   borderRadius: '0.6rem',
   boxShadow: '0px 21px 10px -4px rgba(34, 60, 80, 0.09)',
   width: '12.4rem',
   textAlign: 'center',
   fontSize: '3rem',
   position: 'relative',
   bottom: '8.4rem',
   left: '4.6rem',
   padding: '0.9rem 0.5rem',
   backgroundColor: theme.palette.primary.white,
}))

const StyledBorderAiroplane = styled(BorderAiroplane)(() => ({
   position: 'relative',
   top: '0.2rem',
   left: '1.4rem',
   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },
}))
const StyledLines = styled(Lines)(() => ({
   position: 'relative',
   left: '3rem',
   top: '0.3rem',
   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },
}))

const StyledEarth = styled(Earth)(() => ({
   position: 'absolute',
   left: '5.3rem',
   bottom: '-0.2rem',
}))

const StyledPiggyBank = styled(PiggyBank)(() => ({
   position: 'relative',
   left: '2.6rem',
   top: '0.2rem',
   path: {
      strokeDasharray: '18.56 18.56',
      animation: `${dash} 3.5s infinite linear forwards`,
   },
}))

const StyledCoins = styled(Coins)(() => ({
   position: 'absolute',
   bottom: '0.8rem',
   left: '3.5rem',
}))

const StyledAiroplaneFirst = styled(Airoplane)(() => ({
   position: 'absolute',
   left: '1rem',
   top: '8.3rem',
}))

const StyledAiroplaneSecond = styled(Airoplane)(() => ({
   width: '1.323rem',
   height: '1.128rem',
   position: 'absolute',
   left: '0rem',
   top: '7rem',
}))

const StyledAiroplaneThird = styled(Airoplane)(() => ({
   width: '0.941rem',
   height: '0.803rem',
   position: 'absolute',
   left: '1rem',
   top: '1.9rem',
}))

const StyledAiroplaneFourth = styled(Airoplane)(() => ({
   width: '2.145rem',
   height: '1.829rem',
   position: 'absolute',
   left: '3rem',
   top: '2rem',
}))

const StyledAiroplaneFifth = styled(Airoplane)(() => ({
   width: '0.941rem',
   height: '0.803rem',
   position: 'absolute',
   left: '6.3rem',
   top: '2.3rem',
}))

const StyledAiroplaneSixth = styled(Airoplane)(() => ({
   width: '0.941rem',
   height: '0.803rem',
   position: 'absolute',
   left: '8.6rem',
   top: '3.3rem',
}))

const StyledAiroplaneSeventh = styled(Airoplane)(() => ({
   width: '1.195rem',
   height: '1.008rem',
   position: 'absolute',
   left: '9rem',
   top: '1.5rem',
}))

const StyledAiroplaneEighth = styled(Airoplane)(() => ({
   width: '1.745rem',
   height: '1.488rem',
   position: 'absolute',
   left: '12.2rem',
   top: '2rem',
}))

const StyledAiroplaneNinth = styled(Airoplane)(() => ({
   width: '0.718rem',
   height: '0.613rem',
   position: 'absolute',
   left: '4.3rem',
   top: '11rem',
}))

const StyledAiroplaneTenth = styled(Airoplane)(() => ({
   width: '1.323rem',
   height: '1.128rem',
   position: 'absolute',
   left: '9.7rem',
   top: '10.2rem',
}))

const StyledAiroplaneEleventh = styled(Airoplane)(() => ({
   width: '1.745rem',
   height: '1.488rem',
   position: 'absolute',
   left: '12.7rem',
   top: '9.4rem',
}))

const StyledAiroplaneTwelfth = styled(Airoplane)(() => ({
   width: '0.941rem',
   height: '0.803rem',
   position: 'absolute',
   left: '0.2rem',
   top: '4rem',
}))

const StyledAiroplaneThirteenth = styled(Airoplane)(() => ({
   width: '0.718rem',
   height: '0.613rem',
   position: 'absolute',
   right: '3.7rem',
   top: '4rem',
}))

const StyledAiroplaneFourteenth = styled(Airoplane)(() => ({
   width: '0.941rem',
   height: '0.803rem',
   position: 'absolute',
   right: '3.8rem',
   top: '7rem',
}))

const StyledAiroplaneFifteenth = styled(Airoplane)(() => ({
   width: '1.745rem',
   height: '0.961rem',
   position: 'absolute',
   left: '7rem',
   top: '9.2rem',
}))

import { motion } from 'framer-motion'
import { Typography, styled } from '@mui/material'
import Background from '../../assets/images/backgroundImage.png'
import Book from '../../assets/icons/svgs/book.svg'
import Learn from '../../assets/icons/svgs/learn.svg'
import Reading from '../../assets/icons/svgs/reading.svg'

import {
   AccessibleIcon,
   ExtensiveIcon,
   SpeechIcon,
   TutoringIcon,
} from '../../assets/icons'

const animate = {
   offscreen: {
      opacity: 0,
   },
   onscreen: {
      opacity: 1,
      transition: {
         duration: 1,
         damping: 3,
      },
   },
   animate: {
      rotate: [-2, 3, -7, 4, 4],
      transition: {
         duration: 2,
         repeat: Infinity,
         repeatType: 'reverse',
      },
   },
}

const pulseAnimation = {
   animate: {
      scale: [0.8, 0.95, 0.8],
      transition: {
         duration: 1.5,
         repeat: Infinity,
      },
   },
}

const UserExperience = () => {
   return (
      <MainCon>
         <Description>
            <StyledCon>
               <UserExperiencesH3 variant="h3">
                  Unparalleled user experience
               </UserExperiencesH3>
               <DescriptionText>
                  The most effective way to perfect a language is by immersing
                  yourself in it. Rosetta Stone for Enterprise delivers an
                  effective end-to-end experience, founded on a wealth of
                  carefully structured content. Each learner has the opportunity
                  to balance independent study with optional online tutoring in
                  a way that fits their schedule and language learning goals.
               </DescriptionText>
               <ContainerOfExperience>
                  <StyledBlocks>
                     <Container>
                        <ImgAccessible />
                        <ImgText>Accessible anytime, anywhere</ImgText>
                     </Container>
                     <Container>
                        <ImgExtensive />
                        <ImgText>Extensive business content</ImgText>
                     </Container>
                  </StyledBlocks>
                  <StyledBlocks>
                     <Container>
                        <ImgSpeech />
                        <ImgText>Leading speech recognition</ImgText>
                     </Container>
                     <Container>
                        <ImgTutoring />
                        <ImgText>Unlimited live tutoring</ImgText>
                     </Container>
                  </StyledBlocks>
               </ContainerOfExperience>
            </StyledCon>
            <StyledImgCon>
               <ImgBackground src={Background} />
               <ChildContainer>
                  <ImgBook
                     src={Book}
                     variants={pulseAnimation}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     loading="lazy"
                  />
                  <ImgLearn
                     src={Learn}
                     variants={animate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     loading="lazy"
                  />
                  <ImgReading
                     src={Reading}
                     variants={animate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     loading="lazy"
                  />
               </ChildContainer>
            </StyledImgCon>
         </Description>
      </MainCon>
   )
}

export default UserExperience

const StyledImgCon = styled('div')(({ theme }) => ({
   [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      left: '30rem',
   },
}))

const Description = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '6.5rem',
   [theme.breakpoints.down('lg')]: {
      position: 'relative',
      top: '1rem',
      right: '19rem',
      gap: '0rem',
   },
}))

const ContainerOfExperience = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '3.31rem',
   marginTop: '2.69rem',
}))
const StyledBlocks = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '4.24rem',
   '& .MuiTypography-root': {
      width: '150px',
      color: theme.palette.primary.blackGrey,
      fontWeight: '400',
      lineHeight: '140%',
   },
}))

const StyledCon = styled('div')(({ theme }) => ({
   [theme.breakpoints.down('lg')]: {
      position: 'relative',
      left: '10rem',
   },
}))

const MainCon = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   maxWidth: '100%',
   backgroundColor: theme.palette.secondary.main,
   [theme.breakpoints.down('lg')]: {
      width: '100%',
      paddingBottom: '4rem',
   },
}))

const UserExperiencesH3 = styled(Typography)(() => ({
   fontSize: '40px',
   fontWeight: '700',
   width: '21.125rem',
   color: '#3752B4',
}))

const DescriptionText = styled(Typography)(({ theme }) => ({
   width: '610px',
   color: '#23212A',
   fontWeight: '400',
   marginTop: '34px',
   [theme.breakpoints.down('lg')]: {
      width: '15rem',
   },
}))

const ImgAccessible = styled(AccessibleIcon)(() => ({
   width: '44.12px',
   height: '50px',
}))

const ImgText = styled(Typography)(() => ({}))

const Container = styled('div')(() => ({
   display: 'flex',
   gap: '1.61rem',
}))

const ImgSpeech = styled(SpeechIcon)(() => ({
   width: '39px',
   height: '50px',
}))
const ImgExtensive = styled(ExtensiveIcon)(() => ({
   width: '54.44px',
   height: '50px',
}))

const ImgTutoring = styled(TutoringIcon)(() => ({
   width: '55.56px',
   height: '50px',
}))

const ImgBackground = styled('img')(() => ({
   marginTop: '17px',
   width: '27.52988rem',
   height: '26.25rem',
   marginLeft: '3rem',
}))

const ChildContainer = styled(motion.div)(() => ({
   position: 'relative',
   right: '48rem',
   bottom: '28rem',
}))

const ImgBook = styled(motion.img)(() => ({
   position: 'absolute',
   width: '22.11994rem',
   height: '18.65006rem',
   left: '52.5rem',
   top: '6.5rem',
   animation: `${pulseAnimation} 1.5s infinite`,
}))

const ImgLearn = styled(motion.img)(() => ({
   position: 'relative',
   left: '52rem',
   top: '5rem',
}))

const ImgReading = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '10',
   left: '66rem',
   top: '7rem',
}))

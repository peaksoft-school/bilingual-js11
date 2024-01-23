import { motion } from 'framer-motion'
import { Typography, styled } from '@mui/material'
import ExtensiveIcon from '../assets/icons/svgs/extensive.svg'
import SpeechIcon from '../assets/icons/svgs/speech.svg'
import TutoringIcon from '../assets/icons/svgs/tutoring.svg'
import AccessibleIcon from '../assets/icons/svgs/accessible.svg'
// import Reading from '../assets/icons/svgs/reading.svg'
import Learn from '../assets/icons/svgs/learn.svg'
// import Book from '../assets/icons/svgs/book.svg'
import Background from '../assets/images/backgroundImage.png'

// const animate = {
//    offscreen: {
//       opacity: 0,
//    },
//    onscreen: {
//       opacity: 1,
//       transition: {
//          duration: 1,
//          damping: 3,
//       },
//    },
//    animate: {
//       rotate: [-2, 3, -7, 4, 4],
//       transition: {
//          duration: 2,
//          repeat: Infinity,
//          repeatType: 'reverse',
//       },
//    },
// }
// const pulseAnimation = {
//    animate: {
//       scale: [0.8, 1, 0.8],
//       transition: {
//          duration: 1.5,
//          repeat: Infinity,
//       },
//    },
// }

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
                        <ImgAccessible src={AccessibleIcon} />
                        <ImgText>Accessible anytime, anywhere</ImgText>
                     </Container>
                     <Container>
                        <ImgExtensive src={ExtensiveIcon} />
                        <ImgText>Extensive business content</ImgText>
                     </Container>
                  </StyledBlocks>
                  <StyledBlocks>
                     <Container>
                        <ImgSpeech src={SpeechIcon} />
                        <ImgText>Leading speech recognition</ImgText>
                     </Container>
                     <Container>
                        <ImgTutoring src={TutoringIcon} />
                        <ImgText>Unlimited live tutoring</ImgText>
                     </Container>
                  </StyledBlocks>
               </ContainerOfExperience>
            </StyledCon>
            <StyledImgCon>
               <ImgBackground src={Background} />
               <ChildContainer>
                  {/* <ImgBook
                     variants={pulseAnimation}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={Book}
                     loading="lazy"
                  />
                  <ImgLearn
                     variants={animate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={Learn}
                     loading="lazy"
                  />
                  <ImgReading
                     variants={animate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={Reading}
                     loading="lazy"
                  /> */}
                  <ImgLearn>
                     <img src={Learn} alt="learn" />
                  </ImgLearn>
               </ChildContainer>
            </StyledImgCon>
         </Description>
      </MainCon>
   )
}

export default UserExperience

const StyledImgCon = styled('div')(() => ({}))

const Description = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   gap: '6.5rem',
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

const StyledCon = styled('div')(() => ({}))

const MainCon = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   maxWidth: '100%',
   height: '34.9rem',
   backgroundColor: theme.palette.secondary.main,
   margin: 'auto',
}))

const UserExperiencesH3 = styled(Typography)(() => ({
   fontSize: '40px',
   fontWeight: '700',
   width: '21.125rem',
   color: '#3752B4',
}))

const DescriptionText = styled(Typography)(() => ({
   width: '610px',
   color: '#23212A',
   fontWeight: '400',
   marginTop: '34px',
}))

const ImgAccessible = styled('img')(() => ({
   width: '44.12px',
   height: '50px',
}))

const ImgText = styled(Typography)(() => ({}))

const Container = styled('div')(() => ({
   display: 'flex',
   gap: '1.61rem',
}))

const ImgSpeech = styled('img')(() => ({
   width: '39px',
   height: '50px',
}))
const ImgExtensive = styled('img')(() => ({
   width: '54.44px',
   height: ' 50px',
}))

const ImgTutoring = styled('img')(() => ({
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
   position: 'absolute',
   top: '3.5rem',
   left: '0',
   right: 0,
   bottom: 0,
}))

// const ImgBook = styled(motion.div)(() => ({
//    position: 'relative',
//    zIndex: '2',
//    width: '22.11994rem',
//    height: '18.65006rem',
//    left: '52.5rem',
//    top: '6.5rem',
// }))

const ImgLearn = styled(motion.div)(() => ({
   position: 'relative',
   // zIndex: '4',
   left: '50.5rem',
   bottom: '-4rem',
}))

// const ImgReading = styled(motion.div)(() => ({
//    position: 'relative',
//    zIndex: '3',
//    left: '43.8rem',
//    bottom: '8rem',
// }))

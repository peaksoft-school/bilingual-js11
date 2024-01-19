import { motion } from 'framer-motion'
import { Typography, styled } from '@mui/material'
import ExtensiveIcon from '../assets/icons/svgs/extensive.svg'
import SpeechIcon from '../assets/icons/svgs/speech.svg'
import TutoringIcon from '../assets/icons/svgs/tutoring.svg'
import AccessibleIcon from '../assets/icons/svgs/accessible.svg'
import Star from '../assets/icons/svgs/star.svg'
import Reading from '../assets/icons/svgs/reading.svg'
import Mug from '../assets/icons/svgs/mug.svg'
import PointBritain from '../assets/icons/svgs/pointBritain.svg'
import Point from '../assets/icons/svgs/point.svg'
import YellowCard from '../assets/icons/svgs/yellowCard.svg'
import Learn from '../assets/icons/svgs/learn.svg'
import C from '../assets/icons/svgs/c.svg'
import Bus from '../assets/icons/svgs/bus.svg'
import Book from '../assets/icons/svgs/book.svg'
import Background from '../assets/images/backgroundImage.png'
import B from '../assets/icons/svgs/b.svg'
import A from '../assets/icons/svgs/a.svg'

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
      scale: [1, 1.15, 1],
      transition: {
         duration: 1,
         repeat: Infinity,
      },
   },
}

const UserExperience = () => {
   return (
      <Description>
         <StyledCon>
            <UserExperiencesH3 variant="h3">
               Unparalleled user experience
            </UserExperiencesH3>
            <DescriptionText>
               The most effective way to perfect a language is by immersing
               yourself in it. Rosetta Stone for Enterprise delivers an
               effective end-to-end experience, founded on a wealth of carefully
               structured content. Each learner has the opportunity to balance
               independent study with optional online tutoring in a way that
               fits their schedule and language learning goals.
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
               <ImgBook
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
               />
               <ImgStar
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Star}
                  loading="lazy"
               />
               <ImgStar2
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Star}
                  loading="lazy"
               />
               <ImgStar3
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Star}
                  loading="lazy"
               />

               <ImgC
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={C}
                  loading="lazy"
               />
               <ImgB
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={B}
                  loading="lazy"
               />
               <ImgBus
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Bus}
                  loading="lazy"
               />
               <ImgYellowCard
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={YellowCard}
                  loading="lazy"
               />
               <ImgMug
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Mug}
                  loading="lazy"
               />
               <ImgPoint
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Point}
                  loading="lazy"
               />
               <ImgPoint2
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Point}
                  loading="lazy"
               />
               <ImgPoint3
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Point}
                  loading="lazy"
               />
               <ImgPoint4
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Point}
                  loading="lazy"
               />
               <ImgPoint5
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={Point}
                  loading="lazy"
               />
               <ImgPointBritain
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={PointBritain}
                  loading="lazy"
               />
               <ImgA
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  src={A}
                  loading="lazy"
               />
            </ChildContainer>
         </StyledImgCon>
      </Description>
   )
}

export default UserExperience

const StyledImgCon = styled('div')(() => ({
   marginRight: '30rem',
}))

const Description = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginLeft: '81px',
   gap: '6.5rem',
   maxWidth: '1600px',
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
   width: ' 44.12px',
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
   width: ' 54.44px',
   height: ' 50px',
}))

const ImgTutoring = styled('img')(() => ({
   width: ' 55.56px',
   height: '50px',
}))

const ImgBackground = styled('img')(() => ({
   marginTop: '17px',
   width: '27.52988rem',
   height: '26.25rem',
}))

const ChildContainer = styled(motion.div)(() => ({
   position: 'absolute',
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
}))

const ImgBook = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '2',
   width: '22.11994rem',
   height: '18.65006rem',
   left: '52.5rem',
   top: '6.5rem',
}))

const ImgLearn = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '29.5rem',
   bottom: '11rem',
}))

const ImgReading = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '3',
   left: '43.8rem',
   bottom: '8rem',
}))

const ImgStar = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '18.7rem',
   bottom: '0.1rem',
}))

const ImgStar2 = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '35.35rem',
   bottom: '11.5rem',
}))

const ImgStar3 = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '10',
   left: '35.4rem',
   top: '6.65rem',
}))

const ImgC = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '3',
   left: '30rem',
   top: '7.2rem',
}))

const ImgB = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '11.5rem',
   bottom: '3.5rem',
}))

const ImgBus = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '10rem',
   top: '7.75rem',
}))

const ImgYellowCard = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '25.3rem',
   top: '5rem',
}))

const ImgMug = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '23.5rem',
   bottom: '3.5rem',
}))

const ImgPoint = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '0.7rem',
   top: '1.4rem',
}))

const ImgPoint2 = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '8.5rem',
   top: '6.2rem',
}))
const ImgPoint3 = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '16.7rem',
   top: '3.6rem',
}))
const ImgPoint4 = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '17rem',
   bottom: '7.3rem',
}))

const ImgPoint5 = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '4',
   left: '2rem',
   bottom: '13.2rem',
}))

const ImgPointBritain = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '3',
   left: '4rem',
   bottom: '12.5rem',
}))
const ImgA = styled(motion.img)(() => ({
   position: 'relative',
   zIndex: '3',
   left: '7.3rem',
   bottom: '12.5rem',
}))

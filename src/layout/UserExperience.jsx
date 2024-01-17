import { motion } from 'framer-motion'
import { Typography, styled } from '@mui/material'
import ExtensiveIcon from '../assets/icons/svgs/extensive.svg'
import SpeechIcon from '../assets/icons/svgs/speech.svg'
import TutoringIcon from '../assets/icons/svgs/tutoring.svg'
import AccessibleIcon from '../assets/icons/svgs/accessible.svg'
// eslint-disable-next-line no-unused-vars
import Star from '../assets/icons/svgs/star.svg'
import Reading from '../assets/icons/svgs/reading.svg'
// eslint-disable-next-line no-unused-vars
import Mug from '../assets/icons/svgs/mug.svg'
// eslint-disable-next-line no-unused-vars
import PointBritain from '../assets/icons/svgs/pointBritain.svg'
// eslint-disable-next-line no-unused-vars
import Point from '../assets/icons/svgs/point.svg'
// eslint-disable-next-line no-unused-vars
import YellowCard from '../assets/icons/svgs/yellowCard.svg'
import Learn from '../assets/icons/svgs/learn.svg'
// eslint-disable-next-line no-unused-vars
import C from '../assets/icons/svgs/c.svg'
// eslint-disable-next-line no-unused-vars
import Bus from '../assets/icons/svgs/bus.svg'
import Book from '../assets/icons/svgs/book.svg'
import Background from '../assets/icons/svgs/background.svg'
// eslint-disable-next-line no-unused-vars
import B from '../assets/icons/svgs/b.svg'

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
//          duration: 2.5,
//          repeat: Infinity,
//          repeatType: 'reverse',
//       },
//    },
// }

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
         <div>
            <ImgBackground backgroundImage={Background}>
               <ChildContainer>
                  <ImgBook
                     // variants={animate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={Book}
                     loading="lazy"
                  />
                  <ImgLearn
                     // variants={animate}
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={Learn}
                     loading="lazy"
                  />
                  <ImgReading
                     // variants={animate}/
                     initial="offscreen"
                     whileInView="onscreen"
                     animate="animate"
                     src={Reading}
                     loading="lazy"
                  />
               </ChildContainer>
            </ImgBackground>
         </div>
      </Description>
   )
}

export default UserExperience

const Description = styled('div')(() => ({
   display: 'flex',
   justifyContent: 'space-between',
   marginLeft: '81px',
}))
const ContainerOfExperience = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '74px',
}))
const StyledBlocks = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '26px',
   '& .MuiTypography-root': {
      width: '160px',
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

const ImgText = styled(Typography)(() => ({
   width: '160px',
   height: '44px',
   fontWeight: '400',
   color: '#23212A',
   lineHeight: '140%',
}))

const Container = styled('div')(() => ({
   display: 'flex',
   gap: '28.58px',
   alignItems: 'center',
   marginTop: '40px',
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

const ImgBackground = styled('div')(() => ({
   // position: 'relative',
   // marginTop: '17px',
   // marginRight: '154.19px',
   // width: '115rem',
   // backgroundImage: `url(${backgroundImage})`,
   // backgroundPosition: 'center',
   // backgroundRepeat: 'no-repeat',
}))

const ChildContainer = styled(motion.div)(() => ({
   // position: 'absolute',
   // top: 0,
   // left: 0,
   // right: 0,
   // bottom: 0,
}))

const ImgBook = styled(motion.img)(() => ({
   // position: 'relative',
   // zIndex: '2',
   // left: '3.5rem',
   // top: '4.5rem',
}))

const ImgLearn = styled(motion.img)(() => ({
   // position: 'relative',
   // zIndex: '4',
   // right: '20rem',
   // bottom: '13rem',
}))

const ImgReading = styled(motion.img)(() => ({
   // position: 'relative',
   // zIndex: '3',
   // left: '21.5rem',
   // bottom: '14rem',
}))

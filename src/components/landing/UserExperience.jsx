import { motion } from 'framer-motion'
import { Box, Typography, styled } from '@mui/material'
import {
   AccessibleIcon,
   ExtensiveIcon,
   SpeechIcon,
   TutoringIcon,
} from '../../assets/icons'
import {
   BackgroundImageUserExperience,
   BookImage,
   LearnImage,
   ReadingImage,
} from '../../assets/images'

const ANIMATE = {
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

const PULSE_ANIMATION = {
   animate: {
      scale: [0.9, 0.95, 0.9],
      transition: {
         duration: 2,
         repeat: Infinity,
      },
   },
}

const UserExperience = () => (
   <StyledContainer>
      <Box className="content">
         <Box className="description">
            <Typography variant="h3" className="title">
               Unparalleled user experience
            </Typography>

            <Typography className="subtitle">
               The most effective way to perfect a language is by immersing
               yourself in it. Rosetta Stone for Enterprise delivers an
               effective end-to-end experience, founded on a wealth of carefully
               structured content. Each learner has the opportunity to balance
               independent study with optional online tutoring in a way that
               fits their schedule and language learning goals.
            </Typography>

            <Box className="blocks">
               <Box className="block">
                  <Box className="element">
                     <StyledAccessibleIcon />
                     <Typography>Accessible anytime, anywhere</Typography>
                  </Box>

                  <Box className="element">
                     <StyledExtensiveIcon />
                     <Typography>Extensive business content</Typography>
                  </Box>
               </Box>

               <Box className="block">
                  <Box className="element">
                     <StyledSpeechIcon />
                     <Typography>Leading speech recognition</Typography>
                  </Box>

                  <Box className="element">
                     <StyledTutoringIcon />
                     <Typography>Unlimited live tutoring</Typography>
                  </Box>
               </Box>
            </Box>
         </Box>
         <StyledImageList>
            <img
               src={BackgroundImageUserExperience}
               alt="background"
               className="background-image"
            />
            <StyledAnimationImage>
               <StyledBookImage
                  src={BookImage}
                  variants={PULSE_ANIMATION}
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  loading="lazy"
               />
               <StyledLearnImage
                  src={LearnImage}
                  variants={ANIMATE}
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  loading="lazy"
               />
               <StyledReadingImage
                  src={ReadingImage}
                  variants={ANIMATE}
                  initial="offscreen"
                  whileInView="onscreen"
                  animate="animate"
                  loading="lazy"
               />
            </StyledAnimationImage>
         </StyledImageList>
      </Box>
   </StyledContainer>
)

export default UserExperience

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: '#FEF5E8',
   maxWidth: '100%',
   [theme.breakpoints.down('lg')]: {
      width: '100%',
   },

   '& .content': {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '6.5rem',
      [theme.breakpoints.down('lg')]: {
         position: 'relative',
         top: '1rem',
         right: '19rem',
         gap: '0rem',
      },
   },

   '& .description': {
      [theme.breakpoints.down('lg')]: {
         position: 'relative',
         left: '10rem',
      },
   },

   '& .title': {
      fontSize: '2.5rem',
      fontWeight: '700',
      width: '21.125rem',
      color: '#3752B4',
   },

   '& .subtitle': {
      width: '36rem',
      color: '#23212A',
      fontWeight: '400',
      marginTop: '2.125rem',
      [theme.breakpoints.down('lg')]: {
         width: '15rem',
      },
   },

   '& .blocks': {
      display: 'flex',
      flexDirection: 'column',
      gap: '3.31rem',
      marginTop: '2.69rem',

      '& .block': {
         display: 'flex',
         gap: '4.24rem',

         '& .MuiTypography-root': {
            width: '150px',
            color: theme.palette.primary.blackGrey,
            fontWeight: '400',
            lineHeight: '140%',
         },

         '& .element': {
            display: 'flex',
            gap: '1.61rem',
         },
      },
   },
}))

const StyledAccessibleIcon = styled(AccessibleIcon)(() => ({
   width: '2.755rem',
   height: '3.125rem',
}))

const StyledSpeechIcon = styled(SpeechIcon)(() => ({
   width: '2.4375rem',
   height: '3.125rem',
}))
const StyledExtensiveIcon = styled(ExtensiveIcon)(() => ({
   width: '3.4025rem',
   height: '3.125rem',
}))

const StyledTutoringIcon = styled(TutoringIcon)(() => ({
   width: '3.475rem',
   height: '3.125rem',
}))

const StyledImageList = styled('div')(({ theme }) => ({
   [theme.breakpoints.down('lg')]: {
      position: 'absolute',
      left: '30rem',
   },

   '& .background-image': {
      marginTop: '1.0625rem',
      width: '27.52988rem',
      height: '26.25rem',
      marginLeft: '3rem',
   },
}))

const StyledAnimationImage = styled(motion.div)(() => ({
   position: 'relative',
   right: '48rem',
   bottom: '28rem',
}))

const StyledBookImage = styled(motion.img)(() => ({
   position: 'absolute',
   width: '22.11994rem',
   height: '18.65006rem',
   left: '52.5rem',
   top: '6.5rem',
   animation: `${PULSE_ANIMATION} 2s infinite`,
}))

const StyledLearnImage = styled(motion.img)(() => ({
   width: '5.312rem',
   height: '3.65719rem',
   position: 'relative',
   left: '52rem',
   top: '5rem',
}))

const StyledReadingImage = styled(motion.img)(() => ({
   width: '5.17588rem',
   height: '3.52131rem',
   position: 'relative',
   zIndex: '10',
   left: '66rem',
   top: '7rem',
}))

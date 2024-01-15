import { Grid, Typography, styled } from '@mui/material'
import { DefaultPlayer } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion'
import video1 from '../assets/videos/video1.mp4'
import video2 from '../assets/videos/video2.mp4'
import video3 from '../assets/videos/video3.mp4'
import intro from '../assets/images/intro.png'
import { textAnimation } from '../utils/contants/animations'

const videos = [
   {
      id: 1,
      intro,
      video: video1,
      title: 'Test Overview',
      videosTime: 'Duration 5:03',
   },
   {
      id: 2,
      intro,
      video: video2,
      title: 'Test Walkthrough',
      videosTime: 'Duration 2:38',
   },
   {
      id: 3,
      intro,
      video: video3,
      title: 'Integrated Subscores',
      videosTime: 'Duration 5:21',
   },
]

const videosAnimation = {
   hidden: {
      opacity: 0,
      y: 100,
   },
   visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1 },
   }),
}

const StyledUsefulVideos = () => (
   <StyledContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
   >
      <StyledFirstCon>
         <StyledTitleContainer variants={textAnimation}>
            <StyledTitle> Useful videos </StyledTitle>
         </StyledTitleContainer>
         <StyledSecondCon>
            {videos.map(({ id, intro, title, video, videosTime }) => (
               <StyledVideoContainer
                  key={id}
                  variants={videosAnimation}
                  custom={id}
               >
                  <StyledVideo
                     controle={[
                        'PlayPause',
                        'Seek',
                        'Time',
                        'Volume',
                        'FullScreen',
                     ]}
                     poster={intro}
                  >
                     <source src={video} type="video/webm" />
                  </StyledVideo>

                  <StyledVideoTitle>{title}</StyledVideoTitle>
                  <StyledVideosTime>{videosTime}</StyledVideosTime>
               </StyledVideoContainer>
            ))}
         </StyledSecondCon>
      </StyledFirstCon>
   </StyledContainer>
)

export default StyledUsefulVideos

const StyledContainer = styled(motion(Grid))({
   background: '#F0F0DC',
})

const StyledFirstCon = styled(Grid)({
   display: 'flex',
   margin: '0 auto',
   flexDirection: 'column',
})

const StyledTitleContainer = styled(motion(Grid))({
   textAlign: 'center',
})

const StyledTitle = styled(Typography)(({ theme }) => ({
   fontWeight: '700',
   fontSize: '40px',
   lineHeight: '48px',
   color: theme.palette.primary.dullBlue,
   marginTop: '138px',
}))

const StyledSecondCon = styled(Grid)({
   display: 'flex',
   justifyContent: 'space-evenly',
   flexWrap: 'wrap',
   marginBottom: '120px',
   marginTop: '48px',
})

const StyledVideo = styled(DefaultPlayer)(() => ({
   borderRadius: '16px 16px 0px 0px',
   marginBottom: '-7px',
   width: '370px',
   height: '261px',
   '& .rh5v-Volume_icon, .rh5v-Fullscreen_icon, .rh5v-PlayPause_icon': {
      width: '30px',
      height: '30px',
   },
}))

const StyledVideoContainer = styled(motion(Grid))(({ theme }) => ({
   background: theme.palette.primary.white,
   border: '1px solid #DDDDDD',
   borderRadius: '16px',
   transform: 'matrix(1, 0, 0, 1, 0, 0)',
   cursor: 'pointer',
   '&:hover': {
      background: theme.palette.primary.lightGray,
   },
}))

const StyledVideoTitle = styled(Typography)(({ theme }) => ({
   fontWeight: 'bolder',
   fontSize: '20px',
   lineHeight: '24px',
   color: theme.palette.primary.main,
   marginTop: '16px',
   marginLeft: '20px',
   marginBottom: '10px',
}))

const StyledVideosTime = styled(Typography)({
   fontWeight: '400',
   fontSize: '18px',
   lineHeight: '21px',
   color: '#212629',
   marginLeft: '20px',
   marginBottom: '16px',
})

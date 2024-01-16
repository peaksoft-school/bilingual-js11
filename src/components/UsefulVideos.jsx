import { Grid, Typography, styled } from '@mui/material'
import { DefaultPlayer } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import { motion } from 'framer-motion'
import { videos } from '../utils/contants/videosArr'
import { textAnimation } from '../utils/contants/animations'

const videosAnimation = {
   hidden: {
      opacity: 0,
      y: '6.25rem',
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
   fontSize: '2.5rem',
   lineHeight: '3rem',
   color: theme.palette.primary.dullBlue,
   marginTop: '8.625rem',
}))

const StyledSecondCon = styled(Grid)({
   display: 'flex',
   justifyContent: 'space-evenly',
   flexWrap: 'wrap',
   marginBottom: '7.5rem',
   marginTop: '3rem',
})

const StyledVideo = styled(DefaultPlayer)(() => ({
   borderRadius: '1rem 1rem 0 0',
   marginBottom: '-0.4375rem',
   width: '23.125rem',
   height: '16.3125rem',
   '& .rh5v-Volume_icon, .rh5v-Fullscreen_icon, .rh5v-PlayPause_icon': {
      width: '1.875rem',
      height: '1.875rem',
   },
}))

const StyledVideoContainer = styled(motion(Grid))(({ theme }) => ({
   background: theme.palette.primary.white,
   border: '0.0625rem solid #DDDDDD',
   borderRadius: '1rem',
   transform: 'matrix(1, 0, 0, 1, 0, 0)',
   cursor: 'pointer',
   '&:hover': {
      background: theme.palette.primary.lightGray,
   },
}))

const StyledVideoTitle = styled(Typography)(({ theme }) => ({
   fontWeight: 'bolder',
   fontSize: '1.25rem',
   lineHeight: '1.5rem',
   color: theme.palette.primary.main,
   marginTop: '1rem',
   marginLeft: '1.25rem',
   marginBottom: '0.625rem',
}))

const StyledVideosTime = styled(Typography)({
   fontWeight: '400',
   fontSize: '1.125rem',
   lineHeight: '1.3125rem',
   color: '#212629',
   marginLeft: '1.25rem',
   marginBottom: '1rem',
})

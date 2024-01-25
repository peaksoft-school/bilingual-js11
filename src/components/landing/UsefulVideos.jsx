import { Box, Typography, styled } from '@mui/material'
import { DefaultPlayer } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import { VIDEOS } from '../../utils/constants/index'

const ANIMATE_VIDEO = {
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

const UsefulVideos = () => (
   <StyledContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.4 }}
   >
      <Box className="box">
         <Typography className="title" variant="h2">
            Useful videos
         </Typography>

         <Box className="videos">
            {VIDEOS.map(({ id, poster, name, video, duration }) => (
               <StyledVideoBox key={id} variants={ANIMATE_VIDEO} custom={id}>
                  <StyledVideo
                     poster={poster}
                     controle={[
                        'PlayPause',
                        'Seek',
                        'Time',
                        'Volume',
                        'FullScreen',
                     ]}
                  >
                     <source src={video} type="video/webm" />
                  </StyledVideo>

                  <Typography className="name">{name}</Typography>

                  <Typography className="duration">{duration}</Typography>
               </StyledVideoBox>
            ))}
         </Box>
      </Box>
   </StyledContainer>
)

export default UsefulVideos

const StyledContainer = styled(Box)(({ theme }) => ({
   background: '#FEF5E8',

   '& > .box': {
      display: 'flex',
      maxWidth: '1600px',
      width: '100%',
      margin: '0 auto',
      flexDirection: 'column',

      '& > .title': {
         textAlign: 'center',
         fontWeight: '700',
         fontSize: '2.5rem',
         lineHeight: '3rem',
         color: theme.palette.primary.dullBlue,
         marginTop: '8.625rem',
      },

      '& > .videos': {
         display: 'flex',
         justifyContent: 'space-evenly',
         flexWrap: 'wrap',
         marginBottom: '7.5rem',
         marginTop: '3rem',
      },
   },
}))

const StyledVideoBox = styled(Box)(({ theme }) => ({
   background: theme.palette.primary.white,
   border: '0.0625rem solid #DDDDDD',
   borderRadius: '1rem',
   transform: 'matrix(1, 0, 0, 1, 0, 0)',
   cursor: 'pointer',

   '&:hover': {
      background: theme.palette.primary.lightGray,
   },

   '& .name': {
      fontWeight: 'bolder',
      fontSize: '1.25rem',
      lineHeight: '1.5rem',
      color: theme.palette.primary.main,
      marginTop: '1rem',
      marginLeft: '1.25rem',
      marginBottom: '0.625rem',
   },

   '& .duration': {
      fontWeight: '400',
      fontSize: '1.125rem',
      lineHeight: '1.3125rem',
      color: '#212629',
      marginLeft: '1.25rem',
      marginBottom: '1rem',
   },
}))

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

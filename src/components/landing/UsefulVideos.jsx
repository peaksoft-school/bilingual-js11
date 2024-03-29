import { useEffect, useRef, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { DefaultPlayer } from 'react-html5video'
import { motion } from 'framer-motion'
import { VIDEOS } from '../../utils/constants/index'
import 'react-html5video/dist/styles.css'

const UsefulVideos = () => {
   const [inView, setInView] = useState(false)

   const containerRef = useRef(null)

   useEffect(() => {
      const handleScroll = () => {
         const container = containerRef.current

         if (container) {
            const rect = container.getBoundingClientRect()

            const isVisible = rect.top < window.innerHeight * 0.4

            setInView(isVisible)
         }
      }

      window.addEventListener('scroll', handleScroll)

      handleScroll()

      return () => {
         window.removeEventListener('scroll', handleScroll)
      }
   }, [])

   return (
      <StyledContainer
         ref={containerRef}
         initial="hidden"
         animate={inView ? 'visible' : 'hidden'}
         viewport={{ amount: 0.4 }}
      >
         <Box className="box">
            <Typography className="title" variant="h2">
               Useful videos
            </Typography>

            <Box className="videos">
               {VIDEOS.map(({ id, poster, name, video, duration }, i) => {
                  let animationDuration

                  if (i === 0) animationDuration = 0.5
                  else if (i === 1) animationDuration = 1
                  else animationDuration = 1.5

                  return (
                     <StyledVideoCard
                        key={id}
                        inview={inView.toString()}
                        animationduration={animationDuration.toString()}
                     >
                        <Box key={id} className="box">
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

                           <Typography className="duration">
                              {duration}
                           </Typography>
                        </Box>
                     </StyledVideoCard>
                  )
               })}
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default UsefulVideos

const StyledContainer = styled(Box)(({ theme }) => ({
   background: theme.palette.secondary.main,

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
         gap: '50px',
         marginBottom: '7.5rem',
         marginTop: '3rem',
      },
   },
}))

const StyledVideoCard = styled(motion.div)(
   ({ theme, inview, animationduration }) => ({
      opacity: inview === 'true' ? 1 : 0,
      transform: `translateY(${inview === 'true' ? 0 : 90}px)`,
      transition: `opacity ${animationduration}s ease-out, transform ${animationduration}s ease-out`,

      '&:hover': {
         transform: 'scale(1.05)',
         boxShadow: '5px 5px 50px black',
         borderRadius: '1rem',
      },

      '& > .box': {
         background: theme.palette.primary.white,
         border: '0.0625rem solid #DDDDDD',
         borderRadius: '1rem',
         transform: 'matrix(1, 0, 0, 1, 0, 0)',
         cursor: 'pointer',

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
      },
   })
)

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

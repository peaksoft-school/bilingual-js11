import { useRef, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { GradientListenerIcon } from '../../../assets/icons'
import Button from '../../../components/UI/buttons/Button'
import TextArea from '../../../components/UI/TextArea'

const TypeWhatYouHear = ({ FILE_URL, numberOfReplaysLeft }) => {
   const [textArea, setTextArea] = useState('')
   const [isPlaying, setIsPlaying] = useState(false)
   const [replaysLeft, setReplaysLeft] = useState(numberOfReplaysLeft)

   const soundRef = useRef(null)

   const textAreaHandler = (e) => setTextArea(e.target.value)

   const soundHandler = () => {
      if (FILE_URL) {
         if (isPlaying) {
            soundRef.current.pause()
            soundRef.current.currentTime = 0

            setIsPlaying(false)
         } else {
            soundRef.current.play()

            setIsPlaying(true)
            if (replaysLeft !== 0) {
               setReplaysLeft((prevReplays) => prevReplays - 1)
            }

            if (replaysLeft === 0) {
               soundRef.current.pause()
            }
         }
      }
   }

   const nextHandler = () => {
      setTextArea('')
   }

   return (
      <Container>
         <StyledContainer>
            <Box className="type-what-you-hear">
               <Typography className="title">
                  Type the statement you hear
               </Typography>
               <audio
                  ref={soundRef}
                  className="audio"
                  type="audio/mp3"
                  controls
               >
                  <track
                     kind="captions"
                     srcLang="english"
                     label="Type What you hear"
                  />
                  <source src={FILE_URL} type="audio/mp3" />
               </audio>
               <Box className="volume-block">
                  <GradientListenerIcon
                     className={`volume-icon ${
                        replaysLeft === 0 ? 'gray' : ''
                     }`}
                     onClick={soundHandler}
                     disabled={!replaysLeft}
                  />
                  <Box className="text-area-and-replays">
                     <TextArea
                        className="text-area"
                        placeholder="Your response"
                        rows={5}
                        value={textArea}
                        handleChange={textAreaHandler}
                     />
                     <Typography
                        className={
                           replaysLeft !== 0 ? 'number-of-replays' : 'attempts'
                        }
                     >
                        {!replaysLeft
                           ? 'Your attempts are over !'
                           : `Number of replays left: ${replaysLeft}`}
                     </Typography>
                  </Box>
               </Box>
            </Box>
            <Box className="container-button">
               <Button
                  disabled={!textArea}
                  onClick={nextHandler}
                  style={{ padding: '12px 54px' }}
               >
                  NEXT
               </Button>
            </Box>
         </StyledContainer>
      </Container>
   )
}

export default TypeWhatYouHear

const Container = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const StyledContainer = styled(Box)(({ theme, disabled }) => ({
   width: '56.25rem',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '3.125rem',
   borderRadius: '0.5rem',
   boxShadow: '0 0.125rem 0.375rem rgba(0, 0, 0, 0.2)',
   '& .title': {
      fontFamily: 'Poppins',
      fontStyle: 'inherit',
      fontWeight: 400,
      fontSize: '1.75rem',
      color: '#4C4859',
      marginLeft: '14.5rem',
      marginTop: '3.125rem',
   },
   '& .audio': {
      display: 'none',
   },
   '& .number-of-replays': {
      width: '49%',
      height: '1.25rem',
      marginTop: '0.5rem',
      fontFamily: 'Poppins',
      fontWeight: '400',
      fontSize: '1rem',
      color: '#AFAFAF',
   },
   '& .attempts': {
      width: '49%',
      height: '1.25rem',
      marginTop: '0.5rem',
      fontFamily: 'Poppins',
      fontWeight: '400',
      fontSize: '1rem',
      color: 'red',
   },
   '& .volume-icon': {
      width: '5.5rem',
      height: '5.5rem',
      cursor: 'pointer',
      pointerEvents: disabled ? 'none' : '',
      color: 'primary',
      transition: '0.3s',
      '&:hover': {
         transform: 'scale(1.06)',
         path: {
            stroke: theme.palette.background.paper,
         },
      },
      '&:active': {
         path: {
            stroke: theme.palette.grey[600],
         },
      },
   },

   '& .gray': {
      opacity: '0.3',
   },

   '& .volume-block': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '5rem',
   },
   '& .text-area-and-replays': {
      width: '81.98%',
      marginTop: '2.5rem',
      marginLeft: '7.1875rem',
   },
   '& .type-what-you-hear': {
      width: '91.5%',
      marginTop: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
   },
   '& .container-button': {
      width: '91.5%',
      display: 'flex',
      justifyContent: 'end',
      marginTop: '3.75rem',
      borderTop: '0.0956rem solid #D4D0D0',
      padding: '2rem 0  0 0 ',
      marginBottom: '3.125rem',
   },
   '& .text-area': {
      width: '30rem',
      height: '100%',
      fontFamily: 'Poppins',
      '& .MuiInputBase-root': {
         fontFamily: 'Poppins',
         borderRadius: '0.5rem',
      },
      ' & .MuiInputBase-input': {
         fontFamily: 'Poppins',
      },
   },
}))

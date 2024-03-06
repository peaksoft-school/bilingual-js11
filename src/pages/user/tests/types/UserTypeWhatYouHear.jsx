import { useDispatch } from 'react-redux'
import { useRef, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import TextArea from '../../../../components/UI/TextArea'
import Button from '../../../../components/UI/buttons/Button'
import { GradientListenerIcon } from '../../../../assets/icons'
import { userQuestionActions } from '../../../../store/slice/user/userSlice'

const TypeWhatYouHear = ({ id, FILE_URL, numberOfReplays }) => {
   const [textArea, setTextArea] = useState('')
   const [replaysLeft, setReplaysLeft] = useState(numberOfReplays)
   const soundRef = useRef(null)
   const [isPlaying, setIsPlaying] = useState(false)

   const textAreaHandler = (e) => setTextArea(e.target.value)

   const dispatch = useDispatch()

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
      const dataAnswer = {
         data: textArea,
         id,
         replaysLeft,
      }
      dispatch(userQuestionActions.addAnswer(dataAnswer))
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
                     <NumberOfReplaysLeft>
                        Number of replays left: {replaysLeft}
                     </NumberOfReplaysLeft>
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
   width: '900px',
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   marginTop: '50px',
   borderRadius: '8px',
   boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
   '& .title': {
      fontFamily: 'Poppins',
      fontStyle: 'inherit',
      fontWeight: 400,
      fontSize: '1.75rem',
      color: '#4C4859',
      marginLeft: '14.5rem',
      marginTop: '50px',
   },
   '& .audio': {
      display: 'none',
   },
   '& .volume-icon': {
      width: '88px',
      height: '88px',
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
      marginTop: '40px',
      marginLeft: '115px',
   },
   '& .type-what-you-hear': {
      width: '91.5%',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
   },
   '& .container-button': {
      width: '91.5%',
      display: 'flex',
      justifyContent: 'end',
      marginTop: '3.75rem',
      borderTop: '1.5296px solid #D4D0D0',
      padding: '32px 0  0 0 ',
      marginBottom: '50px',
   },
   '& .text-area': {
      width: '480px ',
      height: '100%',
      fontFamily: 'Poppins',
      '& .MuiInputBase-root': {
         fontFamily: 'Poppins',
         borderRadius: '8px',
      },
      ' & .MuiInputBase-input': {
         fontFamily: 'Poppins',
      },
   },
}))

const NumberOfReplaysLeft = styled(Box)(() => ({
   width: '49%',
   height: '20px',
   marginTop: '8px',
   fontFamily: 'Poppins',
   fontStyle: 'normal',
   fontWeight: 400,
   fontSize: '1rem',
   color: '#AFAFAF',
}))

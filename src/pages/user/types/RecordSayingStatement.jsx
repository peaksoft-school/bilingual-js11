import { useEffect, useRef, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import WaveSurfer from 'wavesurfer.js'
import { RecordingIcon, SpeakManIcon } from '../../../assets/icons'
import Notification from '../../../components/Notification'
import Button from '../../../components/UI/buttons/Button'
import { AudioWaveGif } from '../../../assets/images'

const RecordSaying = ({ paragraph, questionId }) => {
   const [isRecording, setIsRecording] = useState(false)
   const [mediaRecorder, setMediaRecorder] = useState(null)
   const [recordedChunks, setRecordedChunks] = useState([])
   const [isRecordingFinished, setIsRecordingFinished] = useState(false)
   const waveformRef = useRef(null)
   const wavesurferRef = useRef(null)
   const [showNextButton, setShowNextButton] = useState(false)
   const [titleWaveformUrl, setTitleWaveformUrl] = useState(null)

   useEffect(() => {
      if (isRecordingFinished) {
         if (recordedChunks.length > 0) {
            const blob = new Blob(recordedChunks, { type: 'audio/webm' })
            const url = URL.createObjectURL(blob)
            wavesurferRef.current.load(url)
            setTitleWaveformUrl(url)
            setShowNextButton(true)
         } else {
            setShowNextButton(false)
         }
      }
   }, [recordedChunks, isRecordingFinished])

   useEffect(() => {
      const wavesurfer = WaveSurfer.create({
         container: waveformRef.current,
         cursorColor: 'white',
      })
      wavesurferRef.current = wavesurfer

      return () => {
         wavesurfer.destroy()
      }
   }, [])

   const toggleRecording = async () => {
      if (isRecording) {
         mediaRecorder.stop()
         setIsRecording(false)
      } else {
         try {
            const stream = await navigator.mediaDevices.getUserMedia({
               audio: true,
            })
            const recorder = new MediaRecorder(stream)

            recorder.addEventListener('dataavailable', (event) => {
               if (event.data.size > 0) {
                  setRecordedChunks((prevChunks) => [...prevChunks, event.data])
                  const blob = new Blob([event.data], { type: 'audio/webm' })
                  const url = URL.createObjectURL(blob)
                  wavesurferRef.current.load(url)
               }
            })

            recorder.addEventListener('stop', () => {
               setIsRecordingFinished(true)
            })

            recorder.start()
            setIsRecording(true)
            setMediaRecorder(recorder)
         } catch (error) {
            console.error('Error accessing microphone:', error)
         }
      }
   }

   const nextButtonHandler = async () => {
      if (recordedChunks.length === 0) {
         Notification('error', 'Recording', 'Please record your saying')
      }
      try {
         const audioVoice = {
            audioFile: titleWaveformUrl,
            questionId,
         }
         console.log(audioVoice)
         setRecordedChunks([])
         setIsRecordingFinished(false)
      } catch (error) {
         Notification('error', 'File', 'Something went wrong')
      }
   }

   return (
      <Container>
         <StyledContainer>
            <Box>
               <Box className="type-what-you-hear">
                  <Typography className="title">
                     Record yourself saying the statement below:
                  </Typography>
                  <Box className="block">
                     <SpeakManIcon className="speak" />
                     <Typography>”{paragraph}”.</Typography>
                  </Box>
               </Box>
               <Box className="container-button">
                  {isRecording ? <RecordingIcon /> : null}
                  <Box ref={waveformRef} />
                  {isRecording ? (
                     <img
                        src={AudioWaveGif}
                        alt="audio-wave-give"
                        className="audio"
                     />
                  ) : null}
                  <Box>
                     {!showNextButton && (
                        <Button onClick={toggleRecording}>
                           {isRecording ? 'STOP RECORDING' : 'RECORD NOW'}
                        </Button>
                     )}
                     {showNextButton && (
                        <Button
                           onClick={nextButtonHandler}
                           disabled={recordedChunks.length === 0}
                        >
                           NEXT
                        </Button>
                     )}
                  </Box>
               </Box>
            </Box>
         </StyledContainer>
      </Container>
   )
}

export default RecordSaying

const Container = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const StyledContainer = styled(Box)(() => ({
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
      width: '100%',
      marginBottom: '1rem',
   },
   '& .speak': {
      width: '120px',
      height: '120px',
      cursor: 'pointer',
      transition: '0.3s',
      marginTop: '1.5rem',
   },

   '& .wave-block': {
      width: '100%',
      gap: '201px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   '& .block': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '2.3rem',
   },
   '& .type-what-you-hear': {
      width: '91.5%',
      marginTop: '2.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
   '& .container-button': {
      width: '95%',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      marginTop: '3.75rem',
      borderTop: '0.0956rem solid #D4D0D0',
      gap: '6rem',
      marginLeft: '1.5rem',
   },
   '& .audio': {
      marginRight: '9rem',
      width: '100px',
      height: '46px',
   },
}))

import { useState, useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import { Box, Typography, styled } from '@mui/material'
import Button from './buttons/Button'
import { RecordingIcon, SpeakManIcon } from '../../assets/icons'

const RecordSaying = () => {
   const [isRecording, setIsRecording] = useState(false)
   const [mediaRecorder, setMediaRecorder] = useState(null)
   const [recordedChunks, setRecordedChunks] = useState([])
   const waveformRef = useRef(null)
   const wavesurferRef = useRef(null)

   useEffect(() => {
      const wavesurfer = WaveSurfer.create({
         container: waveformRef.current,
         waveColor: '#3A10E5',
         progressColor: '#3A10E5',
         cursorColor: 'white',
         barWidth: 4,
         barHeight: 1,
         backend: 'MediaElement',
      })
      const containerElement = waveformRef.current

      containerElement.style.borderRadius = '10px'

      wavesurferRef.current = wavesurfer

      return () => {
         wavesurfer.destroy()
      }
   }, [])

   useEffect(() => {
      if (recordedChunks.length > 0) {
         const blob = new Blob(recordedChunks, { type: 'audio/webm' })
         const url = URL.createObjectURL(blob)
         wavesurferRef.current.load(url)
      }
   }, [recordedChunks])

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

            recorder.addEventListener('start', () => {
               const wavesurfer = wavesurferRef.current
               wavesurfer.empty()
               wavesurfer.clearRegions()
               wavesurfer.microphone.start()
               setIsRecording(true)
            })

            recorder.addEventListener('stop', () => {
               setIsRecording(false)
               wavesurferRef.current.microphone.stop()
            })

            setMediaRecorder(recorder)
            recorder.start()
         } catch (error) {
            console.error('Error accessing microphone:', error)
         }
      }
   }
   return (
      <Container>
         <StyledContainer>
            <Box className="type-what-you-hear">
               <Typography className="title">
                  Record yourself saying the statement below:
               </Typography>
               <Box className="block">
                  <SpeakManIcon className="speak" />
                  <Typography>My uncle is at work</Typography>
               </Box>
            </Box>
            <Box className="container-button">
               {isRecording ? <RecordingIcon /> : null}
               <Box ref={waveformRef} />
               <div>
                  {isRecording ? (
                     <Button variant="contained" onClick={toggleRecording}>
                        STOP RECORDING
                     </Button>
                  ) : (
                     <>
                        {!isRecording && recordedChunks.length === 0 && (
                           <Button
                              variant="contained"
                              onClick={toggleRecording}
                           >
                              RECORD NOW
                           </Button>
                        )}
                        {!isRecording && recordedChunks.length > 0 && (
                           <Button variant="contained">NEXT</Button>
                        )}
                     </>
                  )}
               </div>
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
   },
   '& .speak': {
      width: '5.5rem',
      height: '5.5rem',
      cursor: 'pointer',
      color: 'primary',
      transition: '0.3s',
   },

   '& .wave-block': {
      width: '100%',
      gap: '201px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   '& .block': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      marginLeft: '5rem',
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
      width: '91.5%',
      display: 'flex',
      justifyContent: 'end',
      marginTop: '3.75rem',
      borderTop: '0.0956rem solid #D4D0D0',
      padding: '2rem 0  0 0 ',
      marginBottom: '3.125rem',
   },
}))

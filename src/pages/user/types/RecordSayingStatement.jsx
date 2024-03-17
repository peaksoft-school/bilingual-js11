import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Button from '../../../components/UI/buttons/Button'
import { RecordingIcon, SpeakManIcon } from '../../../assets/icons'

const RecordSayingStatement = ({ paragraph, questionId }) => {
   const [analyser, setAnalyser] = useState(null)
   const [array, setArray] = useState(null)
   const [myElements, setMyElements] = useState([])
   const [isRecording, setIsRecording] = useState(false)
   const [showNextButton, setShowNextButton] = useState(false)
   const [recordedAudio, setRecordedAudio] = useState(null)
   const [mediaRecorder, setMediaRecorder] = useState(null)

   const num = 18
   const width = 7

   useEffect(() => {
      const handleClick = () => {
         if (analyser) return

         const audioContext = new AudioContext()
         const newAnalyser = audioContext.createAnalyser()
         setAnalyser(newAnalyser)

         navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
               const src = audioContext.createMediaStreamSource(stream)
               src.connect(newAnalyser)
            })
            .catch((error) => {
               console.error(error.message)
               window.location.reload()
            })
      }

      window.onclick = handleClick

      return () => {
         window.onclick = null
      }
   }, [analyser])

   useEffect(() => {
      if (analyser) {
         const newArray = new Uint8Array(num * 2)
         setArray(newArray)
      }
   }, [analyser])

   useEffect(() => {
      if (analyser && array) {
         const loop = () => {
            window.requestAnimationFrame(loop)
            analyser.getByteFrequencyData(array)
            const elements = []
            for (let i = 0; i < num; i += 1) {
               const height = array[i + num]
               elements.push({
                  height,
                  opacity: 0.008 * height,
                  key: Math.random(),
               })
            }
            setMyElements(elements)
         }
         loop()
      }
   }, [analyser, array])

   const startRecordingHandler = () => {
      setIsRecording(true)
      setShowNextButton(false)

      navigator.mediaDevices
         .getUserMedia({ audio: true })
         .then((stream) => {
            const mediaRecorderInstance = new MediaRecorder(stream)
            const chunks = []

            mediaRecorderInstance.addEventListener('dataavailable', (event) => {
               chunks.push(event.data)
            })

            mediaRecorderInstance.addEventListener('stop', () => {
               const blob = new Blob(chunks, { type: 'audio/webm' })
               const url = URL.createObjectURL(blob)
               setRecordedAudio(url)
            })

            setMediaRecorder(mediaRecorderInstance)
            mediaRecorderInstance.start()
         })
         .catch((error) => {
            console.error('Error starting recording:', error)
         })
   }

   const stopRecordingHandler = () => {
      setIsRecording(false)
      setShowNextButton(true)
      mediaRecorder.stop()
   }

   const nextButtonHandler = async () => {
      try {
         const audioVoice = {
            audioFile: recordedAudio,
            questionId,
         }
         setMediaRecorder()
         console.log(audioVoice)
      } catch (error) {
         console.error('Something went wrong:', error)
         // Handle the error
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
                  {isRecording && <RecordingIcon />}
                  {isRecording ? (
                     <Box className="block-of-visualize">
                        {myElements.map((element) => (
                           <AudioVisualize
                              key={element.key}
                              element={element}
                              widthpx={width}
                           />
                        ))}
                     </Box>
                  ) : null}
                  <Box>
                     {!showNextButton && (
                        <Button
                           onClick={
                              isRecording
                                 ? stopRecordingHandler
                                 : startRecordingHandler
                           }
                        >
                           {!isRecording ? 'RECORD NOW' : 'STOP RECORDING'}
                        </Button>
                     )}

                     {showNextButton && (
                        <Button
                           onClick={nextButtonHandler}
                           disabled={!mediaRecorder}
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

export default RecordSayingStatement

const Container = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const AudioVisualize = styled(Box)(({ widthpx, element }) => ({
   borderRadius: '30px',
   margin: '2px',
   background: 'blue',
   width: `${widthpx}px`,
   height: `${Math.min(element.height, 120)}px`,
   opacity: element.opacity,
   marginRight: '2px',
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
   '& .block-of-visualize': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
      gap: '10rem',
      marginLeft: '1.5rem',
      padding: '2rem 0',
   },
   '& .audio': {
      marginRight: '9rem',
      width: '126px',
      height: '60px',
   },
}))

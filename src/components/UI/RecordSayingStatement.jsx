import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ReactMic } from 'react-mic'
import { RecordingIcon, SpeakManIcon } from '../../assets/icons'
import { userQuestionActions } from '../../store/slice/user/userSlice'
import Notification from '../Notification'
import Button from './buttons/Button'

const RecordSaying = ({ questionId }) => {
   const [isRecording, setRecording] = useState(false)
   const [audioBlob, setAudioBlob] = useState(null)
   const dispatch = useDispatch()

   const startRecording = () => {
      setRecording(true)
   }

   const stopRecording = () => {
      setRecording(false)
   }

   const onData = (record) => {
      setAudioBlob(record.blob)
   }

   const onStop = (record) => {
      setAudioBlob(record.blob)
   }

   const nextButtonHandler = async () => {
      if (!audioBlob) {
         Notification('error', 'Recording', 'Please record your saying')
         return
      }

      try {
         const formData = new FormData()
         formData.append('multipartFile', audioBlob, 'recording.mp3')
         // const { data } = await postFileRequest(formData)
         const newAnswer = {
            questionId,
            // numberOfPlays: 1,
            // fileUrl: data.link,
         }
         dispatch(userQuestionActions.addAnswer(newAnswer))
         setAudioBlob(null)
      } catch (error) {
         Notification('error', 'File', 'Something went wrong')
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
               <ReactMic
                  record={isRecording}
                  onData={onData}
                  onStop={onStop}
                  strokeColor="#3A10E5"
                  backgroundColor="#ffffff"
               />
               <div>
                  <Button
                     variant="contained"
                     onClick={isRecording ? stopRecording : startRecording}
                  >
                     {isRecording ? 'STOP RECORDING' : 'RECORD NOW'}
                  </Button>
                  <Button variant="contained" onClick={nextButtonHandler}>
                     NEXT
                  </Button>
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

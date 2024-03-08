import { useState, useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import Button from './buttons/Button'

const RecordingComponent = () => {
   const [isRecording, setIsRecording] = useState(false)
   const [mediaRecorder, setMediaRecorder] = useState(null)
   const [recordedChunks, setRecordedChunks] = useState([])
   const waveformRef = useRef(null)

   useEffect(() => {
      const wavesurfer = WaveSurfer.create({
         container: waveformRef.current,
         waveColor: 'gray',
         progressColor: 'black',
         cursorColor: 'red',
         barWidth: 2,
         barHeight: 1,
         backend: 'MediaElement',
      })

      if (recordedChunks.length > 0) {
         const blob = new Blob(recordedChunks, { type: 'audio/webm' })
         const url = URL.createObjectURL(blob)
         wavesurfer.load(url)
      }

      return () => {
         wavesurfer.destroy()
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
               }
            })

            recorder.start()
            setIsRecording(true)
            setMediaRecorder(recorder)
         } catch (error) {
            console.error('Error accessing microphone:', error)
         }
      }
   }

   return (
      <div>
         <Button onClick={toggleRecording}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
         </Button>
         <div ref={waveformRef} />
      </div>
   )
}

export default RecordingComponent

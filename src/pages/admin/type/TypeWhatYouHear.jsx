/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from 'react'
import { useFormik } from 'formik'
import { Box, InputLabel, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/buttons/Button'
import { PauseIcon, PlayIcon } from '../../../assets/icons'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'

const TypeWhatYouHear = () => {
   const [fileName, setFileName] = useState('')

   const [isPlaying, setIsPlaying] = useState(false)

   const [files, setFiles] = useState('')

   const audioRef = useRef(null)

   const handleToggle = () => {
      if (isPlaying) {
         audioRef.current.pause()
      } else {
         audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
   }

   const postFileRequest = async () => {
      try {
         const formData = new FormData()
         formData.append('multipartFile', files)

         await axiosInstanceFile.post('/api/awsFile', formData)
      } catch (error) {
         console.error(error)
      }
   }

   const onSubmit = (values) => {
      postFileRequest()
   }

   const { handleSubmit, values, handleChange, setFieldValue } = useFormik({
      initialValues: {
         attempts: 0,
         correctAnswer: '',
      },
      onSubmit,
   })

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      setFiles(file)

      if (file) {
         const reader = new FileReader()

         reader.readAsDataURL(file)

         setFileName(file.name)

         setFieldValue(file)

         audioRef.current.src = URL.createObjectURL(file)
      }
   }

   return (
      <Container onSubmit={handleSubmit}>
         <Box className="content">
            <Box className="replays">
               <InputLabel>
                  Number off <br />
                  Replays
               </InputLabel>

               <Input
                  className="input-replays"
                  type="number"
                  name="attempts"
                  inputProps={{ min: 0, max: 10 }}
                  value={values.attempts}
                  onChange={handleChange}
               />
            </Box>

            <Box className="file">
               <Button type="button">
                  <label htmlFor="filedInput">
                     {files ? 'REPLACE' : 'UPPLOAD'}
                  </label>
               </Button>

               <input
                  type="file"
                  id="filedInput"
                  name="fileUrl"
                  accept="audio/mp3"
                  value={values.fileUrl}
                  onChange={handleFileChange}
               />

               {files ? (
                  <button
                     type="button"
                     onClick={handleToggle}
                     className="playing"
                  >
                     {isPlaying ? <PlayIcon /> : <PauseIcon />}
                  </button>
               ) : (
                  ' '
               )}

               <Typography variant="span" className="file-name">
                  {fileName}
               </Typography>

               <audio
                  ref={audioRef}
                  style={{ display: 'none' }}
                  type="audio/mp3"
                  controls
               />
            </Box>
         </Box>

         <Box>
            <InputLabel>Correct Answer</InputLabel>

            <Input
               type="text"
               name="correctAnswer"
               value={values.correctAnswer}
               onChange={handleChange}
            />
         </Box>
      </Container>
   )
}

export default TypeWhatYouHear

const Container = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '2rem',
   gap: '2rem',

   '& > .content': {
      display: 'flex',
      gap: '2rem',
      '& > .replays': {
         display: 'table-column',

         '& > .input-replays': {
            padding: '.75rem  0.7rem .75rem 0.7rem ',
            width: '5rem',
            borderRadius: '1.5rem',
            textAlign: 'center',
            fontSize: '1.5rem',
         },
      },

      ' & .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button': {
         display: 'none',
      },

      '& > .input-file': {
         border: 'none',
      },

      '& > .file': {
         marginTop: '4rem',
         display: 'flex',
         gap: '1rem',
         alignItems: 'center',

         '& > input': {
            display: 'none',
         },

         '& .playing': {
            border: 'none',
            backgroundColor: 'white',
            marginTop: '0.3rem',
            cursor: 'pointer',
         },
      },
   },

   '& .MuiInputLabel-root': {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
      color: '#4B4759',
      marginBottom: '15px',
   },
}))

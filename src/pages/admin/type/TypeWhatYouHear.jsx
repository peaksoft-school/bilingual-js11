/* eslint-disable jsx-a11y/media-has-caption */
import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Box, InputLabel, Typography, styled } from '@mui/material'
import { PauseIcon, PlayIcon } from '../../../assets/icons'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/questions/questionSlice'
import { QUESTION_THUNK } from '../../../store/slice/admin/questions/questionThunk'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/buttons/Button'

const TypeWhatYouHear = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const { fileUrl, isLoading } = useSelector((state) => state.question)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [fileName, setFileName] = useState('')

   const [isPlaying, setIsPlaying] = useState(false)

   const [file, setFile] = useState('')

   const [attempts, setAttempts] = useState(0)

   const [correctAnswer, setCorrectAnswer] = useState('')

   const audioRef = useRef(null)

   const handleAttemptsChange = (event) => setAttempts(event.target.value)

   const handleCorrectAnswerChange = (event) =>
      setCorrectAnswer(event.target.value)

   const handleToggle = () => {
      if (isPlaying) {
         audioRef.current.pause()
      } else {
         audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
   }

   const handleSubmit = () => {
      if (selectType !== '' && +duration !== +'' && title !== '') {
         dispatch(QUESTION_ACTIONS.clearOptions())

         setSelectType('')

         setTitle('')

         setDuration('')

         const requestData = {
            title,
            duration: +duration * 60,
            fileUrl,
            attempts,
            correctAnswer,
         }

         dispatch(
            QUESTION_THUNK.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle('TYPE_WHAT_YOU_HEAR'),
                  navigate,
               },
            })
         )
      }
   }

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      setFile(file)

      if (file) {
         const reader = new FileReader()

         reader.readAsDataURL(file)

         setFileName(file.name)

         audioRef.current.src = URL.createObjectURL(file)

         dispatch(QUESTION_THUNK.postFileRequest(file))
      }
   }

   return (
      <StyledContainer>
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
                  inputProps={{ min: 0, max: 15 }}
                  value={attempts}
                  onChange={handleAttemptsChange}
               />
            </Box>

            <Box className="file">
               <Button type="button">
                  <label htmlFor="filedInput" className="label">
                     {file ? 'REPLACE' : 'UPPLOAD'}
                  </label>
               </Button>

               <input
                  type="file"
                  id="filedInput"
                  name="fileUrl"
                  accept="audio/mp3"
                  onChange={handleFileChange}
               />

               {file ? (
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
                  className="audio"
                  ref={audioRef}
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
               value={correctAnswer}
               onChange={handleCorrectAnswerChange}
            />
         </Box>

         <Box className="buttons">
            <Button variant="secondary">GO BACK</Button>
            <Button
               variant="primary"
               onClick={handleSubmit}
               disabled={
                  !selectType ||
                  !duration ||
                  !title ||
                  !correctAnswer ||
                  !attempts ||
                  !file
               }
               isLoading={isLoading}
            >
               SAVE
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default TypeWhatYouHear

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   marginTop: '2rem',
   gap: '1rem',
   width: '90%',

   '& > .content': {
      display: 'flex',
      gap: '2rem',
      '& > .replays': {
         display: 'table-column',

         '& > .input-replays': {
            '& .MuiOutlinedInput-root': {
               padding: '.75rem  0.7rem .75rem 0.7rem ',
               width: '4.5rem',
               height: '2.5rem',
               textAlign: 'center',
               fontSize: '1.2rem',
            },
         },
      },

      '& .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button': {
         display: 'none',
      },

      '& > .input-file': {
         border: 'none',
      },

      '& > .file': {
         marginTop: '2.11111rem',
         display: 'flex',
         gap: '1rem',
         alignItems: 'center',

         '& .label': {
            fontFamily: 'Poppins',
            fontWeight: '600',
         },

         '& > input': {
            display: 'none',
         },

         '& .playing': {
            border: 'none',
            backgroundColor: 'white',
            marginTop: '0.3rem',
            cursor: 'pointer',
         },

         '& .audio': {
            display: 'none',
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

   '& .buttons': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1rem',
   },
}))

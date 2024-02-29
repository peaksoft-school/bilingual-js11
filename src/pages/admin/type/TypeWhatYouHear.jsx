import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Box, InputLabel, Typography, styled } from '@mui/material'
import { PauseIcon, PlayIcon } from '../../../assets/icons'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLE } from '../../../utils/constants'
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

   const handleAttemptsChange = (e) => setAttempts(e.target.value)

   const handleCorrectAnswerChange = (e) => setCorrectAnswer(e.target.value)

   const handleToggle = () => {
      if (isPlaying) {
         audioRef.current.pause()
      } else {
         audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
   }

   const handleFileChange = (e) => {
      const file = e.target.files[0]

      if (file) {
         setFile(file)

         const reader = new FileReader()

         reader.readAsDataURL(file)

         setFileName(file.name)
         setIsPlaying(false)

         audioRef.current.src = URL.createObjectURL(file)

         dispatch(QUESTION_THUNKS.saveFile(file))
      }
   }

   const isDisabled =
      !selectType || !duration || !title || !correctAnswer || !attempts || !file

   const onSubmit = () => {
      if (
         selectType !== '' &&
         +duration !== 0 &&
         title !== '' &&
         correctAnswer !== '' &&
         file !== '' &&
         +attempts !== 0
      ) {
         const requestData = {
            title,
            duration: +duration * 60,
            fileUrl,
            attempts,
            correctAnswer,
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLE.TYPE_WHAT_YOU_HEAR
                  ),
                  navigate,
               },

               setState: {
                  selectType: setSelectType(selectType),
                  title: setTitle(title),
                  duration: setDuration(duration),
               },
            })
         )
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
                  <InputLabel htmlFor="filedInput" className="label">
                     {file ? 'REPLACE' : 'UPPLOAD'}
                  </InputLabel>
               </Button>

               <input
                  type="file"
                  id="filedInput"
                  name="fileUrl"
                  accept="audio/mp3"
                  onChange={handleFileChange}
               />

               {file && (
                  <button
                     type="button"
                     onClick={handleToggle}
                     className="playing"
                  >
                     {isPlaying ? <PlayIcon /> : <PauseIcon />}
                  </button>
               )}

               <Typography variant="span" className="file-name">
                  {fileName}
               </Typography>

               <audio
                  className="audio"
                  ref={audioRef}
                  type="audio/mp3"
                  controls
               >
                  <track
                     src="captions_en.vtt"
                     kind="captions"
                     label="english_captions"
                  />
               </audio>
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
               onClick={onSubmit}
               disabled={isDisabled}
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
            cursor: 'pointer',
            color: 'inherit',
            marginTop: '0.8rem',
         },

         '& > input': {
            display: 'none',
         },

         '& > .playing': {
            border: 'none',
            backgroundColor: 'white',
            marginTop: '0.3rem',
            cursor: 'pointer',
         },

         '& > .audio': {
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

   '& > .buttons': {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '1rem',
   },
}))

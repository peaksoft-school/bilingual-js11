import { useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Box, InputLabel, Typography, styled } from '@mui/material'
import { PauseIcon, PlayIcon } from '../../../assets/icons'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

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

   const [file, setFile] = useState('')
   const [fileName, setFileName] = useState('')
   const [attempts, setAttempts] = useState(0)
   const [isPlaying, setIsPlaying] = useState(false)
   const [correctAnswer, setCorrectAnswer] = useState('')

   const audioRef = useRef(null)

   const goBackHandler = () => navigate(-1)

   const attemptsChangeHandler = (e) => setAttempts(e.target.value)

   const correctAnswerChangeHandler = (e) => setCorrectAnswer(e.target.value)

   const toggleHandler = () => {
      if (isPlaying) {
         audioRef.current.pause()
      } else {
         audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
   }

   const changeFileHandler = (e) => {
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
      !selectType ||
      !duration ||
      !title.trim() ||
      !correctAnswer.trim() ||
      !attempts ||
      !file ||
      !fileUrl

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
            title: title.trim(),
            duration: +duration * 60,
            attempts: attempts.trim(),
            correctAnswer: correctAnswer.trim(),
            fileUrl,
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: QUESTION_TITLES.TYPE_WHAT_YOU_HEAR,
                  navigate,
               },

               setStates: {
                  setSelectType: setSelectType(selectType),
                  setTitle: setTitle(title),
                  setDuration: setDuration(duration),
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
                  onChange={attemptsChangeHandler}
               />
            </Box>

            <Box className="file">
               <InputLabel htmlFor="filedInput" className="label">
                  <Button type="button" component="span">
                     {file ? 'REPLACE' : 'UPPLOAD'}
                  </Button>
               </InputLabel>

               <input
                  type="file"
                  id="filedInput"
                  name="fileUrl"
                  accept="audio/mp3"
                  onChange={changeFileHandler}
               />
               {file && (
                  <button
                     type="button"
                     onClick={toggleHandler}
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
               onChange={correctAnswerChangeHandler}
            />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={goBackHandler}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               onClick={onSubmit}
               disabled={isDisabled}
               isLoading={isLoading}
               loadingColor="secondary"
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
            '& > .MuiOutlinedInput-root': {
               padding: '.75rem  0.7rem .75rem 0.7rem ',
               width: '4.5rem',
               height: '2.5rem',
               textAlign: 'center',
               fontSize: '1.2rem',
            },
         },
      },

      '& div > .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button':
         {
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

         '& > button > .label': {
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

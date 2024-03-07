import { useState, useRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, InputLabel, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'

const DescribeImage = ({
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

   const [image, setImage] = useState(null)
   const [answer, setAnswer] = useState('')
   const [fileName, setFileName] = useState('')

   const inputFileRef = useRef(null)
   const inputRef = useRef(null)

   const changeAnswerHandler = (e) => setAnswer(e.target.value)

   const goBackHandler = () => navigate(-1)

   const clickHandler = () => inputFileRef.current.click()

   const isDisabled =
      !selectType || !duration || !title.trim() || !image || !answer || !fileUrl

   const changeFileHandler = (e) => {
      const file = e.target.files[0]

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            setImage(reader.result)
         }

         reader.readAsDataURL(file)

         setFileName(file.name)

         dispatch(QUESTION_THUNKS.saveFile(file))
      }
   }

   const onDrop = (acceptedFiles) => {
      const file = acceptedFiles[0]

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            setImage(reader.result)
         }
         reader.readAsDataURL(file)

         setFileName(file.name)

         dispatch(QUESTION_THUNKS.saveFile(file))
      }
   }

   const { getRootProps, getInputProps } = useDropzone({
      onDrop,
      accept: 'image/*',
      maxFiles: 1,
      maxSize: 5000000,
   })

   const onSubmit = () => {
      if (
         selectType !== '' &&
         +duration !== 0 &&
         title !== '' &&
         answer !== ''
      ) {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            correctAnswer: answer.trim(),
            fileUrl,
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: QUESTION_TITLES.DESCRIBE_IMAGE,
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
         {image ? (
            <Box className="container-image" {...getRootProps()}>
               <Box onClick={clickHandler} {...getRootProps()}>
                  <img src={image} alt="uploaded" className="image" />
               </Box>

               <input
                  ref={inputFileRef}
                  type="file"
                  className="input-update"
                  accept=".jpg, .png"
                  onChange={changeFileHandler}
                  {...getInputProps()}
               />

               <Typography className="file-name" onClick={clickHandler}>
                  {fileName}
               </Typography>
            </Box>
         ) : (
            <Box className="upload" {...getRootProps()}>
               <InputLabel htmlFor="fileInput" className="title">
                  Upload image
                  <input
                     id="fileInput"
                     type="file"
                     className="input"
                     onChange={changeFileHandler}
                     accept=".jpg, .png"
                     ref={inputRef}
                     {...getInputProps()}
                  />
               </InputLabel>
            </Box>
         )}

         <Box className="answer">
            <InputLabel className="correct-answer">Correct answer</InputLabel>

            <Input value={answer} onChange={changeAnswerHandler} />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={goBackHandler}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={isDisabled}
               onClick={onSubmit}
               isLoading={isLoading}
               loadingColor="secondary"
            >
               SAVE
            </Button>
         </Box>
      </StyledContainer>
   )
}

export default DescribeImage

const StyledContainer = styled(Box)(({ theme }) => ({
   fontFamily: 'Arial',
   color: '#4C4859',

   '& > .container-image': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.4rem',
      marginTop: '1rem',
   },

   '& > div > div > .image': {
      width: '181.59px',
      height: '177.39px',
      borderRadius: '8px',
      cursor: 'pointer',
   },

   '& > .upload': {
      display: 'flex',
      alignItems: 'center',
   },

   '& > div > .title': {
      border: '1px solid #D4D0D0',
      borderRadius: '8px',
      padding: '4.6rem 2rem 4.6rem 2rem',
      color: theme.palette.primary.main,
      fontWeight: 500,
      fontFamily: 'Poppins',
      marginBottom: '1.4rem',
      marginTop: '1rem',
      cursor: 'pointer',
   },

   '& > div > label > .input': {
      display: 'none',
   },

   '& > div > .input-update': {
      display: 'none',
   },

   '& > div > .file-name': {
      marginLeft: '4rem',
      cursor: 'pointer',
   },

   '& > div > .correct-answer': {
      paddingBottom: '7px',
   },

   '& > .answer': {
      marginBottom: '2rem',
   },

   '& > .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
   },
}))

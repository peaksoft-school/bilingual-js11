import { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { QUESTION_THUNKS } from '../../../store/slice/admin/questions/questionThunk'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/questions/questionSlice'
import { questionTitle } from '../../../utils/helpers/questionTitle'
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

   const [fileName, setFileName] = useState('')
   const [answer, setAnswer] = useState('')
   const [image, setImage] = useState(null)

   const inputFileRef = useRef(null)
   const inputRef = useRef(null)

   const handleClick = () => inputFileRef.current.click()

   const handleInputChange = (e) => setAnswer(e.target.value)

   const handleGoBack = () => navigate(-1)

   const handleFileChange = (e) => {
      const file = e.target.files[0]

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            setImage(reader.result)
         }

         reader.readAsDataURL(file)

         setFileName(file.name)

         dispatch(QUESTION_THUNKS.postFileRequest(file))
      }
   }

   const saveTestQuestion = () => {
      if (
         selectType !== '' &&
         +duration !== +'' &&
         title !== '' &&
         answer !== ''
      ) {
         dispatch(QUESTION_ACTIONS.clearOptions())

         setSelectType('')
         setTitle('')
         setDuration('')
         setAnswer('')

         const requestData = {
            title: title.trim(),
            duration: +duration * 60,
            correctAnswer: answer.trim(),
            fileUrl,
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,
               data: {
                  testId,
                  questionType: questionTitle('DESCRIBE_IMAGE'),
                  navigate,
               },
            })
         )
      }
   }

   const isFormValid =
      !selectType || !duration || !title || !image || !answer.trim()

   return (
      <StyledContainer>
         {image ? (
            <Box className="container-image">
               <Box onClick={handleClick}>
                  <img src={image} alt="Uploaded" className="image" />
               </Box>

               <input
                  ref={inputFileRef}
                  type="file"
                  className="input"
                  accept=".jpg, .png"
                  onChange={handleFileChange}
               />

               <Typography className="file-name" onClick={handleClick}>
                  {fileName}
               </Typography>
            </Box>
         ) : (
            <Box className="upload">
               <label htmlFor="fileInput" className="title">
                  Upload image
                  <input
                     id="fileInput"
                     type="file"
                     className="input"
                     onChange={handleFileChange}
                     accept=".jpg, .png"
                     ref={inputRef}
                  />
               </label>
            </Box>
         )}

         <Box className="answer">
            <Typography className="correct-answer">Correct answer</Typography>

            <Input value={answer} onChange={handleInputChange} />
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={handleGoBack}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={isFormValid}
               onClick={saveTestQuestion}
               isLoading={isLoading}
               colorLoading="secondary"
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

   '& .container-image': {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '1.4rem',
      marginTop: '1rem',
   },

   '& .image': {
      width: '181.59px',
      height: '177.39px',
      borderRadius: '8px',
      cursor: 'pointer',
   },

   '& .upload': {
      display: 'flex',
      alignItems: 'center',
   },

   '& .title': {
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

   '& .input': {
      display: 'none',
   },

   '& .file-name': {
      marginLeft: '4rem',
      cursor: 'pointer',
   },

   '& .correct-answer': {
      paddingBottom: '7px',
   },

   '& .answer': {
      marginBottom: '2rem',
   },

   '& .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
   },
}))

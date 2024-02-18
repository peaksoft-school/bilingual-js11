import { useState, useRef } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'
import { showNotification } from '../../../utils/helpers/notification'

const DescribeImage = () => {
   const [image, setImage] = useState(null)
   const [fileName, setFileName] = useState('')
   const inputRef = useRef(null)

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      if (file) {
         if (file.type !== 'image/jpeg') {
            showNotification({
               title: 'Error',
               message: 'Please upload only JPG images!',
               type: 'error',
            })

            return
         }

         const reader = new FileReader()

         reader.onloadend = () => {
            setImage(reader.result)
         }
         reader.readAsDataURL(file)

         setFileName(file.name)
      }
   }

   const handleClick = () => {
      if (inputRef.current) {
         inputRef.current.click()
      }
   }

   return (
      <StyledContainer>
         {image ? (
            <Box className="container-image">
               <img src={image} alt="Uploaded" className="image" />

               <Typography className="file-name" onClick={handleClick}>
                  {fileName}
               </Typography>
            </Box>
         ) : (
            <Box className="upload">
               <label htmlFor="fileInput" className="title">
                  Upload image
                  <Input
                     id="fileInput"
                     type="file"
                     className="input"
                     onChange={handleFileChange}
                     accept=".jpg"
                     ref={inputRef}
                  />
               </label>

               <Typography className="file-name" onClick={handleClick}>
                  File_name_of_the_image_file.jpg
               </Typography>
            </Box>
         )}

         <Box>
            <Typography className="correct-answer">Correct answer</Typography>
            <Input />
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

   '& .upload': {
      display: 'flex',
      alignItems: 'center',
   },

   '& .title': {
      border: '1.53px solid #D4D0D0',
      borderRadius: '8px',
      padding: '4.6rem 2rem 4.6rem 2rem',
      color: theme.palette.primary.main,
      fontWeight: 500,
      fontFamily: 'Poppins',
      marginBottom: '1.4rem',
      marginTop: '1rem',
   },

   '& .image': {
      width: '181.59px',
      height: '177.39px',
      borderRadius: '8px',
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
}))

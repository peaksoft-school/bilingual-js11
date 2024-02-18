import { useState, useRef } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'
import TestContainer from '../../../components/UI/TestContainer'

const DescribeImage = () => {
   const [image, setImage] = useState(null)
   const [fileName, setFileName] = useState('')
   const inputRef = useRef(null)

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      if (file) {
         const reader = new FileReader()
         reader.onloadend = () => {
            setImage(reader.result)
         }
         reader.readAsDataURL(file)
         setFileName(file.name)
      }
   }

   return (
      <TestContainer>
         <StyledContainer>
            {image ? (
               <Box className="container-image">
                  <img src={image} alt="Uploaded" className="image" />
                  <Typography className="file-name">{fileName}</Typography>
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
                        ref={inputRef}
                     />
                  </label>
                  <Typography className="file-name">
                     File_name_of_the_image_file.jpg
                  </Typography>
               </Box>
            )}

            <Box>
               <Typography className="correct-answer">
                  Correct answer
               </Typography>
               <Input />
            </Box>
         </StyledContainer>
      </TestContainer>
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
   },

   '& .upload': {
      display: 'flex',
      alignItems: 'center',
   },

   '& .title': {
      border: '1px solid #D4D0D0',
      padding: '3rem',
      color: theme.palette.primary.main,
      fontWeight: 500,
      fontFamily: 'Poppins',
   },

   '& .image': {
      width: '181px',
      height: '178px',
      borderRadius: '8px',
   },

   '& .input': {
      display: 'none',
   },

   '& .file-name': {
      marginLeft: '10rem',
   },

   '& .correct-answer': {
      paddingBottom: '7px',
   },
}))

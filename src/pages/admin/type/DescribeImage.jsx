import { useState, useRef } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile'
import TestContainer from '../../../components/UI/TestContainer'
import Dropdown from '../../../components/UI/Dropdown'

const DescribeImage = () => {
   const [image, setImage] = useState(null)

   const [fileName, setFileName] = useState('')

   const [inputValue, setInputValue] = useState('')

   const [file, setFile] = useState(null)

   const inputRef = useRef(null)

   const inputFileRef = useRef(null)

   const postFileRequest = async () => {
      try {
         const formData = new FormData()

         formData.append('multipartFile', file)

         await axiosInstanceFile.post('/api/awsFile', formData)
      } catch (error) {
         console.error(error)
      }
   }

   const handleFileChange = (event) => {
      const file = event.target.files[0]

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            setImage(reader.result)
         }

         reader.readAsDataURL(file)

         setFileName(file.name)

         setFile(file)
      }
   }

   const handleImageChange = (event) => {
      const file = event.target.files[0]

      if (file) {
         const reader = new FileReader()

         reader.onloadend = () => {
            setImage(reader.result)
         }

         reader.readAsDataURL(file)

         setFileName(file.name)

         setFile(file)
      }
   }

   const handleClick = () => {
      inputFileRef.current.click()
   }

   const handleInputChange = (e) => {
      setInputValue(e.target.value)
   }

   return (
      <TestContainer>
         <Dropdown />
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
                     onChange={handleImageChange}
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

                  <Typography
                     className="file-name"
                     onClick={() => inputRef.current.click()}
                  >
                     File_name_of_the_image_file.jpg
                  </Typography>
               </Box>
            )}

            <Box>
               <Typography className="correct-answer">
                  Correct answer
               </Typography>

               <Input value={inputValue} onChange={handleInputChange} />
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
      border: '1.53px solid #D4D0D0',
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
}))

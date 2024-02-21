import { useState, useRef } from 'react'
import { styled, Box, Typography } from '@mui/material'
import Modal from '../../../components/UI/Modal'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'
import { PlusIcon, SoundIcon } from '../../../assets/icons'
import CardOption from '../../../components/UI/CardOption'
import Input from '../../../components/UI/Input'

const ListenAndSelectEnglishWord = () => {
   const [isOpenModal, setIsOpenModal] = useState(false)

   const [selectedFiles, setSelectedFiles] = useState([])

   const fileInputRef = useRef(null)

   const openModal = () => {
      setIsOpenModal((prev) => !prev)
   }

   const handleUploadButtonClick = () => {
      fileInputRef.current.click()
   }

   const handleFileInputChange = ({ target: { files } }) => {
      if (files && files.length > 0) {
         const updatedFiles = Array.from(files)

         setSelectedFiles((prevSelectedFiles) => [
            ...prevSelectedFiles,
            ...updatedFiles,
         ])
      }
   }

   const handleSave = () => {
      setIsOpenModal(false)
   }

   return (
      <TestContainer>
         <StyledContainer>
            <Button onClick={openModal} icon={<PlusIcon />}>
               ADD OPTIONS
            </Button>

            <Box className="selected-file">
               {selectedFiles.map((file, index) => (
                  <CardOption
                     index={index}
                     icon={<SoundIcon />}
                     title={file.name}
                     onClick={() =>
                        setSelectedFiles((prevSelectedFiles) =>
                           prevSelectedFiles.filter((_, i) => i !== index)
                        )
                     }
                  />
               ))}
            </Box>

            <Modal
               isCloseIcon
               handleIsVisible={openModal}
               isVisible={isOpenModal}
            >
               <Box className="modal-title">
                  <Typography>Title</Typography>

                  <Input />
               </Box>

               <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="audio/*"
                  onChange={handleFileInputChange}
                  style={{ display: 'none' }}
               />

               <Button onClick={handleUploadButtonClick}>
                  Upload audio file
               </Button>

               <Typography>{selectedFiles.name}</Typography>

               <Button onClick={openModal} variant="secondary">
                  GO BACK
               </Button>

               <Button onClick={handleSave} variant="primary">
                  SAVE
               </Button>
            </Modal>
         </StyledContainer>
      </TestContainer>
   )
}

export default ListenAndSelectEnglishWord

const StyledContainer = styled(Box)(() => ({}))

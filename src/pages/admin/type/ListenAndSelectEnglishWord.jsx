import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { styled, Box, Typography } from '@mui/material'
import Modal from '../../../components/UI/Modal'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'
import CardOption from '../../../components/UI/CardOption'
import Input from '../../../components/UI/Input'
import { deleteQuestion } from '../../../store/slice/admin/questionsSlice'

import {
   CancelIcon,
   FalseIcon,
   PlusIcon,
   SoundIcon,
} from '../../../assets/icons'

const ListenAndSelectEnglishWord = () => {
   const [isOpenModal, setIsOpenModal] = useState(false)
   const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
   const [selectedFiles, setSelectedFiles] = useState([])
   const [selectedQuestionId, setSelectedQuestionId] = useState(null)
   const [fileUploaded, setFileUploaded] = useState(false)
   const [title, setTitle] = useState('')
   const [option, setOption] = useState([])
   const [isChecked, setIsChecked] = useState(false)

   const fileInputRef = useRef(null)
   const dispatch = useDispatch()

   const isFormValid = title !== '' && selectedFiles.length !== 0

   const handleModal = () => {
      setIsOpenModal((prev) => !prev)
   }

   const handleUploadButtonClick = () => {
      fileInputRef.current.click()
   }

   const handleFileChange = ({ target: { files } }) => {
      if (files) {
         setSelectedFiles(Array.from(files))
      }
      setFileUploaded(true)
   }

   const handleSave = () => {
      const id = Math.random()

      setFileUploaded(false)
      setOption([...option, { id, title, selectedFiles }])
      setTitle('')
      setSelectedFiles([])
      setIsOpenModal(false)
   }

   const handleDeleteModal = (id) => {
      setSelectedQuestionId(id)
      setIsOpenDeleteModal(true)
   }

   const handleDelete = () => {
      setOption((prevOptions) =>
         prevOptions.filter((opt) => opt.id !== selectedQuestionId)
      )
      setIsOpenDeleteModal(true)
   }

   const handleToggle = (id) => {
      setIsChecked((prevState) => ({
         ...prevState,
         [id]: !prevState[id],
      }))
   }

   return (
      <TestContainer>
         <StyledContainer>
            <Button onClick={handleModal} icon={<PlusIcon />}>
               ADD OPTIONS
            </Button>

            <Box className="selected-files">
               {option.map((data, index) => (
                  <CardOption
                     key={data.id}
                     index={index}
                     icon={<SoundIcon />}
                     title={data.title}
                     isVisible={setIsOpenDeleteModal}
                     isCorrect={isChecked}
                     handleToggle={() => handleToggle(data.id)}
                     onClick={() => handleDeleteModal(data.id)}
                  />
               ))}
            </Box>

            <Modal
               isCloseIcon
               handleIsVisible={() => setIsOpenModal(false)}
               isVisible={isOpenModal}
            >
               <StyledModal>
                  <CancelIcon onClick={handleModal} className="cancel" />

                  <Box className="content-modal-save">
                     <Typography className="title" variant="label">
                        Title
                     </Typography>

                     <Input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                     />
                  </Box>

                  <input
                     ref={fileInputRef}
                     type="file"
                     multiple
                     accept="audio/*"
                     onChange={handleFileChange}
                     className="upload-input"
                     style={{ display: 'none' }}
                  />

                  <Box className="upload">
                     <Button
                        onClick={handleUploadButtonClick}
                        variant="secondary"
                     >
                        Upload audio file
                     </Button>

                     {!fileUploaded && (
                        <Typography>File_name_of_the_audio_file.mp3</Typography>
                     )}

                     {selectedFiles.map((file) => (
                        <Typography key={file.name}>{file.name}</Typography>
                     ))}
                  </Box>

                  <Box className="buttons-modal-container">
                     <Button
                        onClick={() => setIsOpenModal(false)}
                        variant="secondary"
                     >
                        GO BACK
                     </Button>

                     <Button
                        onClick={handleSave}
                        variant="primary"
                        disabled={!isFormValid}
                     >
                        SAVE
                     </Button>
                  </Box>
               </StyledModal>
            </Modal>

            <Modal
               isCloseIcon
               isVisible={isOpenDeleteModal}
               handleIsVisible={() => setIsOpenDeleteModal(false)}
            >
               <FalseIcon />

               <Typography className="modal-title">
                  Do you want to delete?
               </Typography>

               <Typography className="modal-message">
                  You can`t restore
               </Typography>

               <Box className="container-buttons">
                  <Button
                     variant="secondary"
                     onClick={() => setIsOpenDeleteModal(false)}
                  >
                     CANCEL
                  </Button>

                  <Button onClick={handleDelete}>DELETE</Button>
               </Box>
            </Modal>
         </StyledContainer>
      </TestContainer>
   )
}

export default ListenAndSelectEnglishWord

const StyledContainer = styled(Box)(() => ({}))

const StyledModal = styled(Box)(() => ({
   position: 'absolute',
   backgroundColor: '#fff',
   borderRadius: '1.25rem',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',

   '& .cancel': {
      cursor: 'pointer',
      marginLeft: ' 34rem',
      marginTop: ' 1rem',
   },

   '& .content-modal-save': {
      width: '32.3125rem',
      margin: '3rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',

      '& .title': {
         width: '2.33rem',
         height: '1.125rem',
         fontFamily: 'Poppins',
         fontWeight: '500',
         display: 'flex',
         alignItems: 'center',
         color: '#4B4759',
      },
   },

   '& .upload': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginLeft: '3rem',
      marginBottom: '4rem',
      marginTop: '-1.7rem',
   },

   '& .buttons-modal-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '1.5rem',
      gap: '1rem',
      backgroundColor: '#F0F1F1',
      width: '100%',
      height: '5rem',
      borderRadius: '0 0 1rem 1rem',
   },
}))

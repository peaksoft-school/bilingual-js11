/* eslint-disable jsx-a11y/media-has-caption */
import { useState, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { styled, Box, Typography } from '@mui/material'
import Modal from '../../../components/UI/Modal'
import Button from '../../../components/UI/buttons/Button'
import Input from '../../../components/UI/Input'
import CardOption from '../../../components/UI/CardOption'
import { QUESTIONS_ACTIONS } from '../../../store/slice/admin/questionSlice'
import { QUESTION_THUNK } from '../../../store/slice/admin/questionThunk'
import { questionTitle } from '../../../utils/helpers/questionTitle'

import {
   CancelIcon,
   FalseIcon,
   PlusIcon,
   SoundIcon,
} from '../../../assets/icons'

const ListenAndSelectEnglishWord = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const { option, fileUrl, isLoading } = useSelector((state) => state.question)

   const [isOpenModalSave, setIsOpenModalSave] = useState(false)

   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)

   const [files, setFiles] = useState([])

   const [fileUploaded, setFileUploaded] = useState(false)

   const [optionTitle, setOptionTitle] = useState('')

   const [checkOption, setCheckOption] = useState(false)

   const [optionId, setOptionId] = useState(null)

   const [isPlaying, setIsPlaying] = useState(false)

   const { testId } = useParams()

   const audioRef = useRef(null)

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const openModalDelete = () => setIsOpenModalDelete((prevState) => !prevState)

   const handleChangeInput = (e) => setOptionTitle(e.target.value)

   const handleUploadButtonClick = () => audioRef.current.click()

   const isFormValid =
      optionTitle.trim() !== '' && fileUploaded !== false && isLoading !== true

   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
      setFileUploaded(false)
      setOptionTitle('')
   }

   const fileChangeHandler = (event) => {
      const file = event.target.files[0]

      setFiles([file])

      if (file) {
         const reader = new FileReader()

         reader.readAsDataURL(file)

         audioRef.current.src = URL.createObjectURL(file)
      }

      dispatch(QUESTION_THUNK.postFileRequest({ files: file }))

      setFileUploaded(true)
   }

   const addOptionHandler = () => {
      const data = {
         optionTitle,
         isCorrect: checkOption,
         id: uuidv4(),
         fileUrl,
      }

      dispatch(QUESTIONS_ACTIONS.addOption(data))

      openModalSave()
      setOptionTitle('')
      setCheckOption(false)
      setFileUploaded(false)
   }

   const deleteOption = () => {
      dispatch(QUESTIONS_ACTIONS.deleteOption(optionId))
      setIsOpenModalDelete((prevState) => !prevState)
   }

   const handleChecked = (id) => {
      dispatch(QUESTIONS_ACTIONS.changeTrueOption(id))
   }

   const handleToggle = () => {
      if (isPlaying) {
         audioRef.current.pause()
      } else {
         audioRef.current.play()
      }

      setIsPlaying(!isPlaying)
   }

   const saveTestQuestion = () => {
      if (selectType !== '' && +duration !== +'' && title !== '') {
         dispatch(QUESTIONS_ACTIONS.clearOptions())

         setSelectType('')
         setTitle('')
         setDuration('')

         const requestData = {
            title,
            duration: +duration * 60,
            option,
         }

         dispatch(
            QUESTION_THUNK.saveTest({
               requestData,
               data: {
                  testId,
                  questionType: questionTitle('LISTEN_AND_SELECT_WORD'),
                  navigate,
               },
            })
         )
      }
   }

   return (
      <StyledContainer>
         <Box className="add-button">
            <Button
               onClick={openModalSave}
               icon={<PlusIcon className="plus-icon" />}
            >
               ADD OPTIONS
            </Button>
         </Box>

         <Box className="cards">
            {option.map((data, index) => (
               <CardOption
                  key={data.id}
                  index={index}
                  item={data}
                  openModal={setIsOpenModalDelete}
                  handleChecked={handleChecked}
                  setOptionId={setOptionId}
                  icon={
                     <SoundIcon
                        onClick={handleToggle}
                        className={`play-pause-icon ${
                           isPlaying ? 'playing' : ''
                        }`}
                     />
                  }
               />
            ))}
         </Box>

         <audio ref={audioRef} className="audio" type="audio/mp3" controls />

         <Box className="buttons">
            <Button variant="secondary" onClick={() => navigate(-1)}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={
                  !selectType || !duration || !title || option.length === 0
               }
               onClick={saveTestQuestion}
            >
               SAVE
            </Button>
         </Box>

         <Modal
            isCloseIcon
            handleIsVisible={openModalSave}
            isVisible={isOpenModalSave}
         >
            <StyledModal>
               <CancelIcon onClick={openModalSave} className="cancel" />

               <Box className="content-modal-save">
                  <Typography className="title" variant="label">
                     Title
                  </Typography>

                  <Input value={optionTitle} onChange={handleChangeInput} />
               </Box>

               <input
                  type="file"
                  accept="audio/mp3"
                  id="filed-input"
                  onChange={fileChangeHandler}
                  className="upload-input"
               />

               <Box className="upload">
                  <Button onClick={handleUploadButtonClick} variant="secondary">
                     <label
                        htmlFor="filed-input"
                        className="uploading-button-text"
                     >
                        Upload audio file
                     </label>
                  </Button>

                  {!fileUploaded ? (
                     <Typography className="file-name">
                        File_name_of_the_audio_file.mp3
                     </Typography>
                  ) : (
                     files.map((file) => (
                        <Typography key={file.name} className="file-name">
                           {file.name}
                        </Typography>
                     ))
                  )}
               </Box>

               <Box className="buttons-modal-container">
                  <Button onClick={openModalSave} variant="secondary">
                     GO BACK
                  </Button>

                  <Button
                     onClick={addOptionHandler}
                     variant="primary"
                     disabled={!isFormValid}
                     isLoading={isLoading}
                     colorLoading="secondary"
                  >
                     SAVE
                  </Button>
               </Box>
            </StyledModal>
         </Modal>

         <Modal
            isCloseIcon
            isVisible={isOpenModalDelete}
            handleIsVisible={openModalDelete}
         >
            <FalseIcon />

            <Typography className="modal-title">
               Do you want to delete?
            </Typography>

            <Typography className="modal-message">You can`t restore</Typography>

            <Box className="container-buttons">
               <Button variant="secondary" onClick={openModalDelete}>
                  CANCEL
               </Button>

               <Button onClick={deleteOption}>DELETE</Button>
            </Box>
         </Modal>
      </StyledContainer>
   )
}

export default ListenAndSelectEnglishWord

const StyledContainer = styled(Box)(({ theme }) => ({
   '& .selected-files': {
      display: 'flex',

      '& .play-pause-icon': {
         cursor: 'pointer',
      },
   },

   '& .audio': {
      display: 'none',
   },

   '& > .add-button': {
      margin: '2rem 0 1.375rem 41.5rem',

      '& .plus-icon': {
         width: '1rem',
         marginBottom: '0.2rem',
         marginRight: '0.6rem',
      },
   },

   '& .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
   },

   '& .cards': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.1rem',
      margin: '1.5rem 0 2rem 0',
   },

   '& .play-pause-icon': {
      cursor: 'pointer',
   },

   '& .playing': {
      cursor: ' pointer',

      '& path': {
         fill: theme.palette.primary.main,
      },
   },
}))

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
      marginLeft: ' 36rem',
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

   '& .upload-input': {
      display: 'none',
   },

   '& .upload': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginLeft: '3rem',
      marginBottom: '4rem',
      marginTop: '-1rem',

      '& .file-name': {
         width: '14rem',
      },

      '& .uploading-button-text': {
         fontFamily: 'Poppins',
         fontWeight: 600,
      },
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

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { styled, Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { CancelIcon, FalseIcon, PlusIcon } from '../../../assets/icons'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import Button from '../../../components/UI/buttons/Button'
import Option from '../../../components/UI/Option'
import Modal from '../../../components/UI/Modal'
import Input from '../../../components/UI/Input'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/question/questionSlice'
import { QUESTION_TITLE } from '../../../utils/constants'

const ListenAndSelectEnglishWord = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const { fileUrl, isLoading } = useSelector((state) => state.question)
   const option = useSelector((state) => state.question.options)

   const { testId } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [fileUploaded, setFileUploaded] = useState(false)
   const [optionTitle, setOptionTitle] = useState('')
   const [checkOption, setCheckOption] = useState(false)
   const [optionId, setOptionId] = useState(null)
   const [files, setFiles] = useState([])

   const openModalDelete = () => setIsOpenModalDelete((prevState) => !prevState)

   const handleTitle = (e) => setOptionTitle(e.target.value)

   const handleGoBack = () => navigate(-1)

   const isDisabled =
      !selectType || !duration || !title.trim() || option.length === 0

   const isDisabledModal =
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
      }

      dispatch(QUESTION_THUNKS.saveFile(file))

      setFileUploaded(true)
   }

   const deleteOption = () => {
      dispatch(QUESTION_ACTIONS.deleteOption(optionId))

      setIsOpenModalDelete((prevState) => !prevState)
   }

   const handleChecked = (id) => {
      dispatch(QUESTION_ACTIONS.handleIsCorrect(id))
   }

   const saveTestQuestion = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration * 60,
            option,
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,
               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLE.LISTEN_AND_SELECT_WORD
                  ),
                  navigate,
               },

               setState: {
                  selectType: setSelectType(selectType),
                  title: setTitle(title),
                  duration: setDuration(duration),
               },

               clearOptions: QUESTION_ACTIONS,
            })
         )
      }
   }

   const addOptionHandler = () => {
      const option = {
         optionTitle: optionTitle.trim(),
         isTrueOption: checkOption,
         id: uuidv4(),
         fileUrl,
      }

      dispatch(QUESTION_ACTIONS.addOption(option))

      openModalSave()

      setOptionTitle('')
      setCheckOption(false)
      setFileUploaded(false)
   }

   return (
      <StyledContainer>
         <Box className="add-button">
            <Button
               onClick={openModalSave}
               icon={<PlusIcon className="plus" />}
            >
               ADD OPTIONS
            </Button>
         </Box>

         <Box className="cards">
            {option.map((option, index) => (
               <Option
                  key={option.id}
                  index={index}
                  option={option}
                  openModal={setIsOpenModalDelete}
                  handleChecked={handleChecked}
                  setOptionId={setOptionId}
                  icon
               />
            ))}
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={handleGoBack}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={isDisabled}
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

                  <Input
                     value={optionTitle}
                     onChange={handleTitle}
                     placeholder="Enter the title..."
                  />
               </Box>

               <input
                  type="file"
                  accept="audio/mp3"
                  id="filed-input"
                  onChange={fileChangeHandler}
                  className="upload-input"
               />

               <Box className="upload">
                  <Button variant="secondary">
                     <label
                        htmlFor="filed-input"
                        className="uploading-button-text"
                     >
                        {fileUploaded ? 'Replace' : 'Upload audio file'}
                     </label>
                  </Button>

                  {fileUploaded &&
                     files.map(({ name }) => (
                        <Typography key={name} className="file-name">
                           {name}
                        </Typography>
                     ))}
               </Box>

               <Box className="buttons-modal-container">
                  <Button onClick={openModalSave} variant="secondary">
                     GO BACK
                  </Button>

                  <Button
                     onClick={addOptionHandler}
                     variant="primary"
                     disabled={!isDisabledModal}
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

            <Typography className="title" variant="p">
               <Typography variant="span">Question: </Typography>

               {option.find((option) => option.id === optionId)?.optionTitle}
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

const StyledContainer = styled(Box)(() => ({
   width: '822px',

   '& > .add-button': {
      margin: '2rem 0 1.375rem 41rem',

      '& .plus': {
         width: '1rem',
         marginBottom: '0.2rem',
         marginRight: '0.6rem',
      },
   },

   '& > .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
   },

   '& > .cards': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.1rem',
      margin: '1.5rem 0 2rem 0',
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

   '& > .cancel': {
      cursor: 'pointer',
      marginLeft: ' 36rem',
      marginTop: ' 1rem',
   },

   '& > .content-modal-save': {
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

   '& > .upload-input': {
      display: 'none',
   },

   '& > .upload': {
      display: 'flex',
      alignItems: 'center',
      gap: '1.5rem',
      marginLeft: '3rem',
      marginBottom: '4rem',
      marginTop: '-1rem',

      '& > .file-name': {
         width: '14rem',
      },

      '& .uploading-button-text': {
         fontFamily: 'Poppins',
         fontWeight: 600,
      },
   },

   '& > .buttons-modal-container': {
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

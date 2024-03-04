import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { styled, Box, Typography, InputLabel } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import { PlusIcon } from '../../../assets/icons'
import DeleteModal from '../../../components/UI/modals/DeleteModal'
import SaveModal from '../../../components/UI/modals/SaveModal'
import Button from '../../../components/UI/buttons/Button'
import Option from '../../../components/UI/Option'

const ListenAndSelectEnglishWord = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   const { fileUrl, isLoading } = useSelector((state) => state.question)
   const { options } = useSelector((state) => state.question)

   const { testId } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const [files, setFiles] = useState([])
   const [optionId, setOptionId] = useState(null)
   const [isUploaded, setIsUploaded] = useState(false)
   const [optionTitle, setOptionTitle] = useState('')
   const [checkedOption, setCheckedOption] = useState(false)
   const [activeOptionId, setActiveOptionId] = useState(null)

   const [modals, setModals] = useState({
      delete: false,
      save: false,
   })

   const handleOptionClick = (id) => setActiveOptionId(id)

   const changeTitle = (e) => setOptionTitle(e.target.value)

   const handleGoBack = () => navigate(-1)

   const handleDelete = options.listenAndSelectOptions?.find(
      (option) => option.id === optionId
   )?.optionTitle

   const isDisabled =
      !selectType ||
      !duration ||
      !title.trim() ||
      options.listenAndSelectOptions.length < 2

   const isDisabledModal =
      optionTitle.trim() !== '' &&
      isUploaded !== false &&
      isLoading !== true &&
      fileUrl !== ''

   const toggleModal = (modalName) => {
      setModals((prevModals) => ({
         ...prevModals,
         [modalName]: !prevModals[modalName],
      }))

      setOptionTitle('')
      setCheckedOption(false)
   }

   const fileChangeHandler = (e) => {
      const file = e.target.files[0]

      if (file) {
         setFiles([file])

         const reader = new FileReader()
         reader.readAsDataURL(file)

         dispatch(QUESTION_THUNKS.saveFile(file))

         setIsUploaded(true)
      }
   }

   const deleteOption = () => {
      dispatch(
         QUESTION_ACTIONS.deleteOption({
            optionId,
            optionName: 'listenAndSelectOptions',
         })
      )

      toggleModal('delete')
   }

   const handleChecked = (id) => {
      dispatch(
         QUESTION_ACTIONS.handleIsCorrect({
            id,
            optionName: 'listenAndSelectOptions',
         })
      )
   }

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            option: options.listenAndSelectOptions.map((option) => ({
               optionTitle: option.optionTitle,
               fileUrl: option.fileUrl,
               isCorrectOption: option.isCorrectOption,
            })),
         }

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,
               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLES.LISTEN_AND_SELECT_WORD
                  ),
                  navigate,
               },

               setStates: {
                  setSelectType: setSelectType(selectType),
                  setTitle: setTitle(title),
                  setDuration: setDuration(duration),
               },

               clearOptions: QUESTION_ACTIONS,
            })
         )
      }
   }

   const addOptionHandler = () => {
      const option = {
         optionTitle: optionTitle.trim(),
         isCorrectOption: checkedOption,
         id: uuidv4(),
         fileUrl,
      }

      dispatch(
         QUESTION_ACTIONS.addOptionCheck({
            option,
            optionName: 'listenAndSelectOptions',
         })
      )

      toggleModal('save')

      setOptionTitle('')
      setCheckedOption(false)
      setIsUploaded(false)
   }

   return (
      <StyledContainer>
         <Box className="add-button">
            <Button
               icon={<PlusIcon className="plus" />}
               onClick={() => toggleModal('save')}
            >
               ADD OPTIONS
            </Button>
         </Box>

         <Box className="cards">
            {options.listenAndSelectOptions?.map((option, index) => (
               <Option
                  key={option.id}
                  icon
                  index={index}
                  option={option}
                  openModal={() => toggleModal('delete')}
                  setOptionId={setOptionId}
                  handleChecked={handleChecked}
                  activeOptionId={activeOptionId}
                  setActiveOptionId={setActiveOptionId}
                  onClick={() => handleOptionClick(option.id)}
               />
            ))}
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={handleGoBack}>
               GO BACK
            </Button>

            <Button variant="primary" disabled={isDisabled} onClick={onSubmit}>
               SAVE
            </Button>
         </Box>

         <SaveModal
            isCloseIcon
            isVisible={modals.save}
            isLoading={isLoading}
            optionTitle={optionTitle}
            isDisabledModal={isDisabledModal}
            handleIsVisible={() => toggleModal('save')}
            addOptionHandler={addOptionHandler}
            handleChangeTitle={changeTitle}
         >
            <input
               type="file"
               accept="audio/mp3, .wav"
               id="filed-input"
               onChange={fileChangeHandler}
               className="upload-input"
            />

            <Box className="upload">
               <InputLabel htmlFor="filed-input" className="text">
                  <Button variant="secondary" component="span">
                     {isUploaded ? 'Replace' : 'Upload audio file'}
                  </Button>
               </InputLabel>

               {isUploaded &&
                  files.map(({ name }) => (
                     <Typography key={name} className="file-name">
                        {name}
                     </Typography>
                  ))}
            </Box>
         </SaveModal>

         <DeleteModal
            isVisible={modals.delete}
            isCloseIcon
            handleDelete={deleteOption}
            handleIsVisible={() => toggleModal('delete')}
         >
            <Typography className="title" variant="p">
               <Typography variant="span">Option: </Typography>

               {handleDelete}
            </Typography>

            <Typography className="modal-message">You can`t restore</Typography>
         </DeleteModal>
      </StyledContainer>
   )
}

export default ListenAndSelectEnglishWord

const StyledContainer = styled(Box)(() => ({
   width: '822px',

   '& > .add-button': {
      margin: '2rem 0 1.375rem 41rem',

      '& > button >  span > .plus': {
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

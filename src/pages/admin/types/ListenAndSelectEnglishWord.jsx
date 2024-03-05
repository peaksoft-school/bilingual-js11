import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { styled, Box, Typography, InputLabel } from '@mui/material'
import { OPTIONS_NAME, QUESTION_TITLES } from '../../../utils/constants'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
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

   const optionClickHandler = (id) => setActiveOptionId(id)

   const changeTitleHandler = (e) => setOptionTitle(e.target.value)

   const goBackHandler = () => navigate(-1)

   const deleteOption = options.listenAndSelectOptions?.find(
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

   const deleteHandler = () => {
      dispatch(
         QUESTION_ACTIONS.deleteOption({
            optionId,
            optionName: OPTIONS_NAME.listenAndSelectOptions,
         })
      )

      toggleModal('delete')
   }

   const checkedHandler = (id) => {
      dispatch(
         QUESTION_ACTIONS.handleIsCorrect({
            id,
            optionName: OPTIONS_NAME.listenAndSelectOptions,
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
                  questionType: QUESTION_TITLES.LISTEN_AND_SELECT_WORD,
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
            optionName: OPTIONS_NAME.listenAndSelectOptions,
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
                  toggleModal={() => toggleModal('delete')}
                  setOptionId={setOptionId}
                  checkedHandler={checkedHandler}
                  activeOptionId={activeOptionId}
                  setActiveOptionId={setActiveOptionId}
                  onClick={() => optionClickHandler(option.id)}
               />
            ))}
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={goBackHandler}>
               GO BACK
            </Button>

            <Button variant="primary" disabled={isDisabled} onClick={onSubmit}>
               SAVE
            </Button>
         </Box>

         <SaveModal
            isCloseIcon
            title={optionTitle}
            isVisible={modals.save}
            isLoading={isLoading}
            toggleModal={() => toggleModal('save')}
            isDisabledModal={isDisabledModal}
            addOptionHandler={addOptionHandler}
            changeTitleHandler={changeTitleHandler}
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
            toggleModal={() => toggleModal('delete')}
            deleteHandler={deleteHandler}
         >
            <Typography className="title" variant="p">
               <Typography variant="span">Option: </Typography>

               {deleteOption}
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
      alignItems: 'flex-start',
      gap: '1.1rem',
      margin: '1.5rem 0 2rem 0',

      '& > .option': {
         width: '261px',

         '& > .title-option': {
            width: '13rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            cursor: 'pointer',
            whiteSpace: 'nowrap',

            '&:active': {
               maxWidth: '261px',
               maxHeight: 'none',
               overflow: 'visible',
               textOverflow: 'unset',
               whiteSpace: 'normal',
               wordBreak: 'break-all',
            },
         },
      },
   },
}))

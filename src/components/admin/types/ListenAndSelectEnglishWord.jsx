import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { styled, Box, Typography, InputLabel } from '@mui/material'
import { OPTIONS_NAME, QUESTION_TITLES } from '../../../utils/constants'
import { QUESTION_ACTIONS } from '../../../store/slices/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { OPTIONS_THUNKS } from '../../../store/slices/admin/options/optionsThunk'
import { PlusIcon } from '../../../assets/icons'
import DeleteModal from '../../UI/modals/DeleteModal'
import SaveModal from '../../UI/modals/SaveModal'
import Button from '../../UI/buttons/Button'
import Option from '../../UI/Option'

const ListenAndSelectEnglishWord = ({
   title,
   duration,
   setTitle,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { fileUrl, isLoading, options } = useSelector(
      (state) => state.question
   )

   const { optionResponses } = useSelector((state) => state.options.options)

   const { state } = useLocation()

   const id = optionResponses?.map((option) => option.optionId)

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

   const { testId } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const optionClickHandler = (id) => setActiveOptionId(id)

   const changeTitleHandler = (e) => setOptionTitle(e.target.value)

   const navigateGoBackHandler = () => navigate(-1)

   useEffect(() => {
      if (state !== null) {
         dispatch(OPTIONS_THUNKS.getOptions({ questionId: state?.id }))

         setOptionId(id)
      }
   }, [dispatch, state])

   const deleteOption =
      state !== null
         ? optionResponses?.find((option) => option.optionId === optionId)
              ?.optionTitle
         : options?.listenAndSelectOptions?.find(
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

         dispatch(QUESTION_THUNKS.addFile(file))

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

   const deleteOptionHandler = () => {
      if (state !== null) {
         dispatch(
            OPTIONS_THUNKS.deleteOption({
               optionId,
               questionId: state?.id,
            })
         )
      }

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

         if (state === null) {
            dispatch(
               QUESTION_THUNKS.addTest({
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
         } else {
            dispatch(
               QUESTION_THUNKS.updateQuestion({
                  id: state.id,
                  requestData,
                  navigate,

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
   }

   const addOptionHandler = () => {
      const option = {
         optionTitle: optionTitle.trim(),
         isCorrectOption: checkedOption,
         optionId: uuidv4(),
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
            {state !== null
               ? optionResponses?.map((option, index) => (
                    <Option
                       key={option.optionId}
                       icon
                       deletion
                       index={index}
                       option={option}
                       toggleModal={() => toggleModal('delete')}
                       setOptionId={setOptionId}
                       checkedHandler={checkedHandler}
                       activeOptionId={activeOptionId}
                       setActiveOptionId={setActiveOptionId}
                       onClick={() => optionClickHandler(option.optionId)}
                    />
                 ))
               : options.listenAndSelectOptions?.map((option, index) => (
                    <Option
                       key={option.optionId}
                       icon
                       deletion
                       index={index}
                       option={option}
                       toggleModal={() => toggleModal('delete')}
                       setOptionId={setOptionId}
                       checkedHandler={checkedHandler}
                       activeOptionId={activeOptionId}
                       setActiveOptionId={setActiveOptionId}
                       onClick={() => optionClickHandler(option.optionId)}
                    />
                 ))}
         </Box>

         <Box className="buttons">
            <Button variant="secondary" onClick={navigateGoBackHandler}>
               GO BACK
            </Button>

            <Button
               variant="primary"
               disabled={state !== null ? null : isDisabled}
               onClick={onSubmit}
            >
               {state !== null ? 'UPDATE' : 'SAVE'}
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
            deleteHandler={state !== null ? deleteOptionHandler : deleteHandler}
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
   width: '820px',

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
      marginLeft: '36.5rem',
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

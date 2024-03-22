import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { styled, Box, Typography, InputLabel } from '@mui/material'
import { v4 as uuidv4 } from 'uuid'
import { OPTIONS_NAME, QUESTION_TITLES } from '../../../utils/constants'
import { QUESTION_ACTIONS } from '../../../store/slices/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { useToggleModal } from '../../../hooks/useToogleModal'
import { PlusIcon } from '../../../assets/icons'
import { ROUTES } from '../../../routes/routes'
import DeleteModal from '../../UI/modals/DeleteModal'
import SaveModal from '../../UI/modals/SaveModal'
import Loading from '../../Loading'
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

   const { state } = useLocation()

   const [files, setFiles] = useState([])
   const [optionId, setOptionId] = useState(null)
   const [isUploaded, setIsUploaded] = useState(false)
   const [optionTitle, setOptionTitle] = useState('')
   const [checkedOption, setCheckedOption] = useState(false)

   const deleteModalToggle = useToggleModal('delete')
   const saveModalToggle = useToggleModal('save')

   const { testId } = useParams()

   const navigate = useNavigate()

   const dispatch = useDispatch()

   const changeTitleHandler = (e) => setOptionTitle(e.target.value)

   const navigateGoBackHandler = () => {
      navigate(
         `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.QUESTIONS}/${testId}`
      )

      dispatch(QUESTION_ACTIONS.clearOptions())
   }

   useEffect(() => {
      if (state !== null) {
         dispatch(
            QUESTION_THUNKS.getQuestion({
               id: state?.id,
               addUpdateOption: QUESTION_ACTIONS,
               optionName: OPTIONS_NAME.listenAndSelectOptions,
            })
         )
      }
   }, [dispatch, state])

   const deleteOption = options?.listenAndSelectOptions?.find(
      (option) => option.optionId === optionId
   )?.optionTitle

   const isDisabled =
      !selectType ||
      !duration ||
      duration < 1 ||
      !title.trim() ||
      options?.listenAndSelectOptions?.length < 2

   const isDisabledModal =
      optionTitle.trim() !== '' &&
      isUploaded !== false &&
      isLoading !== true &&
      fileUrl !== ''

   const toggleModal = (modalName) => {
      if (modalName === 'delete') {
         deleteModalToggle.onOpenModal()
      } else if (modalName === 'save') {
         saveModalToggle.onOpenModal()
      }

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
            optionName: OPTIONS_NAME?.listenAndSelectOptions,
         })
      )

      deleteModalToggle.onCloseModal()
   }

   const checkedHandler = (optionId) => {
      dispatch(
         QUESTION_ACTIONS.handleIsChecked({
            optionId,
            optionName: OPTIONS_NAME?.listenAndSelectOptions,
         })
      )
   }

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            option: options?.listenAndSelectOptions?.map((option) => ({
               optionTitle: option?.optionTitle,
               fileUrl: option?.fileUrl,
               isCorrectOption: option?.isCorrectOption,
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
            const requestData = {
               title: title.trim(),
               duration: +duration,
               optionRequest: options.listenAndSelectOptions?.map((option) => ({
                  optionTitle: option.optionTitle,
                  isCorrectOption: option.isCorrectOption,
               })),
            }

            dispatch(
               QUESTION_THUNKS.updateQuestion({
                  id: state.id,
                  requestData,
                  navigate,
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
            optionName: OPTIONS_NAME?.listenAndSelectOptions,
         })
      )

      toggleModal('save')

      setOptionTitle('')
      setCheckedOption(false)
      setIsUploaded(false)
   }

   return (
      <StyledContainer>
         {state !== null ? isLoading && <Loading /> : null}

         <Box className="add-button">
            <Button
               icon={<PlusIcon className="plus" />}
               onClick={saveModalToggle.onOpenModal}
            >
               ADD OPTIONS
            </Button>
         </Box>

         <Box className="cards">
            {options?.listenAndSelectOptions?.map((option, index) => (
               <Option
                  key={option.optionId}
                  icon
                  deletion
                  index={index}
                  option={option}
                  toggleModal={deleteModalToggle.onOpenModal}
                  setOptionId={setOptionId}
                  checkedHandler={checkedHandler}
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
            isVisible={saveModalToggle.isOpen}
            isLoading={isLoading}
            toggleModal={saveModalToggle.onCloseModal}
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
            isVisible={deleteModalToggle.isOpen}
            isCloseIcon
            toggleModal={deleteModalToggle.onCloseModal}
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
      position: 'relative',
      right: '-35.5rem',

      '& > .MuiButton-root ': {
         width: '118px',
      },
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

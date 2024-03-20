import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Box, TextField, Typography, styled } from '@mui/material'
import { OPTIONS_NAME, QUESTION_TITLES } from '../../../utils/constants'
import { QUESTION_ACTIONS } from '../../../store/slices/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { PlusIcon } from '../../../assets/icons'
import DeleteModal from '../../UI/modals/DeleteModal'
import SaveModal from '../../UI/modals/SaveModal'
import Option from '../../UI/Option'
import Button from '../../UI/buttons/Button'
import { OPTIONS_THUNKS } from '../../../store/slices/admin/options/optionsThunk'

const SelectTheMainIdea = ({
   title,
   duration,
   setTitle,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { options, question } = useSelector((state) => state.question)

   const { optionResponses } = useSelector((state) => state.options.options)

   const { state } = useLocation()

   const id = optionResponses?.map((option) => option.optionId)

   const [passage, setPassage] = useState('')
   const [optionId, setOptionId] = useState(null)
   const [optionTitle, setOptionTitle] = useState('')
   const [checkedOption, setCheckedOption] = useState(false)
   const [selectedOptionId, setSelectedOptionId] = useState(null)
   const [modals, setModals] = useState({
      delete: false,
      save: false,
   })

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { testId } = useParams()

   const changeCheckbox = (e) => setCheckedOption(e.target.checked)

   const handleChangeTitle = (e) => {
      const { value } = e.target

      setOptionTitle(value || '')
   }

   const handleChangeTextArea = (e) => {
      const { value } = e.target

      setPassage(value || '')
   }

   const navigateGoBackHandler = () => navigate(-1)

   useEffect(() => {
      if (state !== null) {
         dispatch(OPTIONS_THUNKS.getOptions({ questionId: state?.id }))
         dispatch(QUESTION_THUNKS.getQuestion({ id: state?.id }))
      }
   }, [dispatch, state])

   useEffect(() => {
      if (state !== null && optionResponses) {
         setOptionId(id)
         setPassage(question?.passage)
      }
   }, [state, optionResponses])

   const toggleModal = (modalName) => {
      setModals((prevModals) => ({
         ...prevModals,
         [modalName]: !prevModals[modalName],
      }))

      setOptionTitle('')
      setCheckedOption(false)
   }

   const deleteHandler = () => {
      dispatch(
         QUESTION_ACTIONS.deleteOption({
            optionId,
            optionName: OPTIONS_NAME.selectTheMainIdeaOptions,
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
            optionName: OPTIONS_NAME.selectTheMainIdeaOptions,
         })
      )
   }

   const isDisabled =
      !selectType ||
      !duration ||
      !title ||
      !passage ||
      options.selectTheMainIdeaOptions?.length < 2

   const isDisabledModal = !optionTitle.trim()

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            passage,
            option: options.selectTheMainIdeaOptions.map((option) => ({
               optionTitle: option.optionTitle,
               isCorrectOption: option.isCorrectOption,
            })),
         }

         if (state === null) {
            dispatch(
               QUESTION_THUNKS.addTest({
                  requestData,

                  data: {
                     testId,
                     questionType: QUESTION_TITLES.SELECT_MAIN_IDEA,
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
      }

      dispatch(
         QUESTION_ACTIONS.addOptionRadio({
            option,
            optionName: OPTIONS_NAME.selectTheMainIdeaOptions,
         })
      )

      toggleModal('save')

      setOptionTitle('')
      setCheckedOption(false)

      if (options.selectTheMainIdeaOptions.length === 0 || checkedOption) {
         setSelectedOptionId(option.optionId)
      }
   }

   return (
      <StyledContainer>
         <Box className="passage">
            <Typography className="title">Passage</Typography>

            <TextField
               name="text"
               value={passage || ''}
               onChange={handleChangeTextArea}
               multiline
               fullWidth
               autoComplete="off"
            />
         </Box>

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
                       index={index}
                       option={option}
                       isRadio
                       deletion
                       toggleModal={() => toggleModal('delete')}
                       setOptionId={setOptionId}
                       checkedHandler={checkedHandler}
                       selectedOptionId={selectedOptionId}
                       setSelectedOptionId={setSelectedOptionId}
                    />
                 ))
               : options.selectTheMainIdeaOptions?.map((option, index) => (
                    <Option
                       key={option.optionId}
                       index={index}
                       option={option}
                       isRadio
                       deletion
                       toggleModal={() => toggleModal('delete')}
                       setOptionId={setOptionId}
                       checkedHandler={checkedHandler}
                       selectedOptionId={selectedOptionId}
                       setSelectedOptionId={setSelectedOptionId}
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

         <DeleteModal
            isCloseIcon
            isVisible={modals.delete}
            toggleModal={() => toggleModal('delete')}
            deleteHandler={state !== null ? deleteOptionHandler : deleteHandler}
         >
            <Typography className="modal-message">You can`t restore</Typography>
         </DeleteModal>

         <SaveModal
            isCloseIcon
            checkbox
            title={optionTitle}
            checked={checkedOption}
            isVisible={modals.save}
            toggleModal={() => toggleModal('save')}
            isDisabledModal={!isDisabledModal}
            addOptionHandler={addOptionHandler}
            changeTitleHandler={handleChangeTitle}
            changeCheckboxHandler={changeCheckbox}
         />
      </StyledContainer>
   )
}

export default SelectTheMainIdea

const StyledContainer = styled(Box)(({ theme }) => ({
   width: '820px',

   '& > .add-button': {
      margin: '2rem 0 1.375rem 41rem',

      '& > button >  span > .plus': {
         width: '1rem',
         marginBottom: '0.2rem',
         marginRight: '0.6rem',
      },
   },

   '& > .passage': {
      marginTop: '1.6rem',

      '& > div > .MuiOutlinedInput-root': {
         borderRadius: '8px',
         fontWeight: 400,

         '& > .Mui-focused fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
         },

         '&:hover fieldset': {
            border: `1px solid ${theme.palette.primary.main}`,
         },
      },
   },

   '& > .cards': {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      gap: '1.1rem',
      margin: '1.5rem 0 2rem 0',

      '& > div > .actions': {
         marginLeft: 'auto',
      },
   },

   '& > .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '36.5rem',
   },
}))

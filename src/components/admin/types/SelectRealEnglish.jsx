import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { OPTIONS_NAME, QUESTION_TITLES } from '../../../utils/constants'
import { QUESTION_ACTIONS } from '../../../store/slices/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { OPTIONS_THUNKS } from '../../../store/slices/admin/options/optionsThunk'
import { PlusIcon } from '../../../assets/icons'
import DeleteModal from '../../UI/modals/DeleteModal'
import SaveModal from '../../UI/modals/SaveModal'
import Button from '../../UI/buttons/Button'
import Option from '../../UI/Option'

const SelectRealEnglish = ({
   title,
   setTitle,
   duration,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { options } = useSelector((state) => state.question)

   const { optionResponses } = useSelector((state) => state.options.options)

   const { state } = useLocation()

   const id = optionResponses?.map((option) => option.optionId)

   const [optionId, setOptionId] = useState(null)
   const [optionTitle, setOptionTitle] = useState('')
   const [checkedOption, setCheckedOption] = useState(false)
   const [modals, setModals] = useState({
      delete: false,
      save: false,
   })

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const changeCheckbox = (e) => setCheckedOption(e.target.checked)

   const changeTitleHandler = (e) => setOptionTitle(e.target.value)

   const navigateGoBackHandler = () => navigate(-1)

   useEffect(() => {
      if (state !== null) {
         dispatch(OPTIONS_THUNKS.getOptions({ questionId: state?.id }))

         setOptionId(id)
      }
   }, [dispatch, state])

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
            optionName: OPTIONS_NAME.selectRealEnglishWordsOptions,
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
         QUESTION_ACTIONS.handleIsChecked({
            id,
            optionName: OPTIONS_NAME.selectRealEnglishWordsOptions,
         })
      )
   }

   const isDisabled =
      !selectType ||
      !duration ||
      !title ||
      options.selectRealEnglishWordsOptions?.length < 2

   const isDisabledModal = !optionTitle.trim()

   const deleteOption = options.selectRealEnglishWordsOptions?.find(
      (option) => option.id === optionId
   )?.optionTitle

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            option: options.selectRealEnglishWordsOptions.map((option) => ({
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
                     questionType: QUESTION_TITLES.SELECT_REAL_ENGLISH_WORD,
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
         QUESTION_ACTIONS.addOptionCheck({
            option,
            optionName: OPTIONS_NAME.selectRealEnglishWordsOptions,
         })
      )

      toggleModal('save')

      setOptionTitle('')
      setCheckedOption(false)
   }

   return (
      <>
         <StyledContainer>
            <Box className="add-button">
               <Button
                  onClick={() => toggleModal('save')}
                  icon={<PlusIcon className="plus" />}
               >
                  Add Options
               </Button>
            </Box>

            <Box className="cards">
               {state !== null
                  ? optionResponses?.map((option, i) => (
                       <Option
                          key={option.optionId}
                          index={i}
                          deletion
                          option={option}
                          toggleModal={() => toggleModal('delete')}
                          setOptionId={setOptionId}
                          checkedHandler={checkedHandler}
                       />
                    ))
                  : options.selectRealEnglishWordsOptions?.map((option, i) => (
                       <Option
                          key={option.optionId}
                          index={i}
                          deletion
                          option={option}
                          toggleModal={() => toggleModal('delete')}
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
                  SAVE
               </Button>
            </Box>
         </StyledContainer>

         <DeleteModal
            isCloseIcon
            isVisible={modals.delete}
            toggleModal={() => toggleModal('delete')}
            deleteHandler={state !== null ? deleteOptionHandler : deleteHandler}
         >
            <Typography className="title" variant="p">
               <Typography variant="span">Option: </Typography>

               {deleteOption}
            </Typography>

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
            changeTitleHandler={changeTitleHandler}
            changeCheckboxHandler={changeCheckbox}
         />
      </>
   )
}

export default SelectRealEnglish

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

   '& > .buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.4rem',

      '& > .text': {
         textDecoration: 'none',
         color: 'inherit',
         fontFamily: 'Poppins',
         fontWeight: '700',
      },
   },
}))

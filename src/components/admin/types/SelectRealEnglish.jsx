import { v4 as uuidv4 } from 'uuid'
import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { OPTIONS_NAME, QUESTION_TITLES } from '../../../utils/constants'
import { QUESTION_ACTIONS } from '../../../store/slices/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slices/admin/question/questionThunk'
import { PlusIcon } from '../../../assets/icons'
import DeleteModal from '../../UI/modals/DeleteModal'
import SaveModal from '../../UI/modals/SaveModal'
import Loading from '../../Loading'
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
   const { options, isLoading } = useSelector((state) => state.question)

   const { state } = useLocation()

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

   const navigateGoBackHandler = () => {
      navigate(-1)

      dispatch(QUESTION_ACTIONS.clearOptions())
   }

   useEffect(() => {
      if (state !== null) {
         dispatch(
            QUESTION_THUNKS.getQuestion({
               id: state?.id,
               addUpdateOption: QUESTION_ACTIONS,
               optionName: OPTIONS_NAME.selectRealEnglishWordsOptions,
            })
         )
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

   const checkedHandler = (optionId) => {
      dispatch(
         QUESTION_ACTIONS.handleIsChecked({
            optionId,
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
      (option) => option.optionId === optionId
   )?.optionTitle

   const onSubmit = () => {
      if (selectType !== '' && +duration !== 0 && title !== '') {
         const requestData = {
            title: title.trim(),
            duration: +duration,
            option: options.selectRealEnglishWordsOptions?.map((option) => ({
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
            const requestData = {
               title: title.trim(),
               duration: +duration,
               optionRequest: options.selectRealEnglishWordsOptions?.map(
                  (option) => ({
                     optionTitle: option.optionTitle,
                     isCorrectOption: option.isCorrectOption,
                  })
               ),
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
            {state !== null ? isLoading && <Loading /> : null}

            <Box className="add-button">
               <Button
                  onClick={() => toggleModal('save')}
                  icon={<PlusIcon className="plus" />}
               >
                  Add Options
               </Button>
            </Box>

            <Box className="cards">
               {options.selectRealEnglishWordsOptions?.map((option, index) => (
                  <Option
                     key={option.optionId}
                     index={index}
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
                  {state !== null ? 'UPDATE' : 'SAVE'}
               </Button>
            </Box>
         </StyledContainer>

         <DeleteModal
            isCloseIcon
            isVisible={modals.delete}
            toggleModal={() => toggleModal('delete')}
            deleteHandler={deleteHandler}
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
   width: '820px',

   '& > .add-button': {
      margin: '2rem -1rem 1.375rem 41rem',

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
      position: 'relative',
      right: '-35.5rem',

      '& > .MuiButton-root ': {
         width: '118px',
      },

      '& > .text': {
         textDecoration: 'none',
         color: 'inherit',
         fontFamily: 'Poppins',
         fontWeight: '700',
      },
   },
}))

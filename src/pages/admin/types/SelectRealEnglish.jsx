import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/question/questionSlice'
import { QUESTION_THUNKS } from '../../../store/slice/admin/question/questionThunk'
import { QUESTION_TITLES } from '../../../utils/constants'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import { PlusIcon } from '../../../assets/icons'
import DeleteModal from '../../../components/UI/modals/DeleteModal'
import SaveModal from '../../../components/UI/modals/SaveModal'
import Button from '../../../components/UI/buttons/Button'
import Option from '../../../components/UI/Option'

const SelectRealEnglish = ({
   title,
   setTitle,
   duration,
   selectType,
   setDuration,
   setSelectType,
}) => {
   const { options } = useSelector((state) => state.question)

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

   const handleChangeTitle = (e) => setOptionTitle(e.target.value)

   const changeCheckbox = (e) => setCheckedOption(e.target.checked)

   const handleGoBack = () => navigate(-1)

   const toggleModal = (modalName) => {
      setModals((prevModals) => ({
         ...prevModals,
         [modalName]: !prevModals[modalName],
      }))

      setOptionTitle('')
      setCheckedOption(false)
   }

   const deleteOption = () => {
      dispatch(
         QUESTION_ACTIONS.deleteOption({
            optionId,
            optionName: 'selectRealEnglishWordsOptions',
         })
      )

      toggleModal('delete')
   }

   const handleChecked = (id) => {
      dispatch(
         QUESTION_ACTIONS.handleIsChecked({
            id,
            optionName: 'selectRealEnglishWordsOptions',
         })
      )
   }

   const isDisabled =
      !selectType ||
      !duration ||
      !title.trim() ||
      options.selectRealEnglishWordsOptions?.length < 2

   const isDisabledModal = !optionTitle.trim()

   const handleDelete = options.selectRealEnglishWordsOptions?.find(
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

         dispatch(
            QUESTION_THUNKS.saveTest({
               requestData,

               data: {
                  testId,
                  questionType: questionTitle(
                     QUESTION_TITLES.SELECT_REAL_ENGLISH_WORDS
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
      }

      dispatch(
         QUESTION_ACTIONS.addOptionCheck({
            option,
            optionName: 'selectRealEnglishWordsOptions',
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
               {options.selectRealEnglishWordsOptions?.map((option, i) => (
                  <Option
                     key={option.id}
                     index={i}
                     option={option}
                     openModal={() => toggleModal('delete')}
                     setOptionId={setOptionId}
                     handleChecked={handleChecked}
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
                  onClick={onSubmit}
               >
                  SAVE
               </Button>
            </Box>
         </StyledContainer>

         <DeleteModal
            isCloseIcon
            isVisible={modals.delete}
            handleIsVisible={() => toggleModal('delete')}
            handleDelete={deleteOption}
         >
            <Typography className="title" variant="p">
               <Typography variant="span">Option: </Typography>

               {handleDelete}
            </Typography>

            <Typography className="modal-message">You can`t restore</Typography>
         </DeleteModal>

         <SaveModal
            checkbox
            isCloseIcon
            checked={checkedOption}
            isVisible={modals.save}
            optionTitle={optionTitle}
            changeCheckbox={changeCheckbox}
            handleIsVisible={() => toggleModal('save')}
            isDisabledModal={!isDisabledModal}
            addOptionHandler={addOptionHandler}
            handleChangeTitle={handleChangeTitle}
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
      alignItems: 'center',
      gap: '1.1rem',
      margin: '1.5rem 0 2rem 0',
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

import { Box, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { questionActions } from '../../store/slice/admin/questionSlice'
import { saveTest } from '../../store/slice/admin/questionThunk'
import QuestionModal from './QuestionModal'
import ModalDelete from './ModalDelete'
import CardOption from './CardOption'
import Button from './buttons/Button'

const SelectRealEnglish = ({
   duration,
   setDuration,
   selectType,
   setError,
   title,
   setTitle,
   setSelectType,
}) => {
   const option = useSelector((state) => state.question.option)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [isOpenButton, setIsOpenButton] = useState(false)

   const [title2, setTitle2] = useState('')
   const [checkOption, setCheckOption] = useState(false)

   const openModalDelete = () => setIsOpenModalDelete((prevState) => !prevState)

   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
      setIsOpenButton(true)
   }

   const deleteTest = (id) => {
      dispatch(questionActions.deleteOption(id))
      setIsOpenModalDelete((prevState) => !prevState)
   }

   const checkedFunction = (id) => {
      dispatch(questionActions.changeTrueOption(id))
   }

   const saveTestQuestion = () => {
      if (selectType === '') {
         setError((prevState) => ({
            ...prevState,
            select: 'select the type',
         }))
      }
      if (title === '') {
         setError((prevState) => ({
            ...prevState,
            title: 'text the title',
         }))
      }
      if (+duration === +'') {
         setError((prevState) => ({
            ...prevState,
            duration: 'text the duration',
         }))
      } else if (selectType !== '' && +duration !== +'' && title !== '') {
         dispatch(questionActions.clearOptions())
         setSelectType('')
         setTitle('')
         setDuration('')
         const requestData = {
            title,
            duration: +duration,
            statement: 'z',
            passage: 'f',
            attempts: 0,
            correctAnswer: 's',
            fileUrl: 'd',
            option: [
               {
                  id: Math.random() * 1000,
                  optionTitle: title2,
                  isTrueOption: checkOption,
                  fileUrl: 'a',
               },
            ],
         }
         dispatch(
            saveTest({
               requestData,
               data: {
                  testId: 4,
                  questionType: 'SELECT_REAL_ENGLISH_WORD',
                  navigate,
               },
            })
         )
      }
   }
   return (
      <>
         <StyledModal>
            <Box className="con-of-btns">
               <Button onClick={openModalSave}>+ Add Options</Button>
            </Box>
            <Box className="block-of-cards">
               {option?.map((item, i) => (
                  <CardOption
                     elem={item}
                     index={i}
                     checkedFunction={checkedFunction}
                     openModal={isOpenModalDelete}
                     setIsOpenModal={setIsOpenModalDelete}
                  />
               ))}
            </Box>
            {isOpenButton === false ? null : (
               <Box className="block-of-buttons">
                  <Button variant="secondary">GO BACK</Button>
                  <Button variant="primary" onClick={saveTestQuestion}>
                     SAVE
                  </Button>
               </Box>
            )}
         </StyledModal>
         {option?.map((item) => (
            <ModalDelete
               item={item}
               onCloseModal={openModalDelete}
               isOpenModal={isOpenModalDelete}
               deleteFunction={deleteTest}
            />
         ))}
         <QuestionModal
            setCheckOption={setCheckOption}
            setTitle={setTitle2}
            title={title2}
            checkOption={checkOption}
            isOpen={isOpenModalSave}
            onClose={openModalSave}
         />
      </>
   )
}

export default SelectRealEnglish

const StyledModal = styled(Box)(() => ({
   '& .con-of-btns': {
      marginLeft: '41.5rem',
      marginTop: '-2rem',
   },
   '& .block-of-cards': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.1rem',
      marginBottom: '2rem',
      marginTop: '1.5rem',
   },
   '& .block-of-buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
      marginBottom: '3rem',
   },
}))

import { Box, Button, styled } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { questionActions } from '../../store/slice/admin/questionSlice'
import { saveTest } from '../../store/slice/admin/questionThunk'
import QuestionModal from './QuestionModal'
import ModalDelete from './ModalDelete'
import CardOption from './CardOption'

const selectRealEnglishWords = ({
   isValueInputDuration,
   setIsValueInputDuration,
   isValue,
   setError,
   isValueInput,
   setIsValueInput,
   setIsValue,
}) => {
   const option = useSelector((state) => state.question.option)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [isOpenButton, setIsOpenButton] = useState(false)

   const [title, setTitle] = useState('')
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
      if (isValue === '') {
         setError((prevState) => ({
            ...prevState,
            select: 'select the type',
         }))
      }
      if (isValueInput === '') {
         setError((prevState) => ({
            ...prevState,
            title: 'text the title',
         }))
      }
      if (+isValueInputDuration === +'') {
         setError((prevState) => ({
            ...prevState,
            duration: 'text the duration',
         }))
      } else if (
         isValue !== '' &&
         +isValueInputDuration !== +'' &&
         isValueInput !== ''
      ) {
         dispatch(questionActions.clearOptions())
         setIsValue('')
         setIsValueInput('')
         setIsValueInputDuration('')
         const requestData = {
            title: isValueInput,
            duration: +isValueInputDuration,
            statement: 'z',
            passage: 'f',
            attempts: 0,
            correctAnswer: 's',
            fileUrl: 'd',
            option: [
               {
                  id: Math.random() * 1000,
                  optionTitle: title,
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
         <StyledContainer>
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
         </StyledContainer>
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
            setTitle={setTitle}
            title={title}
            checkOption={checkOption}
            isOpen={isOpenModalSave}
            onClose={openModalSave}
         />
      </>
   )
}

export default selectRealEnglishWords

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   margin: '6.5% 0',
}))

const StyledModal = styled(Box)(() => ({
   borderRadius: '1.25rem',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   width: '980px',
   height: '100%',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
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
   '& .title': {
      width: '2.33rem',
      height: '1.125rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '2.33rem',
      display: 'flex',
      alignItems: 'center',
      marginRight: '49rem',
      color: '#4B4759',
   },
   '& .type': {
      width: '2.33rem',
      height: '1.125rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '2.33rem',
      display: 'flex',
      alignItems: 'center',
      marginRight: '49rem',
      color: '#4B4759',
      marginTop: '0.8rem',
      marginBottom: '-0.5rem',
   },
   '& .con-form': {
      width: '32.3125rem',
      marginTop: '2.5rem',
      marginBottom: '3.4rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1.25rem',
   },
   '& .duration': {
      width: '99px',
      height: '46px',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'poppins',
      padding: '26.5px 0',
   },
   '& .input-duration-container': {
      display: 'flex',
      gap: '1.5rem',
      marginLeft: '3.3rem',
   },
   '& .duration-container': {
      marginTop: '-68px',
   },
   '& .duration-text': {
      width: '152px',
      marginBottom: '1.3rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '1rem',
      color: '#4B4759',
   },
   '& .block-of-buttons': {
      display: 'flex',
      gap: '1.1rem',
      marginLeft: '37.5rem',
      marginBottom: '3rem',
   },
   '& .warning': {
      color: 'red',
   },
}))

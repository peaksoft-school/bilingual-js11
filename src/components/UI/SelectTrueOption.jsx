import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { Box, Typography, styled } from '@mui/material'
import {
   postSelectRealEnglishWord,
   updateQuestionRequest,
} from '../../api/questionService'
import QuestionModal from './QuestionModal'
import Button from './buttons/Button'
import ModalDelete from './ModalDelete'
import { questionActions } from '../../configs/slice-thunk/questionSlice'
import Dropdown from './Dropdown'
import Input from './Input'
import { OPTIONS } from '../../utils/constants'
import CardOption from './CardOption'
import { showNotification } from '../../utils/helpers/notification'

const SelectTrueOption = ({ title, duration, testId, setError }) => {
   const options = useSelector((state) => state.questions.options)
   const dispatch = useDispatch()
   const { state } = useLocation()
   const [isOpenModalDelete, setIsOpenModalDelete] = useState(false)
   const [isOpenModalSave, setIsOpenModalSave] = useState(false)
   const [idListen, setListenId] = useState()
   const [isValue, setIsValue] = useState('')
   const [isValueInput, setIsValueInput] = useState('')
   const [isValueInputDuration, setIsValueInputDuration] = useState('')
   const [isOpenButton, setIsOpenButton] = useState(false)

   const selectHandler = (e) => {
      setIsValue(e.target.value)
   }
   const inputHandler = (e) => {
      setIsValueInput(e.target.value)
   }
   const inputDurationHandler = (e) => {
      setIsValueInputDuration(e.target.value)
   }
   const navigate = useNavigate()

   const openModalDelete = (id) => {
      setIsOpenModalDelete((prevState) => !prevState)
      setListenId(id)
   }
   const openModalSave = () => {
      setIsOpenModalSave((prevState) => !prevState)
      setIsOpenButton(true)
   }
   const deleteTest = (id) => {
      dispatch(questionActions.deleteOption(id))
      setIsOpenModalDelete((prevState) => !prevState)
   }
   const checkedFunction = (e, id) => {
      dispatch(questionActions.changeTrueOption(id))
   }
   const navigateGoBackTest = () => {
      navigate(-1)
   }
   const goBack = () => {
      navigate(`/admin/test/${testId}`)
   }
   const saveTest = async () => {
      const data = {
         title,
         duration,
         questionOrder: 1,
         testId,
         options,
         isActive: true,
         questionType: state?.question.questionType,
         id: state?.question.id,
      }
      try {
         if (!title) {
            return setError((prevState) => ({
               ...prevState,
               title: 'Please title enter!',
            }))
         }
         if (!duration) {
            return setError((prevState) => ({
               ...prevState,
               duration: 'Enter time!',
            }))
         }
         if (options.length === 0) {
            return showNotification(
               'error',
               'Failed',
               'options should not be empty'
            )
         }
         if (state !== null) {
            await updateQuestionRequest(data)
            goBack()
            showNotification('success', 'Question', 'Successfully updated')
         } else {
            await postSelectRealEnglishWord(data)
            goBack()
            showNotification('success', 'Question', 'Successfully added')
         }
         return dispatch(questionActions.clearOptions())
      } catch (error) {
         if (AxiosError(error)) {
            return showNotification(
               'error',
               'Question',
               error.response?.data.message
            )
         }
         return showNotification('error', 'Question', 'Something went wrong')
      }
   }

   useEffect(() => {
      dispatch(questionActions.updateOption(state?.question.options || []))
   }, [])

   return (
      <>
         <StyledContainer>
            <StyledModal>
               <Box className="con-form">
                  <Typography className="title" variant="label">
                     Title
                  </Typography>
                  <Box className="input-duration-container">
                     <StyledInput
                        placeholder="Select real English words"
                        onChange={inputHandler}
                        value={isValueInput}
                     />
                     <Box className="duration-container">
                        <Typography className="duration-text">
                           Duration <br /> (in minutes)
                        </Typography>
                        <Input
                           className="duration"
                           placeholder="15:00"
                           value={isValueInputDuration}
                           onChange={inputDurationHandler}
                        />
                     </Box>
                  </Box>
                  <Typography className="type" variant="label">
                     Type
                  </Typography>
                  <Box>
                     <StyledSelect
                        value={isValue}
                        onChange={selectHandler}
                        options={OPTIONS}
                     />
                  </Box>
               </Box>
               <Box className="con-of-btns">
                  <Button onClick={openModalSave}>+ Add Options</Button>
               </Box>
               <Box className="block-of-cards">
                  {options.map((elem, i) => (
                     <CardOption
                        key={elem.id}
                        elem={elem}
                        index={i}
                        checkedFunction={checkedFunction}
                        openModal={isOpenModalDelete}
                        setIsOpenModal={setIsOpenModalDelete}
                     />
                  ))}
               </Box>
               {isOpenButton === false ? null : (
                  <Box className="block-of-buttons">
                     <Button variant="secondary" onClick={navigateGoBackTest}>
                        GO BACK
                     </Button>
                     <Button variant="primary" onClick={saveTest}>
                        SAVE
                     </Button>
                  </Box>
               )}
            </StyledModal>
         </StyledContainer>
         {options.map((item) => (
            <ModalDelete
               item={item}
               id={idListen}
               openModal={openModalDelete}
               isOpenModal={isOpenModalDelete}
               deleteFunction={deleteTest}
            />
         ))}
         <QuestionModal isOpen={isOpenModalSave} onClose={openModalSave} />
      </>
   )
}

export default SelectTrueOption

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   margin: '2.5rem 0',
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
}))

const StyledInput = styled(Input)(() => ({
   background: '#fff',
   width: '697px',
   height: '46px',
   borderRadius: '8px',
   paddingBottom: '56px',
   color: '#4C4859',
}))

const StyledSelect = styled(Dropdown)(() => ({
   borderRadius: '8px',
   width: '820px',
   fontStyle: 'normal',
   display: 'flex',
   justifyContent: 'center',
   '& .MuiSelect-icon': {
      color: 'black',
   },
   '& .css-1ugmu4g-MuiFormLabel-root-MuiInputLabel-root': {
      textAlign: 'center',
   },
}))

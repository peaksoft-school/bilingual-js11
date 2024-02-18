import React, { useState } from 'react'
import { Box, Modal, Typography, styled } from '@mui/material'
import { useDispatch } from 'react-redux'
import Button from './buttons/Button'
import Input from './Input'
import { CancelIcon } from '../../assets/icons'
import { questionActions } from '../../configs/slice-thunk/questionSlice'
import Checkbox from './Checkbox'

const QuestionModal = ({ isOpen, onClose }) => {
   const dispatch = useDispatch()
   const [title, setTitle] = useState('')
   const [checkOption, setChekOption] = useState(false)
   const [optionOrder, setOptionOrder] = useState(1)

   const changeInput = (e) => {
      setTitle(e.target.value)
   }
   const goBackFunc = () => {
      setTitle('')
      onClose()
   }

   const changeCheckbox = (e) => {
      setChekOption(e.target.checked)
   }

   const addHandler = () => {
      const data = {
         title,
         isCorrect: checkOption,
         optionOrder,
         id: optionOrder,
      }
      setOptionOrder((prevOrder) => prevOrder + 1)
      dispatch(questionActions.addOption(data))
      onClose()
      setTitle('')
      setChekOption(false)
   }

   return (
      <StyledContainer>
         <Modal open={isOpen} onClose={goBackFunc}>
            <StyledModal>
               <StyledCloseIcon onClick={goBackFunc} />
               <Box className="con-form">
                  <Typography className="title" variant="label">
                     Title
                  </Typography>

                  <Input
                     type="text"
                     placeholder="Select real English words"
                     value={title}
                     onChange={changeInput}
                  />

                  <Box className="check-con">
                     <Typography className="true-option">
                        Is true option ?
                     </Typography>
                     <Checkbox
                        checked={checkOption}
                        onChange={changeCheckbox}
                     />
                  </Box>
               </Box>
               <Box className="buttons">
                  <Box className="con-of-btns">
                     <Button variant="secondary" onClick={goBackFunc}>
                        GO BACK
                     </Button>
                     <Button
                        variant="primary"
                        onClick={addHandler}
                        disabled={!title}
                     >
                        SAVE
                     </Button>
                  </Box>
               </Box>
            </StyledModal>
         </Modal>
      </StyledContainer>
   )
}

export default QuestionModal

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledModal = styled(Box)(() => ({
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: '#fff',
   borderRadius: '1.25rem',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   width: '39.8125rem',
   height: '23.5rem',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   '& .con-of-btns': {
      width: '13.75rem',
      height: '2.625rem',
      marginLeft: '23.4rem',
      display: 'flex',
      gap: '1rem',
   },
   '& .true-option': {
      fontFamily: 'Poppins',
   },
   '& .check-con': {
      display: 'flex',
      gap: '0.44rem',
      alignItems: 'center',
   },
   '& .buttons': {
      width: '39.8125rem',
      height: '5.875rem',
      borderRadius: '0rem 0rem 1.25rem 1.25rem',
      background: '#F0F1F1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
      color: '#4B4759',
   },
   '& .con-form': {
      width: '32.3125rem',
      marginTop: '2.5rem',
      marginBottom: '3.4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
   },
}))

const StyledCloseIcon = styled(CancelIcon)(() => ({
   marginLeft: '34.44rem',
   marginTop: '1.25rem',
   cursor: 'pointer',
   transition: '0.3s',
   ':hover': {
      transform: 'scale(1.1)',
      textColor: '#fff',
   },
}))

import { useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import Button from './buttons/Button'
import Dropdown from './Dropdown'
import Input from './Input'
import { OPTIONS } from '../../utils/constants'
import CardOption from './CardOption'
import ModalSave from './modals/ModalSave'

const SelectTrueOption = ({ addOptions }) => {
   const [isValue, setIsValue] = useState('')
   const [isValueInput, setIsValueInput] = useState('')
   const [isValueInputDuration, setIsValueInputDuration] = useState('')
   const [isModalOpen, setIsModalOpen] = useState(false)

   const selectHandler = (e) => {
      setIsValue(e.target.value)
   }
   const inputHandler = (e) => {
      setIsValueInput(e.target.value)
   }
   const inputDurationHandler = (e) => {
      setIsValueInputDuration(e.target.value)
   }
   const handleIsVisible = () => {
      setIsModalOpen((prev) => !prev)
   }

   return (
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
                     type="text"
                  />
                  <Box className="duration-container">
                     <Typography className="duration-text">
                        Duration <br /> (in minutes)
                     </Typography>
                     <Input
                        type="text"
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
            <Box className="con-of-btn">
               <Button onClick={addOptions}>+ Add options</Button>
            </Box>
            <Box className="block-of-cards">
               <CardOption num="1" />
               <CardOption num="2" />
               <CardOption num="3" />
               <CardOption num="4" />
               <CardOption num="5" />
               <CardOption num="6" />
            </Box>
            <Box className="block-of-buttons">
               <Button variant="secondary">GO BACK</Button>
               <Button variant="primary" onClick={handleIsVisible}>
                  SAVE
               </Button>
               {isModalOpen && (
                  <ModalSave
                     isVisible={isModalOpen}
                     handleIsVisible={handleIsVisible}
                     save="SAVE"
                     goBack="GO BACK"
                     isTrueOption="Is true option ?"
                     title="title"
                     onSave={handleIsVisible}
                  />
               )}
            </Box>
         </StyledModal>
      </StyledContainer>
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
   width: '979px',
   height: '572px',
   display: 'flex',
   paddingTop: '2rem',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   '& .con-of-btn': {
      marginLeft: '41.5rem',
      marginTop: '-1.1rem',
      marginBottom: '1.5rem',
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
   '& .block-of-cards': {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1.1rem',
      marginBottom: '2rem',
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

const StyledSelect = styled(Dropdown)(({ theme }) => ({
   borderRadius: '8px',
   width: '820px',
   fontStyle: 'normal',
   display: 'flex',
   justifyContent: 'center',
   '& .MuiSelect-icon': {
      color: 'black',
   },
}))

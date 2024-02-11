import { useState } from 'react'
import { Box, styled, Typography } from '@mui/material'
import Button from './buttons/Button'
import Dropdown from './Dropdown'
import Input from './Input'
import { OPTIONS } from '../../utils/constants'

const SelectWords = ({ addOptions }) => {
   const [isValue, setIsValue] = useState('')
   const [isValueInput, setIsValueInput] = useState('')
   const [isValueInputDuration, setIsValueInputDuration] = useState('')

   const selectHandler = (e) => {
      setIsValue(e.target.value)
   }
   const inputHandler = (e) => {
      setIsValueInput(e.target.value)
   }
   const inputDurationHandler = (e) => {
      setIsValueInputDuration(e.target.value)
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
               <Button onClick={addOptions}>+ Add options</Button>
            </Box>
         </StyledModal>
      </StyledContainer>
   )
}

export default SelectWords

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: '8%',
}))

const StyledModal = styled(Box)(() => ({
   borderRadius: '1.25rem',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   width: '980px',
   height: '366px',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   '& .con-of-btns': {
      marginLeft: '41.5rem',
      marginTop: '-2rem',
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
   '& .css-1ugmu4g-MuiFormLabel-root-MuiInputLabel-root': {
      textAlign: 'center',
   },
}))

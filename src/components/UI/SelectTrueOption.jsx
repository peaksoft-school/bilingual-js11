import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { questionActions } from '../../store/slice/admin/questionSlice'
import Dropdown from './Dropdown'
import Input from './Input'
import { OPTIONS } from '../../utils/constants'

const SelectTrueOption = () => {
   const dispatch = useDispatch()
   const option = useSelector((state) => state.question.option)
   const [error, setError] = useState({})
   const [isValue, setIsValue] = useState('')
   const [isValueInput, setIsValueInput] = useState('')
   const [isValueInputDuration, setIsValueInputDuration] = useState(0)

   const selectHandler = (e) => {
      setIsValue(e.target.value)
   }

   const inputHandler = (e) => {
      setIsValueInput(e.target.value)
   }

   const inputDurationHandler = (e) => {
      setIsValueInputDuration(e.target.value)
   }

   useEffect(() => {
      dispatch(questionActions.updateOptions(option || []))
   }, [])

   return (
      <StyledContainer>
         <StyledModal>
            <Box className="con-form">
               <Typography className="title" variant="label">
                  Title
               </Typography>
               <Box className="input-duration-container">
                  <StyledInput
                     style={
                        error.title === 'text the title'
                           ? { border: '1px solid #d60b0b' }
                           : null
                     }
                     placeholder="Select real English words"
                     onChange={inputHandler}
                     value={isValueInput}
                  />
                  <Box className="duration-container">
                     <Typography className="duration-text">
                        Duration <br /> (in minutes)
                     </Typography>
                     <Input
                        style={
                           error.duration === 'text the duration'
                              ? {
                                   border: '1px solid #d60b0b',
                                }
                              : null
                        }
                        className="duration"
                        placeholder="15:00"
                        value={isValueInputDuration}
                        onChange={inputDurationHandler}
                        onInput={(e) => {
                           const value = +e.target.value
                           e.target.value = Math.max(1, Math.min(15, value))
                        }}
                        type="number"
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
                     style={
                        error.select === 'select the type'
                           ? {
                                border: '1px solid #d60b0b',
                             }
                           : null
                     }
                  />
               </Box>
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

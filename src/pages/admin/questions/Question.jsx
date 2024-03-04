import { useState, useEffect } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/question/questionSlice'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import { OPTIONS } from '../../../utils/constants'
import TestContainer from '../../../components/UI/TestContainer'
import TestType from '../../../components/TestType'
import Dropdown from '../../../components/UI/Dropdown'
import Input from '../../../components/UI/Input'

const Question = () => {
   const { options } = useSelector((state) => state.question)

   const dispatch = useDispatch()

   const [selectType, setSelectType] = useState(questionTitle(''))
   const [title, setTitle] = useState('')
   const [duration, setDuration] = useState(0)

   const handleSelectTypeChange = (e) => setSelectType(e.target.value)

   const handleChangeTitle = (e) => setTitle(e.target.value)

   const handleDurationChange = (e) => setDuration(e.target.value)

   useEffect(() => {
      dispatch(QUESTION_ACTIONS.updateOptions(options || []))
   }, [])

   return (
      <TestContainer>
         <StyledContainer>
            <Box className="container">
               <Typography className="text title" variant="label">
                  Title
               </Typography>

               <Box className="input-container">
                  <Input
                     className="input-title"
                     placeholder="Enter the title ....."
                     onChange={handleChangeTitle}
                     value={title}
                  />

                  <Box className="duration-container">
                     <Typography className="text duration">
                        Duration <br /> (in minutes)
                     </Typography>

                     <Input
                        className="duration-input"
                        placeholder="15:00"
                        value={duration}
                        onChange={handleDurationChange}
                        inputProps={{ min: 0, max: 15 }}
                        type="number"
                     />
                  </Box>
               </Box>

               <Typography className="text type" variant="label">
                  Type
               </Typography>

               <Box>
                  <Dropdown
                     className="dropdown"
                     value={selectType}
                     onChange={handleSelectTypeChange}
                     options={OPTIONS}
                  />
               </Box>
            </Box>

            <TestType
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         </StyledContainer>
      </TestContainer>
   )
}

export default Question

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',

   '& > .container': {
      marginTop: '2.5rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1.25rem',

      '& .text': {
         fontFamily: 'Poppins',
         fontWeight: '500',
      },

      '& > .title': {
         marginRight: '49rem',
         color: '#4B4759',
         fontFamily: 'Poppins',
         fontWeight: '500',
      },

      '& > .input-container': {
         display: 'flex',
         gap: '1.3rem',

         '& > .input-title': {
            background: '#fff',
            width: '43.6rem',
            height: '2.875rem',
            borderRadius: '0.5rem',
            paddingBottom: '3.5rem',
            color: '#4C4859',
         },

         '& > .duration-container': {
            marginTop: '-4.30rem',

            '& > .duration': {
               marginBottom: '1.3rem',
               color: '#4B4759',
            },

            '& > .duration-input': {
               width: '6.5625rem',
               height: '2.875rem',
               borderRadius: '0.5rem',
            },
         },

         '& div > .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button':
            {
               display: 'none',
            },
      },

      '& > .type': {
         color: '#4B4759',
         margin: '0.8rem 49rem -0.5rem 0',
      },

      '& > div > .dropdown': {
         borderRadius: '0.5rem',
         width: '823px',
      },
   },
}))

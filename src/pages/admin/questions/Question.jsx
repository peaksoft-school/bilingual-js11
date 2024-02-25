import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { QUESTION_ACTIONS } from '../../../store/slice/admin/questions/questionSlice'
import { questionTitle } from '../../../utils/helpers/questionTitle'
import { OPTIONS } from '../../../utils/constants'
import Input from '../../../components/UI/Input'
import TypeTest from '../TypeTest'
import Dropdown from '../../../components/UI/Dropdown'
import TestContainer from '../../../components/UI/TestContainer'

const Question = () => {
   const dispatch = useDispatch()

   const { state } = useLocation()

   const option = useSelector((state) => state.question.option)

   const [selectType, setSelectType] = useState(
      questionTitle(state?.question.questionType || '')
   )

   const [title, setTitle] = useState(state?.question.title || '')

   const [duration, setDuration] = useState(state?.question.duration || 5)

   const selectHandler = (e) => setSelectType(e.target.value)

   const inputHandler = (e) => setTitle(e.target.value)

   const inputDurationHandler = (e) => setDuration(e.target.value)

   useEffect(() => {
      dispatch(QUESTION_ACTIONS.updateOptions(option || []))
   }, [])

   return (
      <TestContainer>
         <StyledContent>
            <Box className="form-container">
               <Typography className="text title" variant="label">
                  Title
               </Typography>

               <Box className="input-container">
                  <Input
                     className="input-title"
                     placeholder="Select real English words"
                     onChange={inputHandler}
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
                        onChange={inputDurationHandler}
                        onInput={(e) => {
                           const value = +e.target.value
                           e.target.value = Math.max(1, Math.min(15, value))
                        }}
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
                     onChange={selectHandler}
                     options={OPTIONS}
                  />
               </Box>
            </Box>

            <TypeTest
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         </StyledContent>
      </TestContainer>
   )
}

export default Question

const StyledContent = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',

   '& .form-container': {
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

      '& .title': {
         marginRight: '49rem',
         color: '#4B4759',
      },

      '& .input-container': {
         display: 'flex',
         gap: '1.5rem',

         '& .input-title': {
            background: '#fff',
            width: '43.5313rem',
            height: '2.875rem',
            borderRadius: '0.5rem',
            paddingBottom: '3.5rem',
            color: '#4C4859',
         },

         '& .duration-container': {
            marginTop: '-4.25rem',

            '& .duration': {
               marginBottom: '1.3rem',
               color: '#4B4759',
            },

            '& .duration-input': {
               width: '6.5625rem',
               height: '2.875rem',
               borderRadius: '0.5rem',
            },
         },

         '& .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button':
            {
               display: 'none',
            },
      },

      '& .type': {
         color: '#4B4759',
         margin: '0.8rem 49rem -0.5rem 0',
      },

      '& .dropdown': {
         borderRadius: '0.5rem',
         width: '51.25rem',

         '& .MuiSelect-icon': {
            color: 'black',
         },
         '& .css-1ugmu4g-MuiFormLabel-root-MuiInputLabel-root': {
            textAlign: 'center',
         },
      },
   },
}))

import { useState } from 'react'
import { InputLabel, styled, Box } from '@mui/material'
import Input from '../../../components/UI/Input'
import TestContainer from '../../../components/UI/TestContainer'

const RespondInAtLeastNWords = () => {
   const [data, setData] = useState({
      question: '',
      wordCount: 0,
   })

   const handleQuestionChange = (event) => {
      setData((prev) => ({
         ...prev,
         question: event.target.value,
      }))
   }

   const handleWordCountChange = (event) => {
      setData((prevState) => ({
         ...prevState,
         wordCount: event.target.value,
      }))
   }

   const handleSubmit = (event) => {
      event.preventDefault()

      console.log('Data:', data)
   }

   return (
      <TestContainer>
         <Container onSubmit={handleSubmit}>
            <Box>
               <InputLabel>Question statement</InputLabel>
               <Input value={data.question} onChange={handleQuestionChange} />
            </Box>

            <Box>
               <InputLabel>
                  Number off <br />
                  Words
               </InputLabel>
               <Input
                  className="input-number"
                  type="number"
                  value={data.wordCount}
                  onChange={handleWordCountChange}
               />
            </Box>
         </Container>
      </TestContainer>
   )
}

export default RespondInAtLeastNWords

const Container = styled('form')(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '3rem',

   '& .MuiInputLabel-root': {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
      color: '#4B4759',
      marginBottom: '15px',
   },

   '& .input-number': {
      padding: '.75rem  0.7rem .75rem 0.7rem ',
      width: '5rem',
      borderRadius: '1.5rem',
      textAlign: 'center',
      fontSize: '1.5rem',
   },

   '& .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button': {
      display: 'none',
   },
}))

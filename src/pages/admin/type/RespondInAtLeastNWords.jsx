import React from 'react'
import { InputLabel, styled, Box } from '@mui/material'
import Input from '../../../components/UI/Input'
import TestContainer from '../../../components/UI/TestContainer'

const RespondInAtLeastNWords = () => {
   return (
      <TestContainer>
         <Container>
            <Box>
               <InputLabel>Question statement</InputLabel>
               <Input />
            </Box>

            <Box>
               <InputLabel>
                  Number off <br />
                  Words
               </InputLabel>
               <Input className="input-number" type="number" />
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

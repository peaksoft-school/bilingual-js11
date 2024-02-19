import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Input from '../../../components/UI/Input'

const RecordSayingStatement = () => {
   const [value, setValue] = useState('')

   const handleChange = (event) => {
      setValue(event.target.value)
   }

   return (
      <StyledContainer>
         <Box className="statement">
            <Typography>Statement</Typography>

            <Input type="text" value={value} onChange={handleChange} />
         </Box>

         <Box className="correct-answer">
            <Typography>Correct answer</Typography>

            <Input type="text" value={value} onChange={handleChange} />
         </Box>
      </StyledContainer>
   )
}

export default RecordSayingStatement

const StyledContainer = styled(Box)(() => ({
   fontFamily: 'Arial',
   color: '#4C4859',

   '& .statement': {
      marginBottom: '1.4rem',
   },
}))

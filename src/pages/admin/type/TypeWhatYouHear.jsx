import { Box, InputLabel, styled } from '@mui/material'
import Input from '../../../components/UI/Input'

const TypeWhatYouHear = () => {
   return (
      <Box>
         <Container>
            <Box className="replays">
               <InputLabel>
                  Number off <br />
                  Replays
               </InputLabel>
               <Input
                  type="number"
                  InputProps={{ inputProps: { min: 0, max: 10 } }}
               />
            </Box>
         </Container>
      </Box>
   )
}

export default TypeWhatYouHear

const Container = styled(Box)(() => ({
   display: 'flex',
   marginTop: '3.75rem',
   width: '50%',
   gap: '1.875rem',
   marginBottom: '20px',
   alignItems: 'flex-end',

   '& .replays': {
      display: 'table-column',
   },

   '& .MuiInputLabel-root': {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '16px',
      lineHeight: '16px',
      color: '#4B4759',
      marginBottom: '15px',
   },

   '& .MuiOutlinedInput-root': {
      input: { padding: '.75rem  0.8rem .75rem 0.7rem ' },
      width: '60%',
      borderRadius: '1.5rem',
   },

   ' & .MuiOutlinedInput-input[type="number"]::-webkit-inner-spin-button': {
      display: 'none',
   },
}))

import { Box, Typography, styled } from '@mui/material'
import DragAndDrop from '../../../components/DragAndDrop'
import Button from '../../../components/UI/buttons/Button'

const SelectRealEnglishWords = ({ questions }) => {
   const options = questions?.optionResponses

   console.log(options)

   const onSubmit = () => {}

   return (
      <StyledContainer>
         <Typography variant="h5" className="title">
            Select the real English words in this list
         </Typography>

         <Box className="content">
            <DragAndDrop options={options} />
         </Box>

         <Box className="button">
            <Button onClick={onSubmit}>NEXT</Button>
         </Box>
      </StyledContainer>
   )
}

export default SelectRealEnglishWords

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',

   '& .title': {
      padding: '-1rem 0 2rem 0 ',
      fontFamily: 'Poppins',
      color: '#4c4859',
   },

   '& .content': {
      maxWidth: '66.25rem',
      width: '100%',
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
   },

   '& .button': {
      display: 'flex',
      justifyContent: 'flex-end',
      maxwidth: '10rem',
      width: '100%',
      borderTop: '2px solid #959597',
      borderRadius: '0.1rem',
      padding: '3rem 0 0 0 ',
   },
}))

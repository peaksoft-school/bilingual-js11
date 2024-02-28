import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { TrashIcon } from '../../assets/icons'
import Checkbox from './Checkbox'

const Option = ({ option, handleChecked, openModal, setOptionId, index }) => {
   const [isChecked, setIsChecked] = useState(option.isCorrect)

   const handleCheckboxChange = (e) => {
      const newCheckedValue = e.target.checked

      setIsChecked(newCheckedValue)

      handleChecked(e, option.id, newCheckedValue)
   }

   const handleOpen = (id) => {
      openModal((prev) => !prev)

      setOptionId(id)
   }

   return (
      <StyledContainer key={option.id}>
         <Box className="content">
            <Typography>{index + 1}</Typography>

            <Typography className="title-option">
               {option.optionTitle}
            </Typography>
         </Box>

         <Box className="actions">
            <Checkbox onClick={handleCheckboxChange} checked={isChecked} />

            <TrashIcon
               className="trash"
               onClick={() => handleOpen(option.id)}
            />
         </Box>
      </StyledContainer>
   )
}

export default Option

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   maxWidth: '250px',
   width: '100%',
   maxHeight: '46px',
   height: '100%',
   border: '1.8px solid #BDBDBD',
   borderRadius: '8px',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3rem',
   padding: '1rem',

   '& > .content': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '0.85rem',
      width: '50%',
      overflow: 'hidden',

      '& .title-option': {
         textOverflow: 'ellipsis',
         overflow: 'hidden',
      },
   },

   '& > .actions': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',

      '& > .trash': {
         cursor: 'pointer',
      },
   },
}))

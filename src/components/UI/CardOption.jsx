import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { TrashIcon } from '../../assets/icons'
import Checkbox from './Checkbox'

const CardOption = ({ item, handleChecked, openModal, setOptionId, index }) => {
   const [isChecked, setIsChecked] = useState(item.isCorrect)

   const handleCheckboxChange = (e) => {
      const newCheckedValue = e.target.checked

      setIsChecked(newCheckedValue)

      handleChecked(e, item.id, newCheckedValue)
   }

   const handleOpen = (id) => {
      openModal((prev) => !prev)

      setOptionId(id)
   }

   return (
      <StyledBox key={item.id}>
         <Box className="advantage-block">
            <Typography>{index + 1}</Typography>
            <Typography>{item.optionTitle}</Typography>
         </Box>

         <Box className="check-trash-block">
            <Checkbox onClick={handleCheckboxChange} checked={isChecked} />

            <TrashIcon className="trash" onClick={() => handleOpen(item.id)} />
         </Box>
      </StyledBox>
   )
}

export default CardOption

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   width: '261px',
   height: '46px',
   border: '1.8px solid #BDBDBD',
   borderRadius: '8px',
   justifyContent: 'center',
   alignItems: 'center',
   gap: '3.85rem',
   '& .advantage-block': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.85rem',
   },
   '& .check-trash-block': {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
   },
   '& .trash': {
      cursor: 'pointer',
   },
}))

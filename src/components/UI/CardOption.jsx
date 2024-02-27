import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { TrashIcon } from '../../assets/icons'
import Checkbox from './Checkbox'
import Radio from './Radio'

const CardOption = ({
   item,
   handleChecked,
   openModal,
   setOptionId,
   index,
   isRadio,
}) => {
   const [isChecked, setIsChecked] = useState(item.isCorrect)

   const handleCheckboxChange = (e) => {
      const newCheckedValue = e.target.checked

      setIsChecked(newCheckedValue)
      handleChecked(e, item.id, newCheckedValue)
   }

   const handleRadioChange = () => {
      setIsChecked((prev) => !prev)
      handleChecked(item.id)
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
            {isRadio ? (
               <Radio onChange={handleRadioChange} checked={isChecked} />
            ) : (
               <Checkbox onClick={handleCheckboxChange} checked={isChecked} />
            )}

            <TrashIcon className="trash" onClick={() => handleOpen(item.id)} />
         </Box>
      </StyledBox>
   )
}

export default CardOption

const StyledBox = styled(Box)(() => ({
   display: 'flex',
   border: '1.8px solid #BDBDBD',
   borderRadius: '8px',
   justifyContent: 'center',
   gap: '3.85rem',
   padding: '0.8rem 1rem 0.8rem 1rem ',

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

   '& .trash:hover': {
      '& > path ': {
         stroke: '#F61414',
      },
   },
}))

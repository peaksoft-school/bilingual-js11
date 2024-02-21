import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import Checkbox from './Checkbox'
import { TrashIcon } from '../../assets/icons'

const CardOption = ({
   title,
   id,
   index,
   isCorrect,
   icon,
   checkedFunction,
   setIsOpenModal,
}) => {
   const openFunction = () => {
      setIsOpenModal((prev) => !prev)
   }

   return (
      <StyledBox>
         <Box className="advantage-block">
            <Typography>{index + 1}</Typography>

            {icon && <span>{icon}</span>}

            <Typography>{title}</Typography>
         </Box>

         <Box className="check-trash-block">
            <Checkbox
               onClick={(e) => checkedFunction(e, id)}
               checked={isCorrect}
            />

            <TrashIcon className="trash-icon" onClick={openFunction} />
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

   '& .trash-icon': {
      cursor: 'pointer',
   },
}))

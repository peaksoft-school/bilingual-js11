import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import Checkbox from './Checkbox'
import { TrashIcon } from '../../assets/icons'

const CardOption = ({ num }) => {
   return (
      <StyledBox>
         <Box className="advantage-block">
            <Typography>{num}</Typography>
            <Typography>advantage</Typography>
         </Box>
         <Box className="check-trash-block">
            <Checkbox />
            <TrashIcon />
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
}))

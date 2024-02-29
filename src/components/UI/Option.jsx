import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import Checkbox from './Checkbox'
import Radio from './Radio'
import { TrashIcon } from '../../assets/icons'

const Option = ({
   option,
   handleChecked,
   openModal,
   setOptionId,
   index,
   isRadio,
}) => {
   const [isChecked, setIsChecked] = useState(option.isTrueOption)

   const handleChange = () => {
      setIsChecked((prev) => !prev)

      handleChecked(option.id, !isChecked)
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
            {isRadio ? (
               <Radio onClick={handleChange} checked={isChecked} />
            ) : (
               <Checkbox onClick={handleChange} checked={isChecked} />
            )}

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
   border: '1.8px solid #BDBDBD',
   borderRadius: '8px',
   justifyContent: 'flex-start',
   alignItems: 'center',
   gap: '3rem',
   padding: '0.6rem 1rem 0.6rem 1rem ',

   '& > .content': {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      gap: '0.85rem',
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

   '& .trash:hover': {
      '& > path ': {
         stroke: '#F61414',
      },
   },
}))

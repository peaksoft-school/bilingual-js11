import { useState } from 'react'
import { Box, TextField, Typography } from '@mui/material'
import Dropdown from '../../../components/UI/Dropdown'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import { PlusIcon } from '../../../assets/icons'

const SelectTheMainIdea = () => {
   const [openModal, setOpenModal] = useState(false)

   const handleOpenModal = () => {
      setOpenModal((prev) => !prev)
   }

   return (
      <TestContainer>
         <Dropdown />
         <Box>
            <Typography>Passage</Typography>

            <TextField />
         </Box>

         <Box>
            <Button
               icon={<PlusIcon className="plus-icon" />}
               onClick={handleOpenModal}
            >
               ADD OPTION
            </Button>
         </Box>
      </TestContainer>
   )
}

export default SelectTheMainIdea

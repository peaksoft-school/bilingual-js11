import { useState } from 'react'
import { Typography, styled, Modal, Box } from '@mui/material'
import { CancelIcon, FalseIcon } from '../../../assets/icons'
import Button from '../buttons/Button'

const style = {
   borderRadius: '1.25rem',
   borderStyle: 'none',
   alignItems: 'center',
}

const ModalDelete = ({ onDelete }) => {
   const [isVisible, setIsVisidle] = useState(false)
   const handleIsVisible = () => setIsVisidle((prev) => !prev)

   return (
      <StyledContainer>
         <StyledOpenButton onClick={handleIsVisible}>DELETE</StyledOpenButton>
         <Modal open={isVisible} onClose={handleIsVisible} style={style}>
            <StyledModal>
               <StyledCloseIcon onClick={handleIsVisible} />
               <FalseIcon className="red-cross-image" />
               <Typography className="title">Do you want to delete?</Typography>
               <Typography className="text">
                  You can’t restore this file
               </Typography>
               <Box className="container-btns">
                  <Box className="buttons">
                     <Button
                        variant="secondary"
                        onClick={handleIsVisible}
                        className="button"
                     >
                        Cancel
                     </Button>
                     <Button onClick={onDelete}>Delete</Button>
                  </Box>
               </Box>
            </StyledModal>
         </Modal>
      </StyledContainer>
   )
}

export default ModalDelete

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',
}))

const StyledModal = styled(Box)(() => ({
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: '#fff',
   borderRadius: '1.25rem',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   width: '32.4375rem',
   height: '23rem',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   textAlign: 'center',

   '& .title': {
      fontFamily: 'Gilroy',
      fontSize: '1.25rem',
      display: 'flex',
      textAlign: 'center',
      color: '#4C4859',
   },
   '& .text': {
      fontWeight: '400',
      fontSize: '1rem',
      color: '#4C4859',
      marginBottom: '3rem',
   },

   '& .buttons': {
      padding: '1.63rem 0',
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
   },
   '& .button': {
      height: '2.625rem',
      padding: '0.8125rem 1.5rem',
      borderRadius: '0.5rem',
   },
   '& .red-cross-image': {
      display: 'flex',
      justifyContent: 'center',
      marginTop: '0.9375rem',
      marginBottom: '3.1875rem',
   },
   '& .container-btns': {
      borderRadius: '0rem 0rem 1.25rem 1.25rem',
      background: '#F0F1F1',
      width: '32.5rem',
      height: '5.875rem',
   },
}))

const StyledOpenButton = styled('button')(() => ({
   width: '39.8125rem',
   height: '2.4375rem',
   background: '#4D9E3F',
   color: '#FFF',
   fontSize: '1.125rem',
   fontWeight: '500',
   fontFamily: 'Poppins',
   display: 'flex',
   textAlign: 'left',
   alignItems: 'center',
   paddingLeft: '1.37rem',
   cursor: 'pointer',
   border: 'none',
}))

const StyledCloseIcon = styled(CancelIcon)(() => ({
   marginLeft: '28.4375rem',
   marginTop: '1.375rem',
   cursor: 'pointer',
   transition: '0.3s',
   ':hover': {
      transform: 'scale(1.1)',
      textColor: '#fff',
   },
}))

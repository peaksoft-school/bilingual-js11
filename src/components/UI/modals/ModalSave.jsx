import { Box, Modal, styled, Typography } from '@mui/material'
import Button from '../buttons/Button'
import { CancelIcon } from '../../../assets/icons'
import Checkbox from '../Checkbox'
import Input from '../Input'

const ModalSave = ({
   onSave,
   isVisible,
   handleIsVisible,
   title,
   isTrueOption,
   goBack,
   save,
}) => {
   return (
      <StyledContainer>
         <Modal open={isVisible} onClose={handleIsVisible}>
            <StyledModal>
               <StyledCloseIcon onClick={handleIsVisible} />
               <Box className="con-form">
                  <Typography className="title" variant="label">
                     {title}
                  </Typography>

                  <Input type="text" placeholder="Select real English words" />

                  <Box className="check-con">
                     <Typography className="true-option">
                        {isTrueOption}
                     </Typography>
                     <Checkbox />
                  </Box>
               </Box>
               <Box className="buttons">
                  <Box className="con-of-btns">
                     <Button variant="secondary" onClick={handleIsVisible}>
                        {goBack}
                     </Button>
                     <Button variant="primary" onClick={onSave}>
                        {save}
                     </Button>
                  </Box>
               </Box>
            </StyledModal>
         </Modal>
      </StyledContainer>
   )
}

export default ModalSave

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
   width: '39.8125rem',
   height: '23.5rem',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   alignItems: 'center',
   '& .con-of-btns': {
      width: '13.75rem',
      height: '2.625rem',
      marginLeft: '23.4rem',
      display: 'flex',
      gap: '1rem',
   },
   '& .true-option': {
      fontFamily: 'Poppins',
   },
   '& .check-con': {
      display: 'flex',
      gap: '0.44rem',
      alignItems: 'center',
   },
   '& .buttons': {
      width: '39.8125rem',
      height: '5.875rem',
      borderRadius: '0rem 0rem 1.25rem 1.25rem',
      background: '#F0F1F1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
   '& .title': {
      width: '2.33rem',
      height: '1.125rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
      fontSize: '1rem',
      lineHeight: '2.33rem',
      display: 'flex',
      alignItems: 'center',
      color: '#4B4759',
   },
   '& .con-form': {
      width: '32.3125rem',
      marginTop: '2.5rem',
      marginBottom: '3.4rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
   },
}))

const StyledCloseIcon = styled(CancelIcon)(() => ({
   marginLeft: '34.44rem',
   marginTop: '1.25rem',
   cursor: 'pointer',
   transition: '0.3s',
   ':hover': {
      transform: 'scale(1.1)',
      textColor: '#fff',
   },
}))

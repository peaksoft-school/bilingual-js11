import { Box, Modal, styled } from '@mui/material'
import Button from '../buttons/Button'
import { CancelIcon } from '../../../assets/icons'

const ModalSave = ({ onSave, children, isVisible, handleIsVisible }) => {
   return (
      <StyledContainer>
         <Modal open={isVisible} onClose={handleIsVisible}>
            <Box className="content">
               <CancelIcon className="cancel" onClick={handleIsVisible} />

               <Box className="content-form">{children}</Box>

               <Box className="buttons">
                  <Box className="content-of-btns">
                     <Button variant="secondary" onClick={handleIsVisible}>
                        GO BACK
                     </Button>
                     <Button variant="primary" onClick={onSave}>
                        SAVE
                     </Button>
                  </Box>
               </Box>
            </Box>
         </Modal>
      </StyledContainer>
   )
}

export default ModalSave

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'center',

   '& .content': {
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

      '& .cancel': {
         marginLeft: '34.44rem',
         marginTop: '1.25rem',
         cursor: 'pointer',
         transition: '0.3s',

         ':hover': {
            transform: 'scale(1.1)',
            textColor: '#fff',
         },
      },

      '& .content-form': {
         width: '32.3125rem',
         marginTop: '2.5rem',
         marginBottom: '3.4rem',
         display: 'flex',
         flexDirection: 'column',
         gap: '1.25rem',
      },

      '& .buttons': {
         width: '39.8125rem',
         height: '5.875rem',
         borderRadius: '0rem 0rem 1.25rem 1.25rem',
         background: '#F0F1F1',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',

         '& .content-of-btns': {
            width: '13.75rem',
            height: '2.625rem',
            marginLeft: '23.4rem',
            display: 'flex',
            gap: '1rem',
         },
      },
   },
}))

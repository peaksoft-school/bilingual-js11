import { styled, Modal as MuiModal, Box } from '@mui/material'
import { CancelIcon } from '../../../assets/icons'

const Modal = ({
   children,
   isVisible,
   handleIsVisible,
   isCloseIcon = false,
}) => (
   <StyledModal open={isVisible} onClose={handleIsVisible}>
      <Box className="content">
         {isCloseIcon ? (
            <Box className="close-container">
               <CancelIcon className="close" onClick={handleIsVisible} />
            </Box>
         ) : null}

         {children}
      </Box>
   </StyledModal>
)

export default Modal

const StyledModal = styled(MuiModal)(() => ({
   borderRadius: '1.25rem',
   borderStyle: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',

   '& .content': {
      backgroundColor: '#fff',
      borderRadius: '1.25rem',
      boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
      width: '25.4375rem',
      height: '9.875rem',
      textAlign: 'center',
      padding: '20px 32px',

      '& .close-container': {
         // display: 'flex',
         // justifyContent: 'flex-end',
      },

      '& .buttons': {
         display: 'flex',
         gap: '1.2rem',
      },
   },
}))

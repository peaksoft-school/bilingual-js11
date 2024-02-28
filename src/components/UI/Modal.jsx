import { styled, Modal as MuiModal, Box } from '@mui/material'
import { CancelIcon } from '../../assets/icons'

const Modal = ({
   children,
   isVisible,
   handleIsVisible,
   isCloseIcon = false,
}) => (
   <StyledModal open={isVisible} onClose={handleIsVisible}>
      <Box className="content">
         {isCloseIcon ? (
            <Box>
               <CancelIcon onClick={handleIsVisible} className="cancel-icon" />
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

   '& > .content': {
      backgroundColor: '#fff',
      borderRadius: '1.25rem',
      boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '25.4375rem',
      textAlign: 'center',

      '& > .log-out': {
         padding: '3rem',
         display: 'flex',
         flexDirection: 'column',
         gap: '1rem',
         alignItems: 'center',

         '& > .buttons': {
            display: 'flex',
            gap: '1.2rem',
         },
      },

      '& > .modal-title': {
         fontWeight: 'bold',
         fontSize: '17px',
         marginTop: '2.2rem',
      },

      '& > .title': {
         maxWidth: '10rem',
         fontFamily: 'Poppins',
         fontSize: '1rem',
         overflow: 'hidden',
         textOverflow: 'ellipsis',

         '& > span': {
            fontWeight: 'bold',
            fontFamily: 'Poppins',
         },
      },

      '& > .modal-message': {
         fontSize: '14px',
         marginBottom: '2.2rem',
         color: 'red',
      },

      '& > div > .cancel-icon': {
         marginLeft: '22rem',
         marginTop: '1rem',
         cursor: 'pointer',
      },

      '& > .container-buttons': {
         display: 'flex',
         gap: '1rem',
         justifyContent: 'center',
         backgroundColor: '#F0F1F1',
         height: '5rem',
         width: '25.4375rem',
         paddingTop: '1rem',
         borderRadius: '0 0 1.25rem 1.25rem',
      },
   },
}))

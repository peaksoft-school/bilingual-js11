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
   display: 'flex',
   alignItems: 'center',
   borderStyle: 'none',
   borderRadius: '1.25rem',
   justifyContent: 'center',

   '& > .content': {
      width: '25.4375rem',
      display: 'flex',
      boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius: '1.25rem',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#fff',

      '& > .log-out': {
         gap: '1rem',
         display: 'flex',
         padding: '3rem',
         alignItems: 'center',
         flexDirection: 'column',

         '& > .buttons': {
            gap: '1.2rem',
            display: 'flex',
         },
      },

      '& > .quit-content': {
         gap: '1rem',
         display: 'flex',
         padding: '2.5rem 1rem',
         alignItems: 'center',
         flexDirection: 'column',

         '& > .buttons': {
            gap: '1.2rem',
            display: 'flex',
         },
      },

      '& > .modal-title': {
         fontSize: '17px',
         marginTop: '2.2rem',
         fontWeight: 'bold',
      },

      '& > .title': {
         maxWidth: '10rem',
         fontSize: '1rem',
         overflow: 'hidden',
         fontFamily: 'Poppins',
         textOverflow: 'ellipsis',

         '& > span': {
            fontWeight: 'bold',
            fontFamily: 'Poppins',
         },
      },

      '& > .modal-message': {
         color: 'red',
         fontSize: '14px',
         marginBottom: '2.2rem',
      },

      '& > div > .cancel-icon': {
         cursor: 'pointer',
         marginTop: '1rem',
         marginLeft: '22rem',
      },

      '& > .container-buttons': {
         gap: '1rem',
         width: '25.4375rem',
         height: '5rem',
         display: 'flex',
         paddingTop: '1rem',
         borderRadius: '0 0 1.25rem 1.25rem',
         justifyContent: 'center',
         backgroundColor: '#F0F1F1',
      },
   },
}))

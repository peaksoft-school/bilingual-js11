import { styled, Modal as Modalka, Box } from '@mui/material'

const STYLE = {
   borderRadius: '1.25rem',
   borderStyle: 'none',
   alignItems: 'center',
}

const Modal = ({ children, isVisible, handleIsVisible }) => {
   return (
      <Modalka open={isVisible} onClose={handleIsVisible} style={STYLE}>
         <StyledModal>{children}</StyledModal>
      </Modalka>
   )
}

export default Modal

const StyledModal = styled(Box)(() => ({
   position: 'absolute',
   top: '45%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: '#fff',
   borderRadius: '1.25rem',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   width: '25.4375rem',
   height: '9.875rem',
   display: 'flex',
   justifyContent: 'center',
   flexDirection: 'column',
   textAlign: 'center',

   '& .text': {
      fontWeight: '400',
      fontSize: '1rem',
      color: '#4C4859',
      lineHeight: '124%',
      marginTop: '2.25rem',
   },

   '& .buttons': {
      padding: '1.63rem 0',
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',

      '& .button': {
         height: '2.625rem',
         padding: '0.8125rem 1.5rem',
         borderRadius: '0.5rem',
      },
   },
}))

import { styled, Modal, Box, Typography } from '@mui/material'
import { CancelIcon } from '../../../assets/icons'
import Checkbox from '../Checkbox'
import Button from '../buttons/Button'
import Input from '../Input'

const SaveModal = ({
   checked,
   children,
   checkbox,
   isLoading,
   isVisible,
   optionTitle,
   changeCheckbox,
   isDisabledModal,
   handleIsVisible,
   addOptionHandler,
   handleChangeTitle,
}) => (
   <StyledContainer open={isVisible} onClose={handleIsVisible}>
      <StyledModal>
         <CancelIcon onClick={handleIsVisible} className="cancel" />

         <Box className="content">
            <Typography className="title" variant="label">
               Title
            </Typography>

            <Input
               type="text"
               placeholder="Enter the title ..."
               value={optionTitle}
               onChange={handleChangeTitle}
            />

            {children}

            {checkbox && (
               <Box className="checkbox-container">
                  <Typography className="true-option">
                     Is true option ?
                  </Typography>

                  <Checkbox checked={checked} onChange={changeCheckbox} />
               </Box>
            )}
         </Box>

         <Box className="buttons-box">
            <Button onClick={handleIsVisible} variant="secondary">
               GO BACK
            </Button>

            <Button
               variant="primary"
               onClick={addOptionHandler}
               disabled={!isDisabledModal}
               isLoading={isLoading}
               loadingColor="secondary"
            >
               SAVE
            </Button>
         </Box>
      </StyledModal>
   </StyledContainer>
)

export default SaveModal

const StyledContainer = styled(Modal)(() => ({
   display: 'flex',
   alignItems: 'center',
   borderStyle: 'none',
   borderRadius: '1.25rem',
   justifyContent: 'center',
}))

const StyledModal = styled(Box)(({ theme }) => ({
   display: 'flex',
   position: 'absolute',
   boxShadow: '0rem 0.25rem 2.4375rem -0.3125rem rgba(196, 196, 196, 0.6)',
   borderRadius: '1.25rem',
   flexDirection: 'column',
   justifyContent: 'center',
   backgroundColor: '#fff',

   '& > .cancel': {
      cursor: 'pointer',
      marginTop: ' 1rem',
      marginLeft: ' 36rem',
   },

   '& > .content': {
      gap: '1.25rem',
      width: '32.3125rem',
      margin: '3rem',
      display: 'flex',
      flexDirection: 'column',

      '& > .title': {
         color: '#4B4759',
         width: '2.33rem',
         height: '1.125rem',
         display: 'flex',
         fontFamily: 'Poppins',
         fontWeight: '500',
         alignItems: 'center',
      },

      '& > .checkbox-container': {
         gap: '0.44rem',
         display: 'flex',
         alignItems: 'center',

         '& > .true-option': {
            fontFamily: 'Poppins',
         },

         '& > .check-option': {
            marginLeft: '9px',
         },
      },

      '& > .upload-input': {
         display: 'none',
      },

      '& > .upload': {
         gap: '1.5rem',
         display: 'flex',
         position: 'relative',
         marginTop: '0.5rem',
         alignItems: 'center',

         '& .text': {
            padding: '8px 1px',
         },

         '& > .file-name': {
            width: '18rem',
         },

         '& > button:hover > .MuiInputLabel-root': {
            color: 'white',
         },

         '& > button > .MuiInputLabel-root': {
            color: theme.palette.primary.main,
            cursor: 'pointer',
            fontFamily: 'Poppins',
            fontWeight: 600,
            textTransform: 'none',
         },
      },
   },

   '& > .buttons-box': {
      gap: '1rem',
      width: '100%',
      height: '5rem',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0 0 1rem 1rem',
      paddingRight: '1.5rem',
      justifyContent: 'flex-end',
      backgroundColor: '#F0F1F1',
   },
}))

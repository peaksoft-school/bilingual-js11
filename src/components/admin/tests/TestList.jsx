import { Box, Typography, styled } from '@mui/material'
import Switcher from '../../UI/Switcher'
import { EditIcon, TrashIcon } from '../../../assets/icons'

const TestList = () => (
   <StyledContainer>
      {[].map(({ id, title, enable }) => (
         <Box key={id} className="test">
            <Typography>{title}</Typography>

            <Box className="icons">
               <Switcher className="switcher" checked={enable} />
               <EditIcon className="edit" />
               <TrashIcon className="delete" />
            </Box>
         </Box>
      ))}
   </StyledContainer>
)

export default TestList

const StyledContainer = styled(Box)(() => ({
   '& > .test': {
      width: '100%',
      height: ' 4.125rem',
      display: 'flex',
      backgroundColor: '#fff',
      padding: '20px 25px',
      borderRadius: '0.5rem',
      boxShadow:
         '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
      marginBottom: '0.94rem',

      '& > .icons': {
         display: 'flex',
         justifyContent: 'flex-end',
         gap: '1.4rem',
         marginLeft: 'auto',
         cursor: 'pointer',

         '&  > .edit:hover': {
            '& > path': {
               stroke: '#0F85F1',
            },
         },

         '& > .delete:hover': {
            '& > path': {
               stroke: '#F61414',
            },
         },
      },
   },
}))

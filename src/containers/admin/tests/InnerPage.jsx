import { Box, Typography, styled } from '@mui/material'
import Switcher from '../../../components/UI/Switcher'
import { EditIcon, PlusIcon, TrashIcon } from '../../../assets/icons'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'

const TEST_DATA = [
   {
      title: 'Select the real Englisg word in the list...',
      duration: '1 min',
      questionType: 'Multiple Choice',
   },
   {
      title: 'Select the real Englisg word in the list...',
      duration: '1 min',
      questionType: 'Essay',
   },
]

const InnerPage = ({ title, shortDescription, duration }) => (
   <StyledContainer>
      <Box className="rectangle">
         <TestContainer>
            <Box className="title-container">
               <Box className="text">
                  <Typography className="title">Title:</Typography>
                  <Typography>{title}</Typography>
               </Box>

               <Box className="text">
                  <Typography className="title">Short Description:</Typography>
                  <Typography>{shortDescription}</Typography>
               </Box>

               <Box className="text">
                  <Typography className="title">Duration:</Typography>
                  <Typography>{duration}</Typography>
               </Box>
            </Box>

            <Button className="frame-button">
               <PlusIcon className="plus-icon" />
               ADD MORE QUESTIONS
            </Button>

            <Box className="divider" />

            <StyledTable>
               <Typography>#</Typography>

               <Typography className="name">Name</Typography>

               <Typography className="duration-time">Duration</Typography>

               <Typography className="question-type">Question Type</Typography>
            </StyledTable>

            {TEST_DATA.length > 0 ? (
               TEST_DATA.map((test, number, enable) => (
                  <StyledBox>
                     <Typography>{number + 1}</Typography>
                     <Typography className="name-props">
                        {test.title}
                     </Typography>

                     <Typography className="duration-props">
                        {test.duration}
                     </Typography>

                     <Typography className="question-type-props">
                        {test.questionType}
                     </Typography>

                     <Box className="icons">
                        <Switcher className="switcher" checked={enable} />
                        <EditIcon className="edit" />
                        <TrashIcon className="delete" />
                     </Box>
                  </StyledBox>
               ))
            ) : (
               <Typography>You haven`t added any questions yet.</Typography>
            )}

            <Button className="button-go-back">GO BACK</Button>
         </TestContainer>
      </Box>
   </StyledContainer>
)

export default InnerPage

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   backgroundColor: '#fff',
   borderRadius: '8px',
   width: '100%',
   height: '39.6875rem',
   margin: 'auto',
   padding: '3.25rem 0',

   '@media (max-width: 768px)': {
      padding: '1.5rem',
   },

   '& .title-container': {
      '& > .text': {
         display: 'flex',

         '& > .title ': {
            color: '#3752B4',
            marginBottom: '0.1rem',
         },
      },
   },

   '& .frame-button': {
      padding: '0.75rem 1.5rem 0.75rem 1rem',
      width: 'auto',
      gap: '0.5rem',
      margin: '2.75rem 0 0 40rem',
      fontFamily: 'Poppins',
      fontSize: '14px',

      '& .plus-icon': {
         width: '18px',
         height: '18px',
      },

      '@media (max-width: 768px)': {
         margin: '2.75rem 0 0 0',
      },
   },

   '& .button-go-back': {
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      color: '#3A10E5',
      border: '2px solid  #3A10E5',
      background: '#FFFF',
      padding: '0.8125rem 1.5rem',
      height: '2.625rem',
      margin: '2.75rem 0 0 48rem',

      '&:hover': {
         color: '#FFF',
         backgroundColor: '#3A10E5',
      },

      '@media (max-width: 800px)': {
         margin: '2.75rem 0 0 0',
      },
   },

   '& .divider': {
      width: 'auto',
      height: '0.0625rem',
      margin: '1.5rem',
      border: '1 solid  #D4D0D0',
      background: '#C4C4C4',
   },
}))

const StyledTable = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-around',
   margin: '0 1.5rem',

   '& > .name': {
      margin: 'auto',
      marginLeft: '1.23rem',
   },

   '& > .duration-time': {
      margin: 'auto',
      marginLeft: '7.4rem',
   },

   '& > .question-type': {
      margin: 'auto',
      marginLeft: '-9rem',
   },
}))

const StyledBox = styled(Box)(() => ({
   width: '100%',
   height: ' 4.125rem',
   display: 'flex',
   backgroundColor: '#fff',
   color: '#4C4859',
   padding: '20px 25px',
   borderRadius: '0.5rem',
   boxShadow:
      '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
   marginBottom: '0.94rem',

   '& > .name-props': {
      margin: '0 1.2rem',
      whiteSpace: 'nowrap',
   },

   '& > .duration-props': {
      margin: '0 4.4rem',
   },

   '& > .question-type-props': {
      margin: '0 1.2rem',
   },

   '&:hover': {
      backgroundColor: '#f6f6f6',
   },

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

   '@media (max-width: 768px)': {
      '& .name-props': {
         display: 'none',
      },

      '& .duration-props': {
         display: 'none',
      },

      '& .question-type-props': {
         display: 'none',
      },

      '& .icons': {
         justifyContent: 'center',
      },
   },
}))

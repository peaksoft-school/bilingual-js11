import { Box, Typography, styled } from '@mui/material'
import Switcher from '../../../components/UI/Switcher'
import { EditIcon, TrashIcon } from '../../../assets/icons'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'

const InnerPage = ({ title, shortDescription, duration }) => (
   <StyledContainer className="main-container">
      <Box className="rectangle">
         <TestContainer>
            <Box className="frame">
               <Box className="text">
                  <Typography className="span-title">Title:</Typography>
                  <Typography className="span-practice-test">
                     {title}
                  </Typography>
               </Box>
            </Box>

            <Box className="text-four">
               <Typography className="span-short-description">
                  Short Description:
               </Typography>
               <Typography className="span-empty">
                  {shortDescription}
               </Typography>
            </Box>

            <Box className="div-telephone">
               <Typography className="span-duration">Duration:</Typography>
               <Typography className="span-empty-fifth">{duration}</Typography>
            </Box>

            <Button className="button-frame">
               <Typography className="add-new-test">
                  + ADD MORE QUESTIONS
               </Typography>
            </Button>

            <Box className="divider" />

            <Box className="flex-row-bd">
               <Typography className="hash">#</Typography>

               <Typography className="name">Name</Typography>

               <Typography className="duration">Duration</Typography>

               <Typography className="question-type">Question Type</Typography>
            </Box>

            {[].length > 0 ? (
               [].map((test, index, enable) => (
                  <Box className="rectangle-six">
                     <Typography className="hash">{index + 1}</Typography>
                     <Typography className="name-props">{test.Name}</Typography>

                     <Typography className="duration-props">
                        {test.Duration}
                     </Typography>

                     <Typography className="question-type-props">
                        {test.QuestionType}
                     </Typography>

                     <Box className="icons">
                        <Switcher className="switcher" checked={enable} />
                        <EditIcon className="edit" />
                        <TrashIcon className="delete" />
                     </Box>
                  </Box>
               ))
            ) : (
               <Typography>You haven`t added any questions yet.</Typography>
            )}

            <Button className="frame-button">
               <Typography className="go-back">GO BACK</Typography>
            </Button>
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
   width: '66.25rem',
   height: '39.6875rem',
   margin: 'auto',
   padding: '3.25rem 0',

   '& .span-title ': {
      color: '#3752B4',
      margin: '0  0 -0.8rem',
   },

   '& .span-short-description': {
      color: '#3752B4',
      margin: '0  0 -0.8rem',
   },

   '& .span-duration': {
      color: '#3752B4',
      margin: '0  0 -0.8rem',
   },

   '& .button-frame': {
      letterSpacing: '0.0175rem',
      padding: '0.75rem 1.5rem 0.75rem 1rem',
      width: 'auto',
      alignItems: 'center',
      gap: '0.5rem',
      height: '2.625rem',
      margin: '2.75rem 0 0 40rem',
      marginLeft: 'auto',
      fontFamily: 'Poppins',
      fontWeight: '400',
   },

   '& .frame-button': {
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      color: '#3A10E5',
      border: '2px solid  #3A10E5',
      background: '#FFF',
      padding: '0.8125rem 1.5rem',
      height: '2.625rem',
      margin: '2.75rem 0 0 48rem',
      fontSize: '0.875rem',
      '&:hover': {
         color: '#FFF',
         backgroundColor: '#3A10E5',
      },
   },

   '& .divider': {
      width: '56.25rem',
      height: '0.0625rem',
      margin: '1.5rem',
      border: '1 solid  #D4D0D0',
      background: '#C4C4C4',
   },

   '& .flex-row-bd': {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '0 1.5rem',

      '& > .name': {
         margin: 'auto',
         marginLeft: '1.23rem',
      },

      '& > .duration': {
         margin: 'auto',
         marginLeft: '7.4rem',
      },

      '& > .question-type': {
         margin: 'auto',
         marginLeft: '-9rem',
      },
   },

   '& .rectangle-six': {
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
   },
}))

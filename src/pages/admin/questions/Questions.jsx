import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import Switcher from '../../../components/UI/Switcher'
import { EditIcon, PlusIcon, TrashIcon } from '../../../assets/icons'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'
import {
   deleteQuestion,
   getQuestion,
   getTest,
} from '../../../store/slice/questionsSlice'
import ModalDelete from '../../../components/UI/modals/ModalDelete'

const Questions = () => {
   const { tests } = useSelector((state) => state.questionsSlice)
   const { testId } = useParams()
   const [isVisible, setIsVisible] = useState(false)
   const [selectedQuestionId, setSelectedQuestionId] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getTest(testId))
   }, [dispatch, testId])

   useEffect(() => {
      dispatch(getQuestion({ id: testId }))
   }, [dispatch, testId])

   const handleDeleteQuestion = () => {
      if (selectedQuestionId) {
         dispatch(deleteQuestion({ questionId: selectedQuestionId }))
         setIsVisible(false)
      }
   }

   const handleOpenModal = (questionId) => {
      setSelectedQuestionId(questionId)
      setIsVisible(true)
   }
   const handleCloseModal = () => {
      setIsVisible(false)
   }

   return (
      <StyledContainer>
         <Box>
            <TestContainer>
               <Box key={tests.id}>
                  <Box className="title-container">
                     <Box className="text">
                        <Typography className="title">Title:</Typography>
                        <Typography>{tests.title}</Typography>
                     </Box>

                     <Box className="text">
                        <Typography className="title">
                           Short Description:
                        </Typography>
                        <Typography>{tests.shortDescription}</Typography>
                     </Box>

                     <Box className="text">
                        <Typography className="title">Duration:</Typography>
                        <Typography>{tests.duration}</Typography>
                     </Box>
                  </Box>
               </Box>

               <Button icon={<PlusIcon className="plus" />} className="button">
                  ADD MORE QUESTIONS
               </Button>

               <Box className="divider" />

               <StyledTable>
                  <Typography>#</Typography>

                  <Typography className="name">Name</Typography>

                  <Typography className="duration-time">Duration</Typography>

                  <Typography className="question-type">
                     Question Type
                  </Typography>
               </StyledTable>

               {tests.length > 0 ? (
                  tests.question.map(
                     ({ id, title, duration, questionType, enable }, index) => (
                        <StyledBox key={id}>
                           <Typography>{index + 1}</Typography>
                           <Typography className="name-props">
                              {title}
                           </Typography>

                           <Typography className="duration-props">
                              {duration}
                           </Typography>

                           <Typography className="question-type-props">
                              {questionType}
                           </Typography>

                           <Box className="icons">
                              <Switcher checked={enable} />

                              <EditIcon className="edit" />

                              <TrashIcon
                                 className="delete"
                                 onClick={() => handleOpenModal(id)}
                              />
                           </Box>
                        </StyledBox>
                     )
                  )
               ) : (
                  <Typography>You haven`t added any questions yet.</Typography>
               )}

               <Link to="/">
                  <Button className="go-back-button" variant="secondary">
                     GO BACK
                  </Button>
               </Link>
            </TestContainer>

            <ModalDelete
               isVisible={isVisible}
               onDelete={() => handleDeleteQuestion(setSelectedQuestionId)}
               onCancel={handleCloseModal}
            >
               Do you want delete?
            </ModalDelete>
         </Box>
      </StyledContainer>
   )
}

export default Questions

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: 'auto',

   '& .title-container': {
      paddingLeft: '1rem',
      paddingTop: '0.2rem',

      '& > .text': {
         display: 'flex',
         gap: '0.3rem',

         '& > .title': {
            color: '#3752B4',
         },
      },
   },

   '& .button': {
      padding: '0.75rem 1.5rem 0.75rem 1rem',
      width: 'auto',
      gap: '1rem',
      margin: '0 1.75rem 0 40rem',
      fontFamily: 'Poppins',
      fontSize: '14px',

      '& .plus': {
         width: '18px',
         height: '18px',
         marginTop: '-1rem',
      },

      '@media (max-width: 768px)': {
         margin: '2.75rem 0 0 0',
      },
   },

   '& .go-back-button': {
      borderRadius: '0.5rem',
      fontSize: '0.875rem',
      color: '#3A10E5',
      border: '2px solid #3A10E5',
      background: '#FFFF',
      padding: '0.8125rem 1.5rem',
      height: '2.625rem',
      margin: 'auto',
      marginLeft: '48.6rem',
      marginTop: '0.8rem',
      width: '7.8rem',

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
      border: '1px solid #D4D0D0',
      background: '#C4C4C4',
   },
}))

const StyledTable = styled(Box)(() => ({
   display: 'flex',
   justifyContent: 'space-around',
   margin: '0 1.5rem',

   '& > .name': {
      margin: 'auto',
      marginLeft: '1.12rem',
   },

   '& > .duration-time': {
      margin: 'auto',
      marginLeft: '-4.8rem',
   },

   '& > .question-type': {
      margin: 'auto',
      marginLeft: '-17rem',
   },
}))

const StyledBox = styled(Box)(() => ({
   width: '100%',
   height: '4.125rem',
   display: 'flex',
   backgroundColor: '#fff',
   color: '#4C4859',
   padding: '20px 25px',
   borderRadius: '0.5rem',
   boxShadow:
      '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
   margin: 'auto',

   '& > .name-props': {
      margin: '0 1.2rem',
      whiteSpace: 'nowrap',
      width: '13rem',
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

      '& > .edit:hover': {
         '& > g > path': {
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

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import Switcher from '../../../components/UI/Switcher'
import { EditIcon, FalseIcon, PlusIcon, TrashIcon } from '../../../assets/icons'
import Button from '../../../components/UI/buttons/Button'
import TestContainer from '../../../components/UI/TestContainer'
import { SearchingImage } from '../../../assets/images'
import Modal from '../../../components/UI/Modal'
import { QUESTIONS_THUNK } from '../../../store/slice/admin/questionsThunk'

const Questions = () => {
   const { questions } = useSelector((state) => state.questionsSlice)
   const { testId } = useParams()
   const [isVisible, setIsVisible] = useState(false)
   const [selectedQuestionId, setSelectedQuestionId] = useState(null)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(QUESTIONS_THUNK.getTest({ testId }))
   }, [dispatch, testId])

   const handleDeleteQuestion = () => {
      dispatch(
         QUESTIONS_THUNK.deleteQuestion({
            questionId: selectedQuestionId,
            testId,
         })
      )

      setIsVisible(false)
   }

   const handleOpenModal = (questionId) => {
      setSelectedQuestionId(questionId)
      setIsVisible((prev) => !prev)
   }

   const handleEnable = (params) => {
      dispatch(
         QUESTIONS_THUNK.updateQuestionByEnable({
            questionId: params.id,
            isEnable: params.value,
            testId,
         })
      )
   }

   return (
      <StyledContainer>
         <TestContainer>
            <Box>
               <Box className="title-container">
                  <Box className="text">
                     <Typography className="title">Title:</Typography>
                     <Typography>{questions?.title}</Typography>
                  </Box>

                  <Box className="text">
                     <Typography className="title">
                        Short Description:
                     </Typography>
                     <Typography>{questions?.shortDescription}</Typography>
                  </Box>

                  <Box className="text">
                     <Typography className="title">Duration:</Typography>
                     <Typography>{questions?.duration}</Typography>
                  </Box>
               </Box>
            </Box>

            <Button icon={<PlusIcon className="plus" />} className="button">
               <Link
                  to={`/admin/tests/questions/${testId}/create-question`}
                  className="text"
               >
                  ADD MORE QUESTIONS
               </Link>
            </Button>

            <Box className="divider" />

            <StyledTable>
               <Typography>#</Typography>

               <Typography className="name">Name</Typography>

               <Typography className="duration-time">Duration</Typography>

               <Typography className="question-type">Question Type</Typography>
            </StyledTable>

            {questions && questions.question.length > 0 ? (
               questions.question.map(
                  ({ id, title, duration, questionType, enable }, index) => (
                     <StyledBox key={id}>
                        <Typography>{index + 1}</Typography>
                        <Typography className="name-props">{title}</Typography>

                        <Typography className="duration-props">
                           {duration / 60}
                        </Typography>

                        <Typography className="question-type-props">
                           {questionType}
                        </Typography>

                        <Box className="icons">
                           <Switcher
                              key={id}
                              className="switcher"
                              checked={enable}
                              onChange={(value) => handleEnable({ value, id })}
                           />

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
               <Box className="background-image">
                  <img src={SearchingImage} alt="search" />
               </Box>
            )}

            <Button className="go-back-button" variant="secondary">
               <Link to="/" className="text">
                  GO BACK
               </Link>
            </Button>
         </TestContainer>

         <Modal
            isCloseIcon
            isVisible={isVisible}
            handleIsVisible={handleOpenModal}
         >
            <FalseIcon />

            <Typography className="modal-title">Do you want delete?</Typography>

            <Typography className="modal-message">
               You can`t restore this file
            </Typography>

            <Box className="container-buttons">
               <Button variant="secondary" onClick={handleOpenModal}>
                  CANCEL
               </Button>

               <Button onClick={() => handleDeleteQuestion(selectedQuestionId)}>
                  DELETE
               </Button>
            </Box>
         </Modal>
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
      gap: '0.5rem',
      margin: '0 1.75rem 0 40rem',

      '& .plus': {
         width: '17px',
         height: '17px',
         marginTop: '-1rem',
      },

      '& > .text': {
         color: 'inherit',
         textDecoration: 'none',
         fontFamily: 'Poppins',
         fontSize: '14px',
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

      '& > .text': {
         display: 'flex',
         alignItems: 'center',
         textDecoration: 'none',
         color: 'inherit',
         fontFamily: 'Poppins',
         fontSize: '14px',
         fontWeight: '500',
      },

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
      margin: '0.5rem',
      border: '1px solid #D4D0D0',
      background: '#C4C4C4',
   },

   '& .background-image': {
      margin: 'auto',
      marginTop: '1.8rem',
      width: '16rem',
      height: '16rem',
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

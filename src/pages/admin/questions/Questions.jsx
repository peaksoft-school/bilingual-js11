import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditIcon, PlusIcon, TrashIcon } from '../../../assets/icons'
import { questionTypeHandler } from '../../../utils/helpers'
import { QUESTIONS_THUNKS } from '../../../store/slice/admin/questions/questionsThunk'
import { NoDataImage } from '../../../assets/images'
import { ROUTES } from '../../../routes/routes'
import TestContainer from '../../../components/UI/TestContainer'
import DeleteModal from '../../../components/UI/modals/DeleteModal'
import Switcher from '../../../components/UI/Switcher'
import Button from '../../../components/UI/buttons/Button'

const Questions = () => {
   const { questions } = useSelector((state) => state.questionsSlice)

   const { testId } = useParams()

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [isVisible, setIsVisible] = useState(false)
   const [selectedQuestionId, setSelectedQuestionId] = useState(null)

   const handleGoBack = () => navigate('/')

   useEffect(() => {
      dispatch(QUESTIONS_THUNKS.getTest({ testId }))
   }, [dispatch, testId])

   const handleDeleteQuestion = () => {
      dispatch(
         QUESTIONS_THUNKS.deleteQuestion({
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
         QUESTIONS_THUNKS.updateQuestionByEnable({
            questionId: params.id,
            isEnable: params.value,
            testId,
         })
      )
   }

   const handleAddQuestionsNavigate = () =>
      navigate(
         `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.questions}/${testId}/${ROUTES.ADMIN.createQuestion}`
      )

   const handleDelete = questions?.question?.find(
      (test) => test.id === selectedQuestionId
   )?.title

   return (
      <StyledContainer>
         <TestContainer>
            <Box className="title-container">
               <Box className="text">
                  <Typography className="title">Title:</Typography>

                  <Typography>{questions?.title}</Typography>
               </Box>

               <Box className="text">
                  <Typography className="title">Short Description:</Typography>

                  <Typography>{questions?.shortDescription}</Typography>
               </Box>

               <Box className="text">
                  <Typography className="title">Duration:</Typography>

                  <Typography>
                     {questions && questions?.duration
                        ? questions.duration
                        : ''}
                  </Typography>
               </Box>
            </Box>

            <Button
               icon={<PlusIcon className="plus" />}
               className="button"
               onClick={handleAddQuestionsNavigate}
            >
               ADD MORE QUESTIONS
            </Button>

            <Box className="divider" />
            <StyledTable>
               {questions && questions?.question?.length > 0 ? (
                  <>
                     <Typography>#</Typography>
                     <Typography className="name">Name</Typography>
                     <Typography className="duration-time">Duration</Typography>
                     <Typography className="question-type">
                        Question Type
                     </Typography>
                  </>
               ) : null}
            </StyledTable>

            {questions && questions?.question?.length > 0 ? (
               questions?.question?.map(
                  ({ id, title, duration, questionType, enable }, index) => (
                     <StyledBox key={id}>
                        <Typography className="numbering-props">
                           {index + 1}
                        </Typography>

                        <Typography className="name-props">{title}</Typography>

                        <Typography className="duration-props">
                           {duration} s
                        </Typography>

                        <Typography className="question-type-props">
                           {questionTypeHandler(questionType)}
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
                  <img src={NoDataImage} alt="no-data" />
               </Box>
            )}

            <Button
               className="go-back-button"
               variant="secondary"
               onClick={handleGoBack}
            >
               GO BACK
            </Button>
         </TestContainer>

         <DeleteModal
            isCloseIcon
            isVisible={isVisible}
            handleIsVisible={handleOpenModal}
            handleDelete={() => handleDeleteQuestion(selectedQuestionId)}
         >
            <Typography className="title" variant="p">
               <Typography variant="span">Question: </Typography>

               {handleDelete}
            </Typography>

            <Typography className="modal-message">You can`t restore</Typography>
         </DeleteModal>
      </StyledContainer>
   )
}
export default Questions

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   width: 'auto',

   '& > div > .title-container': {
      paddingLeft: '1rem',
      paddingTop: '0.2rem',

      '& > .text': {
         display: 'flex',
         gap: '0.3rem',
         fontFamily: 'Poppins',
         fontSize: '1rem',
         overflow: 'hidden',
         maxWidth: '40rem',
         textOverflow: 'ellipsis',

         '& > .title': {
            color: '#3752B4',
         },
      },
   },

   '& > div > .button': {
      padding: '0.75rem 1.5rem 0.75rem 1rem',
      width: 'auto',
      gap: '0.5rem',
      margin: '0 1.75rem 0 40rem',

      '& > span > .plus': {
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

   '& > div > .go-back-button': {
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

   '& > div > .divider': {
      width: 'auto',
      height: '0.0625rem',
      margin: '0.5rem',
      border: '1px solid #D4D0D0',
      background: '#C4C4C4',
   },

   '& > div > .background-image': {
      margin: 'auto',
      maxWidth: '20rem',
      maxHeight: '15rem',

      '& > img': {
         width: '100%',
         height: '100%',
      },
   },
}))

const StyledTable = styled(Box)(() => ({
   display: 'flex',
   margin: '0 1.5rem',

   '& > .name': {
      marginLeft: '2.5rem',
   },

   '& > .duration-time': {
      marginLeft: '16.5rem',
   },

   '& > .question-type': {
      marginLeft: '3.8rem',
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

   '& > .numbering-props': {
      width: '1rem',
   },

   '& > .name-props': {
      margin: '0 2rem',
      whiteSpace: 'nowrap',
      width: '13rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
   },

   '& > .duration-props': {
      margin: '0 4.4rem',
      width: '2rem',
   },

   '& > .question-type-props': {
      margin: '0 1.2rem',
   },

   '&:hover': {
      backgroundColor: '#F6F6F6',
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
}))

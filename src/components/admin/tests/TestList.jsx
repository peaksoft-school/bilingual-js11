import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Typography, styled } from '@mui/material'
import { EditIcon, FalseIcon, TrashIcon } from '../../../assets/icons'
import { SearchingImage } from '../../../assets/images'
import { TESTS_THUNKS } from '../../../store/slice/admin/testsThunks'
import Switcher from '../../UI/Switcher'
import Modal from '../../UI/Modal'
import Button from '../../UI/buttons/Button'

const TestList = () => {
   const { tests } = useSelector((state) => state.testsSlice)
   const dispatch = useDispatch()

   const [isVisible, setIsVisible] = useState(false)
   const [selectedTestId, setSelectedTestId] = useState(null)

   const navigate = useNavigate()

   useEffect(() => {
      dispatch(TESTS_THUNKS.getAllTests())
   }, [dispatch])

   const handleDeleteTest = (testId) => {
      dispatch(TESTS_THUNKS.deleteTest(testId))

      setIsVisible(false)
   }

   const handleOpenModal = (testId) => {
      setSelectedTestId(testId)
      setIsVisible((prev) => !prev)
   }

   const handleEnable = (params) => {
      dispatch(
         TESTS_THUNKS.updateTetsByEnable({
            testId: params.id,
            enable: params.value,
         })
      )
   }

   return (
      <StyledContainer>
         {tests?.length > 0 ? (
            tests.map(({ id, title, enable }) => (
               <Link
                  to={`/admin/tests/questions/${id}`}
                  key={id}
                  className="test-link"
               >
                  <Box className="test">
                     <Typography className="title">{title}</Typography>

                     <Box className="icons">
                        <Box onClick={(event) => event.stopPropagation()}>
                           <Switcher
                              checked={enable}
                              onChange={(value) => handleEnable({ value, id })}
                           />
                        </Box>

                        <EditIcon
                           className="edit"
                           onClick={(event) => {
                              event.preventDefault()
                              navigate(`/admin/tests/update-test/${id}`)
                           }}
                        />

                        <TrashIcon
                           className="delete"
                           onClick={(event) => {
                              event.preventDefault()
                              handleOpenModal(id)
                           }}
                        />
                     </Box>
                  </Box>
               </Link>
            ))
         ) : (
            <Box className="background-image">
               <img src={SearchingImage} alt="search" />
            </Box>
         )}

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

               <Button onClick={() => handleDeleteTest(selectedTestId)}>
                  DELETE
               </Button>
            </Box>
         </Modal>
      </StyledContainer>
   )
}

export default TestList

const StyledContainer = styled(Box)(() => ({
   '& > .background-image': {
      margin: 'auto',
      marginTop: '1.8rem',
      width: '18rem',
      height: '18rem',
   },

   '& > .test-link': {
      textDecoration: 'none',
      color: 'inherit',

      '& > .test': {
         width: '100%',
         height: 'auto',
         display: 'flex',
         backgroundColor: '#fff',
         color: '#4C4859',
         padding: '20px 25px',
         borderRadius: '0.5rem',
         boxShadow:
            '0px 4px 10px 0px rgba(0, 0, 0, 0.06), 0px -4px 10px 0px rgba(0, 0, 0, 0.06)',
         marginBottom: '0.94rem',
         cursor: 'pointer',
         position: 'relative',

         '& > .title': {
            wordWrap: 'break-word',
            maxWidth: '38rem',
            fontFamily: 'Poppins',
            fontSize: '1rem',
         },

         '&:hover': {
            backgroundColor: '#f6f6f6',
         },

         '& > .icons': {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '1.4rem',
            display: 'flex',
            gap: '1.4rem',

            '& .edit:hover': {
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
      },
   },
}))

import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditIcon, FalseIcon, TrashIcon } from '../../../assets/icons'
import { TESTS_THUNKS } from '../../../store/slice/admin/tests/testsThunk'
import { ROUTES } from '../../../routes/routes'
import { NoData } from '../../../assets/images'
import Modal from '../../UI/Modal'
import Switcher from '../../UI/Switcher'
import Button from '../../UI/buttons/Button'

const TestList = () => {
   const { tests } = useSelector((state) => state.testsSlice)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [isVisible, setIsVisible] = useState(false)
   const [selectedTestId, setSelectedTestId] = useState(null)

   useEffect(() => {
      dispatch(TESTS_THUNKS.getAllTests())
   }, [dispatch])

   const handleDeleteTest = (testId) => {
      dispatch(TESTS_THUNKS.deleteTest(testId))
      setIsVisible(false)
   }

   const handleIsVisible = (e, testId) => {
      e.preventDefault()

      setSelectedTestId(testId)

      setIsVisible((prev) => !prev)
   }

   const handleEnable = ({ id, value }) => {
      dispatch(
         TESTS_THUNKS.updateTetsByEnable({
            testId: id,
            enable: value,
         })
      )
   }

   const handleWithStopPropagation = (e) => e.stopPropagation()

   const handleEdit = (e, id) => {
      e.preventDefault()

      navigate(`${ROUTES.ADMIN.index}/${ROUTES.ADMIN.updateTest}/${id}`)
   }

   return (
      <StyledContainer>
         {tests?.length > 0 ? (
            tests.map(({ id, title, enable }) => (
               <Link
                  to={`${ROUTES.ADMIN.index}/${ROUTES.ADMIN.questions}/${id}`}
                  key={id}
                  className="test-link"
               >
                  <Box className="test">
                     <Typography className="title">{title}</Typography>

                     <Box className="icons">
                        <Box onClick={handleWithStopPropagation}>
                           <Switcher
                              checked={enable}
                              onChange={(value) => handleEnable({ value, id })}
                           />
                        </Box>

                        <EditIcon
                           className="edit"
                           onClick={(e) => handleEdit(e, id)}
                        />

                        <TrashIcon
                           className="delete"
                           onClick={(e) => handleIsVisible(e, id)}
                        />
                     </Box>
                  </Box>
               </Link>
            ))
         ) : (
            <Box className="background-image">
               <img src={NoData} alt="search" />
            </Box>
         )}

         <Modal
            isCloseIcon
            isVisible={isVisible}
            handleIsVisible={handleIsVisible}
         >
            <FalseIcon />

            <Typography className="modal-title">Do you want delete?</Typography>

            <Typography className="title">
               <Typography variant="span">Test: </Typography>

               {tests.find((test) => test.id === selectedTestId)?.title}
            </Typography>

            <Typography className="modal-message">
               You can`t restore this file
            </Typography>

            <Box className="container-buttons">
               <Button variant="secondary" onClick={handleIsVisible}>
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
      maxWidth: '20rem',
      maxHeight: '18rem',

      '& img': {
         width: '100%',
         height: '100%',
      },
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
            maxWidth: '10rem',
            fontFamily: 'Poppins',
            fontSize: '1rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
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

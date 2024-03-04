import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { EditIcon, TrashIcon } from '../../../assets/icons'
import { TESTS_THUNKS } from '../../../store/slice/admin/tests/testsThunk'
import { NoDataImage } from '../../../assets/images'
import { ROUTES } from '../../../routes/routes'
import DeleteModal from '../../UI/modals/DeleteModal'
import Switcher from '../../UI/Switcher'

const TestList = () => {
   const { tests } = useSelector((state) => state.testsSlice)

   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [isVisible, setIsVisible] = useState(false)
   const [selectedTestId, setSelectedTestId] = useState(null)

   const handleWithStopPropagation = (e) => e.stopPropagation()

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

   const handleEdit = (e, id) => {
      e.preventDefault()

      navigate(`${ROUTES.ADMIN.index}/${ROUTES.ADMIN.updateTest}/${id}`)
   }

   const handleDelete = tests?.find((test) => test.id === selectedTestId)?.title

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
               <img src={NoDataImage} alt="search" />
            </Box>
         )}

         <DeleteModal
            isVisible={isVisible}
            handleIsVisible={handleIsVisible}
            handleDelete={() => handleDeleteTest(selectedTestId)}
         >
            <Typography className="title">
               <Typography variant="span">Test: </Typography>

               {handleDelete}
            </Typography>

            <Typography className="modal-message">
               You can`t restore this test
            </Typography>
         </DeleteModal>
      </StyledContainer>
   )
}

export default TestList

const StyledContainer = styled(Box)(() => ({
   '& > .background-image': {
      margin: 'auto',
      maxWidth: '20rem',
      maxHeight: '18rem',

      '& > img': {
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
      },
   },
}))

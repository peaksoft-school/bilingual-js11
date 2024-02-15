import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Switcher from '../../UI/Switcher'
import { EditIcon, TrashIcon } from '../../../assets/icons'
import ModalDelete from '../../UI/modals/ModalDelete'
import { TESTS_THUNK } from '../../../store/slice/admin/testsThunk'
import { SearchingImage } from '../../../assets/images'

const TestList = () => {
   const { tests } = useSelector((state) => state.testsSlice)
   const [isVisible, setIsVisible] = useState(false)
   const [selectedTestId, setSelectedTestId] = useState(null)
   const dispatch = useDispatch()

   const navigate = useNavigate()

   useEffect(() => {
      dispatch(TESTS_THUNK.getAllTests())
   }, [dispatch])

   const handleDeleteTest = (testId) => {
      dispatch(TESTS_THUNK.deleteTest(testId))
      setIsVisible(false)
   }

   const handleOpenModal = (testId) => {
      setSelectedTestId(testId)
      setIsVisible(true)
   }

   const handleCloseModal = () => {
      setIsVisible(false)
   }

   const handleEnable = (params) => {
      dispatch(
         TESTS_THUNK.updateTetsByEnable({
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

         <ModalDelete
            isVisible={isVisible}
            onDelete={() => handleDeleteTest(selectedTestId)}
            onCancel={handleCloseModal}
         >
            Do you want delete?
         </ModalDelete>
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

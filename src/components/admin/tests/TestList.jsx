import { useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Switcher from '../../UI/Switcher'
import { EditIcon, TrashIcon } from '../../../assets/icons'
import {
   deleteTest,
   getAllTests,
   updateByEnable,
} from '../../../store/slice/testsSlice'
import ModalDelete from '../../UI/modals/ModalDelete'

const TestList = () => {
   const { tests } = useSelector((state) => state.testsSlice)
   const dispatch = useDispatch()
   const [isVisible, setIsVisible] = useState(false)
   const [selectedTestId, setSelectedTestId] = useState(null)

   useEffect(() => {
      dispatch(getAllTests())
   }, [dispatch])

   const handleDeleteTest = (testId) => {
      dispatch(deleteTest(testId))
      setIsVisible(false)
   }

   const handleOpenModal = (testId) => {
      setSelectedTestId(testId)
      setIsVisible(true)
   }

   const handleCloseModal = () => {
      setIsVisible(false)
   }

   const handleEnable = async (id, enable) => {
      try {
         await dispatch(updateByEnable({ testId: id, enable }))
      } catch (error) {
         console.error('Ошибка при обновлении теста:', error)
      } finally {
         dispatch(getAllTests())
      }
   }

   return (
      <StyledContainer>
         {tests?.length > 0 ? (
            tests.map(({ id, title, enable }) => (
               <Box key={id} className="test">
                  <Typography className="title">
                     <Link to={`/admin/tests/questions/${id}`} className="text">
                        {title}
                     </Link>
                  </Typography>

                  <Box className="icons">
                     <Switcher
                        key={id}
                        className="switcher"
                        checked={enable}
                        onChange={(e) => handleEnable(id, e.target.checked)}
                     />

                     <Link to={`/admin/tests/update-test/${id}`}>
                        <EditIcon className="edit" />
                     </Link>

                     <TrashIcon
                        className="delete"
                        onClick={() => handleOpenModal(id)}
                     />
                  </Box>
               </Box>
            ))
         ) : (
            <Typography>You haven`t added any tests yet.</Typography>
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

         '&::first-letter': {
            textTransform: 'uppercase',
         },

         '& > .text': {
            textDecoration: 'none',
            color: 'inherit',
            fontFamily: 'Poppins',
            fontSize: '1rem',
         },
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
}))

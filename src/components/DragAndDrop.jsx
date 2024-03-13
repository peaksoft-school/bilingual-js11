import { useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { TEST_QUESTION_ACTIONS } from '../store/slice/user/test/testSlice'

const DragAndDrop = ({ options }) => {
   const { correctOptions } = useSelector((state) => state.testSlice)

   const dispatch = useDispatch()

   const [isDropped, setIsDropped] = useState(false)

   const [isDragging, setIsDragging] = useState(false)

   const onDragEndHandler = (e, option) => {
      e.preventDefault()

      const correctOption = correctOptions.find(
         (correctOption) => correctOption.id === option.id
      )

      if (isDropped) {
         if (correctOption) {
            return correctOptions
         }

         return dispatch(TEST_QUESTION_ACTIONS.addCorrectOption(option))
      }

      setIsDropped(false)
      setIsDragging(false)

      return option
   }

   const deleteWordHandler = (id) => {
      dispatch(TEST_QUESTION_ACTIONS.deleteCorrectOption(id))
   }

   const onDropHandler = (e) => {
      e.preventDefault()

      setIsDropped(true)
   }

   const onDragOverHandler = (e) => {
      e.preventDefault()

      setIsDragging(true)
   }

   const optionDisabledHandler = (id) =>
      correctOptions.find((correctOption) => correctOption.id === id)

   return (
      <StyledContainer>
         <Box className="drag-container">
            {options.map((option) => (
               <Box
                  key={option.id}
                  draggable={!false}
                  className={`option-container ${
                     optionDisabledHandler(option.id) ? 'disabled' : ''
                  }`}
                  onDragEnd={(e) => onDragEndHandler(e, option)}
               >
                  <Typography className="option">{option.title}</Typography>
               </Box>
            ))}
         </Box>

         <StyledBox
            className="board-container"
            dragging={isDragging.toString()}
            onDrop={onDropHandler}
            onDragOver={onDragOverHandler}
         >
            {correctOptions.length === 0 ? (
               <Box className="board-text">
                  <Typography>Select words and drag here</Typography>
               </Box>
            ) : (
               correctOptions.map(({ id, title }) => (
                  <Box
                     key={id}
                     className="option-container"
                     onClick={() => deleteWordHandler(id)}
                  >
                     <Typography className="option">{title}</Typography>
                  </Box>
               ))
            )}
         </StyledBox>
      </StyledContainer>
   )
}

export default DragAndDrop

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '44px 0px',
   display: 'grid',
   justifyItems: 'end',
   gap: '3rem',

   '& .drag-container': {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
   },

   '& .option-container': {
      border: '2px solid #D4D0D0',
      borderRadius: '0.5rem',
      padding: '0.5rem 2rem',
      cursor: 'pointer',
      margin: '1rem',

      '&.disabled': {
         opacity: 0.5,
         pointerEvents: 'none',
      },

      ':hover': {
         borderColor: theme.palette.primary.main,
      },

      ':active': {
         backgroundColor: theme.palette.primary.main,
         color: theme.palette.primary.white,
      },

      '& .option': {
         fontFamily: 'Poppins',
         fontWeight: '500',
         fontStyle: 'normal',
         fontSize: '1.1rem',
      },
   },
}))

const StyledBox = styled(Box)(({ dragging }) => ({
   gap: '0.3rem',
   display: 'flex',
   flexWrap: 'wrap',
   maxWidth: '29rem',
   alignItems: 'center',
   borderRadius: '0.5rem',
   justifyContent: 'center',
   border: dragging === 'true' ? `1px dashed  #3A10E5` : '1px dashed',
   background: dragging === 'true' ? 'rgba(58, 16, 229, 0.1)' : '',

   '& .board-text': {
      padding: '5rem',
      fontFamily: 'Poppins',
   },
}))

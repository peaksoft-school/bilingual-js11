import { useState } from 'react'
import { Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { MY_RESULTS_THUNK } from '../../../store/slices/user/results/resultsThunk'
import { TrashIcon } from '../../../assets/icons'
import DeleteModal from '../../UI/modals/DeleteModal'
import IconButton from '../../UI/buttons/IconButton'

const DeleteResults = ({ answerId, row }) => {
   const dispatch = useDispatch()

   const [isVisible, setIsVisible] = useState(false)

   const deleteHandler = () => {
      dispatch(MY_RESULTS_THUNK.deleteResults({ answerId }))

      setIsVisible(false)
   }

   const isVisibleHandler = (e) => {
      e.preventDefault()

      setIsVisible((prev) => !prev)
   }

   return (
      <>
         <IconButton onClick={isVisibleHandler}>
            <TrashIcon />
         </IconButton>

         <DeleteModal
            deleteHandler={deleteHandler}
            isVisible={isVisible}
            toggleModal={isVisibleHandler}
         >
            <Typography>Test name:{row.original.testName}</Typography>
            <Typography className="modal-message">You can`t restore</Typography>
         </DeleteModal>
      </>
   )
}

export default DeleteResults

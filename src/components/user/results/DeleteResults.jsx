import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IconButton, Typography } from '@mui/material'
import { MY_RESULTS_THUNKS } from '../../../store/slices/user/results/resultsThunk'
import { TrashIcon } from '../../../assets/icons'
import DeleteModal from '../../UI/modals/DeleteModal'

const DeleteResults = ({ row }) => {
   const [isVisible, setIsVisible] = useState(false)

   const dispatch = useDispatch()

   const isVisibleHandler = (e) => {
      e.preventDefault()

      setIsVisible((prev) => !prev)
   }

   const handleDelete = () =>
      dispatch(
         MY_RESULTS_THUNKS.deleteResult({ answerId: row.original.answerId })
      )

   return (
      <>
         <IconButton>
            <TrashIcon onClick={isVisibleHandler} />
         </IconButton>

         <DeleteModal
            isVisible={isVisible}
            toggleModal={isVisibleHandler}
            deleteHandler={handleDelete}
         >
            <>
               <Typography>You can’t restore this file</Typography>
               <Typography>{row.original.testName}</Typography>
            </>
         </DeleteModal>
      </>
   )
}

export default DeleteResults

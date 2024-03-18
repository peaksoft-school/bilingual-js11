import { useDispatch } from 'react-redux'
import { TrashIcon } from '../../../assets/icons'
import { MY_RESULTS_THUNK } from '../../../store/slices/user/results/resultsThunk'
import IconButton from '../../UI/buttons/IconButton'

const DeleteResults = ({ answerId }) => {
   const dispatch = useDispatch()

   const handleDelete = () =>
      dispatch(MY_RESULTS_THUNK.deleteResults({ answerId }))

   return (
      <IconButton onClick={handleDelete}>
         <TrashIcon />
      </IconButton>
   )
}

export default DeleteResults

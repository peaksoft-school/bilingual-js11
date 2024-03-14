import { useDispatch } from 'react-redux'
import { SUBMITTED_RESULTS_THUNKS } from '../../../store/slice/admin/results/submitedResultsThunk'
import { TrashIcon } from '../../../assets/icons'
import IconButton from '../../UI/buttons/IconButton'

const DeleteResults = ({ resultId }) => {
   const dispatch = useDispatch()

   const handleDelete = () =>
      dispatch(SUBMITTED_RESULTS_THUNKS.deleteResults({ resultId }))

   return (
      <IconButton>
         <TrashIcon onClick={handleDelete} />
      </IconButton>
   )
}

export default DeleteResults

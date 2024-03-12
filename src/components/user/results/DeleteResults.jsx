import { useDispatch } from 'react-redux'
import { TrashIcon } from '../../../assets/icons'
import { MY_RESULTS_THUNKS } from '../../../store/slice/user/results/resultsThunk'

const DeleteResults = ({ answerId }) => {
   const dispatch = useDispatch()

   const handleDelete = () =>
      dispatch(MY_RESULTS_THUNKS.deleteResult({ answerId }))

   return <TrashIcon onClick={handleDelete} />
}

export default DeleteResults

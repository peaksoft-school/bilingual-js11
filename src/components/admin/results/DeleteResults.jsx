import { useDispatch } from 'react-redux'
import { TrashIcon } from '../../../assets/icons'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/results/resultsThunk'
import IconButton from '../../UI/buttons/IconButton'

const DeleteResults = ({ answerId }) => {
   const dispatch = useDispatch()

   const handleDelete = () =>
      dispatch(MY_RESULTS_THUNK.deleteResults({ answerId }))

   return (
      <IconButton>
         <TrashIcon onClick={handleDelete} />
      </IconButton>
   )
}

export default DeleteResults

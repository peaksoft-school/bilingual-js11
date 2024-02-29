import { useDispatch } from 'react-redux'
import { TrashIcon } from '../../../assets/icons'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/results/myResultsThunk'

const DeleteResults = ({ resultId }) => {
   const dispatch = useDispatch()

   const handleDelete = () => {
      try {
         dispatch(MY_RESULTS_THUNK.deleteResults(resultId))
      } catch (error) {
         console.error('Error deleting appointment:', error)
      } finally {
         console.log('success')
      }
   }

   return <TrashIcon onClick={handleDelete} />
}

export default DeleteResults

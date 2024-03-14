import { useNavigate } from 'react-router-dom'
import { CheckSquareIcon, EyeIcon } from '../../../assets/icons'
import IconButton from '../../UI/buttons/IconButton'

const SelectedResults = ({ resultId, status }) => {
   console.log(resultId)
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate()
   }

   return status === 'EVALUATED' ? (
      <IconButton onClick={navigateHandler}>
         <EyeIcon />
      </IconButton>
   ) : (
      <IconButton onClick={navigateHandler}>
         <CheckSquareIcon />
      </IconButton>
   )
}

export default SelectedResults

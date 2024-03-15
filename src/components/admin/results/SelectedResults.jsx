import { useNavigate } from 'react-router-dom'
import { CheckSquareIcon, EyeIcon } from '../../../assets/icons'
import IconButton from '../../UI/buttons/IconButton'
import { ROUTES } from '../../../routes/routes'

const SelectedResults = ({ resultId, status }) => {
   const navigate = useNavigate()

   const navigateHandler = () => {
      navigate(
         `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.RESULTS}/${resultId}/${ROUTES.ADMIN.EVALUATIONS}`
      )
   }

   return status === 'EVALUATED' ? (
      <IconButton onClick={navigateHandler}>
         <CheckSquareIcon />
      </IconButton>
   ) : (
      <IconButton onClick={navigateHandler}>
         <EyeIcon />
      </IconButton>
   )
}

export default SelectedResults

import { Navigate } from 'react-router-dom'
import { ROUTES } from '../../utils/constants'

const ProtectedRoutes = ({ component, isAuth }) => {
   if (isAuth) {
      return component
   }
   return <Navigate to={ROUTES.LOGIN} />
}

export default ProtectedRoutes

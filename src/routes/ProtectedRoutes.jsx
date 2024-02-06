import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ fallbackPath, roles, component }) => {
   const { isAuth, role } = useSelector((state) => state.auth)

   const allowedRole = roles.includes(role)

   if (isAuth && allowedRole) {
      return <Navigate to={fallbackPath} />
   }

   return component
}

export default ProtectedRoutes

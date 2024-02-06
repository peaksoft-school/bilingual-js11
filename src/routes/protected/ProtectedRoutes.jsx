import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ fallbackPath, isAuth, roles, role, component }) => {
   if (isAuth && roles?.includes(role)) {
      return component
   } else {
      return <Navigate to={fallbackPath} replace />
   }
}

export default ProtectedRoutes

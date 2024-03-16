import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ fallbackPath, roles, Component }) => {
   const { role } = useSelector((state) => state.auth)

   const allowedRole = roles.includes(role)

   if (!allowedRole) return <Navigate to={fallbackPath} replace />

   return Component
}

export default ProtectedRoute

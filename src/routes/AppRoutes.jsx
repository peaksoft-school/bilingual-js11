import { useSelector } from 'react-redux'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '../utils/constants/index'

const AppRoutes = () => {
   const { role, isAuth } = useSelector((state) => state.isAuth)

   createBrowserRouter([
      {
         path: '/',
         element: <Navigate to={ROUTES.SIGN_IN} />,
      },

      {
         path: ROUTES.LOGIN,
         element: '',
      },

      {
         path: ROUTES.ADMIN.index,
         element: '',
      },
   ])
}

export default AppRoutes

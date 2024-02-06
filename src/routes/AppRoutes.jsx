import { useSelector } from 'react-redux'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import { ROUTES } from '../utils/constants/index'
import LandingPage from '../containers/LandingPage'
import ProtectedRoutes from './protected/ProtectedRoutes'
import AdminRoutes from './admin/AdminRoutes'
import UserRoutes from './user/UserRoutes'
import SignIn from '../containers/sign-in/SignIn'
import SignUp from '../containers/sign-up/SignUp'

const AppRoutes = () => {
   const { role, isAuth } = useSelector((state) => state.isAuth)

   createBrowserRouter([
      {
         path: '/',
         element: role !== 'ADMIN' ? <LandingPage /> : <Navigate to="/admin" />,
      },

      {
         path: '/sign-in',
         element: <SignIn />,
      },

      {
         path: '/sign-up',
         element: <SignUp />,
      },

      {
         path: ROUTES.USER.index,
         element: (
            <ProtectedRoutes
               isAuth={isAuth}
               component={<UserRoutes />}
               fallbackPath={ROUTES.SIGN_IN}
            />
         ),
      },

      {
         path: ROUTES.ADMIN.index,
         element: (
            <ProtectedRoutes
               isAuth={isAuth}
               component={<AdminRoutes />}
               fallbackPath={ROUTES.SIGN_IN}
            />
         ),
      },
   ])
}

export default AppRoutes

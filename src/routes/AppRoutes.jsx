import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { ROLES, ROUTES } from '../utils/constants/index'
import { ADMIN_ROUTES } from './AdminRoutes'
import { USER_ROUTES } from './UserRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import Landing from '../containers/Landing'
import SignIn from '../containers/sign-in/SignIn'
import SignUp from '../containers/sign-up/SignUp'

const AppRoutes = () => {
   const router = createBrowserRouter([
      {
         path: '/',
         element: (
            <ProtectedRoutes
               roles={[ROLES.USER, ROLES.GUEST]}
               fallbackPath={ROUTES.SIGN_IN}
               component={<Landing />}
            />
         ),
      },

      {
         path: ROUTES.SIGN_IN,
         element: <SignIn />,
      },

      {
         path: ROUTES.SIGN_UP,
         element: <SignUp />,
      },

      {
         path: ROUTES.ADMIN.index,
         element: (
            <ProtectedRoutes
               roles={[ROLES.ADMIN]}
               fallbackPath={ROUTES.SIGN_IN}
               component={<AdminLayout />}
            />
         ),
         children: ADMIN_ROUTES,
      },

      {
         path: ROUTES.USER.index,
         element: (
            <ProtectedRoutes
               roles={[ROLES.USER, ROLES.GUEST]}
               fallbackPath={ROUTES.ADMIN.index}
               component={<UserLayout />}
            />
         ),
         children: USER_ROUTES,
      },
      {
         path: '*',
         element: <Navigate to="/" />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes

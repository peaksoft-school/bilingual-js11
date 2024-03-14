import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ROLES, ROUTES } from './routes'
import { ADMIN_ROUTES } from './adminRoutes'
import { USER_ROUTES } from './UserRoutes'
import ProtectedRoute from './ProtectedRoute'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import SignIn from '../pages/sign-in/SignIn'
import SignUp from '../pages/sign-up/SignUp'
import NotFound from '../layout/NotFound'
import Home from '../pages/home/Home'

const AppRoutes = () => {
   const router = createHashRouter([
      {
         path: '/',
         element: (
            <ProtectedRoute
               roles={[ROLES.USER, ROLES.GUEST]}
               fallbackPath={ROUTES.ADMIN.index}
               Component={<Home />}
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
            <ProtectedRoute
               roles={[ROLES.ADMIN]}
               fallbackPath="/"
               Component={<AdminLayout />}
            />
         ),

         children: ADMIN_ROUTES,
      },

      {
         path: ROUTES.USER.index,
         element: (
            <ProtectedRoute
               roles={[ROLES.USER]}
               fallbackPath="/"
               Component={<UserLayout />}
            />
         ),

         children: USER_ROUTES,
      },

      {
         path: '*',
         element: <NotFound />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes

import { Navigate } from 'react-router'
import Results from '../pages/user/results/Results'
import UserTests from '../pages/user/tests/UserTests'
import { ROUTES } from './routes'

export const USER_ROUTES = [
   {
      path: `${ROUTES.USER.index}`,
      element: <Navigate to="tests" />,
   },
   {
      path: `${ROUTES.USER.tests}`,
      element: <UserTests />,
   },

   {
      path: `${ROUTES.USER.results}`,
      element: <Results />,
   },
]

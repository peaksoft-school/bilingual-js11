import UserResults from '../pages/user/results/UserResults'
import UserTests from '../pages/user/tests/UserTests'

export const USER_ROUTES = [
   {
      path: '/user/tests',
      element: <UserTests />,
   },

   {
      path: '/user/results',
      element: <UserResults />,
   },
]

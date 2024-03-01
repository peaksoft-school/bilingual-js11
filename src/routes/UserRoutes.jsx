import UserResults from '../pages/user/results/UserResults'
import UserPracticeTest from '../pages/user/tests/UserPracticeTest'
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

   {
      path: '/user/tests/practice-test/:testId',
      element: <UserPracticeTest />,
   },
]

import AdminResults from '../pages/admin/results/AdminResults'
import UserResults from '../pages/user/results/UserResults'
import UserTests from '../pages/user/tests/UserTests'
import CreateTest from '../pages/admin/create-test/CreateTest'
import AdminTests from '../pages/admin/tests/AdminTests'
import Questions from '../pages/admin/questions/Questions'
import Question from '../pages/admin/questions/Question'
import UserPracticeTest from '../pages/user/tests/UserPracticeTest'

const USER_ROUTES = [
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

const ADMIN_ROUTES = [
   {
      path: '/admin/tests',
      element: <AdminTests />,
   },

   {
      path: '/admin/tests/create-test',
      element: <CreateTest />,
   },

   {
      path: '/admin/tests/update-test/:id',
      element: <CreateTest />,
   },

   {
      path: '/admin/tests/questions/:testId',
      element: <Questions />,
   },

   {
      path: '/admin/tests/questions/:testId/create-question',
      element: <Question />,
   },

   {
      path: '/admin/results',
      element: <AdminResults />,
   },
]

const ROUTES = {
   SIGN_IN: '/sign-in',
   SIGN_UP: '/sign-up',

   ADMIN: {
      index: '/admin',
   },

   USER: {
      index: '/user',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { USER_ROUTES, ADMIN_ROUTES, ROUTES, ROLES }

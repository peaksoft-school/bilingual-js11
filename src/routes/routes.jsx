import CreateTest from '../pages/admin/create-test/CreateTest'
import Results from '../pages/admin/results/Results'
import Tests from '../pages/user/tests/Tests'

const USER_ROUTES = [
   {
      path: '/user/tests',
      element: <Tests />,
   },

   {
      path: '/user/results',
      element: <Results />,
   },
]

const ADMIN_ROUTES = [
   {
      path: '/admin/tests',
      element: <CreateTest />,
   },

   {
      path: '/admin/results',
      element: <Results />,
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

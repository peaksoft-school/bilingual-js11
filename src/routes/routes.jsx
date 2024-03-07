import { Suspense, lazy } from 'react'
import Loading from '../components/Loading'

const AdminResults = lazy(() => import('../pages/admin/results/AdminResults'))
const UserResults = lazy(() => import('../pages/user/results/Results'))
const CreateTest = lazy(() => import('../pages/admin/create-test/CreateTest'))
const AdminTests = lazy(() => import('../pages/admin/tests/AdminTests'))
const UserTests = lazy(() => import('../pages/user/tests/TestsList'))
const Questions = lazy(() => import('../pages/admin/questions/Questions'))
const Question = lazy(() => import('../pages/admin/questions/Question'))

const USER_ROUTES = [
   {
      path: '/user/tests',
      element: (
         <Suspense fallback={<Loading />}>
            <UserTests />
         </Suspense>
      ),
   },

   {
      path: '/user/results',
      element: (
         <Suspense fallback={<Loading />}>
            <UserResults />
         </Suspense>
      ),
   },
]

const ADMIN_ROUTES = [
   {
      path: '/admin/tests',
      element: (
         <Suspense fallback={<Loading />}>
            <AdminTests />
         </Suspense>
      ),
   },

   {
      path: '/admin/tests/create-test',
      element: (
         <Suspense fallback={<Loading />}>
            <CreateTest />
         </Suspense>
      ),
   },

   {
      path: '/admin/tests/update-test/:id',
      element: (
         <Suspense fallback={<Loading />}>
            <CreateTest />
         </Suspense>
      ),
   },

   {
      path: '/admin/tests/questions/:testId',
      element: (
         <Suspense fallback={<Loading />}>
            <Questions />
         </Suspense>
      ),
   },

   {
      path: '/admin/tests/questions/:testId/create-question',
      element: (
         <Suspense fallback={<Loading />}>
            <Question />
         </Suspense>
      ),
   },

   {
      path: '/admin/results',
      element: (
         <Suspense fallback={<Loading />}>
            <AdminResults />
         </Suspense>
      ),
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

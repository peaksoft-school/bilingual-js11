import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router'
import { ROUTES } from './routes'
import Loading from '../components/Loading'

const AdminResults = lazy(() => import('../pages/admin/results/AdminResults'))
const CreateTest = lazy(() => import('../pages/admin/create-test/CreateTest'))
const AdminTests = lazy(() => import('../pages/admin/tests/AdminTests'))
const Questions = lazy(() => import('../pages/admin/questions/Questions'))
const Question = lazy(() => import('../pages/admin/question/Question'))

export const ADMIN_ROUTES = [
   {
      path: ROUTES.ADMIN.INDEX,
      element: <Navigate to={ROUTES.ADMIN.TESTS} />,
   },
   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}`,
      element: (
         <Suspense fallback={<Loading />}>
            <AdminTests />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.CREATE_TEST}`,
      element: (
         <Suspense fallback={<Loading />}>
            <CreateTest />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.UPDATE_TEST}/:${ROUTES.ADMIN.ID}`,
      element: (
         <Suspense fallback={<Loading />}>
            <CreateTest />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.QUESTIONS}/:${ROUTES.ADMIN.TEST_ID}`,
      element: (
         <Suspense fallback={<Loading />}>
            <Questions />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.TESTS}/${ROUTES.ADMIN.QUESTIONS}/:${ROUTES.ADMIN.TEST_ID}/${ROUTES.ADMIN.CREATE_QUESTION}`,
      element: (
         <Suspense fallback={<Loading />}>
            <Question />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.RESULTS}`,
      element: (
         <Suspense fallback={<Loading />}>
            <AdminResults />
         </Suspense>
      ),
   },
]

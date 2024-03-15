import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router'
import { ROUTES } from './routes'
import Loading from '../components/Loading'
import PracticeTest from '../pages/user/PracticeTest'

const Results = lazy(() => import('../pages/user/results/Results'))
const TestsList = lazy(() => import('../pages/user/tests/TestList'))
const InnerTest = lazy(() => import('../components/user/tests/InnerTest'))

export const USER_ROUTES = [
   {
      path: ROUTES.USER.INDEX,
      element: <Navigate to={ROUTES.USER.TESTS} />,
   },

   {
      path: `${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}`,
      element: (
         <Suspense fallback={<Loading />}>
            <TestsList />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}/:${ROUTES.USER.TEST_ID}`,
      element: <InnerTest />,
   },

   {
      path: `${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}/:${ROUTES.USER.TEST_ID}/${ROUTES.USER.PRACTICE_TEST}`,
      element: <PracticeTest />,
   },

   {
      path: `${ROUTES.USER.INDEX}/${ROUTES.USER.RESULTS}`,
      element: (
         <Suspense fallback={<Loading />}>
            <Results />
         </Suspense>
      ),
   },
]

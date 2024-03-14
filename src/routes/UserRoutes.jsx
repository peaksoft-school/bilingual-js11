import { Suspense, lazy } from 'react'
import { Navigate } from 'react-router'
import { ROUTES } from './routes'
import InnerTest from '../components/user/tests/InnerTest'
import Loading from '../components/Loading'

const Results = lazy(() => import('../pages/user/results/Results'))
const TestsList = lazy(() => import('../pages/user/tests/TestList'))

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
      path: `${ROUTES.USER.INDEX}/${ROUTES.USER.RESULTS}`,
      element: (
         <Suspense fallback={<Loading />}>
            <Results />
         </Suspense>
      ),
   },
]

import { Navigate } from 'react-router'
import { ROUTES } from './routes'
import Results from '../pages/user/results/Results'
import TestsList from '../pages/user/tests/TestsList'
import InnerTest from '../components/user/tests/InnerTest'

export const USER_ROUTES = [
   {
      path: `${ROUTES.USER.index}`,
      element: <Navigate to={`${ROUTES.USER.tests}`} />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.tests}`,
      element: <TestsList />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.tests}/:${ROUTES.USER.testId}`,
      element: <InnerTest />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.results}`,
      element: <Results />,
   },
]

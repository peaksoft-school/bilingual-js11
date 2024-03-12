import { Navigate } from 'react-router'
import { ROUTES } from './routes'
import Results from '../pages/user/results/Results'
import TestList from '../pages/user/tests/TestList'
import InnerTest from '../components/user/tests/InnerTest'
import PracticeTest from '../pages/user/PracticeTest'

export const USER_ROUTES = [
   {
      path: `${ROUTES.USER.index}`,
      element: <Navigate to={`${ROUTES.USER.tests}`} />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.tests}`,
      element: <TestList />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.tests}/:${ROUTES.USER.testId}`,
      element: <InnerTest />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.tests}/:${ROUTES.USER.testId}/${ROUTES.USER.practiceTest}`,
      element: <PracticeTest />,
   },

   {
      path: `${ROUTES.USER.index}/${ROUTES.USER.results}`,
      element: <Results />,
   },
]

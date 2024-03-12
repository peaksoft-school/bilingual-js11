import { Navigate } from 'react-router-dom'
import AdminResults from '../pages/admin/results/AdminResults'
import AdminTests from '../pages/admin/tests/AdminTests'
import CreateTest from '../pages/admin/create-test/CreateTest'
import Questions from '../pages/admin/questions/Questions'
import InnerTest from '../components/user/tests/InnerTest'
import Question from '../pages/admin/questions/Question'
import TestList from '../pages/user/tests/TestList'
import Results from '../pages/user/results/Results'
import PracticeTest from '../pages/user/PracticeTest'

const USER_ROUTES = [
   {
      path: '/user',
      element: <Navigate to="/user/tests" />,
   },

   {
      path: '/user/tests',
      element: <TestList />,
   },

   {
      path: '/user/tests/:testId',
      element: <InnerTest />,
   },

   {
      path: '/user/tests/:testId/practice-test',
      element: <PracticeTest />,
   },

   {
      path: '/user/results',
      element: <Results />,
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

export { USER_ROUTES, ADMIN_ROUTES }

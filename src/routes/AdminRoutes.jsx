import { Navigate } from 'react-router'
import { ROUTES } from './routes'
import AdminResults from '../pages/admin/results/AdminResults'
import CreateTest from '../pages/admin/create-test/CreateTest'
import AdminTests from '../pages/admin/tests/AdminTests'
import Questions from '../pages/admin/questions/Questions'
import Question from '../pages/admin/questions/Question'

export const ADMIN_ROUTES = [
   {
      path: ROUTES.ADMIN.index,
      element: <Navigate to={ROUTES.ADMIN.tests} />,
   },
   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.tests}`,
      element: <AdminTests />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.createTest}`,
      element: <CreateTest />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.updateTest}/:${ROUTES.ADMIN.id}`,
      element: <CreateTest />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.questions}/:${ROUTES.ADMIN.testId}`,
      element: <Questions />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.questions}/:${ROUTES.ADMIN.testId}/${ROUTES.ADMIN.createQuestion}`,
      element: <Question />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.results}`,
      element: <AdminResults />,
   },
]

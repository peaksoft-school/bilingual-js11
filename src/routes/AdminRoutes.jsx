import { ROUTES } from './routes'
import AdminResults from '../pages/admin/results/AdminResults'
import CreateTest from '../pages/admin/create-test/CreateTest'
import AdminTests from '../pages/admin/tests/AdminTests'
import Questions from '../pages/admin/questions/Questions'
import Question from '../pages/admin/questions/Question'

export const ADMIN_ROUTES = [
   {
      path: `${ROUTES.ADMIN.index}`,
      element: <AdminTests />,
   },

   {
      path: `${ROUTES.ADMIN.index}/create-test`,
      element: <CreateTest />,
   },

   {
      path: `${ROUTES.ADMIN.index}/update-test/:id`,
      element: <CreateTest />,
   },

   {
      path: `${ROUTES.ADMIN.index}/questions/:testId`,
      element: <Questions />,
   },

   {
      path: `${ROUTES.ADMIN.index}/questions/:testId/create-question`,
      element: <Question />,
   },

   {
      path: `${ROUTES.ADMIN.index}/results`,
      element: <AdminResults />,
   },
]

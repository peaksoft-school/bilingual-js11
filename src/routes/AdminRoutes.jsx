import CreateTest from '../containers/admin/tests/CreateTest'
import Results from '../containers/admin/results/Results'

export const ADMIN_ROUTES = [
   { path: '/admin/tests', element: <CreateTest /> },

   { path: '/admin/results', element: <Results /> },
]

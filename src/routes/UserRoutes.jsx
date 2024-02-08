import Results from '../containers/user/results/Results'
import Tests from '../containers/user/tests/Tests'

export const USER_ROUTES = [
   { path: '/user/tests', element: <Tests /> },

   { path: '/user/results', element: <Results /> },
]

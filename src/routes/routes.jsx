import AdminResults from '../pages/admin/results/AdminResults'
import UserResults from '../pages/user/results/UserResults'
import UserTests from '../pages/user/tests/UserTests'
import CreateTest from '../pages/admin/create-test/CreateTest'
import AdminTests from '../pages/admin/tests/AdminTests'
import Questions from '../pages/admin/questions/Questions'

const USER_ROUTES = [
   {
      path: '/user/tests',
      element: <UserTests />,
   },

   {
      path: '/user/results',
      element: <UserResults />,
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
      path: '/admin/results',
      element: <AdminResults />,
   },
]

const ROUTES = {
   SIGN_IN: '/sign-in',
   SIGN_UP: '/sign-up',

   ADMIN: {
      index: '/admin',
   },

   USER: {
      index: '/user',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

const QUESTIONS_API = {
   selectRealEnglishWords: 'api/questions/select-real-english-word',
   listenAndSelect: 'api/questions/listen_and_select_english_words',
   typeWhatYourHear: 'api/questions/type-what-you-hear',
   describeImage: 'api/questions/describe-image',
   recordSayingStatement: 'api/questions/record-saying-statement',
   respondInAtLeastNWords: 'api/questions/respond-n-words',
   highlightTheAnswer: 'api/questions/highlight-the-answer',
   selectTheMainIdea: 'api/questions/select-the-main-idea',
   selectBestTitle: 'api/questions/select-best-title',
}

export { USER_ROUTES, ADMIN_ROUTES, ROUTES, ROLES, QUESTIONS_API }

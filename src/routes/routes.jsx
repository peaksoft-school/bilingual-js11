import CreateTest from '../pages/admin/create-test/CreateTest'
import Results from '../pages/admin/results/Results'
import Tests from '../pages/user/tests/Tests'

const USER_ROUTES = [
   {
      path: '/user/tests',
      element: <Tests />,
   },

   {
      path: '/user/results',
      element: <Results />,
   },
]

const ADMIN_ROUTES = [
   {
      path: '/admin/tests',
      element: <CreateTest />,
   },

   {
      path: '/admin/results',
      element: <Results />,
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

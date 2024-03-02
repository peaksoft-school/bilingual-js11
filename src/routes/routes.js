const ROUTES = {
   SIGN_IN: '/sign-in',
   SIGN_UP: '/sign-up',

   ADMIN: {
      index: '/admin',
      tests: 'tests',
      createTest: 'create-test',
      updateTest: 'update-test',
      questions: 'questions',
      createQuestion: 'create-question',
      results: 'results',
   },

   USER: {
      index: '/user',
      tests: 'tests',
      results: 'results',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { ROUTES, ROLES }

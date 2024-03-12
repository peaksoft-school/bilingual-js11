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
      id: 'id',
      testId: 'testId',
      results: 'results',
   },

   USER: {
      index: '/user',
      tests: 'tests',
      testId: 'testId',
      practiceTest: 'practice-test',
      results: 'results',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { ROUTES, ROLES }

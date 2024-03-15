const ROUTES = {
   SIGN_IN: '/sign-in',
   SIGN_UP: '/sign-up',

   ADMIN: {
      INDEX: '/admin',
      TESTS: 'tests',
      CREATE_TEST: 'create-test',
      UPDATE_TEST: 'update-test',
      QUESTIONS: 'questions',
      CREATE_QUESTION: 'create-question',
      ID: 'id',
      TEST_ID: 'testId',
      RESULTS: 'results',
      EVALUATIONS: 'evaluations',
      RESULT_ID: 'resultId',
   },

   USER: {
      INDEX: '/user',
      TESTS: 'tests',
      PRACTICE_TEST: 'practice-test',
      TEST_ID: 'testId',
      RESULTS: 'results',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { ROUTES, ROLES }

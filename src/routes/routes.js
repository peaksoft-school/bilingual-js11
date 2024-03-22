const ROUTES = {
   SIGN_IN: '/sign-in',
   SIGN_UP: '/sign-up',

   FORGOT_PASSWORD: {
      INDEX: '/forgot-password',
      VERIFICATION: 'verification',
      PASSWORD_CHANGE: 'password-change',
   },

   ADMIN: {
      INDEX: '/admin',
      TESTS: 'tests',
      CREATE_TEST: 'create-test',
      UPDATE_TEST: 'update-test',
      QUESTIONS: 'questions',
      CREATE_QUESTION: 'create-question',
      UPDATE_QUESTION: 'update-question',
      ID: 'id',
      TEST_ID: 'testId',
      RESULTS: 'results',
      EVALUATIONS: 'evaluations',
      RESULT_ID: 'resultId',
      QUESTION_TYPE: 'questionType',
      ANSWER_ID: 'answerId',
   },

   USER: {
      INDEX: '/user',
      TESTS: 'tests',
      PRACTICE_TEST: 'practice-test',
      TEST_ID: 'testId',
      RESULTS: 'results',
      COMPLETE: 'complate',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { ROUTES, ROLES }

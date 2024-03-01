const ROUTES = {
   SIGN_IN: '/sign-in',
   SIGN_UP: '/sign-up',

   ADMIN: {
      index: '/admin/tests',
      createTest: 'create-test',
      updateTest: 'update-test',
      questions: 'questions',
      createQuestion: 'create-question',
   },

   USER: {
      index: '/user',
      homeTest: 'tests',
      practiceTest: 'practice-test',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { ROUTES, ROLES }

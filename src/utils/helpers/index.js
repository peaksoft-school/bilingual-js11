const showErrorSignUp = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Please fill in all fields'
   } else if (errors?.firstName) {
      errorMessage = `Incorrect ${errors.firstName}`
   } else if (errors?.lastName) {
      errorMessage = `Incorrect ${errors.lastName}`
   } else if (errors?.email) {
      errorMessage = `Incorrect ${errors.email}`
   } else if (errors?.password) {
      errorMessage = `Incorrect ${errors.password}`
   }

   return errorMessage
}

const showErrorSignIn = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Please fill in all fields'
   } else if (errors?.password) {
      errorMessage = `Incorrect ${errors.password}`
   }

   return errorMessage
}

const questionTypeHandler = (type) => {
   switch (type) {
      case 'SELECT_MAIN_IDEA':
         return 'Select the main'

      case 'SELECT_THE_BEST_TITLE':
         return 'Select the best title'

      case 'RECORD_SAYING':
         return 'Record saying statement'

      case 'DESCRIBE_IMAGE':
         return 'Describe image'

      case 'SELECT_REAL_ENGLISH_WORD':
         return 'Select real English word'

      case 'LISTEN_AND_SELECT_WORD':
         return 'Listen and select word'

      case 'TYPE_WHAT_YOU_HEAR':
         return 'Type what you hear'

      case 'RESPOND_IN_AT_LEAST_N_WORDS':
         return 'Respond in at N words'

      case 'HIGHLIGHTS_THE_ANSWER':
         return 'Highlight the answer'

      default:
         return 'Nothing'
   }
}

const resultsStatusHandler = (status) => {
   switch (status) {
      case 'NOT_EVALUATED':
         return 'Not evaluated'

      case 'EVALUATED':
         return 'Evaluated'

      default:
         return ''
   }
}

export {
   showErrorSignUp,
   showErrorSignIn,
   questionTypeHandler,
   resultsStatusHandler,
}

export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'RESPOND_IN_AT_LEAST_N_WORDS':
         return 'RESPOND_IN_AT_LEAST_N_WORDS'

      default:
         return name
   }
}

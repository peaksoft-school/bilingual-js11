export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'SELECT_THE_BEST_TITLE':
         return 'SELECT_THE_BEST_TITLE'
      default:
         return name
   }
}

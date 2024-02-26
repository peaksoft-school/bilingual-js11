export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'SSELECT_MAIN_IDEA':
         return 'SELECT_MAIN_IDEA'
      default:
         return name
   }
}

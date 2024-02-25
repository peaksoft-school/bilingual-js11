export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'LISTEN_AND_SELECT_WORD':
         return 'LISTEN_AND_SELECT_WORD'
      default:
         return name
   }
}

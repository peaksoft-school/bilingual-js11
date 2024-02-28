export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'DESCRIBE_IMAGE':
         return 'DESCRIBE_IMAGE'

      case 'RESPOND_IN_AT_LEAST_N_WORDS':
         return 'RESPOND_IN_AT_LEAST_N_WORDS'

      case 'RECORD_SAYING':
         return 'RECORD_SAYING'

      case 'HIGHLIGHTS_THE_ANSWER':
         return 'HIGHLIGHTS_THE_ANSWER'
      default:
         return name
   }
}

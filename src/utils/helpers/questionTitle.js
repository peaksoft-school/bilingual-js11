export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'DESCRIBE_IMAGE':
         return 'DESCRIBE_IMAGE'

      case 'RECORD_SAYING':
         return 'RECORD_SAYING'

      default:
         return name
   }
}

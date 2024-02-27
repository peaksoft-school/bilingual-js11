export const questionTitle = (name) => {
   switch (name) {
      case 'SELECT_REAL_ENGLISH_WORD':
         return 'SELECT_REAL_ENGLISH_WORD'

      case 'TYPE_WHAT_YOU_HEAR':
         return 'TYPE_WHAT_YOU_HEAR'

      case 'DESCRIBE_IMAGE':
         return 'DESCRIBE_IMAGE'
      default:
         return name
   }
}

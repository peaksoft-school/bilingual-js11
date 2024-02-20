import { OPTIONS } from '../constants/index'

export const questionName = (name) => {
   switch (name) {
      case 'SELECT_ENGLISH_WORD':
         return OPTIONS[0]
      default:
         return name
   }
}

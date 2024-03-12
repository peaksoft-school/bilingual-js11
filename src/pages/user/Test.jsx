import { QUESTION_TITLE } from '../../utils/constants'
import SelectRealEnglishWords from './types/SelectRealEnglishWords'

const Test = (props) => {
   switch (props.questionType) {
      case QUESTION_TITLE.SELECT_REAL_ENGLISH_WORDS:
         return <SelectRealEnglishWords {...props} />

      default:
         return <div />
   }
}

export default Test

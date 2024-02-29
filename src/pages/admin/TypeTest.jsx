import { QUESTION_TYPES } from '../../utils/constants'
import DescribeImage from './type/DescribeImage'
import TypeWhatYouHear from './type/TypeWhatYouHear'
import SelectRealEnglish from './type/SelectRealEnglish'
import SelectTheMainIdea from './type/SelectTheMainIdea'
import RecordSayingStatement from './type/RecordSayingStatement'
import HighlightTheAnswer from './type/HighlightTheAnswer'

const TypeTest = (props) => {
   switch (props.selectType) {
      case QUESTION_TYPES.SelectRealEnglishWords:
         return <SelectRealEnglish {...props} />

      case QUESTION_TYPES.TypeWhatYouHear:
         return <TypeWhatYouHear {...props} />

      case QUESTION_TYPES.DescribeImage:
         return <DescribeImage {...props} />

      case QUESTION_TYPES.RecordSayingStatement:
         return <RecordSayingStatement {...props} />

      case QUESTION_TYPES.HighlightTheAnswer:
         return <HighlightTheAnswer {...props} />

      case QUESTION_TYPES.SelectMainIdea:
         return <SelectTheMainIdea {...props} />
      default:
         return <div />
   }
}

export default TypeTest

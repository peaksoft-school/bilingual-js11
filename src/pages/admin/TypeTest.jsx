import { QUESTION_TYPES } from '../../utils/constants'
import DescribeImage from './types/DescribeImage'
import TypeWhatYouHear from './types/TypeWhatYouHear'
import SelectRealEnglish from './types/SelectRealEnglish'
import SelectTheMainIdea from './types/SelectTheMainIdea'
import RecordSayingStatement from './types/RecordSayingStatement'
import HighlightTheAnswer from './types/HighlightTheAnswer'

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

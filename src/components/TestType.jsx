import { QUESTION_TYPES } from '../utils/constants'
import DescribeImage from '../pages/admin/types/DescribeImage'
import TypeWhatYouHear from '../pages/admin/types/TypeWhatYouHear'
import SelectTheMainIdea from '../pages/admin/types/SelectTheMainIdea'
import SelectRealEnglish from '../pages/admin/types/SelectRealEnglish'
import SelectTheBestTitle from '../pages/admin/types/SelectTheBestTitle'
import HighlightTheAnswer from '../pages/admin/types/HighlightTheAnswer'
import RecordSayingStatement from '../pages/admin/types/RecordSayingStatement'
import RespondInAtLeastNWords from '../pages/admin/types/RespondInAtLeastNWords'
import ListenAndSelectEnglishWord from '../pages/admin/types/ListenAndSelectEnglishWord'

const TestType = (props) => {
   switch (props.selectType) {
      case QUESTION_TYPES.SELECT_REAL_ENGLISH_WORD:
         return <SelectRealEnglish {...props} />

      case QUESTION_TYPES.LISTEN_AND_SELECT_WORD:
         return <ListenAndSelectEnglishWord {...props} />

      case QUESTION_TYPES.TYPE_WHAT_YOU_HEAR:
         return <TypeWhatYouHear {...props} />

      case QUESTION_TYPES.DESCRIBE_IMAGE:
         return <DescribeImage {...props} />

      case QUESTION_TYPES.RECORD_SAYING:
         return <RecordSayingStatement {...props} />

      case QUESTION_TYPES.RESPOND_IN_AT_LEAST_N_WORDS:
         return <RespondInAtLeastNWords {...props} />

      case QUESTION_TYPES.HIGHLIGHTS_THE_ANSWER:
         return <HighlightTheAnswer {...props} />

      case QUESTION_TYPES.SELECT_MAIN_IDEA:
         return <SelectTheMainIdea {...props} />

      case QUESTION_TYPES.SELECT_THE_BEST_TITLE:
         return <SelectTheBestTitle {...props} />
      default:
         return <div />
   }
}

export default TestType

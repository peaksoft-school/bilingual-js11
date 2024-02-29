import { QUESTION_TYPES } from '../../utils/constants'
import RespondInAtLeastNWords from './type/RespondInAtLeastNWords'
import DescribeImage from './type/DescribeImage'
import TypeWhatYouHear from './type/TypeWhatYouHear'
import SelectRealEnglish from './type/SelectRealEnglish'
import RecordSayingStatement from './type/RecordSayingStatement'
import HighlightTheAnswer from './type/HighlightTheAnswer'

const TypeTest = (props) => {
   const { duration, setDuration, selectType, title, setTitle, setSelectType } =
      props

   const commonProps = {
      duration,
      setDuration,
      selectType,
      title,
      setTitle,
      setSelectType,
   }

   switch (selectType) {
      case QUESTION_TYPES.SELECT_REAL_ENGLISH_WORDS:
         return <SelectRealEnglish {...commonProps} />

      case QUESTION_TYPES.TYPE_WHAT_YOU_HEAR:
         return <TypeWhatYouHear {...commonProps} />

      case QUESTION_TYPES.RESPOND_IN_AT_LEAST_N_WORDS:
         return <RespondInAtLeastNWords {...commonProps} />

      case QUESTION_TYPES.DESCRIBE_IMAGE:
         return <DescribeImage {...commonProps} />

      case QUESTION_TYPES.RECORD_SAYING_STATEMENT:
         return <RecordSayingStatement {...commonProps} />

      case QUESTION_TYPES.HIGHLIGHT_THE_ANSWER:
         return <HighlightTheAnswer {...commonProps} />
      default:
         return <div />
   }
}

export default TypeTest

import { QUESTION_TYPES } from '../../utils/constants'
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
      case QUESTION_TYPES.SelectRealEnglishWords:
         return <SelectRealEnglish {...commonProps} />

      case QUESTION_TYPES.TypeWhatYouHear:
         return <TypeWhatYouHear {...commonProps} />

      case QUESTION_TYPES.DescribeImage:
         return <DescribeImage {...commonProps} />

      case QUESTION_TYPES.RecordSayingStatement:
         return <RecordSayingStatement {...commonProps} />

      case QUESTION_TYPES.HighlightTheAnswer:
         return <HighlightTheAnswer {...commonProps} />
      default:
         return <div />
   }
}

export default TypeTest

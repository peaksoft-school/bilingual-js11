import { QUESTION_TYPES } from '../../utils/constants'
import SelectRealEnglish from './type/SelectRealEnglish'
import DescribeImage from './type/DescribeImage'
import RecordSayingStatement from './type/RecordSayingStatement'
import HighlightTheAnswer from './type/HighlightTheAnswer'
import SelectTheBestTitle from './type/SelectTheBestTitle'

const TypeTest = ({
   duration,
   setDuration,
   selectType,
   title,
   setTitle,
   setSelectType,
}) => {
   switch (selectType) {
      case QUESTION_TYPES.SelectRealEnglishWords:
         return (
            <SelectRealEnglish
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         )

      case QUESTION_TYPES.DescribeImage:
         return (
            <DescribeImage
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         )

      case QUESTION_TYPES.RecordSayingStatement:
         return (
            <RecordSayingStatement
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         )

      case QUESTION_TYPES.HighlightTheAnswer:
         return (
            <HighlightTheAnswer
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         )

      case QUESTION_TYPES.SeclectTheBestTitle:
         return (
            <SelectTheBestTitle
               duration={duration}
               setDuration={setDuration}
               selectType={selectType}
               title={title}
               setTitle={setTitle}
               setSelectType={setSelectType}
            />
         )

      default:
         return <div />
   }
}

export default TypeTest

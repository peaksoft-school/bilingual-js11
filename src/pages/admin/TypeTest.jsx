import { QUESTION_TYPES } from '../../utils/constants'
import ListenAndSelectEnglishWord from './type/ListenAndSelectEnglishWord'
import SelectRealEnglish from './type/SelectRealEnglish'

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
      case QUESTION_TYPES.ListenAndSelectEnglishWord:
         return (
            <ListenAndSelectEnglishWord
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

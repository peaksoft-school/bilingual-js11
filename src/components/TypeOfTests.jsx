import React from 'react'
import { QUESTION_TYPES } from '../utils/constants'
import SelectRealEnglish from './UI/SelectRealEnglish'

const TypeTest = ({
   duration,
   setDuration,
   selectType,
   setError,
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
               setError={setError}
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

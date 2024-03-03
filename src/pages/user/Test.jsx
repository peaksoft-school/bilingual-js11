import React from 'react'
import ProgressBar from '../../components/UI/ProgressBar'
import SelectRealEnglishWords from './types/SelectRealEnglishWords'

const Test = () => {
   return (
      <>
         <ProgressBar duration="100" minutes="0" seconds="80" />
         <SelectRealEnglishWords />
      </>
   )
}

export default Test

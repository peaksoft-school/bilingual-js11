import { axiosInstance } from '../configs/axiosInstance'
import { QUESTIONS_API } from '../utils/constants'

export const postFileRequest = (formData) => {
   return axiosInstance.post('/api/s3-file', formData)
}

export const postSelectRealEnglishWord = (data) => {
   return axiosInstance.post(QUESTIONS_API.selectRealEnglishWords, data)
}

export const getAllQuestionsRequest = () => {
   return axiosInstance.get('api/questions')
}

export const updateQuestionRequest = (data) => {
   switch (data.questionType) {
      case 'SELECT_THE_MAIN_IDEA':
         return axiosInstance.put(
            `${QUESTIONS_API.selectTheMainIdea}/${data.id}`,
            data
         )

      case 'SELECT_ENGLISH_WORD':
         return axiosInstance.put(
            `${QUESTIONS_API.selectRealEnglishWords}/${data.id}`,
            data
         )

      case 'TYPE_WHAT_YOU_HEAR':
         return axiosInstance.put(
            `${QUESTIONS_API.typeWhatYourHear}/${data.id}`,
            data
         )

      case 'DESCRIBE_IMAGE':
         return axiosInstance.put(
            `${QUESTIONS_API.describeImage}/${data.id}`,
            data
         )

      case 'LISTEN_AND_SELECT_ENGLISH_WORD':
         return axiosInstance.put(
            `${QUESTIONS_API.listenAndSelect}/${data.id}`,
            data
         )

      case 'RECORD_SAYING_STATEMENT':
         return axiosInstance.put(
            `${QUESTIONS_API.recordSayingStatement}/${data.id}`,
            data
         )

      case 'RESPOND_N_WORDS':
         return axiosInstance.put(
            `${QUESTIONS_API.respondInAtLeastNWords}/${data.id}`,
            data
         )

      case 'SELECT_BEST_TITLE':
         return axiosInstance.put(
            `${QUESTIONS_API.selectBestTitle}/${data.id}`,
            data
         )

      case 'HIGHLIGHT_THE_ANSWER':
         return axiosInstance.put(
            `${QUESTIONS_API.highlightTheAnswer}/${data.id}`,
            data
         )

      default:
         return ''
   }
}

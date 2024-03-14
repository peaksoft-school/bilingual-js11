import RespondInAtLeastWord from '../../pages/user/types/RespondInAtLeastWord'
import ListenAndSelectWord from '../../pages/user/types/ListenAndSelectWord'
import SelectRealEnglishWords from '../../pages/user/types/SelectRealEnglishWords'
import HighlightTheAnswer from '../../pages/user/types/HighlightTheAnswer'
import SelectTheMainIdea from '../../pages/user/types/SelectTheMainIdea'
import SelectTheBestTitle from '../../pages/user/types/SelectTheBestTitle'
import DescribeImage from '../../pages/user/types/DescribeImage'
import TypeWhatYouHear from '../../pages/admin/types/TypeWhatYouHear'
import RecordSayingStatement from '../../pages/admin/types/RecordSayingStatement'

export const QUESTION_COMPONENT = {
   SELECT_REAL_ENGLISH_WORD: SelectRealEnglishWords,
   LISTEN_AND_SELECT_WORD: ListenAndSelectWord,
   TYPE_WHAT_YOU_HEAR: TypeWhatYouHear,
   DESCRIBE_IMAGE: DescribeImage,
   RECORD_SAYING: RecordSayingStatement,
   RESPOND_IN_AT_LEAST_N_WORDS: RespondInAtLeastWord,
   HIGHLIGHTS_THE_ANSWER: HighlightTheAnswer,
   SELECT_MAIN_IDEA: SelectTheMainIdea,
   SELECT_THE_BEST_TITLE: SelectTheBestTitle,
}

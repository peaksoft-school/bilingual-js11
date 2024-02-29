import { format } from 'date-fns'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/results/myResultsThunk'
import { COLUMNS } from '../../../utils/constants/columns'
import Table from '../../../components/UI/Table'

const UserResults = () => {
   const { results } = useSelector((state) => state.resultsSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MY_RESULTS_THUNK.getResults())
   }, [dispatch])

   const formatDate = (date) => {
      return format(new Date(date), 'HH:mm dd.MM.yyyy')
   }

   const formattedResults = results.map((result) => ({
      ...result,
      dateOfSubmission: formatDate(result.dateOfSubmission),
   }))

   return <Table columns={COLUMNS} data={formattedResults} />
}

export default UserResults

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/results/resultsThunk'
import { COLUMNS } from '../../../utils/constants/columns'
import Table from '../../../components/UI/Table'

const Results = () => {
   const { results } = useSelector((state) => state.resultsSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MY_RESULTS_THUNK.getResults())
   }, [dispatch])

   return <Table columns={COLUMNS} data={results} />
}

export default Results

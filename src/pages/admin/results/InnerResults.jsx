import { useEffect } from 'react'
import { Box, styled } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { SUBMITTED_RESULTS_THUNKS } from '../../../store/slice/admin/results/submitedResultsThunk'
import { ADMIN_COLUMNS } from '../../../utils/constants/admin-columns'
import { NoDataImage } from '../../../assets/images'
import Table from '../../../components/UI/Table'

const InnerResults = () => {
   const { results, isLoading } = useSelector((state) => state.resultsSlice)
   console.log(results.resultId)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(
         SUBMITTED_RESULTS_THUNKS.getResults({ resultId: results.resultId })
      )
   }, [dispatch])

   if (results.length === 0) {
      return (
         <StyledContainer>
            <img src={NoDataImage} alt="no-data" />
         </StyledContainer>
      )
   }

   return <Table columns={ADMIN_COLUMNS} data={results} isLoading={isLoading} />
}

export default InnerResults

const StyledContainer = styled(Box)(() => ({
   margin: 'auto',
   maxWidth: '33rem',
   maxHeight: '20rem',

   '& > img': {
      width: '100%',
      height: '100%',
   },
}))

import { Box, styled } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/results/resultsThunk'
import { NoDataImage } from '../../../assets/images'
import { COLUMNS } from '../../../utils/constants/columns'
import Table from '../../../components/UI/Table'

const Results = () => {
   const { results, isLoading } = useSelector((state) => state.resultsSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MY_RESULTS_THUNK.getResults())
   }, [dispatch])

   if (results.length === 0) {
      return (
         <StyledContainer>
            <img src={NoDataImage} alt="no-data" />
         </StyledContainer>
      )
   }

   return <Table columns={COLUMNS} data={results} isLoading={isLoading} />
}

export default Results

const StyledContainer = styled(Box)(() => ({
   margin: 'auto',
   maxWidth: '33rem',
   maxHeight: '20rem',

   '& img': {
      width: '100%',
      height: '100%',
   },
}))

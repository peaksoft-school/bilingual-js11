import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box, styled } from '@mui/material'
import Table from '../../../components/UI/Table'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/results/myResultsThunk'
import { COLUMNS, FAKE_DATA } from '../../../utils/constants/columns'

const UserResults = () => {
   // const { results } = useSelector((state) => state.resultsSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MY_RESULTS_THUNK.getResults())
   }, [dispatch])

   return (
      <StyledContainer>
         <Table columns={COLUMNS} data={FAKE_DATA} />
      </StyledContainer>
   )
}

export default UserResults

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   backgroundColor: '#d7e1f8',
   width: '100%',
   height: '100vh',
}))

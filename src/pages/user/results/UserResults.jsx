import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
// import { COLUMNS, FAKE_DATA } from '../../../utils/constants'
// import Table from '../../../components/UI/Table'
import { MY_RESULTS_THUNK } from '../../../store/slice/user/myResultsThunk'

const UserResults = () => {
   const { myResults } = useSelector((state) => state.myResultsSlice)

   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(MY_RESULTS_THUNK.getResults())
   }, [dispatch])

   console.log(myResults)

   return (
      <StyledContainer>
         {/* <Table columns={COLUMNS} data={FAKE_DATA} /> */}
         <Box>
            {myResults.map(({ id, testName, dateOfSubmission }) => (
               <div key={id}>
                  <h1>{testName}</h1>
                  <p>{dateOfSubmission}</p>
               </div>
            ))}
         </Box>
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

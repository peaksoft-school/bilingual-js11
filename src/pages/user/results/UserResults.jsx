import { Box, styled } from '@mui/material'
import { COLUMNS, FAKE_DATA } from '../../../utils/constants'
import Table from '../../../components/UI/Table'

const UserResults = () => (
   <StyledContainer>
      <Table columns={COLUMNS} data={FAKE_DATA} />
   </StyledContainer>
)

export default UserResults

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   backgroundColor: '#d7e1f8',
   width: '100%',
   height: '100vh',
}))

import { Box, styled } from '@mui/material'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import TestList from '../../../components/admin/tests/TestList'

const Tests = () => (
   <StyledContainer>
      <TestContainer>
         <Button className="button">+ ADD NEW TEST</Button>
         <TestList />
      </TestContainer>
   </StyledContainer>
)

export default Tests

const StyledContainer = styled(Box)(() => ({
   '& .button': {
      marginLeft: 'auto',
      width: '12rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
   },
}))

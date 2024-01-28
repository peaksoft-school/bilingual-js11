import { styled } from '@mui/material'
import FormContainer from '../../../components/UI/TestContainer'
import Header from '../../../layout/Header'
import Button from '../../../components/UI/buttons/Button'
import TestList from '../../../components/admin/tests/TestList'

const AdminTest = () => {
   return (
      <StyledContainer>
         <Header />
         <FormContainer>
            <Button className="button">+ add new test</Button>
            <TestList />
         </FormContainer>
      </StyledContainer>
   )
}

export default AdminTest

const StyledContainer = styled('div')(() => ({
   backgroundColor: '#D7E1F8',
   height: '100vh',

   '& .button': {
      marginLeft: 'auto',
      width: '12rem',
      fontFamily: 'Poppins',
      fontWeight: '500',
   },
}))

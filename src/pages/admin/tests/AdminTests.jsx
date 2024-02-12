import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import TestList from '../../../components/admin/tests/TestList'
import { PlusIcon } from '../../../assets/icons'

const AdminTests = () => (
   <StyledContainer>
      <TestContainer>
         <Button className="button">
            <Link to="/admin/tests/create-test" className="text">
               <PlusIcon className="plus-icon" /> ADD NEW TEST
            </Link>
         </Button>

         <TestList />
      </TestContainer>
   </StyledContainer>
)

export default AdminTests

const StyledContainer = styled(Box)(() => ({
   '& > div > .MuiButton-root': {
      margin: 'auto',
      marginLeft: '44.3rem',
      width: '12rem',

      '& > .text': {
         display: 'flex',
         alignItems: 'center',
         textDecoration: 'none',
         color: 'inherit',
         fontFamily: 'Poppins',
         fontSize: '14px',
         fontWeight: '500',

         '& > .plus-icon': {
            width: '0.9rem',
            height: '0.9rem',
            margin: '0.4rem',
         },
      },
   },
}))

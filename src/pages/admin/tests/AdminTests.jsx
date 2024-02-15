import { Box, styled } from '@mui/material'
import { Link } from 'react-router-dom'
import TestContainer from '../../../components/UI/TestContainer'
import Button from '../../../components/UI/buttons/Button'
import TestList from '../../../components/admin/tests/TestList'
import { PlusIcon } from '../../../assets/icons'

const AdminTests = () => (
   <StyledContainer>
      <TestContainer>
         <Button className="button" icon={<PlusIcon className="plus-icon" />}>
            <Link to="/admin/tests/create-test" className="text">
               ADD NEW TEST
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

      '& .plus-icon': {
         width: '0.9rem',
         height: '0.9rem',
         margin: '0.6rem',
         marginTop: '0.4rem',
      },

      '& > .text': {
         display: 'flex',
         alignItems: 'center',
         textDecoration: 'none',
         color: 'inherit',
         fontFamily: 'Poppins',
         fontSize: '14px',
         fontWeight: '500',
      },
   },
}))

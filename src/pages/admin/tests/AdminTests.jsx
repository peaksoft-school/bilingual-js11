import { useNavigate } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import { PlusIcon } from '../../../assets/icons'
import { ROUTES } from '../../../routes/routes'
import Button from '../../../components/UI/buttons/Button'
import TestList from '../../../components/admin/tests/TestList'
import TestContainer from '../../../components/UI/TestContainer'

const AdminTests = () => {
   const navigate = useNavigate()

   const handleNavigate = () =>
      navigate(`${ROUTES.ADMIN.index}/${ROUTES.ADMIN.createTest}`)

   return (
      <StyledContainer>
         <TestContainer>
            <Button
               className="button"
               icon={<PlusIcon className="plus-icon" />}
               onClick={handleNavigate}
            >
               ADD NEW TEST
            </Button>
            <TestList />
         </TestContainer>
      </StyledContainer>
   )
}

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
   },
}))

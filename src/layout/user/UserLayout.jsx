import { Box, styled } from '@mui/material'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import Header from '../Header'
import { ROUTES } from '../../routes/routes'

const UserLayout = () => {
   const location = useLocation()

   const { testId } = useParams()

   const hideHeaderOnPaths = [
      `${ROUTES.USER.INDEX}/${ROUTES.USER.TESTS}/${testId}/${ROUTES.USER.PRACTICE_TEST}`,
   ]

   const shouldHideHeader = hideHeaderOnPaths.includes(location.pathname)

   return (
      <>
         {!shouldHideHeader && <Header />}

         <StyledContainer>
            <Box className="content">
               <Outlet />
            </Box>
         </StyledContainer>
      </>
   )
}

export default UserLayout

const StyledContainer = styled(Box)(() => ({
   position: 'fixed',
   top: 0,
   left: 0,
   width: '100%',
   height: '100%',
   zIndex: -1,
   background: '#D7E1F8',

   '& > .content': {
      paddingTop: '5rem',
      paddingBottom: '5rem',
      overflowY: 'auto',
      background: '#D7E1F8',
      height: '100vh',
   },
}))

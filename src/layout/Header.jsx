import { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AppBar, Box, Typography, styled } from '@mui/material'
import { AUTH_ACTIONS } from '../store/slice/auth/authSlice'
import { LogoImage } from '../assets/images'
import { ROUTES } from '../routes/routes'
import Button from '../components/UI/buttons/Button'
import Modal from '../components/UI/modals/Modal'

const Header = () => {
   const { role } = useSelector((state) => state.auth)

   const [isVisibleModal, setIsVisibleModal] = useState(false)

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const handleModal = () => setIsVisibleModal((prev) => !prev)

   const handlelogOut = () => dispatch(AUTH_ACTIONS.logOut({ navigate }))

   return (
      <StyledContainer>
         <Link to="/" className="logo">
            <img src={LogoImage} alt="logo" className="logo" />
         </Link>

         <Box className="actions">
            {role === 'ADMIN' ? (
               <>
                  <NavLink
                     className="navigation"
                     to={`${ROUTES.ADMIN.index}/tests`}
                  >
                     TESTS
                  </NavLink>

                  <NavLink
                     className="navigation"
                     to={`${ROUTES.ADMIN.index}/${ROUTES.ADMIN.results}`}
                  >
                     SUBMITTED RESULTS
                  </NavLink>
               </>
            ) : (
               <>
                  <NavLink
                     className="navigation"
                     to={`${ROUTES.USER.index}/tests`}
                  >
                     TESTS
                  </NavLink>

                  <NavLink
                     className="navigation"
                     to={`${ROUTES.USER.index}/${ROUTES.USER.results}`}
                  >
                     MY RESULTS
                  </NavLink>
               </>
            )}

            <Button
               variant="secondary"
               onClick={handleModal}
               className="log-out"
            >
               LOG OUT
            </Button>

            <Modal isVisible={isVisibleModal} handleIsVisible={handleModal}>
               <Box className="log-out">
                  <Typography>Are you sure you want to log out?</Typography>

                  <Box className="buttons">
                     <Button variant="secondary" onClick={handleModal}>
                        CANCEL
                     </Button>

                     <Button onClick={handlelogOut}>YES</Button>
                  </Box>
               </Box>
            </Modal>
         </Box>
      </StyledContainer>
   )
}

export default Header

const StyledContainer = styled(AppBar)(({ theme }) => ({
   height: '5.875rem',
   width: '100%',
   background: theme.palette.primary.white,
   boxShadow: 'none',
   display: 'flex',
   justifyContent: 'space-between',
   flexDirection: 'row',
   alignItems: 'center',
   padding: '0 7.5rem',
   color: '#4C4859',

   '&  .logo': {
      width: '10.875rem',
      height: '2.625rem',
      fontFamily: 'Gilroy',
   },

   '& > .actions': {
      display: 'flex',
      alignItems: 'center',
      gap: '3.75rem',

      '& .MuiTypography-root': {
         fontSize: '0.9375rem',
         fontWeight: '700',
         cursor: 'pointer',
      },

      '& .navigation ': {
         textDecoration: 'none',
         color: '#4c4859',
         fontFamily: 'Gilroy',

         '&.active': { color: '#3A10E5' },
      },

      '& > .log-out': {
         color: '#4C4C4C',
         fontWeight: '700',
         border: '0.125rem solid #4C4859',

         '&:hover': {
            borderColor: theme.palette.primary.main,
            background: theme.palette.primary.main,
            color: theme.palette.primary.white,
         },
      },
   },
}))

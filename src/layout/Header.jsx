import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AppBar, Box, Typography, styled } from '@mui/material'
import Button from '../components/UI/buttons/Button'
import { LogoImage } from '../assets/images'
import { AUTH_ACTIONS } from '../store/slice/auth/authSlice'
import Modal from '../components/UI/modals/Modal'

const Header = () => {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const { role } = useSelector((state) => state.auth)

   const [isVisibleModal, setIsVisibleModal] = useState(false)

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
                  <NavLink className="navigation" to="/admin/tests">
                     <Typography>TESTS</Typography>
                  </NavLink>

                  <NavLink className="navigation" to="/admin/results">
                     <Typography> SUBMITTED RESULTS</Typography>
                  </NavLink>
               </>
            ) : (
               <>
                  <NavLink className="navigation" to="/user/tests">
                     <Typography>TESTS</Typography>
                  </NavLink>

                  <NavLink className="navigation" to="/user/results">
                     <Typography>MY RESULTS</Typography>
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
               <Typography className="text">
                  Are you sure you want to log out?
               </Typography>

               <Box className="buttons">
                  <Button
                     variant="secondary"
                     onClick={handleModal}
                     className="button"
                  >
                     CANCEL
                  </Button>

                  <Button onClick={handlelogOut}>YES</Button>
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

      '& .navigation': {
         textDecoration: 'none',
         color: '#4c4859',

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

import { Box, InputAdornment, Typography, styled } from '@mui/material'
import { signInWithPopup } from 'firebase/auth'
import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {
   ExitIcon,
   EyeIcon,
   EyeOffIcon,
   GoogleIcon,
   LogoIcon,
   WarningIcon,
} from '../../assets/icons'
import Checkbox from '../../components/UI/Checkbox'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/buttons/Button'
import { ROUTES } from '../../routes/routes'
import { authWithGoogle, signIn } from '../../store/silce/auth/authThunk'
import { auth, provider } from '../../configs/withGoogle'
import { showErrorSignIn } from '../../utils/helpers'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validation'

const SignIn = () => {
   const dispatch = useDispatch()

   const navigate = useNavigate()

   const [showPassword, setShowPassword] = useState(false)

   const [isPasswordFieldActive, setIsPasswordFieldActive] = useState(false)

   const handleShowPassword = () => setShowPassword((prev) => !prev)

   const handlePasswordFieldFocus = () => setIsPasswordFieldActive(true)

   const handleWithGoogle = async () => {
      await signInWithPopup(auth, provider).then((data) => {
         dispatch(
            authWithGoogle({ tokenId: data.user.accessToken, navigate })
         ).catch((e) => {
            return e
         })
      })
   }

   const onSubmit = (values, { resetForm }) => {
      dispatch(signIn({ userData: values, resetForm, navigate }))
   }

   const { values, errors, touched, handleChange, handleSubmit, handleBlur } =
      useFormik({
         initialValues: {
            email: '',
            password: '',
            rememberMe: false,
         },

         validateOnChange: false,
         validationSchema: VALIDATION_SIGN_IN,
         onSubmit,
      })

   return (
      <StyledContainer>
         <form className="form" onSubmit={handleSubmit}>
            <Box className="exit">
               <Link to="/">
                  <ExitIcon />
               </Link>
            </Box>

            <Box className="content">
               <Box className="title-box">
                  <LogoIcon />

                  <Typography className="title" variant="h2">
                     Sign in
                  </Typography>
               </Box>

               <Input
                  type="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && errors.email}
               />

               <Input
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onFocus={handlePasswordFieldFocus}
                  onBlur={handleBlur}
                  type={showPassword ? 'text' : 'password'}
                  error={touched.password && errors.password}
                  InputProps={{
                     endAdornment: (
                        <InputAdornment className="adornment" position="end">
                           {isPasswordFieldActive && (
                              <Box onClick={handleShowPassword}>
                                 {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                              </Box>
                           )}
                        </InputAdornment>
                     ),
                  }}
               />

               <Box>
                  <Checkbox
                     name="rememberMe"
                     checked={values.rememberMe}
                     onChange={handleChange}
                  />

                  <Typography variant="span" className="text-checkbox">
                     To remember me
                  </Typography>
               </Box>

               {showErrorSignIn(errors) ? (
                  <Typography className="validate">
                     {showErrorSignIn(errors)} <WarningIcon />
                  </Typography>
               ) : (
                  <Typography> </Typography>
               )}

               <Button>Sign in</Button>

               <Button
                  type="button"
                  icon={<GoogleIcon />}
                  className="google-button"
                  onClick={handleWithGoogle}
               >
                  Sign up with google
               </Button>

               <Box className="text-account">
                  <Typography>Dont have an account?</Typography>

                  <NavLink to={ROUTES.SIGN_UP} className="navigation">
                     <Typography className="register">Register</Typography>
                  </NavLink>
               </Box>
            </Box>
         </form>
      </StyledContainer>
   )
}

export default SignIn

const StyledContainer = styled(Box)(({ theme }) => ({
   background: 'linear-gradient(180deg, #833fac, #3b10e5d8)',
   display: 'flex',
   justifyContent: 'center',
   width: '100%',
   height: '100vh',
   fontFamily: 'Poppins',

   '& > .form': {
      backgroundColor: theme.palette.primary.white,
      boxShadow: '0px 5px 10px 2px rgba(34, 60, 80, 0.2)',
      maxWidth: '38.5rem',
      maxHeight: '40rem',
      margin: '2.5rem',
      borderRadius: '0.625rem',
      padding: '1rem',
      overflow: 'auto',

      '& > .exit': {
         display: 'flex',
         justifyContent: 'flex-end',

         '& > svg': {
            cursor: 'pointer',
         },
      },

      '& > .content': {
         display: 'flex',
         flexDirection: 'column',
         gap: '1.6rem',
         margin: 'auto',
         padding: '1rem 3rem',

         '@media screen and (max-width: 1300px)': {
            gap: '1rem',
         },

         '& > .title-box': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.75rem',

            '& > .title': {
               color: '#4C4859',
               fontSize: '1.5rem',
               fontWeight: '500',
               marginBottom: '2rem',
            },
         },

         '& .MuiOutlinedInput-root': {
            width: '31.25rem',
            height: '3.25rem',

            '& > .adornment': {
               cursor: 'pointer',
               paddingTop: '0.3rem',
            },
         },

         '& .MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline':
            {
               borderColor: 'red',
            },

         '& > .validate': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: 'Poppins',
            fontWeight: '400',
            color: 'red',
            margin: '-0.699rem 0rem',

            '@media screen and (max-width: 1400px)': {
               fontSize: '0.8rem',
               margin: '-0.2rem 0 -0.9rem 0',
            },

            '@media screen and (max-width: 1300px)': {
               fontSize: '0.7rem',
               margin: '-0.3rem 0 -0.9rem 0',
            },
         },

         '& .text-checkbox': {
            color: '#757575',
            fontFamily: 'Poppins',
            fontSize: '0.875rem',
            fontWeight: '400',
         },

         '& .google-button': {
            '&.MuiButton-root': {
               backgroundColor: theme.palette.primary.white,
               color: '#757575',
               textAlign: 'center',
               fontSize: '0.875rem',
               fontWeight: '500',
               padding: '0.875rem 1.25rem',
               gap: '0.5rem',
               border: '1px solid #BDBDBD',
               boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.20)',
               width: '13.85rem',
               margin: 'auto',

               '&:hover': {
                  backgroundColor: '#EFEDED',
               },

               '&:active': {
                  backgroundColor: theme.palette.primary.white,
               },
            },
         },

         '& .text-account': {
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            color: '#757575',
            fontSize: '0.875rem',
            fontWeight: '500',
            textTransform: 'uppercase',

            '& > .navigation': {
               textDecoration: 'none',

               '&:active': {
                  color: '#3A10E5',
               },
            },

            '& > .register': {
               cursor: 'pointer',
               color: theme.palette.primary.main,
               fontWeight: '500',
            },
         },
      },
   },

   '& > .form::-webkit-scrollbar': {
      width: '0.3rem',
      height: '0.3rem',
   },

   '& > .form::-webkit-scrollbar-thumb': {
      borderRadius: '1rem',
      backgroundColor: '   #3b10e5d8',
   },
}))

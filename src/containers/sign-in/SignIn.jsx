import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, Typography, styled } from '@mui/material'
import {
   ExitIcon,
   GoogleIcon,
   LogoIcon,
   EyeIcon,
   EyeOffIcon,
   WarningIcon,
} from '../../assets/icons'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validate'
import { showErrorSignIn } from '../../utils/helpers'
import { PhoneImage, WebImage } from '../../assets/images'
import Button from '../../components/UI/buttons/Button'
import Checkbox from '../../components/UI/Checkbox'
import Input from '../../components/UI/Input'

const SignIn = () => {
   const [showPassword, setShowPassword] = useState(false)

   const [isPasswordFieldActive, setIsPasswordFieldActive] = useState(false)

   const handleShowPassword = () => setShowPassword((prev) => !prev)

   const handlePasswordFieldFocus = () =>
      setIsPasswordFieldActive((prev) => !prev)

   const onSubmit = (_, { resetForm }) => resetForm()

   const {
      values,
      errors,
      touched,
      isValid,
      handleChange,
      handleSubmit,
      handleBlur,
   } = useFormik({
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
               <ExitIcon />
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
                  error={errors.email && touched.email}
               />

               <Input
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  onFocus={handlePasswordFieldFocus}
                  error={errors.password && touched.password}
               />

               {isPasswordFieldActive && (
                  <Box className="eye" onClick={handleShowPassword}>
                     {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Box>
               )}

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

               <Button disabled={!isValid}>Sign in</Button>

               <Button
                  type="button"
                  icon={<GoogleIcon />}
                  className="google-button"
               >
                  Sign up with google
               </Button>

               <Box className="text-account">
                  <Typography>Dont have an account?</Typography>

                  <Typography className="register">Register</Typography>
               </Box>
            </Box>
         </form>

         <Box className="images">
            <img src={WebImage} alt="web" className="web" />

            <img src={PhoneImage} alt="phone" className="phone" />
         </Box>
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
      maxHeight: '38.7rem',
      margin: '2.5rem',
      borderRadius: '0.625rem',
      padding: '1rem',

      '& > .exit': {
         display: 'flex',
         justifyContent: 'flex-end',

         '& > svg': {
            cursor: 'pointer',
         },
      },

      '@media (max-width:1200px)': {
         overflow: 'scroll',
         borderRadius: '1rem',
         maxWidth: '40rem',
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

               '@media screen and (max-width: 1400px)': {
                  marginBottom: '1rem',
                  fontSize: '1.3rem',
               },

               '@media screen and (max-width: 1300px)': {
                  marginBottom: '0rem',
               },
            },
         },

         '& .MuiOutlinedInput-root': {
            width: '31.25rem',
            height: '3.25rem',
         },

         '& .MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline':
            {
               borderColor: 'red',
            },

         '& > .eye': {
            position: 'absolute',
            display: 'flex',
            margin: '14.5rem 0 0 29rem',
            cursor: 'pointer',

            '@media screen and (max-width: 1400px)': {
               marginTop: '13.3rem',
            },

            '@media screen and (max-width: 1300px)': {
               margin: '11rem 0 0 28rem',
            },
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

            '& .register': {
               cursor: 'pointer',
               color: '#3A10E5',
               fontWeight: '500',
            },
         },
      },
   },

   '& > .images': {
      '& > img': {
         position: 'absolute',
         top: '8rem',
         width: '30rem',
         height: 'auto',

         '@media (max-width:1400px)': {
            width: '25rem',
         },

         '@media (max-width:1300px)': {
            width: '20rem',
         },

         '@media (max-width:1200px)': {
            display: 'none',
         },
      },

      '& > .phone': {
         left: '0rem',
      },

      '& > .web': {
         right: '0rem',
      },
   },
}))

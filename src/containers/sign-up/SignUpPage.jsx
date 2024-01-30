import { useState } from 'react'
import { useFormik } from 'formik'
import { Box, FormControl, Typography, styled } from '@mui/material'
import {
   ExitIcon,
   EyeIcon,
   EyeOffIcon,
   GoogleIcon,
   LogoIcon,
   WarningIcon,
} from '../../assets/icons'
import Button from '../../components/UI/buttons/Button'
import Input from '../../components/UI/Input'
import { SIGNUPINPUT } from '../../utils/constants'
import { VALIDATION_SIGN_UP } from '../../utils/helpers/validate'

const SignUpPage = () => {
   const [showPassword, setShowPassword] = useState(false)
   const [focusedInput, setFocusedInput] = useState(null)

   const handlePasswordShow = () => setShowPassword((prev) => !prev)

   const handleInputFocus = (name) => setFocusedInput(name)

   const { values, errors, handleChange, handleSubmit } = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         email: '',
         password: '',
         rememberMe: false,
      },

      validationSchema: VALIDATION_SIGN_UP,

      onSubmit: handleSubmit,
   })

   return (
      <StyledContainer>
         <StyledFormControl onSubmit={handleSubmit}>
            <Box className="exit">
               <ExitIcon />
            </Box>

            <StyledLogoContainer>
               <LogoIcon />
               <Typography className="title">Create an Account</Typography>
            </StyledLogoContainer>

            <StyledContent>
               {SIGNUPINPUT.map(({ name, label, type }) => (
                  <Input
                     key={name}
                     label={label}
                     name={name}
                     value={values[name]}
                     onChange={handleChange}
                     type={passwordShow ? 'text' : type}
                     error={Boolean(errors[name])}
                     onFocus={() => handleInputFocus(name)}
                  />
               ))}

               {focusedInput === 'password' && (
                  <Typography
                     variant="span"
                     className="eye"
                     onClick={handlePasswordShow}
                  >
                     {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Typography>
               )}

               {focusedInput && Boolean(errors[focusedInput]) && (
                  <Box color="error" className="validate">
                     Incorrect {errors[focusedInput]}
                     <WarningIcon />
                  </Box>
               )}

               <Button>Sing in</Button>

               <Button icon={<GoogleIcon />} className="btn-google">
                  Sing up with google
               </Button>

               <Box className="text-account">
                  <Typography>Already have an account?</Typography>

                  <Typography className="log-in">Log in</Typography>
               </Box>
            </StyledContent>
         </StyledFormControl>
      </StyledContainer>
   )
}

export default SignUpPage

const StyledContainer = styled(Box)(() => ({
   background: 'linear-gradient(91deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   height: '100vh',
}))

const StyledFormControl = styled(FormControl)(({ theme }) => ({
   backgroundColor: theme.palette.primary.white,
   width: '41.25rem',
   height: 'auto',
   borderRadius: '0.625rem',
   padding: '1.25rem',

   '& > .exit': {
      display: 'flex',
      justifyContent: 'flex-end',
   },

   '& .btn-google': {
      '&.MuiButton-root': {
         backgroundColor: theme.palette.primary.white,
         color: '#757575',
         textAlign: 'center',
         fontFamily: 'Poppins',
         fontSize: '0.875rem',
         fontWeight: '500',
         letterSpacing: '0.00875rem',
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
      color: '#757575',
      fontFamily: 'Poppins',
      fontSize: '0.875rem',
      fontWeight: '500',
      letterSpacing: '0.0175rem',
      textTransform: 'uppercase',
      cursor: 'pointer',
      marginBottom: '2rem',

      '& .log-in': {
         color: '#3A10E5',
      },
   },
}))

const StyledLogoContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '0.75rem',

   '& > .title': {
      color: '#4C4859',
      fontFamily: 'Poppins',
      fontSize: '1.5rem',
      fontWeight: '400',
      marginBottom: '2rem',
   },
}))

const StyledContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '1.5rem',
   width: '31.25rem',
   margin: 'auto',

   '& > .eye': {
      position: 'absolute',
      display: 'flex',
      marginTop: '15.4rem',
      marginLeft: '29rem',
      cursor: 'pointer',
   },

   '& > .validate': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '0.5rem',
      fontFamily: 'Poppins',
      fontSize: '0.875rem',
      fontWeight: '400',
      color: 'red',
   },
}))

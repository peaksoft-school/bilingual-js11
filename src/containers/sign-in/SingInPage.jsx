import { useFormik } from 'formik'
import { Box, FormControl, Typography, styled } from '@mui/material'
import { ExitIcon, GoogleIcon, LogoIcon } from '../../assets/icons'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validate'
import Button from '../../components/UI/buttons/Button'
import Checkbox from '../../components/UI/Checkbox'
import Input from '../../components/UI/Input'

const SignInPage = () => {
   const { values, errors, handleChange, handleSubmit } = useFormik({
      initialValues: {
         email: '',
         password: '',
         rememberMe: false,
      },

      validationSchema: VALIDATION_SIGN_IN,

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
               <Typography className="title">Sign in</Typography>
            </StyledLogoContainer>

            <StyledContent>
               <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
               />
               <Input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
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

               <Button>Sing in</Button>

               <Button icon={<GoogleIcon />} className="btn-google">
                  Sing up with google
               </Button>

               <Box className="text-account">
                  <Typography>Dont have an account?</Typography>

                  <Typography className="register">Register</Typography>
               </Box>
            </StyledContent>
         </StyledFormControl>
      </StyledContainer>
   )
}

export default SignInPage

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
   width: '38.5rem',
   height: '38.75rem',
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
      marginTop: '-1rem',
      marginBottom: '4rem',
      color: '#757575',
      fontFamily: 'Poppins',
      fontSize: '0.875rem',
      fontWeight: '500',
      letterSpacing: '0.0175rem',
      textTransform: 'uppercase',
      cursor: 'pointer',

      '& .register': {
         color: '#3A10E5',
         fontWeight: '600',
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
      fontWeight: '500',
      marginBottom: '2rem',
   },
}))

const StyledContent = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
   width: '31.25rem',
   margin: 'auto',

   '& .text-checkbox': {
      color: '#757575',
      fontFeatureSettings: 'clig off, liga off',
      fontFamily: 'Poppins',
      fontSize: '0.875rem',
      fontWeight: '400',
   },
}))

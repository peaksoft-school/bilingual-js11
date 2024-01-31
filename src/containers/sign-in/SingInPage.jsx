import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import { Box, Typography, styled } from '@mui/material'
import { ExitIcon, GoogleIcon, LogoIcon, WarningIcon } from '../../assets/icons'
import { SHOW_ERRORS_SIGN_IN } from '../../utils/helpers'
import { VALIDATION_SIGN_IN } from '../../utils/helpers/validate'
import {
   FifthOpenBookImage,
   FirstClosedBookImage,
   FirstOpenBookImage,
   FourthOpenBookImage,
   SecondClosedBookImage,
   SecondOpenBookImage,
   ThirdClosedBookImage,
   ThirdOpenBookImage,
   ThreeBooksImage,
   ThreeClosedBooksImage,
} from '../../assets/images'
import Input from '../../components/UI/Input'
import Checkbox from '../../components/UI/Checkbox'
import Button from '../../components/UI/buttons/Button'

const PULSE_ANIMATION = {
   animate: {
      initial: { opacity: 0 },
      scale: [0.9, 0.95, 0.9],

      transition: {
         duration: 5,
         repeat: Infinity,
      },
   },
}

const SignInPage = () => {
   const onSubmit = ({ resetForm }) => resetForm()

   const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik(
      {
         initialValues: {
            email: '',
            password: '',
            rememberMe: false,
         },

         validateOnChange: false,

         validationSchema: VALIDATION_SIGN_IN,

         onSubmit,
      }
   )

   return (
      <StyledContainer>
         <StyledForm onSubmit={handleSubmit}>
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
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.email}
               />

               <Input
                  type="password"
                  placeholder="Password"
                  className="input"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errors={errors.password}
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

               {SHOW_ERRORS_SIGN_IN(errors) && (
                  <Typography className="validate">
                     {SHOW_ERRORS_SIGN_IN(errors)} <WarningIcon />
                  </Typography>
               )}

               <Button>Sing in</Button>

               <Button icon={<GoogleIcon />} className="btn-google">
                  Sing up with google
               </Button>

               <Box className="text-account">
                  <Typography>Dont have an account?</Typography>

                  <Typography className="register">Register</Typography>
               </Box>
            </StyledContent>
         </StyledForm>

         <StyledMotionImages
            variants={PULSE_ANIMATION}
            initial="offscreen"
            whileInView="onscreen"
            animate="animate"
            loading="lazy"
         >
            <StyledImage
               className="three-books"
               src={ThreeBooksImage}
               alt="book"
            />

            <StyledImage
               className="three-closed-books"
               src={ThreeClosedBooksImage}
               alt="book"
            />

            <StyledImage
               className="first-open-book"
               src={FirstOpenBookImage}
               alt="book"
            />

            <StyledImage
               className="second-open-book"
               src={SecondOpenBookImage}
               alt="book"
            />

            <StyledImage
               className="third-open-book"
               src={ThirdOpenBookImage}
               alt="book"
            />

            <StyledImage
               className="fourth-open-book"
               src={FourthOpenBookImage}
               alt="book"
            />

            <StyledImage
               className="fifth-open-book"
               src={FifthOpenBookImage}
               alt="book"
            />

            <StyledImage
               className="first-closed-book"
               src={FirstClosedBookImage}
               alt="book"
            />

            <StyledImage
               className="second-closed-book"
               src={SecondClosedBookImage}
               alt="book"
            />

            <StyledImage
               className="third-closed-book"
               src={ThirdClosedBookImage}
               alt="book"
            />
         </StyledMotionImages>
      </StyledContainer>
   )
}

export default SignInPage

const StyledContainer = styled(Box)(() => ({
   background: 'linear-gradient(91deg, #6B0FA9 0.74%, #520FB6 88.41%)',
   display: 'flex',
   justifyContent: 'center',
   width: '100%',
   height: '100vh',
   fontFamily: 'Poppins',
}))

const StyledForm = styled('form')(({ theme }) => ({
   backgroundColor: theme.palette.primary.white,
   maxWidth: '45.375rem',
   maxHeight: '43.25rem',
   margin: '2.5rem',
   borderRadius: '0.625rem',
   padding: '0.5rem',

   '& > .exit': {
      display: 'flex',
      justifyContent: 'flex-end',
   },
}))

const StyledLogoContainer = styled(Box)(() => ({
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
         marginBottom: '0.5rem',
         fontSize: '1rem',
      },
   },
}))

const StyledContent = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2rem',
   margin: 'auto',
   padding: '0 5rem 1.89rem 5rem',

   '& .input': {
      width: '31.25rem',
      height: '3.25rem',

      '@media screen and (max-width: 1400px)': {
         height: '3rem',
      },

      '@media screen and (max-width: 1300px)': {
         width: '30rem',
         height: '2.5rem',
      },
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
      margin: '-1rem 0rem',

      '@media screen and (max-width: 1300px)': {
         fontSize: '0.7rem',
         margin: '-0.5rem 0 -1.5rem 0',
      },
   },

   '& .text-checkbox': {
      color: '#757575',
      fontFeatureSettings: 'clig off, liga off',
      fontFamily: 'Poppins',
      fontSize: '0.875rem',
      fontWeight: '400',
   },

   '& .btn-google': {
      '&.MuiButton-root': {
         backgroundColor: theme.palette.primary.white,
         color: '#757575',
         textAlign: 'center',
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

         '@media screen and (max-width: 1400px)': {
            marginTop: '-1rem',
         },

         '@media screen and (max-width: 1300px)': {
            height: '2.5rem',
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
      letterSpacing: '0.0175rem',
      textTransform: 'uppercase',
      cursor: 'pointer',

      '& .register': {
         color: '#3A10E5',
         fontWeight: '500',
      },

      '@media screen and (max-width: 1400px)': {
         marginTop: '-1rem',
      },
   },
}))

const StyledMotionImages = styled(motion.div)(({ PULSE_ANIMATION }) => ({
   '& path': {
      animation: { PULSE_ANIMATION },
   },

   '& .three-books': {
      position: 'absolute',
      top: '19rem',
      left: '13rem',
   },

   '& .three-closed-books': {
      position: 'absolute',
      top: '37rem',
      right: '63rem',
   },

   '& .first-open-book': {
      position: 'absolute',
      top: '30rem',
      left: '5rem',
   },

   '& .second-open-book': {
      position: 'absolute',
      top: '27rem',
      right: '55rem',
   },

   '& .third-open-book': {
      position: 'absolute',
      top: '9rem',
      right: '54rem',
   },

   '& .fourth-open-book': {
      position: 'absolute',
      top: '2rem',
      right: '65rem',
   },

   '& .fifth-open-book': {
      position: 'absolute',
      top: '1rem',
      left: '12rem',
   },

   '& .first-closed-book': {
      position: 'absolute',
      top: '37rem',
      left: '12rem',
   },

   '& .second-closed-book': {
      position: 'absolute',
      top: '19rem',
      right: '65rem',
   },

   '& .third-closed-book': {
      position: 'absolute',
      top: '10rem',
      left: '2rem',
   },
}))

const StyledImage = styled('img')(() => ({
   width: '7rem',
   height: '5rem',
}))

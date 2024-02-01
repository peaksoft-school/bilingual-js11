import { useState } from 'react'
import { useFormik } from 'formik'
import { motion } from 'framer-motion'
import { Box, Typography, styled } from '@mui/material'
import {
   ExitIcon,
   EyeIcon,
   EyeOffIcon,
   GoogleIcon,
   LogoIcon,
   WarningIcon,
} from '../../assets/icons'
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
import { VALIDATION_SIGN_UP } from '../../utils/helpers/validate'
import { showErrors } from '../../utils/helpers'
import { SIGN_UP_INPUTS } from '../../utils/constants'
import Button from '../../components/UI/buttons/Button'
import Input from '../../components/UI/Input'

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

const SignUpPage = () => {
   const [showPassword, setShowPassword] = useState(false)

   const [focusedInput, setFocusedInput] = useState(null)

   const handlePasswordShow = () => setShowPassword((prev) => !prev)

   const handleInputFocus = (name) => setFocusedInput(name)

   const onSubmit = ({ resetForm }) => resetForm()

   const { values, errors, handleChange, handleSubmit, handleBlur } = useFormik(
      {
         initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            rememberMe: false,
         },

         validateOnChange: false,

         validationSchema: VALIDATION_SIGN_UP,

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
               <Typography className="title">Create an Account</Typography>
            </StyledLogoContainer>

            <StyledContent>
               {SIGN_UP_INPUTS.map(({ name, label, type }) => (
                  <Input
                     key={name}
                     label={label}
                     name={name}
                     className="input"
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     type={showPassword ? 'text' : type}
                     error={errors.name}
                     onFocus={() => handleInputFocus(name)}
                  />
               ))}

               {focusedInput === 'password' && (
                  <Box className="eye" onClick={handlePasswordShow}>
                     {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </Box>
               )}

               {showErrors(errors) ? (
                  <Typography className="validate">
                     {showErrors(errors)} <WarningIcon />
                  </Typography>
               ) : (
                  <Typography> </Typography>
               )}

               <Button>Sign up</Button>

               <Button icon={<GoogleIcon />} className="btn-google">
                  Sign up with google
               </Button>

               <Box className="text-account">
                  <Typography>Already have an account?</Typography>

                  <Typography className="log-in">Log in</Typography>
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

export default SignUpPage

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
   maxHeight: '43rem',
   margin: '1.4rem',
   borderRadius: '0.625rem',

   '@media screen and (max-width:1300px)': {
      height: '34rem',
      backgroundColor: theme.palette.primary.white,
   },

   '& > .exit': {
      display: 'flex',
      justifyContent: 'flex-end',
      cursor: 'pointer',
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
      fontWeight: '400',
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
   gap: '1.5rem',
   margin: 'auto',
   padding: '0 5rem 1.89rem 5rem',

   '& .input': {
      width: '31.25rem',
      height: '3.25rem',

      '@media screen and (max-width: 1400px)': {
         height: '2.5rem',
      },

      '@media screen and (max-width: 1300px)': {
         width: '30rem',
         height: '2.5rem',
      },
   },

   '& > .eye': {
      position: 'absolute',
      display: 'flex',
      margin: '15.4rem 0 0 29rem',
      cursor: 'pointer',

      '@media screen and (max-width: 1400px)': {
         marginTop: '14.7rem',
      },

      '@media screen and (max-width: 1300px)': {
         margin: '13.2rem 0 0 28rem',
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

   '& .btn-google': {
      '&.MuiButton-root': {
         backgroundColor: theme.palette.primary.white,
         color: '#757575',
         textAlign: 'center',
         fontSize: '0.875rem',
         fontWeight: '500',
         letterSpacing: '0.00875rem',
         gap: '0.5rem',
         alignItems: 'center',
         border: '1px solid #BDBDBD',
         boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.20)',
         maxWidth: '13.85rem',
         margin: 'auto',

         '&:hover': {
            backgroundColor: '#EFEDED',
         },

         '&:active': {
            backgroundColor: theme.palette.primary.white,
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

      '& .log-in': {
         color: '#3A10E5',
      },

      '@media screen and (max-width: 1400px)': {
         marginTop: '-1rem',
      },
   },
}))

const StyledMotionImages = styled(motion.div)(({ PULSE_ANIMATION }) => ({
   animation: { PULSE_ANIMATION },

   '& .three-books': {
      position: 'absolute',
      top: '20rem',
      left: '14rem',
   },

   '& .three-closed-books': {
      position: 'absolute',
      top: '37rem',
      right: '60rem',
   },

   '& .first-open-book': {
      position: 'absolute',
      top: '30rem',
      left: '5rem',
   },

   '& .second-open-book': {
      position: 'absolute',
      top: '27rem',
      right: '50rem',
   },

   '& .third-open-book': {
      position: 'absolute',
      top: '9rem',
      right: '50rem',
   },

   '& .fourth-open-book': {
      position: 'absolute',
      top: '2rem',
      right: '60rem',
   },

   '& .fifth-open-book': {
      position: 'absolute',
      top: '1rem',
      left: '15rem',
   },

   '& .first-closed-book': {
      position: 'absolute',
      top: '37rem',
      left: '14rem',
   },

   '& .second-closed-book': {
      position: 'absolute',
      top: '19rem',
      right: '60rem',
   },

   '& .third-closed-book': {
      position: 'absolute',
      top: '10rem',
      left: '3rem',
   },
}))

const StyledImage = styled('img')(() => ({
   width: '7rem',
   height: '5rem',
}))

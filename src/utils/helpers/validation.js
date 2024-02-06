import * as Yup from 'yup'

const VALIDATION_SIGN_IN = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string().required('Password is required'),
})

const VALIDATION_SIGN_UP = Yup.object().shape({
   firstName: Yup.string().required('First name is required'),
   lastName: Yup.string().required('Last name is required'),
   email: Yup.string()
      .required('Email is required')
      .matches(/.*@gmail\.com$/, 'Email'),
   password: Yup.string()
      .min(6, 'password must be 6 characters long')
      .max(100)
      .required('Password is required'),
})

export { VALIDATION_SIGN_IN, VALIDATION_SIGN_UP }

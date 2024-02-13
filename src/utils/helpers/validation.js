import * as Yup from 'yup'

const passwordRegex = '^(?=.*[A-Z])(?=.*\\d).*$'

const VALIDATION_SIGN_IN = Yup.object().shape({
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string().required('Password is required'),
})

const VALIDATION_SIGN_UP = Yup.object().shape({
   firstName: Yup.string().required('First name is required'),
   lastName: Yup.string().required('Last name is required'),
   email: Yup.string().email('Invalid email').required('Email is required'),
   password: Yup.string()
      .min(6, 'Password must be 6 characters long')
      .max(100)
      .matches(passwordRegex, 'Password requires a capital letter/number')
      .required('Password is required'),
})

export { VALIDATION_SIGN_IN, VALIDATION_SIGN_UP }

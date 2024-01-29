import * as Yup from 'yup'

const validationAuthSignUp = Yup.object().shape({
   firstName: Yup.string().required('First name'),
   lastName: Yup.string().required('Last name'),
   email: Yup.string()
      .required('Email')
      .matches(/.*@gmail\.com$/, 'Email'),
   password: Yup.string()
      .min(6, 'password must be 6 characters long')
      .max(100)
      .required('Password'),
})

export { validationAuthSignUp }

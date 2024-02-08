const showErrorSignUp = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Please fill in all fields'
   } else if (errors?.firstName) {
      errorMessage = `Incorrect ${errors.firstName}`
   } else if (errors?.lastName) {
      errorMessage = `Incorrect ${errors.lastName}`
   } else if (errors?.email) {
      errorMessage = `Incorrect ${errors.email}`
   } else if (errors?.password) {
      errorMessage = `Incorrect ${errors.password}`
   }

   return errorMessage
}

const showErrorSignIn = (errors) => {
   let errorMessage = null

   if (Object.keys(errors).length > 1) {
      errorMessage = 'Please fill in all fields'
   }

   return errorMessage
}

export { showErrorSignUp, showErrorSignIn }

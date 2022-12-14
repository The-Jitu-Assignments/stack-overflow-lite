import * as yup from 'yup';

export const signUpValidation = user => {
  let schema = yup.object().shape({
    name: yup.string().required('Name field cannot not be empty'),
    email: yup.string().required('Email field cannot be empty').email('Enter a valid email'),
    password: yup.string().required('Password Field cannot be empty')
  })
  return schema.validate(user);
}
import * as Yup from 'yup';

export const defaultValues = {
  email: '',
  password: '',
  userName: '',
  verifyPassword: '',
};

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Must be at least 8 characters'),
  verifyPassword: Yup.string()
    .required('Required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  userName: Yup.string()
    .required('Required')
    .matches(/^\S*$/, 'No spaces')
    .min(3, 'Must be at least 3 characters'),
});

// const validate = Yup.object({
//   firstName: Yup.string()
//     .max(15, 'Must be 15 characters or less')
//     .required('Required'),
//   lastName: Yup.string()
//     .max(20, 'Must be 20 characters or less')
//     .required('Required'),
//   email: Yup.string()
//     .email('Email is invalid')
//     .required('Email is required'),
//   password: Yup.string()
//     .min(6, 'Password must be at least 6 charaters')
//     .required('Password is required'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), null], 'Password must match')
//     .required('Confirm password is required'),
// })
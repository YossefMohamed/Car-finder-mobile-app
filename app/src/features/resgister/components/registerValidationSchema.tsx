import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required"),
  lastName: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .max(30, ({ max }) => `Password must be at most ${max} characters`)
    .required("Please enter a valid name"),
  firstName: yup
    .string()
    .min(3, ({ min }) => `Password must be at least ${min} characters`)
    .max(30, ({ max }) => `Password must be at most ${max} characters`)
    .required("Please enter a valid name"),
  passwordConfirmation: yup
    .string()
    .required("Please retype your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

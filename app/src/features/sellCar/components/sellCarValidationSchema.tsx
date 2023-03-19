import * as yup from "yup";

export const sellCarValidationSchema = yup.object().shape({
  title: yup
    .string()
    .min(5, ({ min }) => `Car name must be at least ${min} characters`)

    .required("Car name is Required"),
  description: yup
    .string()
    .min(30, ({ min }) => `description must be at least ${min} characters`)
    .max(250, ({ max }) => `description must be at most ${max} characters`)
    .required("Please enter a valid description"),
  price: yup
    .number()
    .min(3, ({ min }) => `price must be at least ${min} characters`)
    .required("Please enter a valid price"),
  categoryId: yup.string().required("Please select category."),
});

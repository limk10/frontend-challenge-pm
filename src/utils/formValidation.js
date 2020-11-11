import * as yup from "yup";

// Functional Strategy
export const validate = async (schema, form) => {
  let errors = "";

  await schema.validate(form, { abortEarly: false }).catch(({ inner }) => {
    inner.map(({ path, message }) => (errors += "-" + message + "\n"));
  });

  return errors;
};

export const transaction = yup.object().shape({
  customerName: yup.string().required("O campo nome da pessoa é obrigatório!"),
  document: yup
    .string()
    .max(11, "O CPF deve conter 11 digitos!")
    .required("O campo CPF é obrigatório!"),
  cardNumber: yup
    .string()
    .min(16, "O campo n° do cartão deve conter 16 digitos!")
    .required("O campo n° do cartão é obrtaório!"),
  expirationDate: yup
    .string()
    .min(4, "A expiração deve ser no formato MM/YY!")
    .required("O campo data expiração é obrigatório!"),
  cvv: yup
    .string()
    .min(4, "O cvv deve conter no mínimo 6 digitos!")
    .required("O campo cvv é obrigatório!"),
  amount: yup.number().required("O campo valor transação é obrigatório!")
});

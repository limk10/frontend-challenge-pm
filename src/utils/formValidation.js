import * as yup from "yup";

// Functional Strategy
export const validate = async (schema, form) => {
  let errors = "";

  await schema.validate(form, { abortEarly: false }).catch(({ inner }) => {
    inner.map(({ path, message }) => {
      errors += "-" + message + "\n";
    });
  });

  return errors;
};

export const transaction = yup.object().shape({
  customerName: yup.string().required("O campo nome da pessoa é obrigatório!"),
  document: yup.string().required("O campo CPF é obrigatório!"),
  cardNumber: yup.string().required("O campo n° do cartão é obrtaório!"),
  expirationDate: yup
    .string()
    .required("O campo data expiração é obrigatório!"),
  cvv: yup.string().required("O campo cvv é obrigatório!"),
  amount: yup.number().required("O campo valor transação é obrigatório!")
});

export const client = yup.object().shape({
  firstName: yup.string().required("O primeiro nome é obrigatório!"),
  lastName: yup.string().required("O último nome é obrigatório!")
});

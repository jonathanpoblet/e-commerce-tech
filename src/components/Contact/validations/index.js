import * as Yup from "yup";

const nameSchema = Yup.string().required().min(10);

const emailSchema = Yup.string().required().email();

const messageSchema = Yup.string().required().min(10).max(40);

const contactSchema = Yup.object().shape({
  nombre: nameSchema,
  email: emailSchema,
  consulta: messageSchema,
});

const validation = (form, error, toSend) => {
  contactSchema
    .validate(form)
    .then(() => {
      console.log("pass");
      toSend(true);
      error(false);
    })
    .catch((err) => {
      toSend(false);
      error(err.message);
      console.log(err.message);
    });
};

export default validation;

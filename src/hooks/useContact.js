import { useEffect, useState } from "react";
import validation from "../components/Contact/validations";

const useContact = () => {
  const [form, setform] = useState({});
  const [error, setError] = useState(null);
  const [toSend, setToSend] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setform({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log(form);
    setform({});
  };

  useEffect(() => {
    validation(form, setError, setToSend);
    console.log(error, toSend);
  }, [form]);

  return {
    form,
    handleChange,
    handleSubmit,
    error,
    toSend,
  };
};

export default useContact;

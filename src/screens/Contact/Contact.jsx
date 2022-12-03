import React from "react";
import ButtonSend from "../../components/Contact/ButtonSend";
import InputText from "../../components/Contact/InputText";
import useContact from "../../hooks/useContact";
import "./style.css";
const Contact = () => {
  const { form, handleChange, handleSubmit, error, toSend } = useContact();
  return (
    <div className="container">
      <div className="view">
        <h3 className="title">Contacto</h3>
        <InputText label={"nombre"} handleChange={handleChange} form={form} />
        <InputText label={"email"} handleChange={handleChange} form={form} />
        <InputText label={"consulta"} handleChange={handleChange} form={form} />
        <ButtonSend handleSubmit={handleSubmit} toSend={toSend} />
        <h6 className="error">{error}</h6>
      </div>
    </div>
  );
};

export default Contact;

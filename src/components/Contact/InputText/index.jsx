import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const InputText = ({ label, form, handleChange }) => {
  
  return (
    <div className="containerInput">
      <label className="label">{label}</label>
      <input
        name={label}
        onChange={handleChange}
        className={label == "Consulta" ? "inputConsulta" : "input"}
        value={form[label] ? form[label] : ""}
      />
    </div>
  );
};

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  form: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default InputText;

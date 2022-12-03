import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const ButtonSend = ({ handleSubmit, toSend }) => {
  return (
    <>
      <button className="button" onClick={handleSubmit} disabled={!toSend}>
        Enviar
      </button>
    </>
  );
};

ButtonSend.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ButtonSend;

import React from "react";
import PropTypes from "prop-types";

const InlineError = ({ message }) => {
  return <span style={{ color: "#ff290b", fontSize: "14pt" }}>{message}</span>;
};

InlineError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default InlineError;

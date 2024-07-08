// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, onClick, className }) => (
  <button className={`btn ${className}`} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;

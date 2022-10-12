import React from 'react';
import { PropTypes } from 'prop-types';

const Button = (props) => {
  return (
    <button type='button' name={props.name} className={props.className} onClick={props.handleClick} > {props.name}</button>
  );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired
};

export default Button;
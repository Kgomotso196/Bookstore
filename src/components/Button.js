import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id = '', onClick = () => {}, cname = '', title = '' }) => (
  <button type="button" className={cname} id={id} onClick={onClick}>
    {title}
  </button>
);

Button.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  cname: PropTypes.string,
  title: PropTypes.string,
};

export default Button;

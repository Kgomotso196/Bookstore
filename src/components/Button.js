import React from 'react';
import PropTypes from 'prop-types';

function Button({
  id = '',
  onClick = () => {},
  cname = '',
  title = '',
}) {
  return (
    <button type="submit" className={cname} id={id} onClick={(e) => onClick(e)}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  cname: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

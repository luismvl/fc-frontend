import React from 'react';

import '../../styles/general.css';

const variants = ['white', 'grey'];

const Button = ({ icon, text, variant, span, onClick, disabled, ...rest }) => {
  const classes = ['button'];
  if (variants.includes(variant)) {
    classes.push(`button--${variant}`);
  }
  if (span) {
    classes.push('button--span');
  }
  if (disabled) {
    classes.push('button--disabled')
  }


  return (
    <button className={classes.join(" ")} title={text} disabled={disabled} onClick={onClick} {...rest}>
      {icon}
      {text}
    </button>
  );
};

export default Button;

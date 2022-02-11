import React from 'react';

import '../../styles/form.css'

const InputText = ({ labelText, placeholder, type, ...rest }) => {
  return (
    <div className="input-group">
      <label className="input-group__label">{labelText}</label>
      <input className="input-group__input" type={type} placeholder={placeholder} {...rest}/>
    </div>
  );
};

export default InputText;

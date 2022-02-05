import PropTypes from 'prop-types';
import React from 'react';
import '../../styles/form.css'

const InputText = ({ labelText, placeholder, name, type }) => {
  return (
    <div className="input-group">
      <label className="input-group__label" htmlFor={name}>{labelText}</label>
      <input className="input-group__input" type={type} name={name} id={name} placeholder={placeholder} />
    </div>
  );
};

InputText.propTypes = {
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default InputText;

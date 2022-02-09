import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/form.css';

const InputCheckbox = ({ label, name, checked, onChange }) => {
  return (
    <div className="input-group input-group--checkbox">
      <input className="input-group__input" type="checkbox" id={name} checked={checked} onChange={onChange} />
      <label className="input-group__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

InputCheckbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
};

export default InputCheckbox;

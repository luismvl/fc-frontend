import React from 'react';

import Select from '../pure/Select';

import '../../styles/form.css';

const Dropdown = ({ title, children, placeholder, ...rest }) => {
  return (
    <div className="input-group input-group--select">
      <label className="input-group__label">{title}</label>
      <Select
        placeholder={placeholder ?? ""}
        {...rest}
      />
      {children}
    </div>
  );
};

export default Dropdown;

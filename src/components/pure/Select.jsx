import React from 'react';

import ReactSelect from 'react-select';

const styles = {
  container: (provided, state) => ({
    ...provided,
    fontSize: '14px',
    fontWeight: 500,
  }),
  control: (provided, state) => ({
    ...provided,
    border: 'none',
    backgroundColor: 'var(--grey-1)',
    borderRadius: 8,

  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding: '10px 0 10px 15px'
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: 'var(--grey-4)'
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none'
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#000'
  }),
  multiValue: (provided, state) => ({
    ...provided,
    display: 'none'
  }),
 
};

const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: 'var(--primary-color)',
    primary50: 'var(--primary-color-75)',
    primary75: 'var(--primary-color-50)',
    primary25: 'var(--primary-color-25)',
  }
});
const Select = ({ ...rest }) => {
  return (
    <ReactSelect
      styles={styles}
      noOptionsMessage={() => "No hay más opciones"}
      loadingMessage={() => "Cargando..."}
      theme={theme}
      {...rest}
    />
  );
};

export default Select;

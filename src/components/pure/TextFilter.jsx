import React from 'react';
import '../../styles/text-filter.css'

const TextFilter = () => {
  return (
    <div className="text-filter">
      <label className="text-filter__label " htmlFor="text-filter">Alumnos</label>
      <div className="text-filter__cuntomInput">
        <i className="text-filter__icon search-icon"></i>
        <div className="text-filter__inputContainer">
          <div className="text-filter__input-hidden-placeholder" aria-hidden="true">
            Buscar por Nombre, Email o Palabra clave...
          </div>
          <input className="text-filter__input" type="text" placeholder="Buscar por Nombre, Email o Palabra clave..." id="text-filter" />
        </div>
      </div>
    </div>
  );
};

export default TextFilter;

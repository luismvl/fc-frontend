import React from 'react';
import '../../styles/filter.css'

const Filter = () => {
  return (
    <div className="filter">
      <label className="filter__label " htmlFor="filter">Alumnos</label>
      <div className="filter__cuntomInput">
        <i className="filter__icon search-icon"></i>
        <div className="filter__inputContainer">
          <div className="filter__input-hidden-placeholder" aria-hidden="true">
            Buscar por Nombre, Email o Palabra clave...
          </div>
          <input className="filter__input" type="text" placeholder="Buscar por Nombre, Email o Palabra clave..." id="filter" />
        </div>
      </div>
    </div>
  );
};

export default Filter;

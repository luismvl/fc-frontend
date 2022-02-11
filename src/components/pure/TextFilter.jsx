import React from 'react';

import { BiSearch } from 'react-icons/bi'; 

import '../../styles/text-filter.css'
import InputText from './InputText';

const TextFilter = ({ onChangeTextFilter }) => {

  return (
    <div className="text-filter">
      <label className="text-filter__label " htmlFor="text-filter">Alumnos</label>
      <div className="text-filter__cuntomInput">
        <BiSearch size={20} className="text-filter__icon" />
        <div className="text-filter__inputContainer">
          <div className="text-filter__input-hidden-placeholder" aria-hidden="true">
            Buscar por Nombre, Email o Palabra clave...
          </div>
          <input 
          className="text-filter__input" 
          type="text" 
          placeholder="Buscar por Nombre, Email o Palabra clave..." 
          name="text-filter"
          onChange={(e) => onChangeTextFilter(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default TextFilter;

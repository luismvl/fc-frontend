import React from 'react';
import CandidatesTable from '../pure/CandidatesTable';
import Filter from '../pure/Filter';
import InputCheckbox from '../pure/InputCheckbox';
import DeletableTag from '../pure/DeletableTag';
import { BiPlus, BiTrash } from 'react-icons/bi';

import '../../styles/form.css';
import '../../styles/list-filters.css';
import '../../styles/general.css';

const CandidatesList = () => {
  const defaultCandidates = [
    { id: 1, name: 'Álvaro Sánchez Monteagudo', city: 'Valencia', country: 'España', phone: '+34 657 85 25 46', email: 'alvaro@mail.com', tags: [] },
    { id: 2, name: 'Amparo Herrera Climent', city: 'Sevilla', country: 'España', phone: '++34 689 25 48 65', email: 'amapro@mail.com', tags: [] },
    { id: 3, name: 'Ana Gutierrez Lozano', city: 'Valencia', country: 'España', phone: '+34 925 65 87 65', email: 'ana@mail.com', tags: [] },
    { id: 4, name: 'Antonio Miguel Lacunza', city: 'Madrid', country: 'España', phone: '+34 657 85 25 46', email: 'antonioml@mail.com', tags: [] },
    { id: 5, name: 'Antonio Delgado Jimeno', city: 'Gijón', country: 'España', phone: '+34 925 65 54 25', email: 'antoniomdj@mail.com', tags: [] },
    { id: 6, name: 'Belén Jerez Rivera', city: 'Barcelona', country: 'España', phone: '+34 697 82 95 24', email: 'belen@mail.com', tags: [] },
    { id: 7, name: 'Carla Barroso Soriano', city: 'Valencia', country: 'España', phone: '+34 958 65 41 54', email: 'carla@mail.com', tags: [] },
    { id: 8, name: 'Carlos Yuste Guerrero', city: 'Oviedo', country: 'España', phone: '+34 697 82 95 65', email: 'yuste@mail.com', tags: [] },
    { id: 9, name: 'Carmina Pérez López', city: 'Lugo', country: 'España', phone: '+34 695 84 62 54', email: 'carmina@mail.com', tags: [] },

  ];
  return (
    <div style={{ padding: '40px', display: 'flex', flexWrap: 'nowrap', gap: 40, }}>
      <div style={{ flexGrow: 1 }}>
        <div className="controls">
          <Filter />
          <button className="button button--white">
            <BiPlus size="20px" />
            Añadir alumno
          </button>
        </div>
        <CandidatesTable candidates={defaultCandidates} />
      </div>

      <div className="list-filters container">
        <div className="list-filters__title">
          Filtros de búsqueda
          <BiTrash className="clear-filter-button" size="20px" />
        </div>
        <div className="input-group input-group--select">
          <label className="input-group__label" htmlFor="tags">Etiquetas</label>
          <input className="input-group__input" list="tags-list" id="filter" name="tags"
            placeholder="Escribe para buscar..." />
          <datalist id="tags-list">
            <option value="HTML&CSS"></option>
            <option value="REACTJS"></option>
            <option value="SPRING"></option>
            <option value="FLUTTER"></option>
          </datalist>
          <div className="candidate-tags-list" id="candidate-tags-list">
            <DeletableTag name="html&css" />
            <DeletableTag name="reactjs" />
          </div>
        </div>
        <div className="input-group input-group--select">
          <label className="input-group__label" htmlFor="country">País</label>
          <select className="input-group__input" name="country" id="country">
            <option value="spain">España</option>
          </select>
        </div>
        <div className="input-group input-group--select">
          <label className="input-group__label" htmlFor="city">Ciudad</label>
          <select className="input-group__input" name="city" id="city">
            <option value="Andalucia">Andalucia</option>
            <option value="Aragon">Aragon</option>
            <option value="Asturias">Asturias</option>
            <option value="Baleares">Baleares</option>
            <option value="Ceuta">Ceuta</option>
            <option value="Canarias">Canarias</option>
            <option value="Cantabria">Cantabria</option>
            <option value="Castilla-La Mancha">Castilla-La Mancha</option>
            <option value="Castilla y Leon">Castilla y Leon</option>
            <option value="Cataluna">Cataluna</option>
            <option value="Comunidad Valenciana">Comunidad Valenciana</option>
            <option value="Extremadura">Extremadura</option>
            <option value="Galicia">Galicia</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Madrid">Madrid</option>
            <option value="Melilla">Melilla</option>
            <option value="Murcia">Murcia</option>
            <option value="Navarra">Navarra</option>
            <option value="Pais Vasco">Pais Vasco</option>
          </select>
        </div>
        <div className="checkbx-inputs--column">
          <span className="input-group__label">Presencial / a distancia</span>
          <InputCheckbox
            type="checkbox"
            name="presential"
            label="Presencial"
          />
          <InputCheckbox
            type="checkbox"
            name="remote"
            label="Remoto"
          />
        </div>
        <div className="checkbx-inputs--column">
          <span className="input-group__label">Posibilidad traslado</span>
          <InputCheckbox
            type="checkbox"
            name="yes"
            label="Sí"
          />
          <InputCheckbox
            type="checkbox"
            name="no"
            label="No"
          />
        </div>
      </div>
    </div>
  );
};

export default CandidatesList;

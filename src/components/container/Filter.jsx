import React, { useEffect, useRef, useState } from 'react';

import InputCheckbox from '../pure/InputCheckbox';
import { BiTrash } from 'react-icons/bi';

import '../../styles/list-filters.css';
import '../../styles/general.css';
import '../../styles/form.css';

import useCountries from '../../hooks/useCountries';
import useTags from '../../hooks/useTags';
import { getAllCandidatesByFilter } from '../../api/candidatesAPI';
import { useAuth } from '../../hooks/useAuth';

const Filter = ({ onFilterChange }) => {
  const [remote, setRemote] = useState(false);
  const [presential, setPresential] = useState(false);
  const [relocationYes, setRelocationYes] = useState(false);
  const [relocationNo, setRelocationNo] = useState(false);
  const { countriesDropdown, cittiesDropdown, selectedCountry, selectedCity, clearSelectedCityAndCountry } = useCountries();
  const { tagsDropdown, selectedTags, clearSelectedTags } = useTags();

  const { auth } = useAuth();

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else {
      const t = setTimeout(() => {
        const filterParams = {
          remote, presential, relocationYes, relocationNo, selectedCountry,
          selectedCity, selectedTags
        };
        getAllCandidatesByFilter(filterParams, auth.token)
          .then(res => onFilterChange(res));
      }, 1000);
      return () => {
        clearTimeout(t);
      };
    }
  }, [remote, presential, relocationYes, relocationNo, selectedCountry, selectedCity, selectedTags, onFilterChange, auth.token]);

  const clearFilter = () => {
    setRemote(false);
    setPresential(false);
    setRelocationYes(false);
    setRelocationNo(false);
    clearSelectedCityAndCountry();
    clearSelectedTags();
  };


  return (
    <div className="list-filters container">
      <div className="list-filters__title">
        Filtros de búsqueda
        <BiTrash className="clear-filter-button" size="30px" onClick={clearFilter} />
      </div>

      {tagsDropdown}

      {countriesDropdown}

      {cittiesDropdown}

      <div className="checkbox-inputs--column">
        <span className="input-group__label">Presencial / a distancia</span>
        <InputCheckbox
          name="presential"
          label="Presencial"
          checked={presential}
          onChange={(() => setPresential(!presential))}
        />
        <InputCheckbox
          name="remote"
          label="Remoto"
          checked={remote}
          onChange={(() => setRemote(!remote))}
        />
      </div>
      <div className="checkbox-inputs--column">
        <span className="input-group__label">Posibilidad traslado</span>
        <InputCheckbox
          name="yes"
          label="Sí"
          checked={relocationYes}
          onChange={(() => setRelocationYes(!relocationYes))}
        />
        <InputCheckbox
          name="no"
          label="No"
          checked={relocationNo}
          onChange={(() => setRelocationNo(!relocationNo))}
        />
      </div>
    </div>
  );
};

export default Filter;

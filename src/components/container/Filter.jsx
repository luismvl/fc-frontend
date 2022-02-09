import React, { useEffect, useState } from 'react';

import InputCheckbox from '../pure/InputCheckbox';
import FilterTag from '../pure/FilterTag';
import { BiTrash } from 'react-icons/bi';

import '../../styles/list-filters.css';
import '../../styles/general.css';
import '../../styles/form.css';

import { capitalize } from '../../utils/capitalize';
import useCountries from '../../hooks/useCountries';
import Dropdown from './Dropdown';
import TagsList from '../pure/TagsList';
import useTags from '../../hooks/useTags';

const Filter = () => {

  const [remote, setRemote] = useState(false);
  const [presential, setPresential] = useState(false);
  const [relocationYes, setRelocationYes] = useState(false);
  const [relocationNo, setRelocationNo] = useState(false);

  const { countriesDropdown, cittiesDropdown, setCountryAndCity, selectedCountry, selectedCity } = useCountries();
  const { tagsDropdown, selectedTags } = useTags();


  return (
    <div className="list-filters container">
      <div className="list-filters__title">
        Filtros de búsqueda
        <BiTrash className="clear-filter-button" size="30px" />
      </div>

      {tagsDropdown}

      {countriesDropdown}

      {cittiesDropdown}

      <div className="checkbx-inputs--column">
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
      <div className="checkbx-inputs--column">
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

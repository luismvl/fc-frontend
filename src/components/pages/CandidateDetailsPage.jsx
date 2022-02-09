import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import useTags from '../../hooks/useTags';
import useCountries from '../../hooks/useCountries';

import { BiCloudUpload, BiTrash, BiMap } from 'react-icons/bi';
import Dropdown from '../container/Dropdown';
import InputText from '../pure/InputText';


import '../../styles/candidate-form.css';
import '../../styles/form.css';
import '../../styles/general.css';

const relocationOptions = [
  { value: true, label: 'Sí' },
  { value: false, label: 'No' },
];

const modalityOptions = [
  { value: 'PRESENTIAL', label: 'En presencial' },
  { value: 'REMOTE', label: 'En remoto' },
  { value: 'MIXED', label: 'Mixto/Híbrido' },
];

const CandidateDetailsPage = () => {

  const history = useLocation();
  const candidate = history.state.candidate;
  const [relocation, setRelocation] = useState(relocationOptions.find(opt => opt.value === candidate.relocation));
  const [modality, setModality] = useState(modalityOptions.find(opt => opt.value === candidate.modality));

  const { countriesDropdown, cittiesDropdown, setCountryAndCity, selectedCountry, selectedCity } = useCountries();
  const { tagsDropdown, selectedTags } = useTags(candidate);

  useEffect(() => {
    setCountryAndCity(candidate.country, candidate.city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidate]);

  return (

    <div className="candidates-details-wrapper">
      <div className="container candidate-form">
        <div className="candidate-form__header">

          <img className="candidate-form__image" src={candidate.image_url} alt="candidate" />

          <div className="candidate-form__info">
            <span className="candidate-form__name">{candidate.name}</span>
            <span className="candidate-form__location"><BiMap size="20px" /> {candidate.city} | {candidate.country}</span>
          </div>
        </div>

        <form action="#" className="candidate-form__form">
          <InputText
            type="text"
            name="name"
            labelText="Nombre y Apellidos"
            defaultValue={candidate.name}
          />

          <div className="double-input">
            <InputText
              type="phone"
              name="phone"
              labelText="Nº Teléfono"
              defaultValue={candidate.phone}
            />
            <InputText
              type="email"
              name="email"
              labelText="Email"
              defaultValue={candidate.email}
            />
          </div>

          <div className="double-input">
            {countriesDropdown}
            {cittiesDropdown}
          </div>

          <div className="double-input">
            <Dropdown
              title="Traslado"
              isSearchable={false}
              value={relocation}
              options={relocationOptions}
              onChange={(opt) => setRelocation(opt)}
            />
            <Dropdown
              title="Presencialidad"
              isSearchable={false}
              value={modality}
              options={modalityOptions}
              onChange={(opt) => setModality(opt)}
            />
          </div>

          <div className="input-group input-group--file">
            <label className="input-group__label" htmlFor="cv">Documento CV</label>
            <input className="input-group__input" type="file" accept="application/pdf" name="cv" id="cv" />
            <div className="cv-buttons">
              <label htmlFor="cv">
                <span className="button button--grey"><BiCloudUpload size="20px" />Subir de nuevo</span>
              </label>
              <span className="button button--white"><BiTrash size="20px" />Borrar</span>
            </div>
          </div>

          {tagsDropdown}

        </form>
      </div>
      <div className="candidate-cv">
        <iframe src={candidate.cv_url} width="100%" height="100%" title="candidate-cv">
        </iframe>
      </div>
    </div>
  );
};

export default CandidateDetailsPage;
